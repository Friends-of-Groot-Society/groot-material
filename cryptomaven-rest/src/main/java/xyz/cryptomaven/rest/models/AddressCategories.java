package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;
import lombok.Builder;

import java.util.LinkedList;
import java.util.List;

/* ONE Address To MANY Chain Categoreis
 *  AddressCategoriesController
 * This Class is updated with each transaction on the chain with the owner address, chain addresses, and the chainId of the chain
 *
 * */
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "categories")
public class  AddressCategories {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    // A category can have many PostEntity items
    @OneToMany(mappedBy = "category", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private LinkedList<Chain> chainsByChainId;


}
