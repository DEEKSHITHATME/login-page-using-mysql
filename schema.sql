drop database if exists wd_institute_dev;

create database if not exists wd_institute_dev;

use wd_institute_dev;

drop table if exists tblusers;

create table if not exists tblusers(
   userId integer primary key auto_increment,
   username varchar(100) unique,
   mail varchar(100) unique,
   password varchar(100)
)engine=innodb;