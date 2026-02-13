package io.github.adrianovictorn.lembrete.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

import io.github.adrianovictorn.lembrete.dto.LembreteCreateDTO;
import io.github.adrianovictorn.lembrete.dto.LembreteListDTO;
import io.github.adrianovictorn.lembrete.dto.LembreteUpdateDTO;
import io.github.adrianovictorn.lembrete.dto.LembreteViewDTO;
import io.github.adrianovictorn.lembrete.entity.Lembrete;

@Mapper(componentModel = "spring")
public interface LembreteMapper {

    @Mapping(target = "id", ignore = true)    
    @Mapping(target = "criadoEm", ignore = true)
    Lembrete toEntity(LembreteCreateDTO lembrete);
    LembreteViewDTO viewDTO (Lembrete lembrete);
    List<LembreteListDTO> toListDTO(List<Lembrete> lista);

    @Mapping(target = "id", ignore = true)    
    @Mapping(target = "criadoEm", ignore = true)
    void updateDTO(@MappingTarget Lembrete lembrete, LembreteUpdateDTO dto);


}