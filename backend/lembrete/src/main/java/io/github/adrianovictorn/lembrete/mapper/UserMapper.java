package io.github.adrianovictorn.lembrete.mapper;

import java.util.List;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import io.github.adrianovictorn.lembrete.dto.User.UserCreateDTO;
import io.github.adrianovictorn.lembrete.dto.User.UserListDTO;
import io.github.adrianovictorn.lembrete.dto.User.UserViewDTO;
import io.github.adrianovictorn.lembrete.entity.User;
import io.github.adrianovictorn.lembrete.enums.Role;

@Mapper(componentModel = "spring")
public interface UserMapper {

    @Mapping(target = "id", ignore = true)
    User toEntity(UserCreateDTO dto);
    UserViewDTO viewDTO(User user);
    List<UserListDTO> toList(List<User> lista);

    default Role mapCargo(String cargo){
        return Role.valueOf(cargo);
    }
    
} 
