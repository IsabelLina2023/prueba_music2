create database escuela_musica2;

create table estudiantes (
id serial primary key,
nombre varchar (50) not null,
rut varchar (20) not null unique,
curso varchar (50) not null,
nivel varchar (50) not null
);