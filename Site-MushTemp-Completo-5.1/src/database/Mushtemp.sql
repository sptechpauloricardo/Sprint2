create database sprint2Mushtemp;
drop database sprint2mushtemp;
use sprint2Mushtemp;

create table Empresa (
idEmpresa int primary key auto_increment,
nome varchar(50) unique not null,
cnpj char(14) unique not null,
email varchar(45),
senha varchar (45)
);
insert into empresa values 
(default, 'katia','12345678912345','katia@email','123456' );
drop table Empresa;
drop database sprint2mushtemp;


drop table Funcionario;
create table funcionario (
id int primary key auto_increment,
nome varchar(70) not null,
email varchar(70) unique not null,
senha varchar(50) not null,
fk_empresa int,
constraint fkFuncionarioEmpresa foreign key (fk_empresa) references Empresa(idEmpresa)
);
insert into funcionario values
(1, 'bianca','bianca@gmail.com',123456,1 );
drop table Funcionario;
select * from funcionario;


drop table Estufa;

create table Estufa (
idEstufa int primary key,
nomeEstufa varchar(45),
fkEmpresa int, 
constraint fkEmpresaEstufa foreign key (fkEmpresa) references Empresa(idEmpresa)
);

create table Sensor(
idSensor INT PRIMARY KEY,
fkEstufa int,
constraint fkEstufaSensor foreign key (fkEstufa) references Estufa(idEstufa)
);


create table Monitoramento (
idMonitoramento int primary key auto_increment,
dataEhora datetime,
temperatura decimal(3,1),
umidade decimal(3,1),
fkSensor int, 
constraint fkSensorEstufa foreign key (fkSensor) references Sensor(idSensor)
);

 

 