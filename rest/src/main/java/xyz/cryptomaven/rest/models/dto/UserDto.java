package xyz.cryptomaven.rest.models.dto;

import xyz.cryptomaven.rest.models.Address;
import lombok.*;
import jakarta.persistence.*;
import xyz.cryptomaven.rest.models.Role;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

@Getter
@Setter
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserDto  implements Serializable {


    private int userId; // userId
    private String username;
    private String lastName; // lastName
    private String firstName; // firstName
    private String organizationCode;

    private String dashboardCode; // usergroup
    private String cusUrl; // usergroup
    private int userType;
    private String email;
    private int contactType;
    private int isActive;


    private String id; // id

  private Set<Role> ROLES;
    private List<Address> addresses ;

    public String getPassword() {
        return username; // for/admin
    }
}
