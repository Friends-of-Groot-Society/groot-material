package xyz.cryptomaven.rest.models.dto;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.Set;


@Builder
@Data
public class AddressDto implements Serializable {

  private static final long serialVersionUID = 1L;


  private Long id;

  private String description;

  private String email;
  private String owner;

  private String address;
  private String iconUrl;

  private String blockExplorerUrl;

  private Set<Integer> chainId;

  private Set<ChainDto> chains;

  private String nftAddress;

}
