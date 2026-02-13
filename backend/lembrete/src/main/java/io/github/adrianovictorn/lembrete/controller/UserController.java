package io.github.adrianovictorn.lembrete.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.adrianovictorn.lembrete.dto.User.UserCreateDTO;
import io.github.adrianovictorn.lembrete.dto.User.UserListDTO;
import io.github.adrianovictorn.lembrete.dto.User.UserViewDTO;
import io.github.adrianovictorn.lembrete.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
    
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // /api/user/cadastrar

    @PostMapping("/cadastrar")
    public ResponseEntity<UserViewDTO> cadastrarUsuario(@RequestBody UserCreateDTO userCreateDTO){
        return ResponseEntity.ok(userService.cadastrarUsuario(userCreateDTO));
    }

    @GetMapping("/listar")
    public ResponseEntity<List<UserListDTO>> listarUsuarios(){
        return ResponseEntity.ok(userService.listarUsuarios());
    }


}
