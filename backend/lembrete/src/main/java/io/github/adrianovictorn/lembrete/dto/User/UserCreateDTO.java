package io.github.adrianovictorn.lembrete.dto.User;

import io.github.adrianovictorn.lembrete.enums.Role;

public record UserCreateDTO(
    String nome,
    String senha,
    String username,
    Role role
) {
    
}
