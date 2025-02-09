package xyz.cryptomaven.rest.service;


import xyz.cryptomaven.rest.models.Chain;
import xyz.cryptomaven.rest.models.dto.ChainDto;

import java.util.List;


public interface ChainsService {


    ChainDto createChain(ChainDto cd);

    ChainDto getChain(int id);

    //    @Autowired
    //    public List<Chain> getAllChainsIOwn(String username) {
    //        return null; //(List<Chain>)  chainsRepository.findByUsername(username);
    //    }
    List<ChainDto> getAllChains();


    ChainDto  getChainByName(String name);

    ChainDto updateChain(ChainDto change);

    boolean deleteChain(int id);

    void createChainCLI(ChainDto createdChain);
}
