package xyz.cryptomaven.rest.mapper;

import xyz.cryptomaven.rest.models.dto.RawTokenDto;
import xyz.cryptomaven.rest.models.RawToken;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING)
public interface RawTokenMapper {
    RawToken toEntity(RawTokenDto rawTokenDto);

    RawTokenDto toDto(RawToken rawToken);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    RawToken partialUpdate(RawTokenDto rawTokenDto, @MappingTarget RawToken rawToken);
}
