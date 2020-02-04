-- Start by creating the tables
CREATE TABLE books (
   isbn VARCHAR2(13) NOT NULL PRIMARY KEY,
   title VARCHAR2(200),
   summary VARCHAR2(2000),
   author VARCHAR2(200),
   date_published DATE,
   page_count NUMBER
);

CREATE TABLE book_copies(
   barcode_id VARCHAR2(100) NOT NULL PRIMARY KEY,
   isbn VARCHAR2(13) REFERENCES books (isbn)
);

-- Tasks below;
1.	Populate the tables by writing a procedure that inserts a new record into the database. 
	(The records shown in the appendix can be used). 
	The procedure should:
	-Check for reasonable inputs
	-Put a new record in the "books" table
	-Put a corresponding new record in the "book_copies" table
	
CREATE OR REPLACE PROCEDURE addBooks(
    v_isbn books.isbn%TYPE,
    v_title books.title%TYPE,
    v_summary books.summary%TYPE,
    v_author books.author%TYPE,
    v_date_published books.date_published%TYPE,
    v_page_count books.page_count%TYPE
    )
AS
BEGIN
    INSERT INTO books (isbn, title, summary, author, date_published, page_count)
    VALUES (v_isbn, v_title, v_summary, v_author, v_date_published, v_page_count);
END addBooks;
-- Insert into books
BEGIN
    --addBooks (ID, 'Title', 'Summary', 'Author', Date, Pages)
    addBooks (1, 'Oracle PL/SQL Programming: Covers Versions Through Oracle Database 12c', 'Considered the best Oracle PL/SQL programming guide by the Oracle community, this definitive guide is precisely what you need to make the most of Oracle’s powerful procedural language. The sixth edition describes the features and capabilities of PL/SQL up through Oracle Database 12c Release 1.', 'Author', 16/02/2014, 1392);
END;


2.	Write a procedure that retrieves a book count.
	

3.	Write a procedure getBookDetails which accepts a isbn number and returns the 
	books title, author, date_published, and  the number of copies. 
	The main block should call the procedure with a isbn number and output the book’s details

4.	Write a PL/SQL block which utilises the getBookdetails 
	procedure and prints the data for each record.
	

5.	Write a procedure that deletes a book and all copies from the database.

6.	Write a trigger that that reports how many book copies are present after any insert/update/delete operation.

NB. For each of the above exercises include code that invokes the procedure.
