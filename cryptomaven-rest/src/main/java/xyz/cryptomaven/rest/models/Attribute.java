package xyz.cryptomaven.rest.models;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import jakarta.persistence.*;
import lombok.RequiredArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Table(name = "attribute")
public class Attribute  extends AbstractDomainClass {
  private static final long serialVersionUID = 1L;
    @Id
    Long attrid;
    String attribute_value;
    String trait_type;



}
