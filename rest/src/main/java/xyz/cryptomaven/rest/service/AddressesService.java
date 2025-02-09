package xyz.cryptomaven.rest.service;

import xyz.cryptomaven.rest.models.dto.AddressDto;
import xyz.cryptomaven.rest.models.dto.NftDto;

import java.util.List;

public interface AddressesService {
    public AddressDto createAddress(AddressDto addr);

    public AddressDto getAddress(int id);

    public List<AddressDto> getAllAddresses();

    public AddressDto updateAddress(AddressDto change);

    public boolean deleteAddress(int id);

    /////////////////////////
    NftDto createNft(NftDto nftDto);

    List<NftDto> getAllNFTs();
}
