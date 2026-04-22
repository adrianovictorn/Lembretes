package io.github.adrianovictorn.lembrete.dto.avatar;

public record AvatarViewDTO(
    Long id,
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
