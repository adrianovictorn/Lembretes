package io.github.adrianovictorn.lembrete.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import io.github.adrianovictorn.lembrete.dto.game_profile.GameProfileListDTO;
import io.github.adrianovictorn.lembrete.dto.game_profile.GameProfileViewDTO;
import io.github.adrianovictorn.lembrete.entity.GameProfile;


@Mapper(componentModel = "spring")
public interface GameProfileMapper {

    GameProfileViewDTO toViewDTO(GameProfile entity);

    @Mapping(target = "userId", ignore = true)
    @Mapping(target = "levelId", ignore = true)
    GameProfileListDTO toListItemDTO(GameProfile entity);

    List<GameProfileListDTO> toListDTO(List<GameProfile> listEntities);
}
