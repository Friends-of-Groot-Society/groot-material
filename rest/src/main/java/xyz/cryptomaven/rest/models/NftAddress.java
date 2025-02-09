package xyz.cryptomaven.rest.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;

import java.util.HashMap;
import java.util.List;

@Data
@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Builder
@Table(name = "NFT_ADDRESS") /// ANGULAR's NFT.ts
public class NftAddress {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id", nullable = false)
	int id;

  @Column(name = "address")
  String  address;

	@Column(name="native_token")
	Double nativeToken;

	@Transient
	HashMap<String, Double> tokens; // token name, token amount	@OneToOne

	@OneToMany
	@Column(name = "nft_id")
	List<Nft> nfts; // nft id, nft name,  nft amount, metadata_id

}
