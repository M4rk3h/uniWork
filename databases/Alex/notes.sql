-- Create a table CUSTOMER
CREATE TABLE CUSTOMER( 
ID INT NOT NULL, 
NAME VARCHAR (20) NOT NULL, 
AGE INT NOT NULL, 
ADDRESS VARCHAR (25), 
SALARY DECIMAL (18, 2), 
PRIMARY KEY (ID) 
);
-- Insert some data into customer
INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY) 
VALUES (1, 'Ramesh', 32, 'Ahmedabad', 2000.00 ); 
INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY) 
VALUES (2, 'Khilan', 25, 'Delhi', 1500.00 ); 
INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY) 
VALUES (3, 'kaushik', 23, 'Kota', 2000.00 ); 
INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY) 
VALUES (4, 'Chaitali', 25, 'Mumbai', 6500.00 ); 
INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY) 
VALUES (5, 'Hardik', 27, 'Bhopal', 8500.00 ); 
INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY) 
VALUES (6, 'Komal', 22, 'MP', 4500.00 );

-- 	EX 1
-- 	Write a variable to print out
DECLARE
hello varchar2(20):= 'Hello, World'
BEGIN
    dbms_output.put_line(hello);
END;
-- 	EX 2
/* 	
	Write PLSQL code that queries the customers table for the 
	name, address, and salary of the customer with the id value 1, 
	assigns the output to variables, and prints them to the console. 
*/
DECLARE
v_id CUSTOMERS.ID%TYPE;
v_name CUSTOMERS.NAME%TYPE;
v_address CUSTOMERS.ADDRESS%TYPE;
v_salary CUSTOMERS.SALARY%TYPE;
begin
    -- v_id := &x; will prompt user input
    v_id := &x;
    SELECT ID, NAME, ADDRESS, SALARY
    INTO v_id, v_name, v_age, v_address, v_salary
    FROM CUSTOMERS WHERE ID = v_id;
	-- Print Variables 
    dbms_output.put_line(v_name || ' ' || v_address || v_salary);
end;
-- 	EX 3
/* 	
	Following on from last week’s tutorial, write a procedure to insert a new record 
	into the customers table. Also write a block of code to execute the procedure. 
	Verify the update.
*/
CREATE OR REPLACE PROCEDURE addCustomer(
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
-- 	EX 4
/*	
	Create a program that accepts two numbers from substitution variables, 
	display one of the following messages:- 
	first is greater than second 
	first is less than second 
	first is the same as second 
*/
DECLARE 
	firstNumber NUMBER := 2; 
	secondNumber NUMBER := 2; 
BEGIN 
	IF firstNumber > secondNumber THEN 
		DBMS_OUTPUT.put_line('first is greater than second'); 
	ELSIF firstNumber < secondNumber THEN 
		DBMS_OUTPUT.put_line('first is less than second'); 
	ELSE 
		DBMS_OUTPUT.put_line('first is same as second'); 
	END IF; 
END;
--	EX 5
/* 
	Create a program that accepts a single number. 
	Display the message  Hello World  X times, where X is the number entered.
*/
DECLARE 
   noOfTimes NUMBER := 2; -- (n is 2)
BEGIN  
   FOR loop IN 1..noOfTimes
   LOOP 
      DBMS_OUTPUT.put_line('Hello World'); 
   END LOOP; 
END;

-- 	EX 6
/*
	Run the trigger that displays the change in salary when a record in the customers 
	table is inserted,  updated or deleted. Notice that:
	you can use the FOR EACH ROW loop to define a row-level trigger
	it use Oracle’s NEW and OLD prefixes on the salary attribute
*/
CREATE OR REPLACE TRIGGER salaryChanges 
BEFORE DELETE OR INSERT OR UPDATE ON CUSTOMERS
FOR EACH ROW 
WHEN (NEW.ID > 0) 
DECLARE 
   sal_diff number; 
BEGIN 
   sal_diff := :NEW.salary  - :OLD.salary; 
   dbms_output.put_line('Old salary: ' || :OLD.salary); 
   dbms_output.put_line('New salary: ' || :NEW.salary); 
   dbms_output.put_line('Salary difference: ' || sal_diff); 
END;
-- Insert a new record, and the trigger will run
INSERT INTO CUSTOMERS (ID,NAME,AGE,ADDRESS,SALARY) 
VALUES (8, 'Kriti', 22, 'HP', 7500.00 ); 
-- UPDATE
BEGIN
	UPDATE CUSTOMERS
	SET SALARY = 4000.00
	WHERE ID = 7;
END;
--	EX 7
/*	
	Write and test a Function that retrieves a count of the number of records 
	in the customers table. Test the Function.
*/
CREATE OR REPLACE FUNCTION countRecords
IS
	CURSOR countAll IS
		SELECT COUNT (*) "Total Customers" 
		FROM CUSTOMERS;
BEGIN
	FOR i IN countAll
	LOOP
		INSERT INTO totalCustomers
	END LOOP;
END;