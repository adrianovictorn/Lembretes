package io.github.adrianovictorn.lembrete.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.adrianovictorn.lembrete.entity.Level;

public interface LevelRepository extends JpaRepository<Level, Long>{
    
}
