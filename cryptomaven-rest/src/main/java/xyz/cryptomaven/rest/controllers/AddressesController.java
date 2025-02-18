package xyz.cryptomaven.rest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;

import xyz.cryptomaven.rest.mapper.CoinMapper;
import xyz.cryptomaven.rest.models.dto.AddressDto;

import xyz.cryptomaven.rest.models.dto.NftCoinDto;
import xyz.cryptomaven.rest.service.AddressesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
@Operation(summary = "Get all addresses")
    @ApiResponse(responseCode = "200", description = "Addresses found")
    @GetMapping(value = "")
    public List<AddressDto> getAllAddresses() {
        return addressesService.getAllAddresses();
    }

  @Operation(summary = "Update an address")
    @ApiResponse(responseCode = "200", description = "Address updated")
    @PutMapping(value = "", consumes = "application/json")
    public AddressDto updateAddress(@RequestBody AddressDto change) {
        return addressesService.updateAddress(change);
    }
    @DeleteMapping(value = "/{addressId}")
    public boolean deleteAddress(@PathVariable("addressId") Long addressId) {
        return addressesService.deleteAddress(addressId);
    }

    /////////
    @Operation(summary = "Create a new NFT")
    @ApiResponse(responseCode = "201", description = "NFT created")
    @RequestMapping(value = "/nfts", method = RequestMethod.POST, consumes = "application/json")
    public ResponseEntity<NftCoinDto> createNft(@RequestBody NftCoinDto n) {

        return new ResponseEntity<>(addressesService.createNft(n), HttpStatus.CREATED);
    }
    @Operation(summary = "Get an NFT by id")
    @ApiResponse(responseCode = "200", description = "NFT found")
    @GetMapping(value = "/nfts")
    public ResponseEntity<List<NftCoinDto>> getAllNFTs() {
        return new ResponseEntity<>(addressesService.getAllNFTs(), HttpStatus.OK);
    }
}
