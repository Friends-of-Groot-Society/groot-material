package xyz.cryptomaven.rest.repositories;

import xyz.cryptomaven.rest.models.NftCoin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NftRepository extends JpaRepository<NftCoin, Long> {
}
