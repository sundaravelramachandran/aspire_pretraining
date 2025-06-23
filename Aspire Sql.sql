create table Employees1(Emp_id int primary key, Emp_name varchar(30),doj VARCHAR(10));
alter table Employees1 add salary int;
desc Employees1;
alter table Employees1 modify salary decimal(7,2);
alter table Employees1 modify doj date;
alter table Employees1 rename column  doj to Dateofjoin;
desc Employees1;
insert into Employees1 values  (1001,'Sundar','04-07-2002',25000);
insert into Employees1 values  (1002,'Deva','04-03-2002',28000);

select * from Employees1;
update Employees1 set Emp_name ='Devaraj' where Emp_id = 1002;
delete from Employees1 where Emp_id=1002;