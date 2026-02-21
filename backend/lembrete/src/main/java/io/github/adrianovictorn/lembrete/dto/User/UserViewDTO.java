package io.github.adrianovictorn.lembrete.dto.user;

import java.util.List;

import io.github.adrianovictorn.lembrete.entity.Lembrete;

public record UserViewDTO(
    Long id,
    String nome,
    String senha,
    String telefone,
    String username,
    List<Lembrete> lembretes
) {
    
}
