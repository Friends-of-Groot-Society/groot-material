package xyz.cryptomaven.rest.models;

import lombok.*;

import jakarta.persistence.*;

@Data
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "CHAIN")
public class Chain extends AbstractDomainClass {


  @Id
  @GeneratedValue(strategy = GenerationType.AUTO, generator = "ID_MAKER")
  @Column(name = "id", nullable = false)
  private int id;

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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "address" )
    @ToString.Exclude
    private Address address;

}
