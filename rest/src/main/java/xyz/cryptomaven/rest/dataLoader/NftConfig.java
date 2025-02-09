package xyz.cryptomaven.rest.dataLoader;


import org.springframework.context.annotation.Profile;
import xyz.cryptomaven.rest.models.Attribute;
import xyz.cryptomaven.rest.models.Metadata;
import xyz.cryptomaven.rest.models.Nft;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Profile("dev")
@Configuration
public class NftConfig {

    private static final Logger log = LoggerFactory.getLogger(NftConfig.class);
    @Bean
    public Attribute newAttribute() {
        String attribute_value = "_new_value_";
        String trait_type = "new_trait_type";

        return new Attribute(0, attribute_value, trait_type );
    }

    @Bean
    public Metadata newMetadata() {
        String name = "_new_metadata_";
        String description = "_new_desc_";
        String image = "https://s3.amazonaws.com/tmm.net/img/ether.png";

                            // metadataId, name, description, image, nft, attributes[]
        return new Metadata(0,name,description,image, null);
    }

    @Bean
    public Nft newNft() {
        String name = "_new_nft_";
        double amount = 123;
                        // id, name, amount, metadata_id, nftAddress)
        return new Nft(0,name, amount,null,null);
    }


}
