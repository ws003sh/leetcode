 --627. Swap Salary
 create table salary(id int, name varchar(100), sex char(1), salary int);
START TRANSACTION;
insert into salary (id, name, sex, salary) values (1, 'A', 'm', '2500');
insert into salary (id, name, sex, salary) values (2, 'B', 'f', '1500');
insert into salary (id, name, sex, salary) values (3, 'C', 'm', '5500');
insert into salary (id, name, sex, salary) values (4, 'D', 'f', '500');
COMMIT;

update salary set sex=IF(sex='m','f', 'm')