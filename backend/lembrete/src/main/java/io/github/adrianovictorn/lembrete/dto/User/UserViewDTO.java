package io.github.adrianovictorn.lembrete.dto.User;

public record UserViewDTO(
    Long id,
    String nome,
    String senha,
    String username
) {
    
}
