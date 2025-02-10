package xyz.cryptomaven.rest.models.dto;

import lombok.Value;

import java.io.Serializable;

/**
 * RoleDto
 */
@Value
public class RoleDto implements Serializable {
    Long id;
    String name;
}
