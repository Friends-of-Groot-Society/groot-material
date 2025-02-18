package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.proxy.HibernateProxy;

import java.util.Objects;

@Getter
@Setter
@ToString
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "chain")
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

  @ManyToOne (fetch = FetchType.LAZY)
  @JoinColumn(name = "chain_address_id" )
  private Address address;

}
