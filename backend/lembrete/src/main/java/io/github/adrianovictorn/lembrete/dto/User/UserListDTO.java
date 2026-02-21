package io.github.adrianovictorn.lembrete.dto.user;

public record UserListDTO(
    Long id,
    String nome,
    String senha,
    String username
) {
}