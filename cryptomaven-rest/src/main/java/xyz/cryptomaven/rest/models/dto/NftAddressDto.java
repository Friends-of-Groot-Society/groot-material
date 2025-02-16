package xyz.cryptomaven.rest.models.dto;

import xyz.cryptomaven.rest.models.NftAddress;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;

/**
 * A DTO for the {@link NftAddress} entity
 */
@Data
@Builder
public class NftAddressDto implements Serializable {
    private  Long id;
    private  String address;
    private  Double nativeToken;
//    @JsonProperty("tokens")
    private   Double  tokens;
    private  List<NftDto> nfts;
}
