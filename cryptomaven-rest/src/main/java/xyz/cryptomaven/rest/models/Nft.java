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
@Table(name = "nft")
public class Nft extends AbstractDomainClass {

  private static final long serialVersionUID = 1L;

	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Id
  private Long id;
	private String name;
  private double amount;

//	@OneToOne
//	@JoinColumn(name = "metadata_metaid")
  private String metadata;
	private String nftAddress;


}
