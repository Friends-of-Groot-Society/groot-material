package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.ArrayList;
import java.util.List;

@EqualsAndHashCode(callSuper = true)
@SuperBuilder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "coin")
public class Coin extends AbstractDomainClass {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @Column(name = "native_token")
  private Double nativeToken;

  @OneToMany(mappedBy = "coin", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
  @Builder.Default
  private List<RawToken> tokens = new ArrayList<>();

  @OneToMany(mappedBy = "coin", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
  @Builder.Default
  private List<NftCoin> nfts = new ArrayList<>();

  @ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
  @JoinColumn(name = "address_id") // ✅ Fixed foreign key name
  private Address addressCoin;
}
