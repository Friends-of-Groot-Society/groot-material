package xyz.cryptomaven.rest.models.dto;

import lombok.Value;
import xyz.cryptomaven.rest.models.Coin;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

/**
 * DTO for {@link Coin}
 */
@Value
public class CoinDto implements Serializable {
  Integer version;
  Date dateCreated;
  Timestamp timeCreated;
  LocalDateTime lastUpdated;
  Timestamp timeUpdated;
  Long id;
  Double nativeToken;
  char[] tokens;
  List<NftCoinDto> nfts;
}
