ALTER TABLE lembrete 
    ADD COLUMN data_lembrete TIMESTAMP;

ALTER TABLE lembrete
    ADD COLUMN user_id BIGINT;


ALTER TABLE lembrete
    ADD CONSTRAINT fk_lembrete_usuario
    FOREIGN KEY (user_id)
    REFERENCES usuario(id);

ALTER TABLE usuario
    ADD COLUMN telefone VARCHAR(20) NOT NULL;