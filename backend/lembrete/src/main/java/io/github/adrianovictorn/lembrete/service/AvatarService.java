package io.github.adrianovictorn.lembrete.service;

import java.util.List;
import java.util.UUID;

import org.springframework.stereotype.Service;

import io.github.adrianovictorn.lembrete.dto.avatar.AvatarCreateDTO;
import io.github.adrianovictorn.lembrete.dto.avatar.AvatarViewDTO;
import io.github.adrianovictorn.lembrete.entity.Avatar;
import io.github.adrianovictorn.lembrete.entity.GameProfile;
import io.github.adrianovictorn.lembrete.mapper.AvatarMapper;
import io.github.adrianovictorn.lembrete.repository.AvatarRepository;
import io.github.adrianovictorn.lembrete.repository.GameProfileRepository;
import jakarta.persistence.EntityNotFoundException;

@Service

public class AvatarService {
    
    private final AvatarRepository repository;
    private final GameProfileRepository gameProfileRepository;
    private final AvatarMapper avatarMapper;

    public AvatarService(AvatarRepository repository, GameProfileRepository gameProfileRepository, AvatarMapper avatarMapper) {
        this.repository = repository;
        this.gameProfileRepository = gameProfileRepository;
        this.avatarMapper = avatarMapper;
    }


    public AvatarViewDTO criarAvatar (AvatarCreateDTO dto){

        GameProfile gameProfileExistente = gameProfileRepository.findById(dto.gameProfileId()).orElseThrow(() -> new EntityNotFoundException("GameProfile não encontrado !"));
        Avatar novoAvatar = avatarMapper.toEntity(dto);
        Avatar avatarSalvo = repository.save(novoAvatar);

        gameProfileExistente.setAvatar(avatarSalvo);
        gameProfileRepository.save(gameProfileExistente);

        return avatarMapper.toViewDTO(avatarSalvo);
    }

    
}
