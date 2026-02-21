package io.github.adrianovictorn.lembrete.dto.lembrete;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;

public record LembreteCreateDTO(
    String titulo,
    String mensagem,
    LocalDate dataLembrete,
    Long userId
) {
    
}
