CREATE TABLE avatar (
    id BIGSERIAL PRIMARY KEY, 
    hair varchar(100),
    eyes varchar(100),
    eyebrows varchar(100),
    mouth varchar(100),
    skin_color varchar(255),
    hair_color varchar(255)
);

ALTER TABLE game_profile ADD COLUMN avatar_id BIGINT;

ALTER TABLE game_profile
    ADD CONSTRAINT fk_avatar_user
        FOREIGN KEY(avatar_id)
        REFERENCES avatar(id);