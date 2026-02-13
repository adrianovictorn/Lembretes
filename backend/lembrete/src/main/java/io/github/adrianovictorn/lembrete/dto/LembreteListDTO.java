package io.github.adrianovictorn.lembrete.dto;

import io.github.adrianovictorn.lembrete.enums.Status;

public record LembreteListDTO(
    Long id,
    String titulo,
    Status status
) {

    
}