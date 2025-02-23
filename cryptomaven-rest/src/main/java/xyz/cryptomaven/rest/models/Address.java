package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@Entity
@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "addresses")
public class Address extends AbstractDomainClass {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY )
  @Column(name = "id", nullable = false)
  private Long id;

  private String description;
  private String owner;
  @Column(name = "email")
  private String email;
  private String address;
  @Column(name = "icon_url")
  private String iconUrl;
  @Column(name = "block_explorer_url")
  private String blockExplorerUrl;
  private String nftAddress;

  @OneToMany(mappedBy = "addressChain", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Chain> chains = new HashSet<>();

  @OneToMany(mappedBy = "addressCoin", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Coin> coins = new HashSet<>();

  @ManyToOne(fetch = FetchType.LAZY)
  private User user;
}
