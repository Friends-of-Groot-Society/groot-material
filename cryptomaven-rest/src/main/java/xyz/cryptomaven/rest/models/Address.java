package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.Objects;
import java.util.Set;

@Getter
@Setter
@Entity
@Builder
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

  @OneToMany(mappedBy = "address", cascade = CascadeType.ALL, orphanRemoval = true)
  private Set<Chain> chains;

}
