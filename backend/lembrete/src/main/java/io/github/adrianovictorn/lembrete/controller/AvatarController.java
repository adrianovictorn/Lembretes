package io.github.adrianovictorn.lembrete.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.adrianovictorn.lembrete.dto.avatar.AvatarCreateDTO;
import io.github.adrianovictorn.lembrete.dto.avatar.AvatarViewDTO;
import io.github.adrianovictorn.lembrete.service.AvatarService;

@RestController
@RequestMapping("/api/avatar")
public class AvatarController {

    private final AvatarService avatarService;

    public AvatarController(AvatarService avatarService) {
        this.avatarService = avatarService;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<AvatarViewDTO> cadastrarAvatar(@RequestBody AvatarCreateDTO dto){
        return ResponseEntity.ok(avatarService.criarAvatar(dto));
    }
}
