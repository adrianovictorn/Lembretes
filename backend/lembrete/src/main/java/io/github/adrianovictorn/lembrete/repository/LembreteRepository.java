package io.github.adrianovictorn.lembrete.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.adrianovictorn.lembrete.entity.Lembrete;

public interface LembreteRepository extends JpaRepository<Lembrete, Long>{
    

}
