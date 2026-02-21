package io.github.adrianovictorn.lembrete.dto.lembrete;

import io.github.adrianovictorn.lembrete.enums.Status;

public record LembreteListDTO(
    Long id,
    String titulo,
    String mensagem,
    Status status
) {

    
}