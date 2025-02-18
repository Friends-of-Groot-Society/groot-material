package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serial;
import java.io.Serializable;
import java.util.List;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "raw_token")
public class RawToken  extends AbstractDomainClass {

  private static final long serialVersionUID = 1L;

    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;

  @Column(name = "raw_token")
    private String rawToken;

    @ManyToOne
    @JoinColumn(name = "NFTADDRESS_ID")
    private Coin nftAddress;


}
