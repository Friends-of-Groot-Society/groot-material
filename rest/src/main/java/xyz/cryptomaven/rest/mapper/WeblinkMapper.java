package xyz.cryptomaven.rest.mapper;

import xyz.cryptomaven.rest.models.dto.WeblinkDto;
import xyz.cryptomaven.rest.models.Weblink;
import org.mapstruct.*;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface WeblinkMapper {
    Weblink toEntity(WeblinkDto weblinkDto);

    WeblinkDto toDto(Weblink weblink);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    Weblink partialUpdate(WeblinkDto weblinkDto, @MappingTarget Weblink weblink);
}
