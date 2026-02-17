package io.github.adrianovictorn.lembrete.dto;


import java.time.LocalDate;

import io.github.adrianovictorn.lembrete.enums.Status;

public record LembreteUpdateDTO(
    String titulo,
    String mensagem,
    Status status,
    LocalDate dataLembrete
    
) {
}