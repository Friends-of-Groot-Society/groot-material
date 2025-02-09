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
@Table(name = "ATTRIBUTE")
public class Attribute {
    @Id
    int attrid;
    String attribute_value;
    String trait_type;



}
