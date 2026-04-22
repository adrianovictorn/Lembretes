package io.github.adrianovictorn.lembrete.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import io.github.adrianovictorn.lembrete.dto.avatar.AvatarCreateDTO;
import io.github.adrianovictorn.lembrete.dto.avatar.AvatarViewDTO;
import io.github.adrianovictorn.lembrete.entity.Avatar;

@Mapper(componentModel = "spring")
public interface AvatarMapper {

    @Mapping(target = "id", ignore = true)
    Avatar toEntity(AvatarCreateDTO dto);
    
    AvatarViewDTO toViewDTO(Avatar entity);

} 