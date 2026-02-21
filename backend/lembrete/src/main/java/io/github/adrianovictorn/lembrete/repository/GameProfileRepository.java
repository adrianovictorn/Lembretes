package io.github.adrianovictorn.lembrete.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.adrianovictorn.lembrete.entity.GameProfile;

public interface GameProfileRepository extends JpaRepository<GameProfile, UUID> {
    
}
