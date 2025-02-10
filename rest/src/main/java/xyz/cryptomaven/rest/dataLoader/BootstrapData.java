package xyz.cryptomaven.rest.dataLoader;

import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import xyz.cryptomaven.rest.models.Address;
import xyz.cryptomaven.rest.models.Chain;
import xyz.cryptomaven.rest.models.User;
import xyz.cryptomaven.rest.repositories.AddressesRepository;
import xyz.cryptomaven.rest.repositories.ChainsRepository;
import xyz.cryptomaven.rest.repositories.UsersRepository;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Profile;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;

@Configuration
@Profile("local")
@RequiredArgsConstructor
public class BootstrapData {

  private static final Logger log = LoggerFactory.getLogger(BootstrapData.class);
  private final AddressesRepository addressesRepository;
  private final ChainsRepository chainRepository;
  private final UsersRepository userRepository;

  private Set<Chain> chains = new HashSet<>();
  private List<User> users = new ArrayList<>();
  private List<Address> addresses = new ArrayList<>();

  @Transactional
  @Bean
  public ApplicationRunner runner() {
    return args -> {
      loadUserData();
       loadChainData();
       loadAddressData();
    };
  }

  private void loadChainData() {
    if (chainRepository.count() == 0) {
      Chain chain1 = Chain.builder()
        .name("PulseChain")
        .symbol("PLS")
        .build();

      Chain chain2 = Chain.builder()
        .name("Ethereum")
        .symbol("ETH")
        .chainAddress(null)
        .build();

      Chain chain3 = Chain.builder()
        .name("Solana")
        .symbol("SOL")
        .chainAddress(null)
        .build();

      Chain chain4 = Chain.builder()
        .name("Avalanche")
        .symbol("AVAX")
        .chainAddress(null)
        .build();

      Chain chain5 = Chain.builder()
        .name("Polygon")
        .symbol("MATIC")
        .chainAddress(null)
        .build();

      Chain chain6 = Chain.builder()
        .name("Fantom")
        .symbol("FTM")
        .chainAddress(null)
        .build();

      chains.addAll(Arrays.asList(chain1, chain2, chain3, chain4, chain5, chain6));
      for (Chain chain : chains) {
        chain.setChainId((int) (Math.random() * 1000));
        chain.setDateCreated(Date.valueOf(LocalDate.now()));
        chain.setLastUpdated(LocalDateTime.now());
      }
      chainRepository.saveAll(chains);
      chainRepository.flush();
    }
  }

  private void loadAddressData() {
    if (addressesRepository.count() == 0) {
      Address address1 = Address.builder()
        .address("0x399EEc3B8e889a2E0853dd254f09C4535061693A")
        .nftAddress("")
        .owner("")
//        .chains(chains)
        .description("")
        .blockExplorerUrl("")
        .build();

      Address address2 = Address.builder()
        .address("0x399EEc3B8e889a2E0853dd254f09C4535061693C")
        .nftAddress("")
        .owner("")
//        .chains(chains)
        .description("")
        .blockExplorerUrl("")
        .build();

      Address address3 = Address.builder()
        .address("0x399EEc3B8e889a2E0853dd254f09C4535061693B")
        .nftAddress("")
        .owner("")
//        .chains(chains)
        .description("")
        .blockExplorerUrl("")
        .build();

      addresses.addAll(Arrays.asList(address1, address2, address3));
      for (Address address : addresses) {
        address.setDateCreated(Date.valueOf(LocalDate.now()));
        address.setLastUpdated(LocalDateTime.now());
      }
      addressesRepository.saveAll(addresses);
      addressesRepository.flush();
    }
  }

  private void loadUserData() {
    if (userRepository.count() == 0) {
      User user1 = User.builder()
        .userId((int) (Math.random() * 23))
        .username("User 1")
        .email("user1@gmail.com")
        .build();

      User user2 = User.builder()
        .userId((int) (Math.random() * 23))
        .username("User 2")
        .email("user2@gmail.com")
        .build();

      User user3 = User.builder()
        .userId((int) (Math.random() * 23))
        .username("User 3")
        .email("user3@gmail.com")
        .build();

      users.addAll(Arrays.asList(user1, user2, user3));
      for (User user : users) {
        user.setDateCreated(Date.valueOf(LocalDate.now()));
        user.setLastUpdated(LocalDateTime.now());
      }
      userRepository.saveAll(users);
      userRepository.flush();
    }
  }
}
