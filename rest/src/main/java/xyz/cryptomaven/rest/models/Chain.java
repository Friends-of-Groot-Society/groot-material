package xyz.cryptomaven.rest.models;

import lombok.*;

import jakarta.persistence.*;

import java.util.Objects;

@Data
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "CHAIN")
public class Chain extends AbstractDomainClass {

  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY )
  @Column(name = "id", nullable = false)
  private Long id;

  private String name;
  private String symbol;
  private String description;
  private String longDescription;
  private String iconUrl;
  private String category;
  private String chainListIcon;
  private String rpcUrl;
  private Integer chainId;
  private String blockExplorerUrl;

  @ManyToOne//(fetch = FetchType.LAZY)
  @JoinColumn(name = "chain_address_id" )
//  @ToString.Exclude
  private Address address;

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    if (!super.equals(o)) return false;
    Chain chain = (Chain) o;
    return Objects.equals(id, chain.id) && Objects.equals(name, chain.name) && Objects.equals(symbol, chain.symbol) && Objects.equals(description, chain.description) && Objects.equals(longDescription, chain.longDescription) && Objects.equals(iconUrl, chain.iconUrl) && Objects.equals(category, chain.category) && Objects.equals(chainListIcon, chain.chainListIcon) && Objects.equals(rpcUrl, chain.rpcUrl) && Objects.equals(chainId, chain.chainId) && Objects.equals(blockExplorerUrl, chain.blockExplorerUrl) && Objects.equals(address, chain.address);
  }

  @Override
  public int hashCode() {
    return Objects.hash(super.hashCode(), id, name, symbol, description, longDescription, iconUrl, category, chainListIcon, rpcUrl, chainId, blockExplorerUrl, address);
  }
}
