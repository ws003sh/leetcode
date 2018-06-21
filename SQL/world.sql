
SELECT * FROM leetcode.World;
START TRANSACTION;
insert into World  values ('Afghanistan', 'Asia', 652230, 25500100, 20343000000);
insert into World values ('Albania', 'Europe', 28748, 2831741, 12960000000);
insert into World  values ('Algeria', 'Africa', 2381741, 37100000, 188681000000);
insert into World  values ('Andorra', 'Europe', 468, 78115, 3712000000);
insert into World  values ('Angola', 'Africa', 1246700, 20609294, 100990000000);
-- insert into World (name, continent, area, population, gdp) values ('Algeria', 'Africa', 2381741, 37100000, 188681000000);
COMMIT;
/* 
 1 int 最多10位，设置其他类型时，要加上显示的长度
 2 文字 加引号，数字 不加引号
 3 加入数据，有两种写法
*/
