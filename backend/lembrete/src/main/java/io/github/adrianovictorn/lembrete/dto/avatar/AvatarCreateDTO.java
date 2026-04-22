package io.github.adrianovictorn.lembrete.dto.avatar;

import java.util.UUID;

public record AvatarCreateDTO(
    UUID gameProfileId,
    String hair,
    String eyes,
    String eyebrows,
    String mouth,
    String skinColor,
    String hairColor,
    String base,
    String backgroundColor
) {
    
}
