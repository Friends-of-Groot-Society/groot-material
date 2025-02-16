package xyz.cryptomaven.rest.models.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddressCategoriesDto {
    private Long id;
    private String name;
    private String description;
    private  String  urls;
}
