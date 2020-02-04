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
    v_id in CUSTOMERS.ID%TYPE,
    v_name in CUSTOMERS.NAME%TYPE,
    v_age in CUSTOMERS.AGE%TYPE,
    v_address in CUSTOMERS.ADDRESS%TYPE,
    v_salary in CUSTOMERS.SALARY%TYPE
    )
AS
BEGIN
    INSERT INTO CUSTOMERS (id, name, age, address, salary)
    VALUES (v_id, v_name, v_age, v_address, v_salary);
END addCustomer;
-- Insert into customers
BEGIN
    addCustomer (7, 'Mark', 27, 'Cilfynydd', 2000.00);
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
