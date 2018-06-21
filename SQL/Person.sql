Create table  Person (Id int, Email varchar(255))
START TRANSACTION;
insert into Person (Id, Email) values (1, 'a@b.com')
insert into Person (Id, Email) values (2, 'c@d.com')
insert into Person (Id, Email) values (3, 'a@b.com')
COMMIT;

SELECT Email FROM Person GROUP BY Email
HAVING COUNT(*) > 1;