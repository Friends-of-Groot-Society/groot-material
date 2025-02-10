package xyz.cryptomaven.rest.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import xyz.cryptomaven.rest.models.User;
import xyz.cryptomaven.rest.models.dto.ChainUsers;

import java.util.List;
import java.util.Optional;

//@RepositoryRestResource(collectionResourceRel="user", path="user")
@Repository
public interface UsersRepository extends JpaRepository<User, Integer> {

    List<User> findAll();
    User findByUsernameAndPassword(String username, String password);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    Optional<User> findByEmail(String email);

    Optional<User> findByEmailAndPassword(String email, String password);

    User findByUsername(String username);

    Optional<User> findByUsernameOrEmail(String usernameOrEmail, String usernameOrEmail1);

//  @Query(nativeQuery = true, value = "SELECT u.firstname AS firstName, u.lastname AS lastName, COUNT(cu.userid) AS chainCount " +
//    "FROM USERS u LEFT JOIN CHAIN_USERS cu ON cu.userid = u.userid " +
//    "GROUP BY u.firstname, u.lastname")
//  List<ChainUsers> getUserChains();
//
//  @Query(nativeQuery = true, value = "SELECT u.firstname AS firstName, u.lastname AS lastName, COUNT(cu.userid) AS chainCount " +
//    "FROM USERS u LEFT JOIN CHAIN_USERS cu ON cu.userid = u.userid " +
//    "GROUP BY u.firstname, u.lastname " +
//    "ORDER BY chainCount")
//  List<ChainUsers> getUserChainsCount();
}
