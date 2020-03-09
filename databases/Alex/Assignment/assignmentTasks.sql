-- Create Tables
-- Books
CREATE TABLE books (
isbn VARCHAR2(13) NOT NULL PRIMARY KEY,
title VARCHAR2(200),
summary VARCHAR2(2000),
author VARCHAR2(200),
date_published DATE,
page_count NUMBER
);
/
-- Book_Copies
CREATE TABLE book_copies(
barcode_id VARCHAR2(100) NOT NULL PRIMARY KEY,
isbn VARCHAR2(13) REFERENCES books (isbn)
ON DELETE CASCADE
);
/

-- 1
-- Populate the tables by writing a procedure that inserts a new record into the database.
-- (The records shown in the appendix can be used).
-- The procedure should:
-- Check for reasonable inputs
-- Put a new record in the "books" table
-- Put a corresponding new record in the "book_copies" table

-- Procedures to addBooks
-- Create a procedure to addBooks
CREATE OR REPLACE PROCEDURE addBooks(
v_isbn books.isbn%TYPE,
v_title books.title%TYPE,
v_summary books.summary%TYPE,
v_author books.author%TYPE,
v_date_published books.date_published%TYPE,
v_page_count books.page_count%TYPE
)
AS BEGIN
INSERT INTO books (isbn, title, summary, author, date_published, page_count)
VALUES (v_isbn, v_title, v_summary, v_author, v_date_published, v_page_count);
END addBooks;

-- Insert into books
START TRANSACTION
-- Have transaction to ensure table is only indexed 
-- after all inserts
BEGIN
addBooks (1,'Oracle PL/SQL Programming.','Considered the best Oracle PL/SQL programming guide by the Oracle','Steven Feuerstein',TO_DATE('16-02-14', 'dd/mm/yy'), 1392);
addBooks (2,'GDPR For Dummies.','Dont be afraid of the GDPR wolf','Learning Made Easy', TO_DATE('23-01-20', 'dd/mm/yy'), 464);
addBooks (3,'Designing Data-Intensive Applications.','Data is at the center of many challenges in system design today','Martin Kleppmann',TO_DATE('25-01-16', 'dd/mm/yy'), 400);
addBooks (4,'Oracle PL/SQL for Dummies.','Find tips for creating efficient PL/SQL code If you know a bit about SQL, this book will make PL/SQL programming painless','Michael Rosenblum',TO_DATE('26-05-06', 'dd/mm/yy'), 464);
COMMIT;
END;

-- Procedures to addBookCopies
-- Create a procedure to addBookCopies;
CREATE OR REPLACE PROCEDURE addBookCopies(
v_barcode book_copies.barcode_id%TYPE,
v_isbn book_copies.isbn%TYPE
)
AS
BEGIN
INSERT INTO book_copies (barcode_id, isbn)
VALUES (v_barcode, v_isbn);
END addBookCopies;

-- Insert into book_copies
START TRANSACTION
-- Have transaction to ensure table is only indexed 
-- after all inserts
BEGIN
--addBookCopies (barcode_id, isbn);
addBookCopies (129167337463, 1);
addBookCopies (849421534208, 2);
addBookCopies (868023917703, 3);
addBookCopies (828324957607, 1);
addBookCopies (162033145736, 2);
addBookCopies (966025947302, 3);
addBookCopies (162033145775, 4);
addBookCopies (162123145775, 4);
addBookCopies (966025947321, 4);
COMMIT;
END;

-- 2
-- Write a procedure that retrieves a book count.
-- Count Books
CREATE OR REPLACE FUNCTION bookCount
RETURN number IS
total number(2) := 0;
BEGIN
SELECT DISTINCT count(*) into total
FROM books;
RETURN total;
END;

-- Test the count
DECLARE
-- c = count
c number(2);
BEGIN
c := bookCount();
dbms_output.put_line('Total no. of distinct Books: ' || c);
END;

-- Count Book Copies
CREATE OR REPLACE FUNCTION bookCopiesC
RETURN number IS
   total number(2) := 0;
BEGIN
   SELECT count(*) into total
   FROM books
   INNER JOIN book_copies
   ON books.isbn = book_copies.isbn
   ORDER BY books.isbn asc;
   RETURN total;
END;

-- Test the count
DECLARE
-- c = count
c number(2);
BEGIN
c := bookCopiesC();
dbms_output.put_line('Total no. of book-copies available: ' || c);
END;

