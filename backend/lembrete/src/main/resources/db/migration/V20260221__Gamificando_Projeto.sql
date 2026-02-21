

CREATE TABLE level(
    id BIGSERIAL PRIMARY KEY,
    numero int UNIQUE NOT NULL,
    xp_minimo BIGINT UNIQUE NOT NULL DEFAULT 0,
    titulo VARCHAR(100) NOT NULL,
    descricao VARCHAR(200) NOT NULL,
    icone VARCHAR(50),
    cor_hex VARCHAR(50),
    ativo boolean NOT NULL DEFAULT TRUE,
    criado_em timestamp NOT NULL DEFAULT now(),
    atualizado_em timestamp
);

ALTER TABLE lembrete
  ADD COLUMN IF NOT EXISTS xp_reward INT NOT NULL DEFAULT 0;

ALTER TABLE lembrete
  ADD COLUMN IF NOT EXISTS coins_reward INT NOT NULL DEFAULT 0;

ALTER TABLE lembrete
  ADD COLUMN IF NOT EXISTS concluido_em TIMESTAMP NULL;
  
CREATE TABLE game_profile(
    id UUID PRIMARY KEY,
    xp BIGINT NOT NULL DEFAULT 0,
    moedas BIGINT NOT NULL DEFAULT 0,
    streak_atual int NOT NULL DEFAULT 0,
    melhor_streak int NOT NULL DEFAULT 0,
    ultimo_dia_ativo date,
    total_concluido BIGINT NOT NULL DEFAULT 0,
    criado_em timestamp NOT NULL DEFAULT now(),
    atualizado_em timestamp NULL,

    user_id BIGINT NOT NULL UNIQUE,
    level_id BIGINT NOT NULL,

    CONSTRAINT fk_game_profile_usuario
      FOREIGN KEY (user_id) REFERENCES usuario(id),

    CONSTRAINT fk_game_profile_level
      FOREIGN KEY (level_id) REFERENCES level(id)
);