package xyz.cryptomaven.rest.dataLoader;

import xyz.cryptomaven.rest.models.Address;
import xyz.cryptomaven.rest.models.Chain;
import xyz.cryptomaven.rest.models.User;
import xyz.cryptomaven.rest.models.dto.ChainCSVRecord;
import xyz.cryptomaven.rest.models.dto.Symbol;
import xyz.cryptomaven.rest.repositories.AddressesRepository;
import xyz.cryptomaven.rest.repositories.ChainsRepository;
import xyz.cryptomaven.rest.repositories.UsersRepository;
import xyz.cryptomaven.rest.service.ChainCsvService;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.ResourceUtils;

import java.io.File;
import java.io.FileNotFoundException;
import java.math.BigDecimal;
import java.sql.Date;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.*;


/**
 *
 */
@Component
@Profile("test")
@RequiredArgsConstructor
public class BootstrapData implements CommandLineRunner {

  private static final Logger log = LoggerFactory.getLogger(BootstrapData.class);
  private final AddressesRepository addressesRepository;
  private final ChainsRepository chainRepository;
  private final UsersRepository userRepository;
  private final ChainCsvService chainCsvService;
  private Set<Chain> chains = new HashSet<>();

  private List<User> users = new ArrayList<>();

  private List<Address> addresses = new ArrayList<>();


  @Transactional
  @Override
  public void run(String... args) throws Exception {
    loadChainData();
    loadCsvData();
    loadAddressData();
    loadUserData();
  }

  private void loadCsvData() throws FileNotFoundException {
    if (chainRepository.count() < 10) {
      File file = ResourceUtils.getFile("classpath:data/chains.csv");

      List<ChainCSVRecord> recs = chainCsvService.convertCSV(file);

      recs.forEach(chainCSVRecord -> {
//                String symbol = switch (chainCSVRecord.getSymbol().toString()) {
//                    case "Ethereum" -> Symbol.ETH;
//                    case "Wrapped Bitcoin", "Bitcoin" ->
//                            Symbol.BTC;
//                    case "ChainLink", "Ethereum from Polygon", "Polygon" -> Symbol.MATIC;
//                    case "Pulsechain", "Hex from Pulsechain" -> Symbol.PLS;
//                    case "Solana Chain", "Solana" -> Symbol.SOL;
//                    case "Binance Chain" -> Symbol.BNB;
//                    case "avalanche", "Avalanche Mainnet", "Avalanche" -> Symbol.AVAX;
//                    case "XRP", "Ripple" -> Symbol.XRP;
//                    default -> Symbol.ETH;
//                };

        chainRepository.save(Chain.builder()
          .name(StringUtils.abbreviate(chainCSVRecord.getName(), 250))
          .symbol(chainCSVRecord.getSymbol())
          .iconUrl(chainCSVRecord.getIconUrl())
          .description(chainCSVRecord.getDescription())
          .longDescription(chainCSVRecord.getLongDescription())
//                                .category(chainCSVRecord.getCategory())
          .chainListIcon(chainCSVRecord.getChainListIcon())
          .rpcUrl(chainCSVRecord.getRpcUrl())
          .id(chainCSVRecord.getId())
          .blockExplorerUrl(chainCSVRecord.getBlockExplorerUrl())
//                                .dateCreated(new Date(2021,10,10))
//                                .lastUpdated(LocalDateTime.now())
          .build());
      });
    }
  }

  private void loadChainData() {
    if (chainRepository.count() == 0) {
      Chain chain1 = Chain.builder()
        .name("PulseChain")
        .address(new Address())
        .symbol("PLS")
        .build();

      Chain  chain2 = Chain.builder()
        .name("Ethereum")
        .address(new Address())
        .symbol("ETH")
        .build();

      Chain chain3 = Chain.builder()
        .name("Solana")
        .address(new Address())
        .symbol("SOL")
        .build();
      Chain  chain4 = Chain.builder()
        .name("Avalanche")
        .address(new Address())
        .symbol("AVAX")
        .build();

      Chain  chain5 = Chain.builder()
        .name("Polygon")
        .symbol("MATIC")
        .build();

      Chain  chain6 = Chain.builder()
        .name("Fantom")
        .symbol("FTM")
        .build();
      chains.addAll(Arrays.asList(chain1, chain2, chain3, chain4, chain5, chain6));
      for (Chain chain : chains) {
        chain.setChainId((int) Math.floor(Math.random()));
        chain.setDateCreated(Date.valueOf(LocalDate.now()));
        chain.setLastUpdated(LocalDateTime.now());
        chainRepository.saveAll(chains);
      }
    }
  }

  private void loadAddressData() {
    if (chainRepository.count() == 0) {
      Address address1 = Address.builder()
        .address("0x399EEc3B8e889a2E0853dd254f09C4535061693A")
        .nftAddress("")
        .owner("")
        .chains(chains)
        .description("")
        .blockExplorerUrl("")
        .build();

      Address address2 = Address.builder()
        .address("0x399EEc3B8e889a2E0853dd254f09C4535061693C")
        .nftAddress("")
        .owner("")
        .chains(chains)
        .description("")
        .blockExplorerUrl("")
        .build();

      Address address3 = Address.builder()
        .address("0x399EEc3B8e889a2E0853dd254f09C4535061693B")
        .nftAddress("")
        .owner("")
        .chains(chains)
        .description("")
        .blockExplorerUrl("")
        .build();
      addresses.addAll(Arrays.asList(address1, address2, address3));
      for (Address address : addresses) {
        address.setDateCreated(Date.valueOf(LocalDate.now()));
        address.setLastUpdated(LocalDateTime.now());
      }
      addressesRepository.saveAll(addresses);
    }
  }

  private void loadUserData() {

    if (userRepository.count() == 0) {
      User user1 = User.builder()
        .userId((int) Math.floor(Math.random()))
        .username("User 3")
        .build();

      User user2 = User.builder()
        .userId((int) Math.floor(Math.random()))
        .username("User 3")
        .build();

      User user3 = User.builder()
        .userId((int) Math.floor(Math.random()))
        .username("User 3")
        .build();
      users.addAll(Arrays.asList(user1, user2, user3));
      for (User user : users) {
        user.setDateCreated(Date.valueOf(LocalDate.now()));
        user.setLastUpdated(LocalDateTime.now());
      }
      userRepository.saveAll(users);
    }

  }
}
