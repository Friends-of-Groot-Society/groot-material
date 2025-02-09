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
@Table(name = "METADATA")
public class Metadata {

  @Id
  int metaid;
  String name;
  String description;
  String image;
  //    @OneToOne(mappedBy = "metadata")
//    @JoinColumn(name = "nft_id")
  String nft;
//    Nft nft;


}
