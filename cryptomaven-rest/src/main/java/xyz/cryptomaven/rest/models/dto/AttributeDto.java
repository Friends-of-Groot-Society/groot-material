package xyz.cryptomaven.rest.models.dto;

import xyz.cryptomaven.rest.models.Attribute;
import lombok.Data;

import java.io.Serializable;

/**
 * A Dto for the {@link Attribute} entity
 */
@Data
public class AttributeDto implements Serializable {
    private final int attrid;
    private final String attribute_value;
    private final String trait_type;

}
