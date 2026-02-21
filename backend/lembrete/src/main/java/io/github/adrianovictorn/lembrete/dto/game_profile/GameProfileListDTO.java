package io.github.adrianovictorn.lembrete.dto.game_profile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;



public record GameProfileListDTO(
    UUID id,
    Long userId,
    Long levelId,
    long xp,
    long moedas,
    int streakAtual,
    int melhorStreak,
    LocalDate ultimoDiaAtivo,
    long totalConcluido, 
    LocalDateTime criadoEm,
    LocalDateTime atualizadoEm
) {
    
}
