package io.github.adrianovictorn.lembrete.dto;

import io.github.adrianovictorn.lembrete.enums.Status;

public record LembreteCreateDTO(
    String titulo,
    String mensagem,
    Status status
) {
    
}
