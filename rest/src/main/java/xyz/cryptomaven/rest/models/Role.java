package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;

import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "ROLES")
public class Role extends AbstractDomainClass {
  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  Integer id;
  private String name;

  @ManyToMany(fetch = FetchType.EAGER)
//    @JoinTable(name = "USERS_ROLES", joinColumns = @JoinColumn(name = "id", referencedColumnName = "id"), inverseJoinColumns = @JoinColumn(name = "userid", referencedColumnName = "id"))
  private final List<User> users = new ArrayList<>();
}
