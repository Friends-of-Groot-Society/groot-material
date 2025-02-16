package xyz.cryptomaven.rest.models.dto;

import xyz.cryptomaven.rest.models.Chain;
import xyz.cryptomaven.rest.models.NftAddress;
import xyz.cryptomaven.rest.models.User;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;


@Builder
@Data
public class AddressDto implements Serializable {
  private Long id;

  private String description;

  private String owner;

  private String address;
  private String iconUrl;

  private String blockExplorerUrl;

  private User user;

  private int chainId;

  private Set<Chain> chains;
  private String nftAddress;

}
