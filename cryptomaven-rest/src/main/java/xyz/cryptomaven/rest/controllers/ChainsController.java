package xyz.cryptomaven.rest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.security.access.prepost.PreAuthorize;
import xyz.cryptomaven.rest.models.dto.ChainDto;
import xyz.cryptomaven.rest.mapper.ChainMapper;
import xyz.cryptomaven.rest.service.ChainsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RequestMapping("/api")
@RestController
public class ChainsController {
  @Autowired
  ChainsService chainsService;

  @Autowired
  private ChainMapper chainMapper;

  @Operation(summary = "Create a new chain")

  @ApiResponse(responseCode = "201", description = "Chain created")
  @RequestMapping(value = "/chains", method = RequestMethod.POST, consumes = "application/json")
  @SecurityRequirement(
    name = "Bearer Authentication"
  )
  @PreAuthorize("hasRole('ADMIN')")
  public ResponseEntity<ChainDto> createChain(@RequestBody ChainDto cd) {
    ChainDto response = chainsService.createChain(cd);
    return new ResponseEntity<>(response, HttpStatus.CREATED);
  }

  @Operation(summary = "Get all chains")
  @ApiResponse(responseCode = "200", description = "All chains returned")
  @GetMapping(value = "/chains")
  public ResponseEntity<List<ChainDto>> getAllChains() {
    return new ResponseEntity<>(chainsService.getAllChains(), HttpStatus.OK);
  }

  @Operation(summary = "Get a chain by id")
  @ApiResponse(responseCode = "200", description = "Chain returned")
  @GetMapping(value = "/chains/{id}")
  public ChainDto getChain(@PathVariable("id") Long id) {

    return chainsService.getChain(id);
  }

  //    @GetMapping(value = "/chains/{username}")
//    public List<Chain> getAllChainsIOwn(@PathVariable("username") String username) {
//        return null; // chainsService.getAllChainsIOwn(username);
//    }
  @Operation(summary = "Get a chain by name")
  @ApiResponse(responseCode = "200", description = "Chain returned")
  @GetMapping(value = "/chains/name/{name}")
  public ResponseEntity<ChainDto> getChainByName(@PathVariable("name") String name) {
    return new ResponseEntity<>(chainsService.getChainByName(name), HttpStatus.OK);
  }

  @SecurityRequirement(
    name = "Bearer Authentication"
  )
  @PreAuthorize("hasRole('ADMIN')")
  @Operation(summary = "Update a chain")
  @ApiResponse(responseCode = "200", description = "Chain updated")
  @PutMapping(value = "/chains", consumes = "application/json")
  public ResponseEntity<ChainDto> updateChain(@RequestBody ChainDto change) {
    return new ResponseEntity<>(chainsService.updateChain(change), HttpStatus.OK);
  }

  @SecurityRequirement(
    name = "Bearer Authentication"
  )
  @PreAuthorize("hasRole('ADMIN')")
  @Operation(summary = "Delete a chain")
  @ApiResponse(responseCode = "200", description = "Chain deleted")
  @DeleteMapping(value = "/chains/{id}")
  public boolean deleteChain(@PathVariable("id") Long id) {

    return chainsService.deleteChain(id);
  }


}
