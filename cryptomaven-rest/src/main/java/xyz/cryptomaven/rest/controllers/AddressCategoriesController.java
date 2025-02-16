package xyz.cryptomaven.rest.controllers;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import xyz.cryptomaven.rest.models.dto.AddressCategoriesDto;
import xyz.cryptomaven.rest.service.AddressCategoriesService;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(AddressCategoriesController.API_CATEGORIES)
public class AddressCategoriesController {

    public static final String API_CATEGORIES = "/api/categories";
    private final AddressCategoriesService categoryService;

    public AddressCategoriesController(AddressCategoriesService categoryService) {
        this.categoryService = categoryService;
    }
    @Operation(summary = "Add a new category")
    @ApiResponse(responseCode = "201", description = "AddressCategories created")
    @SecurityRequirement(    name = "Bearer Authentication" )
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping
    public ResponseEntity<AddressCategoriesDto> addAddressCategories(@RequestBody AddressCategoriesDto categoryDto){
        AddressCategoriesDto savedAddressCategories = categoryService.addAddressCategories(categoryDto);
        return new ResponseEntity<>(savedAddressCategories, HttpStatus.CREATED);
    }

    @Operation(summary = "Get a category by id")
    @ApiResponse(responseCode = "200", description = "AddressCategories found")
    @GetMapping("{id}")
    public ResponseEntity<AddressCategoriesDto> getAddressCategories(@PathVariable("id") Long categoryId){
         AddressCategoriesDto categoryDto = categoryService.getAddressCategories(categoryId);
         return ResponseEntity.ok(categoryDto);
    }

    @Operation(summary = "Get all categories")
    @ApiResponse(responseCode = "200", description = "Categories found")
    @GetMapping
    public ResponseEntity<List<AddressCategoriesDto>> getCategories(){
        return ResponseEntity.ok(categoryService.getAllCategories());
    }


    @Operation(summary = "Update a category")
    @ApiResponse(responseCode = "200", description = "AddressCategories updated")
    @SecurityRequirement(     name = "Bearer Authentication"   )
    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping
    public ResponseEntity<AddressCategoriesDto> updateAddressCategories(@RequestBody AddressCategoriesDto categoryDto ){
        return ResponseEntity.ok(categoryService.updateAddressCategories(categoryDto ));
    }

    @Operation(summary = "Delete a category")
    @ApiResponse(responseCode = "200", description = "AddressCategories deleted")
    @SecurityRequirement(  name = "Bearer Authentication"  )
    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("{id}")
    public ResponseEntity<Boolean> deleteAddressCategories(@PathVariable("id") Long categoryId){
        try {

            categoryService.deleteAddressCategories(categoryId);
            return ResponseEntity.ok(true);
        } catch (Exception e) {
            return  ResponseEntity.notFound().build();
        }
    }
}