-- 3
--Write a procedure getBookDetails which accepts an isbn number and returns the
--books title, author, date_published, and  the number of copies.
--The main block should call the procedure with an isbn number and output the book’s details

-- Create procedure to get details
CREATE OR REPLACE PROCEDURE getBookDetails(
v_isbn IN books.isbn%TYPE,
v_title OUT books.title%TYPE,
v_author OUT books.author%TYPE,
v_date_published OUT books.date_published%TYPE,
v_numberOfCopies OUT INT)
IS BEGIN
SELECT title, author, date_published 
INTO v_title, v_author, v_date_published
FROM books WHERE isbn = v_isbn;
SELECT COUNT(*) INTO v_numberOfCopies 
FROM book_copies
WHERE isbn = v_isbn;
END;

-- Create procedure to get details
CREATE OR REPLACE PROCEDURE getBookDetails1(
v_isbn IN books.isbn%TYPE,
v_title OUT books.title%TYPE,
v_author OUT books.author%TYPE,
v_date_published OUT books.date_published%TYPE,
v_numberOfCopies OUT NUMBER)
IS BEGIN
SELECT title, author, date_published 
INTO v_title, v_author, v_date_published
v_numberOfCopies := bookCopiesC();
FROM books WHERE isbn = v_isbn;
END;

-- Test the getBookDetails procedure
DECLARE
v_isbn books.isbn%TYPE;
v_title books.title%TYPE;
v_author books.author%TYPE;
v_date_published books.date_published%TYPE;
v_numberOfCopies NUMBER;
BEGIN
-- := &x will ask for user input
v_isbn := &x; 
-- Call the getBookDetails procedure
getBookDetails1 (v_isbn, v_title, v_author, v_date_published, v_numberOfCopies);
-- Print to Dbms Output
dbms_output.put_line( 'Book ' || v_isbn || '. Titled ' || v_title || ' Written by ' || v_author || '. Published: ' || v_date_published || '. With ' || v_numberofcopies || ' Copies Available.');
END;

-- 4
-- Write a PL/SQL block which utilises the getBookdetails 
-- procedure and prints the data for each record.
-- This works
DECLARE
v_isbn books.isbn%TYPE;
v_title books.title%TYPE;
v_author books.author%TYPE;
v_date_published books.date_published%TYPE;
v_numberOfCopies INT;
v_i NUMBER := 0;
v_myIndex NUMBER := 0;
BEGIN
-- Get the number of books, Save into v_myIndex
SELECT COUNT(*) INTO v_myIndex FROM books;
-- Loop when v_i is less than the number of books
WHILE v_i < v_myIndex
LOOP
-- Increment
v_i := v_i + 1;
-- ID = dynamic variable
v_isbn := v_i;
-- Use the getBookDetails to get the info we want
getBookDetails (v_isbn, v_title, v_author, v_date_published, v_numberOfCopies);
-- Print to Dbms Output
dbms_output.put_line('Book ' || v_isbn || '. Titled ' || v_title || ' Written by ' || v_author || '. Published: ' || v_date_published || '. With ' || v_numberofcopies || ' Copies Available.');
END LOOP;
END;

-- 5
-- Write a procedure that deletes a book and all copies from the database.

-- Create the Procedures
CREATE OR REPLACE PROCEDURE bookDelete(
v_isbn IN books.isbn%TYPE
)
IS BEGIN
DELETE FROM books
WHERE isbn = v_isbn;
COMMIT;
END;

-- Delete a book
BEGIN
bookDelete(&x);
END;

-- 6
-- Write a trigger that reports how many book copies are present after any insert/update/delete operation.
CREATE OR REPLACE TRIGGER bookTrigger
BEFORE DELETE OR INSERT OR UPDATE ON book_copies
FOR EACH ROW
WHEN (NEW.barcode_id > 0)
DECLARE
   ent_diff number;
BEGIN
   ent_diff := :NEW.barcode_id  - :OLD.barcode_id;
   dbms_output.put_line('Old barcode_id: ' || :OLD.barcode_id);
   dbms_output.put_line('New barcode_id: ' || :NEW.barcode_id);
   dbms_output.put_line('barcode_id difference: ' || ent_diff);
END;
-- Insert a new record, and the trigger will run
INSERT INTO book_copies (barcode_id, isbn)
VALUES (123432123454, 4);