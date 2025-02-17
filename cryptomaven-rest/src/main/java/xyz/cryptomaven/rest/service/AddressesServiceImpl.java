package xyz.cryptomaven.rest.service;


import xyz.cryptomaven.rest.mapper.ChainMapper;
import xyz.cryptomaven.rest.models.Nft;
import xyz.cryptomaven.rest.models.dto.AddressDto;
import xyz.cryptomaven.rest.mapper.AddressMapper;
import xyz.cryptomaven.rest.models.Address;
import xyz.cryptomaven.rest.mapper.NftMapper;

import xyz.cryptomaven.rest.models.dto.ChainDto;
import xyz.cryptomaven.rest.models.dto.NftDto;
import xyz.cryptomaven.rest.repositories.NftRepository;
import xyz.cryptomaven.rest.repositories.AddressesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AddressesServiceImpl implements AddressesService {

    @Autowired
    private AddressesRepository addressesRepository;
    @Autowired
    private AddressMapper addressMapper;
    @Autowired
    private NftRepository nftRepository;

    @Autowired
    private NftMapper nftMapper;
  @Autowired
  private ChainMapper chainMapper;

  @Override
    public AddressDto createAddress(AddressDto addrDto) {
        Address address = addressMapper.addressDtoToAddress(addrDto);

//        if (address != null && (address.getChains().isEmpty())) {
//            address.setChains(addrDto.getChains());
//        }
        if (address != null && (address.getOwner() == null || address.getOwner() == "")) {
            address.setOwner(addrDto.getOwner());
        }
      assert address != null;
      Address newAddress = addressesRepository.save(address);
        AddressDto newAddressDto = addressMapper.addressToAddressDto(newAddress);
        return newAddressDto;
    }


  @Override
  public AddressDto getAddress(Long id) {
       try {
              Address address = addressesRepository.findById(id).get();
                return addressMapper.addressToAddressDto(address);
       } catch (Exception e) {
           return null;
       }
    }

    @Override
    public List<AddressDto> getAllAddresses() {

        List<Address> adds = addressesRepository.findAll();
        List<AddressDto> addressDtos = adds.stream().map(addressMapper::addressToAddressDto).collect(Collectors.toList());
        return addressDtos;
    }

    @Override
    public AddressDto updateAddress(AddressDto change) {
     try {
         Address addUpdate = addressMapper.addressDtoToAddress(change);
       addUpdate= addressesRepository.findById( change.getId()).get();
       addUpdate.setDescription(change.getDescription());
       addUpdate.setIconUrl(change.getIconUrl());
//       addUpdate.setUser(change.getUser());
       addUpdate.setOwner(change.getOwner());
       addUpdate.setBlockExplorerUrl(change.getBlockExplorerUrl());
//       addUpdate.setChains(() -> chainMapper.toEntity((ChainDto) change.getChains()));
       addUpdate.setNftAddress(change.getNftAddress());

       Address newAddress = addressesRepository.save(addUpdate);

         return addressMapper.addressToAddressDto(newAddress);
     } catch (Exception e) {
         return null;
     }
    }

    @Override
    public boolean deleteAddress(Long id) {
          try {
                addressesRepository.deleteById(id);
                return true;
            } catch (Exception e) {
                return false;
            }
    }


    /////////////////////////
@Override
public NftDto createNft(NftDto nftDto) {
    Nft nft = nftMapper.toEntity(nftDto);

//    if (nft != null && (nft.getChainId() == 0)) {
//        nft.setChainId(nftDto.getChainId());
//    }

    Nft newNft = nftRepository.save(nft);
    NftDto newNftDto = nftMapper.toDto(newNft);
    return newNftDto;
}
    /**
     * @return
     */
    @Override
    public List<NftDto> getAllNFTs() {

        List<Nft> adds = nftRepository.findAll();
        List<NftDto> nftDtos = adds.stream().map(nftMapper::toDto).collect(Collectors.toList());
        return nftDtos;
    }
}
