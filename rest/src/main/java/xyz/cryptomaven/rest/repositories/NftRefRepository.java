package xyz.cryptomaven.rest.repositories;

import xyz.cryptomaven.rest.models.Nft;
import xyz.cryptomaven.rest.models.NftRef;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.RequestParam;

@RepositoryRestResource(collectionResourceRel="nft_ref", path = "nft_ref")
public interface NftRefRepository extends JpaRepository<NftRef, Long> {
    NftRef findByName(String name);


}
