package io.github.adrianovictorn.lembrete.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import io.github.adrianovictorn.lembrete.dto.lembrete.LembreteCreateDTO;
import io.github.adrianovictorn.lembrete.dto.lembrete.LembreteListDTO;
import io.github.adrianovictorn.lembrete.dto.lembrete.LembreteUpdateDTO;
import io.github.adrianovictorn.lembrete.dto.lembrete.LembreteViewDTO;
import io.github.adrianovictorn.lembrete.entity.Lembrete;
import io.github.adrianovictorn.lembrete.entity.User;
import io.github.adrianovictorn.lembrete.enums.Status;
import io.github.adrianovictorn.lembrete.mapper.LembreteMapper;
import io.github.adrianovictorn.lembrete.repository.LembreteRepository;
import io.github.adrianovictorn.lembrete.repository.UserRepository;
import jakarta.persistence.EntityNotFoundException;

@Service
public class LembreteService {
    
    private final LembreteRepository lembreteRepository;
    private final UserRepository userRepository;
    private final LembreteMapper lembreteMapper;

    public LembreteService(LembreteRepository repository, LembreteMapper mapper, UserRepository userRepository) {
        this.lembreteRepository = repository;
        this.lembreteMapper = mapper;
        this.userRepository = userRepository;
    }


    public LembreteViewDTO cadastrarLembrete(LembreteCreateDTO dto){

        User usuarioExistente = userRepository.findById(dto.userId()).orElseThrow(() -> new EntityNotFoundException("Usuário não existe ou não encontrado !"));
        Lembrete novoLembrete = lembreteMapper.toEntity(dto);
        novoLembrete.setUser(usuarioExistente);
        novoLembrete.setStatus(Status.PENDENTE);
        Lembrete salvo = lembreteRepository.save(novoLembrete);
        return lembreteMapper.viewDTO(salvo);
    }

    public List<LembreteListDTO> listarLembretes(){
        List<Lembrete> lembreteList = lembreteRepository.findAll();
        return lembreteMapper.toListDTO(lembreteList);
    }

    public LembreteViewDTO atualizarLembrete(Long id, LembreteUpdateDTO dto){
        Lembrete lembreteExistente = lembreteRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Lembrete não encontrado !"));
        lembreteMapper.updateDTO(lembreteExistente, dto);
        Lembrete atualizado = lembreteRepository.save(lembreteExistente);
        return lembreteMapper.viewDTO(atualizado);
    }

    public Page<LembreteViewDTO> buscarPorUsuario(Long id, int page, int size){
        Pageable pagina = PageRequest.of(page, size);
        return lembreteRepository.findByUserId(id, pagina).map(lembreteMapper::viewDTO);
    }

    public void deletarLembrete(Long id){
        Lembrete lembreExistente = buscarPorId(id);
        lembreteRepository.delete(lembreExistente);
    }

    private Lembrete buscarPorId(Long id){
        Lembrete lembreteExistente = lembreteRepository.findById(id).orElseThrow(() -> new EntityNotFoundException("Lembrete não encontrado !"));
        return lembreteExistente;
    }
    
}
