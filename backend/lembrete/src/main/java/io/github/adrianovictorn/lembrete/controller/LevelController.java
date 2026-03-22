package io.github.adrianovictorn.lembrete.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.adrianovictorn.lembrete.dto.level.LevelListDTO;
import io.github.adrianovictorn.lembrete.service.LevelService;

@RestController
@RequestMapping("/api/level")
public class LevelController {
    

    private final LevelService levelService;

    public LevelController(LevelService levelService) {
        this.levelService = levelService;
    }


    @GetMapping("/listar")
    public ResponseEntity<List<LevelListDTO>> listarLeveis(){
        return ResponseEntity.ok(levelService.listLevel());
    }
}
