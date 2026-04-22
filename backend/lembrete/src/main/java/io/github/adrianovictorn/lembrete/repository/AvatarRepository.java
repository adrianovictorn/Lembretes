package io.github.adrianovictorn.lembrete.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.adrianovictorn.lembrete.entity.Avatar;


public interface AvatarRepository extends JpaRepository<Avatar, Long> {
    
}
