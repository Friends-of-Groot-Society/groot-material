package xyz.cryptomaven.rest.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;

import java.util.List;

@Data
@Entity
@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "metadata")
public class Metadata extends AbstractDomainClass {

  private static final long serialVersionUID = 1L;

  @Id
  private Long id;
  private String name;
  private String description;
  private String image;
  private String external_url;

  @OneToMany(mappedBy = "metadata", cascade = CascadeType.ALL, orphanRemoval = true)
  private  List<Attribute> attributes;

  @OneToOne(mappedBy = "metadata")
  NftCoin nftCoin;



}
