package xyz.cryptomaven.rest.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@Builder
@AllArgsConstructor
@RequiredArgsConstructor
@Table(name = "NFT")
public class Nft {

	@GeneratedValue(strategy = GenerationType.AUTO)
	@Id
	int id;
	String name;
  double amount;

//	@OneToOne
//	@JoinColumn(name = "metadata_metaid")
  String metadata;

	String nftAddress;


}
