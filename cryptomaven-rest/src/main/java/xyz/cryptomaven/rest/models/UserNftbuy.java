package xyz.cryptomaven.rest.models;

public class UserNftbuy  extends AbstractDomainClass {

  private static final long serialVersionUID = 1L;
    private User user;
    private Nft nft;
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }
    public Nft getNft() {
        return nft;
    }
    public void setNft(Nft nft) {
        this.nft = nft;
    }


}
