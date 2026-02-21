package io.github.adrianovictorn.lembrete.dto.game_profile;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import io.github.adrianovictorn.lembrete.dto.level.LevelViewDTO;
import io.github.adrianovictorn.lembrete.dto.user.UserViewDTO;

public record GameProfileViewDTO(
    UUID id,
    UserViewDTO user,
    LevelViewDTO level,
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
