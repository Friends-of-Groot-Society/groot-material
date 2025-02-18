package xyz.cryptomaven.rest.service;

import xyz.cryptomaven.rest.models.dto.NftCoinDto;

import java.util.List;

public interface NftService {
    boolean createNft(NftCoinDto c);

    NftCoinDto getNft(Long id) ;

    List<NftCoinDto> getAllNftsIOwn(String username);

    List<NftCoinDto> getAllNfts();

    boolean updateNft(NftCoinDto change);

    boolean deleteNft(Long id) ;

    void nftlotViewAll();
}
