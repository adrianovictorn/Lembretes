package io.github.adrianovictorn.lembrete.dto.User;

public record UserListDTO(
    Long id,
    String nome,
    String senha,
    String username
) {
}