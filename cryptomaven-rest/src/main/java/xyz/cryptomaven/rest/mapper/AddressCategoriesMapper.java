package xyz.cryptomaven.rest.mapper;

import org.mapstruct.*;
import xyz.cryptomaven.rest.models.AddressCategories;
import xyz.cryptomaven.rest.models.NftCoin;
import xyz.cryptomaven.rest.models.dto.AddressCategoriesDto;


@Mapper(unmappedTargetPolicy = ReportingPolicy.IGNORE, componentModel = MappingConstants.ComponentModel.SPRING, uses = {AddressCategories.class , NftCoin.class})
public interface AddressCategoriesMapper {
  AddressCategories toEntity(AddressCategoriesDto addressCategoriesDto);


  @AfterMapping
  default void linkChainsByChainId(@MappingTarget AddressCategories addressCategories) {
    addressCategories.getChainsByChainId().forEach(chainsByChainId -> chainsByChainId.setCategory(String.valueOf(addressCategories.getId())));
  }

  AddressCategoriesDto toDto(AddressCategories addressCategories);

  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  AddressCategories partialUpdate(AddressCategoriesDto addressCategoriesDto, @MappingTarget AddressCategories addressCategories);
}
