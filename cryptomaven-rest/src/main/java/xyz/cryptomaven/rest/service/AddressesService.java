package xyz.cryptomaven.rest.service;

import xyz.cryptomaven.rest.models.dto.AddressDto;
import xyz.cryptomaven.rest.models.dto.NftCoinDto;

import java.util.List;

public interface AddressesService {
    AddressDto createAddress(AddressDto addr);

    AddressDto getAddress(Long id);


    List<AddressDto> getAllAddresses();

    AddressDto updateAddress(AddressDto change);

    boolean deleteAddress(Long id);

    /////////////////////////
    AddressDto createNft(AddressDto nftCoinDto);

    List<AddressDto> getAllNFTs();
}
