package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.proxy.HibernateProxy;

import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "ADDRESS")
public class Address extends AbstractDomainClass {
  private static final long serialVersionUID = 1L;

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO, generator = "ID_MAKER")
  @Column(name = "id", nullable = false)
  private int id;
  private String description;

  private String owner;
  @Column(name = "address" )
  private String address;

  @OneToMany(mappedBy = "address", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Chain> chains;


  @Column(name = "icon_url")
  private String iconUrl;

  @Column(name = "block_explorer_url")
  private String blockExplorerUrl;

//  @ManyToOne(fetch = FetchType.EAGER)
//  @JoinColumn(name = "userid", foreignKey = @ForeignKey(name = "userid"))
//  private User user;

  @Column(name = "chain_id")
  private int chainId;

  //    @ManyToOne( fetch = FetchType.EAGER, cascade=CascadeType.ALL)
//    @JoinColumn(name ="address")//, foreignKey = @ForeignKey(name = "nft_address_id"))
  private String nftAddress;

  @Override
  public final boolean equals(Object o) {
    if (this == o) return true;
    if (o == null) return false;
    Class<?> oEffectiveClass = o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() : o.getClass();
    Class<?> thisEffectiveClass = this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
    if (thisEffectiveClass != oEffectiveClass) return false;
    Address address = (Address) o;
    return false;
  }

  @Override
  public final int hashCode() {
    return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
  }
}
