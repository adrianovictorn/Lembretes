package io.github.adrianovictorn.lembrete.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "game_profile")
@Data
public class GameProfile {
    
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @OneToOne
    @JoinColumn(name = "user_id", nullable = false, unique = true)
    private User user;

    @ManyToOne
    @JoinColumn(name = "level_id", nullable = false)
    private Level level;

    @Column(name = "xp", nullable = false)
    private long xp;

    @Column(name = "moedas", nullable = false) 
    private long moedas;

    @Column(name = "streak_atual")
    private int streakAtual;

    @Column(name = "melhor_streak")
    private int melhorStreak;

    @Column(name = "ultimo_dia_ativo", nullable = true)
    private LocalDate ultimoDiaAtivo;

    @Column(name = "total_concluido", nullable = false)
    private long totalConcluido;

    @CreationTimestamp
    @Column(name = "criado_em", nullable = false)
    private LocalDateTime criadoEm;

    @UpdateTimestamp
    @Column(name = "atualizado_em")
    private LocalDateTime atualizadoEm;


}
