package xyz.cryptomaven.rest.models.dto;

import jakarta.persistence.CascadeType;
import jakarta.persistence.FetchType;
import jakarta.persistence.OneToMany;
import lombok.*;
import xyz.cryptomaven.rest.models.Chain;
import xyz.cryptomaven.rest.models.Coin;

import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddressCategoriesDto {
    private Long id;
    private String name;
    private String description;
    private  String  urls;
    private List<CoinDto> nfts;

  // A category can have many PostEntity items
    private LinkedList<Chain> chainsByChainId;
}
