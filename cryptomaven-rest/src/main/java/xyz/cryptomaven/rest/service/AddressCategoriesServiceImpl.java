package xyz.cryptomaven.rest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xyz.cryptomaven.rest.exception.ResourceNotFoundException;
import xyz.cryptomaven.rest.mapper.AddressCategoriesMapper;
import xyz.cryptomaven.rest.models.AddressCategories;
import xyz.cryptomaven.rest.models.dto.AddressCategoriesDto;
import xyz.cryptomaven.rest.repositories.AddressCategoriesRepository;



import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressCategoriesServiceImpl implements  AddressCategoriesService {

    @Autowired
    private AddressCategoriesRepository categoryRepository;

    @Autowired
    private AddressCategoriesMapper categoryMapper;

    public AddressCategoriesDto addAddressCategories(AddressCategoriesDto categoryDto) {
        AddressCategories cat3 = categoryMapper.toEntity(categoryDto);
        categoryRepository.save(cat3);

        AddressCategoriesDto catNewDto = categoryMapper.toDto(cat3);
        return catNewDto;
    }

    @Override
    public AddressCategoriesDto getAddressCategories(Long categoryId) {

        AddressCategories category = categoryRepository.findById(categoryId).orElseThrow(
                () -> new ResourceNotFoundException("AddressCategories", "id", Long.toString(categoryId)));

        return categoryMapper.toDto(category);
    }

    @Override
    public List<AddressCategoriesDto> getAllCategories() {

        List<AddressCategories> categories = categoryRepository.findAll();
//        List<AddressCategoriesDto> categoriesDto = categories.stream().map(category -> categoryMapper.toDto(category))
//                .collect(Collectors.toList());
        List<AddressCategoriesDto> catDto = categories.stream().map(categoryMapper::toDto)
                .collect(Collectors.toList());
        return catDto;
    }

    @Override
    public AddressCategoriesDto updateAddressCategories(AddressCategoriesDto categoryDto ) {

        AddressCategories category = categoryMapper.toEntity(categoryDto);
        AddressCategories categoryUpdate = categoryRepository.findById(category.getId()).orElseThrow(
                () -> new ResourceNotFoundException("AddressCategories", "id", Long.toString(category.getId())));

        categoryUpdate.setName(categoryDto.getName());
        categoryUpdate.setDescription(categoryDto.getDescription());
//        categoryUpdate.setUrls(categoryDto.getUrls()); // TODO: fix this as NEWS array

        AddressCategories categoryDone = categoryRepository.save(categoryUpdate);

        return categoryMapper.toDto(categoryDone);
    }

    @Override
    public boolean deleteAddressCategories(Long categoryId) {
        try {
            categoryRepository.deleteById(categoryId);
            return true;
        } catch (Exception e) {
            e.printStackTrace();
            return false;
        }
    }
}
