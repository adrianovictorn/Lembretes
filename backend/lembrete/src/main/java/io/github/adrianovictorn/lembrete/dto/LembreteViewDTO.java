package io.github.adrianovictorn.lembrete.dto;

import java.time.LocalDateTime;

import io.github.adrianovictorn.lembrete.enums.Status;

public record LembreteViewDTO(
    Long id,
    String titulo,
    String mensagem,
    Status status,
    LocalDateTime criadoEm
) {

}
