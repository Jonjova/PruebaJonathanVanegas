-- drop database Registro
create database Registro;
use Registro;

create table mat_materia(
 mat_id int auto_increment primary key ,
 mat_nombre varchar(100)
);

create table grd_grado(
	grd_id int auto_increment primary key ,
    grd_nombre varchar(100)
);

create table alm_alumno(
 alm_id int auto_increment primary key ,
 alm_codigo varchar(100),
 alm_nombre varchar(300),
 alm_edad int,
 alm_sexo varchar(100),
 alm_id_grd int,
 alm_observacion varchar(300),
 foreign key (alm_id_grd) references grd_grado(grd_id)
);

create table mxg_materiasxgrado(
	mxg_id int auto_increment primary key ,
    mxg_id_grd int,
    mxg_id_mat int,
    foreign key(mxg_id_grd) references grd_grado(grd_id),
    foreign key(mxg_id_mat) references mat_materia(mat_id)
);

