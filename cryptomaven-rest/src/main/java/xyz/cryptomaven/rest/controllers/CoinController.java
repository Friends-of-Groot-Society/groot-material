package xyz.cryptomaven.rest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import xyz.cryptomaven.rest.mapper.CoinMapper;
import xyz.cryptomaven.rest.models.dto.CoinDto;
import xyz.cryptomaven.rest.service.CoinService;

import java.util.List;



@CrossOrigin(origins = "*")
@RequestMapping("/api")
@RestController
public class CoinController {
  @Autowired
  CoinService coinService;

  @Autowired
  private CoinMapper coinMapper;

  @Operation(summary = "Create a new coin")

  @ApiResponse(responseCode = "201", description = "Coin created")
  @RequestMapping(value = "/coin", method = RequestMethod.POST, consumes = "application/json")
  @SecurityRequirement(
    name = "Bearer Authentication"
  )
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<CoinDto> createCoin(@RequestBody CoinDto cd) {
    CoinDto response = coinService.createCoin(cd);
    return new ResponseEntity<>(response, HttpStatus.CREATED);
  }

  @Operation(summary = "Get all coin")
  @ApiResponse(responseCode = "200", description = "All coin returned")
  @GetMapping(value = "/coin")
  public ResponseEntity<List<CoinDto>> getAllCoin() {
    return new ResponseEntity<>(coinService.getAllCoin(), HttpStatus.OK);
  }


  @Operation(summary = "Get a coin by id")
  @ApiResponse(responseCode = "200", description = "Coin returned")
  @GetMapping(value = "/coin/{id}")
  public ResponseEntity<CoinDto> getCoinById(@PathVariable("id") String id) {
    return new ResponseEntity<>(coinService.getCoinById(Long.valueOf(id)), HttpStatus.OK);
  }

  @SecurityRequirement(
    name = "Bearer Authentication"
  )
  @PreAuthorize("hasRole('ADMIN')")
  @Operation(summary = "Update a coin")
  @ApiResponse(responseCode = "200", description = "Coin updated")
  @PutMapping(value = "/coin", consumes = "application/json")
  public ResponseEntity<CoinDto> updateCoin(@RequestBody CoinDto change) {
    return new ResponseEntity<>(coinService.updateCoin(change), HttpStatus.OK);
  }

  @SecurityRequirement(
    name = "Bearer Authentication"
  )
  @PreAuthorize("hasRole('ADMIN')")
  @Operation(summary = "Delete a coin")
  @ApiResponse(responseCode = "200", description = "Coin deleted")
  @DeleteMapping(value = "/coin/{id}")
  public boolean deleteCoin(@PathVariable("id") Long id) {

    return coinService.deleteCoin(id);
  }


}
