CREATE TABLE usuario(
    id BIGSERIAL PRIMARY KEY,
    nome varchar(255) NOT NULL,
    username varchar(150) NOT NULL UNIQUE,
    senha varchar(255) NOT NULL,
    cargo varchar(100) NOT NULL
);

CREATE TABLE lembrete(
    id BIGSERIAL PRIMARY KEY,
    titulo VARCHAR(100) NOT NULL,
    mensagem VARCHAR(255),
    estado VARCHAR(100) NOT NULL,
    criado_em timestamp NOT NULL DEFAULT NOW()
);