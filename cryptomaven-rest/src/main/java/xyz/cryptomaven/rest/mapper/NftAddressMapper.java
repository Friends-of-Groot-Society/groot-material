package xyz.cryptomaven.rest.mapper;

import org.mapstruct.*;
import xyz.cryptomaven.rest.models.NftAddress;
import xyz.cryptomaven.rest.models.dto.NftAddressDto;

@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = "spring")
public interface NftAddressMapper {
    NftAddress toEntity(NftAddressDto nftAddressDto);

    NftAddressDto toDto(NftAddress nftAddress);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    NftAddress partialUpdate(NftAddressDto nftAddressDto, @MappingTarget NftAddress nftAddress);
}
