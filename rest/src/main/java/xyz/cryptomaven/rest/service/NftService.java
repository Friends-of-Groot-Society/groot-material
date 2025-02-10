package xyz.cryptomaven.rest.service;

import xyz.cryptomaven.rest.models.dto.NftDto;

import java.util.List;

public interface NftService {
    boolean createNft(NftDto c);

    NftDto getNft(Long id) ;

    List<NftDto> getAllNftsIOwn(String username);

    List<NftDto> getAllNfts();

    boolean updateNft(NftDto change);

    boolean deleteNft(Long id) ;

    void nftlotViewAll();
}
