package xyz.cryptomaven.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import xyz.cryptomaven.rest.models.AddressCategories;

public interface AddressCategoriesRepository extends JpaRepository<AddressCategories, Long> {
}
