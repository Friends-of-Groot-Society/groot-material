package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Data
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "coin")
public class Coin extends AbstractDomainClass {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;


  @Column(name="native_token")
  private Double nativeToken;

  @Column(name="nft_token")
  private char[] tokens ;

  // One Coin can have many NftCoins
  @OneToMany(mappedBy ="coin", cascade=CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
  private  List<NftCoin> nfts = new ArrayList<>();


  // equals, hashCode, etc.
}
