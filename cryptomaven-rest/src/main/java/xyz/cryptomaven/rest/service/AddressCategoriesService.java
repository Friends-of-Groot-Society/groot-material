package xyz.cryptomaven.rest.service;
import xyz.cryptomaven.rest.models.dto.AddressCategoriesDto;

import java.util.List;

public interface AddressCategoriesService {
    AddressCategoriesDto addAddressCategories(AddressCategoriesDto categoryDto);

    AddressCategoriesDto getAddressCategories(Long categoryId);

    List<AddressCategoriesDto> getAllCategories();

    AddressCategoriesDto updateAddressCategories(AddressCategoriesDto categoryDto);

    boolean deleteAddressCategories(Long categoryId);
}
