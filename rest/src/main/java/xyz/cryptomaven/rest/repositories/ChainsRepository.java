package xyz.cryptomaven.rest.repositories;

import xyz.cryptomaven.rest.models.Chain;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChainsRepository extends JpaRepository<Chain, Integer> {
    Chain findByName(String name);
}
