package xyz.cryptomaven.rest.models.dto;

import xyz.cryptomaven.rest.models.Metadata;
import xyz.cryptomaven.rest.models.Nft;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

/**
 * A DTO for the {@link Nft} entity
 */
@Data
@AllArgsConstructor
@NoArgsConstructor
public class NftDto implements Serializable {
  private int id;
  private String name;
  private int amount;
  private String metadata;
  private String nftAddress;
}
