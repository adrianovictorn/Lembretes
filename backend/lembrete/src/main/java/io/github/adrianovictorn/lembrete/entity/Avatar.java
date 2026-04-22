package io.github.adrianovictorn.lembrete.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "avatar")
@Data
public class Avatar {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "hair", length = 100, nullable = true)
    private String hair;
    @Column(name = "eyes", length = 100, nullable = true)
    private String eyes;
    @Column(name = "eyebrows", length = 100, nullable = true)
    private String eyebrows;
    @Column(name = "mouth", length = 100, nullable = true)
    private String mouth;
    @Column(name = "skin_color", length = 255, nullable = true)
    private String skinColor;
    @Column(name = "hair_color", length = 255, nullable = true)
    private String hairColor;
    @Column(name = "base", length = 100, nullable = true)
    private String base;
    @Column(name = "background_color", length = 255, nullable = true)
    private String backgroundColor;

    
}
