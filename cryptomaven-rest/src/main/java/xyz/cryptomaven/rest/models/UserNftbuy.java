package xyz.cryptomaven.rest.models;

import jakarta.persistence.FetchType;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
public class UserNftbuy  extends AbstractDomainClass {

  private static final long serialVersionUID = 1L;
    @Getter
    @Setter
    @ManyToOne (fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "nft_id")
    private NftCoin coin;





}
