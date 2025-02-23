package xyz.cryptomaven.rest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

import xyz.cryptomaven.rest.mapper.CoinMapper;
import xyz.cryptomaven.rest.models.Address;
import xyz.cryptomaven.rest.models.dto.AddressDto;

import xyz.cryptomaven.rest.models.dto.ChainDto;
import xyz.cryptomaven.rest.models.dto.CoinDto;
import xyz.cryptomaven.rest.models.dto.NftCoinDto;
import xyz.cryptomaven.rest.service.AddressesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

@CrossOrigin(origins = "*")
@RequestMapping("/api/addresses")
@RestController
public class AddressesController {
  @Autowired
  private AddressesService addressesService;
  @Autowired
  private CoinMapper nftAddressMapper;

  @ApiResponse(responseCode = "201", description = "Address created")
  @Operation(summary = "Create a new address")
  @RequestMapping(value = "", method = RequestMethod.POST, consumes = "application/json")
  public ResponseEntity<AddressDto> createAddress(@RequestBody AddressDto c) {

    return new ResponseEntity<>(addressesService.createAddress(c), HttpStatus.CREATED);
  }

  @Operation(summary = "Get an address by id")
  @ApiResponse(responseCode = "200", description = "Address found")
  @GetMapping(value = "/{id}")
  public AddressDto getAddress(@PathVariable("id") Long id) {

    return addressesService.getAddress(id);
  }

  @Operation(summary = "Get an address by id")
  @ApiResponse(responseCode = "200", description = "Address found")
  @GetMapping(value = "/{id}/coins")
  public ResponseEntity<Set<CoinDto>> getAddressCoins(@PathVariable("id") Long id) {

    AddressDto addressDto = addressesService.getAddress(id);
    Set<CoinDto> coinDtos = addressDto.getCoins();

    return new ResponseEntity<>(coinDtos, HttpStatus.OK);
  }

  @Operation(summary = "Get an address by id")
  @ApiResponse(responseCode = "200", description = "Address found")
  @GetMapping(value = "/{id}/chains")
  public ResponseEntity<Set<ChainDto>> getAddressCChains(@PathVariable("id") Long id) {

    AddressDto addressDto = addressesService.getAddress(id);
    Set<ChainDto> chainDtos = addressDto.getChains();

    return new ResponseEntity<>(chainDtos, HttpStatus.OK);

  }

  @Operation(summary = "Get all addresses")
  @ApiResponse(responseCode = "200", description = "Addresses found")
  @GetMapping(value = "")
  public ResponseEntity<List<AddressDto>> getAllAddresses() {

    List<AddressDto> addressDtos = addressesService.getAllAddresses();

    return new ResponseEntity<>(addressDtos, HttpStatus.OK);
  }

  @Operation(summary = "Update an address")
  @ApiResponse(responseCode = "200", description = "Address updated")
  @PutMapping(value = "", consumes = "application/json")
  public ResponseEntity<AddressDto> updateAddress(@RequestBody AddressDto change) {
    return new ResponseEntity<>(addressesService.updateAddress(change), HttpStatus.OK);
  }

  @DeleteMapping(value = "/{addressId}")
  public ResponseEntity<Boolean> deleteAddress(@PathVariable("addressId") Long addressId) {
    return new ResponseEntity<>(addressesService.deleteAddress(addressId), HttpStatus.OK);

  }

  /////////
  @Operation(summary = "Create a new NFT")
  @ApiResponse(responseCode = "201", description = "NFT created")
  @RequestMapping(value = "/nfts", method = RequestMethod.POST, consumes = "application/json")
  public ResponseEntity<AddressDto> createNft(@RequestBody AddressDto n) {

    return new ResponseEntity<>(addressesService.createNft(n), HttpStatus.CREATED);
  }

  @Operation(summary = "Get an NFT by id")
  @ApiResponse(responseCode = "200", description = "NFT found")
  @GetMapping(value = "/nfts")
  public ResponseEntity<List<AddressDto>> getAllNFTs() {
    return new ResponseEntity<>(addressesService.getAllAddresses(), HttpStatus.OK);
  }
}
