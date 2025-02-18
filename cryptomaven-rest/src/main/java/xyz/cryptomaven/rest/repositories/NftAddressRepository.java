package xyz.cryptomaven.rest.repositories;

import xyz.cryptomaven.rest.models.Coin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="nftaddress", path = "nftaddress")
public interface NftAddressRepository extends JpaRepository<Coin, Long>, JpaSpecificationExecutor<Coin> {
}
