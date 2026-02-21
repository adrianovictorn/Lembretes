package io.github.adrianovictorn.lembrete.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "level")
@Data
public class Level {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "numero", unique = true, nullable = false)
    private int numero;

    @Column(name = "xp_minimo", nullable = false, unique = true)
    private long xpMinimo;

    @Column(name = "titulo", nullable = false, length = 100)
    private String titulo;

    @Column(name = "descricao", length = 200)
    private String descricao;

    @Column(name = "icone")
    private String icone;

    @Column(name = "cor_hex")
    private String corHex;

    @Column(name = "ativo", nullable = false)
    private Boolean ativo;

    @CreationTimestamp
    @Column(name = "criado_em", nullable = false)
    private LocalDateTime criadoEm;

    @Column(name = "atualizado_em")
    @UpdateTimestamp
    private LocalDateTime atualizadoEm;

}