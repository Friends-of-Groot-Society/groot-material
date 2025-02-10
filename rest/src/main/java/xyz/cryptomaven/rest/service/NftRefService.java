package xyz.cryptomaven.rest.service;

import xyz.cryptomaven.rest.models.dto.NftRefDto;

import java.util.List;

public interface NftRefService {
    NftRefDto createNftRef(NftRefDto c);

    NftRefDto getNftRef(Long id) ;

    List<NftRefDto> getAllNftRefsIOwn(String username);

    List<NftRefDto> getAllNftRefs();

    boolean updateNftRef(NftRefDto change);

    boolean deleteNftRef(Long id) ;

}
