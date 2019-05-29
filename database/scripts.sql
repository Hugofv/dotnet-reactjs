create database niver;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS colaborador(
	id bigserial unique,
	uuid UUID DEFAULT uuid_generate_v4() NOT NULL,
	nome varchar(75),
	descricao varchar(255),
	foto text,
	nascimento timestamp,
	ativo boolean default true
);