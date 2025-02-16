package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.proxy.HibernateProxy;

import java.util.List;
import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "nft_address_stamp") /// ANGULAR's NFT.ts
public class NftAddress extends AbstractDomainClass {

  private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id", nullable = false)
  private Long id;

  /*
    *   address of the user  + the nft address +
    *  + the nft id  + lastUpdatedStamp
   */
  @Column(name = "nft_address_stamp")
  String  address;

	@Column(name="native_token")
	Double nativeToken;

	@Column(name="nft_token")
   Double  tokens; // token name, token amount	@OneToOne

	@OneToMany
	@Column(name = "nft_id")
  @ToString.Exclude
  List<Nft> nfts; // nft id, nft name,  nft amount, metadata_id

  @Override
  public final boolean equals(Object o) {
    if (this == o) return true;
    if (o == null) return false;
    Class<?> oEffectiveClass = o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() : o.getClass();
    Class<?> thisEffectiveClass = this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
    if (thisEffectiveClass != oEffectiveClass) return false;
    NftAddress that = (NftAddress) o;
    return getId() != null && Objects.equals(getId(), that.getId());
  }

  @Override
  public final int hashCode() {
    return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
  }
}
