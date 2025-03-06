package xyz.cryptomaven.rest.models.dto;


import xyz.cryptomaven.rest.models.Metadata;
import lombok.Data;

import java.io.Serializable;
import java.util.List;

/**
 * A Dto for the {@link Metadata} entity
 */
@Data
public class MetadataDto implements Serializable {
  private final int metadataId;
  private final String name;
  private final String description;
  private final String image;
  private String external_url;
  private final List<AttributeDto> attributes;
}
