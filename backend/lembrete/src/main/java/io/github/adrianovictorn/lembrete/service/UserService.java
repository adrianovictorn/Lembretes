package io.github.adrianovictorn.lembrete.service;

import java.util.List;


import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import io.github.adrianovictorn.lembrete.dto.User.UserCreateDTO;
import io.github.adrianovictorn.lembrete.dto.User.UserListDTO;
import io.github.adrianovictorn.lembrete.dto.User.UserViewDTO;
import io.github.adrianovictorn.lembrete.entity.User;
import io.github.adrianovictorn.lembrete.mapper.UserMapper;
import io.github.adrianovictorn.lembrete.repository.UserRepository;

@Service
public class UserService {
    
    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder encoder;

    public UserService(UserRepository userRepository, UserMapper userMapper, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.encoder = passwordEncoder;
    }

    public UserViewDTO cadastrarUsuario (UserCreateDTO dto){
        User novoUsuario = userMapper.toEntity(dto);
        novoUsuario.setSenha(encoder.encode(dto.senha()));
        User salvo = userRepository.save(novoUsuario);
        return userMapper.viewDTO(salvo);
    }

    

    public List<UserListDTO> listarUsuarios(){
        List<User> usuarios = userRepository.findAll();        
        return userMapper.toList(usuarios);
    }

    
}
