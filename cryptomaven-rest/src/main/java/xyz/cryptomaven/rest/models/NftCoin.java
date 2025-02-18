package xyz.cryptomaven.rest.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "nft")
public class NftCoin extends AbstractDomainClass {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  private String name;
  private double amount;

  @OneToOne
  @JoinColumn(name = "metadata") // separate column in nft table
  private Metadata metadata;

  // If you want to connect back to Coin entity

  @ManyToOne (fetch = FetchType.LAZY)
  @JoinColumn(name="coin")  // foreign key referencing nft_address_stamp.id
  private Coin coin;
}

