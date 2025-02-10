package xyz.cryptomaven.rest.repositories;

import xyz.cryptomaven.rest.models.Nft;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NftRepository extends JpaRepository<Nft, Long> {
}
