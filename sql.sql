CREATE DATABASE IF NOT EXISTS backend;
CREATE TABLE IF NOT EXISTS backend.user(
    dni varchar(255),
    email varchar(30) UNIQUE,
    name varchar(50),
    newsletter varchar(3) DEFAULT 'Yes',
    captation varchar(30) DEFAULT 'web',
    address varchar(100) DEFAULT '',
    postal_code varchar(15) DEFAULT '',
    city varchar(30) DEFAULT '',
    region varchar(30) DEFAULT '',
    country varchar(30) DEFAULT '',
    observation varchar(30) DEFAULT '',
    PRIMARY KEY(dni)
);
INSERT INTO backend.user (dni,email,name,newsletter,captation,address,postal_code,city,region,country,observation) VALUES ('75127876D','email1@email.com','javi','Yes','web','address','postal_code','city','region','country','observation');
INSERT INTO backend.user (dni,email,name,newsletter,captation,address,postal_code,city,region,country,observation) VALUES ('2','email2@email.com','javi','Yes','web','address','postal_code','city','region','country','observation');
