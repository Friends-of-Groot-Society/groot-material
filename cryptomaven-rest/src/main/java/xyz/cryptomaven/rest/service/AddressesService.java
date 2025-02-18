package xyz.cryptomaven.rest.service;

import xyz.cryptomaven.rest.models.dto.AddressDto;
import xyz.cryptomaven.rest.models.dto.NftCoinDto;

import java.util.List;

public interface AddressesService {
    public AddressDto createAddress(AddressDto addr);

    public AddressDto getAddress(Long id);


  public List<AddressDto> getAllAddresses();

    public AddressDto updateAddress(AddressDto change);

    public boolean deleteAddress(Long id);

    /////////////////////////
    NftCoinDto createNft(NftCoinDto nftCoinDto);

    List<NftCoinDto> getAllNFTs();
}
