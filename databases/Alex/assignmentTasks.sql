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
);
/

-- Task 1
1.	Populate the tables by writing a procedure that inserts a new record into the database. 
	(The records shown in the appendix can be used). 
	The procedure should:
	-Check for reasonable inputs
	-Put a new record in the "books" table
	-Put a corresponding new record in the "book_copies" table

-- Manual Insert;
-- Insert into books;
	INSERT INTO books (isbn, title, summary, author, date_published, page_count)
	VALUES (1, 'Oracle PL/SQL Programming: Covers Versions Through Oracle Database 12c', 'Considered the best Oracle PL/SQL programming guide by the Oracle community, this definitive guide is precisely what you need to make the most of Oracle’s powerful procedural language. The sixth edition describes the features and capabilities of PL/SQL up through Oracle Database 12c Release 1.', 'Steven Feuerstein ', TO_DATE('16-02-14', 'dd/mm/yy'), 1392);
	INSERT INTO books (isbn, title, summary, author, date_published, page_count)
	VALUES (2, 'GDPR For Dummies', 'Dont be afraid of the GDPR wolf! How can your business easily comply with the new data protection and privacy laws and avoid fines of up to $27M? GDPR For Dummies sets out in simple steps how small business owners can comply with the complex General Data Protection Regulations (GDPR)', 'Learning Made Easy', TO_DATE('23-01-20', 'dd/mm/yy'), 464);
	INSERT INTO books (isbn, title, summary, author, date_published, page_count)
	VALUES (3, 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems', 'Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers. What are the right choices for your application? How do you make sense of all these buzzwords?', 'Martin Kleppmann', TO_DATE('25-01-16', 'dd/mm/yy'), 400);
	INSERT INTO books (isbn, title, summary, author, date_published, page_count)
	VALUES (4, 'The Hundred-Page Machine Learning Book', 'Karolis Urbonas, Head of Data Science at Amazon: A great introduction to machine learning from a world-class practitioner. ', 'Andriy Burkov ', TO_DATE('13-01-19', 'dd/mm/yy'), 160);
	/
-- Insert into book_copies;
	INSERT INTO book_copies (barcode_id, isbn) 
	VALUES (389287913341, 1);
	INSERT INTO book_copies (barcode_id, isbn) 
	VALUES (192763672016,4);
	INSERT INTO book_copies (barcode_id, isbn) 
	VALUES (144474284115,2);
	INSERT INTO book_copies (barcode_id, isbn) 
	VALUES (971132580459,1);
	/
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
	AS
	BEGIN
		INSERT INTO books (isbn, title, summary, author, date_published, page_count)
		VALUES (v_isbn, v_title, v_summary, v_author, v_date_published, v_page_count);
	END addBooks;
	/
	-- Insert into books
	BEGIN
		--addBooks (ID, 'Title', 'Summary', 'Author', Date, Pages)
		addBooks (10, 'Oracle PL/SQL Programming: Covers Versions Through Oracle Database 12c', 'Considered the best Oracle PL/SQL programming guide by the Oracle community, this definitive guide is precisely what you need to make the most of Oracle’s powerful procedural language. The sixth edition describes the features and capabilities of PL/SQL up through Oracle Database 12c Release 1.', 'Steven Feuerstein ', TO_DATE('16-02-14', 'dd/mm/yy'), 1392);
		addBooks (11, 'GDPR For Dummies', 'Dont be afraid of the GDPR wolf! How can your business easily comply with the new data protection and privacy laws and avoid fines of up to $27M? GDPR For Dummies sets out in simple steps how small business owners can comply with the complex General Data Protection Regulations (GDPR)', 'Learning Made Easy', TO_DATE('23-01-20', 'dd/mm/yy'), 464);
		addBooks (12, 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems', 'Data is at the center of many challenges in system design today. Difficult issues need to be figured out, such as scalability, consistency, reliability, efficiency, and maintainability. In addition, we have an overwhelming variety of tools, including relational databases, NoSQL datastores, stream or batch processors, and message brokers. What are the right choices for your application? How do you make sense of all these buzzwords?', 'Martin Kleppmann', TO_DATE('25-01-16', 'dd/mm/yy'), 400);
		addBooks (13, 'The Hundred-Page Machine Learning Book', 'Karolis Urbonas, Head of Data Science at Amazon: A great introduction to machine learning from a world-class practitioner. ', 'Andriy Burkov ', TO_DATE('13-01-19', 'dd/mm/yy'), 160);
	END;
	/
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
	/
	-- Insert into book_copies
	BEGIN
		--addBookCopies (barcode_id, isbn);
		addBookCopies (129167337463, 1);
		addBookCopies (849421534208, 10);
		addBookCopies (868023917703, 11);
		addBookCopies (787362785168, 12);
	END;
	/

2.	Write a procedure that retrieves a book count.
	

3.	Write a procedure getBookDetails which accepts a isbn number and returns the 
	books title, author, date_published, and  the number of copies. 
	The main block should call the procedure with a isbn number and output the book’s details
-- Create procedure to get details
-- the isbn should be user input.
	CREATE OR REPLACE PROCEDURE getBookDetails(
		v_isbn books.isbn%TYPE,
		v_title books.title%TYPE,
		v_summary books.summary%TYPE,
		v_author books.author%TYPE,
		v_date_published books.date_published%TYPE,
		v_page_count books.page_count%TYPE
		)
	AS
	BEGIN
	    v_isbn := &x;
		SELECT isbn, title, summary, author, date_published, page_count
		INTO v_isbn, v_title, v_summary, v_author, v_date_published, v_page_count
		FROM books WHERE isbn = v_isbn;
		-- Print Variables
		dbms_output.put_line( v_title || ' ' || v_author || v_date_published );
	end;
	/


DECLARE
v_isbn books.isbn%TYPE,
v_title books.title%TYPE,
v_author books.author%TYPE,
v_date_published books.date_published%TYPE,
v_page_count books.page_count%TYPE
BEGIN
v_isbn := &x;
SELECT isbn, title, author, date_published, page_count
INTO v_isbn, v_title, v_author, v_date_published, v_page_count
FROM books WHERE isbn = v_isbn;
dbms_output.put_line( v_title || ' ' || v_author || v_date_published );
end;
/




4.	Write a PL/SQL block which utilises the getBookdetails 
	procedure and prints the data for each record.
	

5.	Write a procedure that deletes a book and all copies from the database.

6.	Write a trigger that that reports how many book copies are present after any insert/update/delete operation.

NB. For each of the above exercises include code that invokes the procedure.
