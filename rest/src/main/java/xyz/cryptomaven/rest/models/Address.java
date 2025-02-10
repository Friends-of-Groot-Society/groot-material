package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.proxy.HibernateProxy;

import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "ADDRESSES")
public class Address extends AbstractDomainClass {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY )
  @Column(name = "id", nullable = false)
  private Long id;

  private String description;
  private String owner;
  private String address;
  @Column(name = "icon_url")
  private String iconUrl;
  @Column(name = "block_explorer_url")
  private String blockExplorerUrl;
  private String nftAddress;

  @OneToMany(mappedBy = "address", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Chain> chains;

  @Override
  public boolean equals(Object o) {
    if (this == o) return true;
    if (o == null || getClass() != o.getClass()) return false;
    if (!super.equals(o)) return false;
    Address address1 = (Address) o;
    return Objects.equals(id, address1.id) && Objects.equals(description, address1.description) && Objects.equals(owner, address1.owner) && Objects.equals(address, address1.address) && Objects.equals(iconUrl, address1.iconUrl) && Objects.equals(blockExplorerUrl, address1.blockExplorerUrl) && Objects.equals(nftAddress, address1.nftAddress) && Objects.equals(chains, address1.chains);
  }

  @Override
  public int hashCode() {
    return Objects.hash(super.hashCode(), id, description, owner, address, iconUrl, blockExplorerUrl, nftAddress, chains);
  }
}
