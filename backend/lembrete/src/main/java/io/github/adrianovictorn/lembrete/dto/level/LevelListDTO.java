package io.github.adrianovictorn.lembrete.dto.level;

import java.time.LocalDateTime;

public record LevelListDTO(
    Long id,
    int numero,
    long xpMinimo,
    String titulo,
    String descricao,
    String icone,
    String corHex,
    Boolean ativo,
    LocalDateTime criadoEm,
    LocalDateTime atualizadoEm
) {
    
}
