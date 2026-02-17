package io.github.adrianovictorn.lembrete.dto;

import java.time.LocalDate;

public record LembreteCreateDTO(
    String titulo,
    String mensagem,
    LocalDate dataLembrete,
    Long userId
) {
    
}
