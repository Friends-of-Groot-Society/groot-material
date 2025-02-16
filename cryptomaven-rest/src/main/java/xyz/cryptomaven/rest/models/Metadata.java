package xyz.cryptomaven.rest.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "metadata")
public class Metadata  extends AbstractDomainClass {

  private static final long serialVersionUID = 1L;

  @Id
  private Long id;
  private String name;
  private String description;
  private String image;
  //    @OneToOne(mappedBy = "metadata")
//    @JoinColumn(name = "nft_id")
  String nft;
//    Nft nft;


}
