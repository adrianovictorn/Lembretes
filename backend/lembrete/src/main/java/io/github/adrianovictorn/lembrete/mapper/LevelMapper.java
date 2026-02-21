package io.github.adrianovictorn.lembrete.mapper;


import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import io.github.adrianovictorn.lembrete.dto.level.LevelCreateDTO;
import io.github.adrianovictorn.lembrete.dto.level.LevelListDTO;
import io.github.adrianovictorn.lembrete.dto.level.LevelUpdateDTO;
import io.github.adrianovictorn.lembrete.dto.level.LevelViewDTO;
import io.github.adrianovictorn.lembrete.entity.Level;

@Mapper(componentModel = "spring")
public interface LevelMapper {
    
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "criadoEm", ignore = true)
    @Mapping(target = "atualizadoEm", ignore = true)
    Level toEntity(LevelCreateDTO dto);
    LevelViewDTO toViewDTO(Level entity);

    List<LevelListDTO> toListDTO(List<Level> lista);

    @Mapping(target = "id",  ignore = true)
    @Mapping(target = "criadoEm", ignore = true)
    @Mapping(target = "atualizadoEm", ignore = true)
    void update(@MappingTarget Level entity, LevelUpdateDTO dto);
}
