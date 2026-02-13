package io.github.adrianovictorn.lembrete.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.adrianovictorn.lembrete.dto.LembreteCreateDTO;
import io.github.adrianovictorn.lembrete.dto.LembreteListDTO;
import io.github.adrianovictorn.lembrete.dto.LembreteUpdateDTO;
import io.github.adrianovictorn.lembrete.dto.LembreteViewDTO;
import io.github.adrianovictorn.lembrete.service.LembreteService;

@RestController
@RequestMapping("/api/lembrete")
public class LembreteController {
    

    private final LembreteService lembreteService;

    public LembreteController(LembreteService lembreteService) {
        this.lembreteService = lembreteService;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<LembreteViewDTO> cadastrarLembrete (LembreteCreateDTO dto){
        return ResponseEntity.ok(lembreteService.cadastrarLembrete(dto));
    }

    @GetMapping("/listar")
    public ResponseEntity<List<LembreteListDTO>> listarLembretes(){
        return ResponseEntity.ok(lembreteService.listarLembretes());
    }

    @PatchMapping("/atualizar")
    public ResponseEntity<LembreteViewDTO> atualizarLembrete(Long id, LembreteUpdateDTO dto){
        return ResponseEntity.ok(lembreteService.atualizarLembrete(id, dto));
    }

    @DeleteMapping("/deletar")
    public ResponseEntity<Void> deletarLembrete(Long id){
        lembreteService.deletarLembrete(id);
        return ResponseEntity.noContent().build();
    }
}
