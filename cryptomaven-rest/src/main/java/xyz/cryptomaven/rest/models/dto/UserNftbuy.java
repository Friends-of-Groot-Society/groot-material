package xyz.cryptomaven.rest.models.dto;

import xyz.cryptomaven.rest.models.NftCoin;
import xyz.cryptomaven.rest.models.User;

public class UserNftbuy {
    private User user;
    private NftCoin coin;
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public NftCoin getNft() {
        return coin;
    }
    public void setNft(NftCoin coin) {
        this.coin = coin;
    }


}
