package xyz.cryptomaven.rest.repositories;

import xyz.cryptomaven.rest.models.dto.ChainUsers;
import xyz.cryptomaven.rest.models.UserAccount;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "user_account", path = "user_account")
public interface UserAccountRepository extends PagingAndSortingRepository<UserAccount, Long> {

    @Query(nativeQuery = true, value = "SELECT u.firstname AS firstName, u.lastname AS lastName, COUNT(cu.userid) AS chainCount " +
            "FROM USERS u LEFT JOIN CHAIN_USERS cu ON cu.userid = u.userid " +
            "GROUP BY u.firstname, u.lastname")
    List<ChainUsers> getUserChains();

    @Query(nativeQuery = true, value = "SELECT u.firstname AS firstName, u.lastname AS lastName, COUNT(cu.userid) AS chainCount " +
            "FROM USERS u LEFT JOIN CHAIN_USERS cu ON cu.userid = u.userid " +
            "GROUP BY u.firstname, u.lastname " +
            "ORDER BY chainCount")
    List<ChainUsers> getUserChainsCount();
}

