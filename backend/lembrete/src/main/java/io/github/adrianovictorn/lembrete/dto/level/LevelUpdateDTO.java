package io.github.adrianovictorn.lembrete.dto.level;


public record LevelUpdateDTO(
    int numero,
    long xpMinimo,
    String titulo,
    String descricao,
    String icone,
    String corHex,
    Boolean ativo
) {
    
}
