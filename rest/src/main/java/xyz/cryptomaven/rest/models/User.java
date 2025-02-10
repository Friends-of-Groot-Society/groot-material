package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.proxy.HibernateProxy;

import java.time.LocalDateTime;
import java.util.*;


@Getter
@Setter
@Builder
@ToString
@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@Table(name = "USERS")
public class User extends AbstractDomainClass {

    @Id
//    @GeneratedValue(strategy=GenerationType.SEQUENCE, generator = "ID_MAKER" )
//    @SequenceGenerator(name = "ID_MAKER", sequenceName = "ID_MAKER", allocationSize = 1)
    @Column(name="USERID", nullable = false, unique = true)
    private int userId;


    @Column(name="USERNAME", nullable = false )
    private String username;

    @Column(name="PASSWORD")
    private String password;

    @Column(name="LASTNAME")
    private String lastName;

    @Column(name="FIRSTNAME")
    private String firstName;

    @Column(name="USERTYPE")
    private int userType;
    @Column(name="EMAIL", nullable = false )
    private String email;
    @Column(name="ORGANIZATIONCODE")
    private String organizationCode;

    @Column(name="CUSURL")
    private String cusUrl;

    @Column(name="DASHBOARDCODE")
    private String dashboardCode;

    @Column(name="ISACTIVE")
    private int isActive;

    @Column(name="CONTACTTYPE")
    private int contactType; // ContactType contactType
    @Transient
    private String id;

//     parent of many
    @OneToMany(mappedBy = "address", cascade = CascadeType.ALL, orphanRemoval = true)
    @ToString.Exclude
    private List<Address> addresses;

  @ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  @JoinTable(
    name = "users_roles",  // This should match the expected table name
    joinColumns = @JoinColumn(name = "user_id"),
    inverseJoinColumns = @JoinColumn(name = "role_id")
  )
  private Set<Role> roles = new HashSet<>();

//    public User( String username, String password, String lastName, String firstName, int userType, String organizationCode, String email, String cusUrl, String photoPath, String dashboardCode, int isActive, int contactType, String id, List<Address> user) {
//        super();
//
//        this.username = username;
//        this.password = password;
//        this.lastName = lastName;
//        this.firstName = firstName;
//        this.userType = userType;
//        this.groups = groups;
//        this.email = email;
//        this.organizationCode = organizationCode;
//        this.cusUrl = cusUrl;
//        this.dashboardCode = dashboardCode;
//        this.isActive = isActive;
//        this.contactType = contactType;
//        this.id = id;
//    }
//
//    public User() {
//        super();
//    }
//    //////////////////////////////////////
//    // overloaded for getUsersByCArs() call to DB
//    public User(int userId, String username) {
//        super();
//        this.userId = userId;
//        this.username = username;
//    }
//
//    public User(String username, String password) {
//        super();
//        this.username = username;
//        this.password = password;
//    }
//
//    // overloaded for OFFER/ UserType must be multi-purpose
//    public User(int userId, String username, String password, int groups, int userType) {
//        super();
//        this.userId = userId;
//        this.username = username;
//        this.password = password;
//        this.userType = userType;
//    }
//
//
//    //	 overloaded WITHOUT userId  FOR Creating TO ORACLE DB  FOR ORACLE DB INSERTION/RETRIEVAL
//    public User(String username, String password, String lastName, String firstName,
//                 int userType, String organizationCode,String email,  String cusUrl,
//                String dashboardCode,
//                int isActive,
//                int contactType,
//                String id) {
//        super();
//        this.username = username;
//        this.password = password;
//        this.lastName = lastName;
//        this.firstName = firstName;
//        this.userType = userType;
//        this.organizationCode = organizationCode;
//        this.email = email;
//        this.cusUrl = cusUrl;
//        this.dashboardCode = dashboardCode;
//        this.isActive = isActive;
//        this.contactType = contactType;
//        this.id = id;
//    }
//
//    public User(int userId, String username, String password) {
//        super();
//        this.userId = userId;
//        this.username = username;
//        this.password = password;
//    }
//
////     Contstructor for EDIT PROFILE (options available for user)
//public User(  String password, String lastName, String firstName,
//            int groups, int userType, String organizationCode,String email,  String cusUrl,
//            String dashboardCode,
//            int isActive,
//            int contactType, // ContactType contactType
//            String id) {
//    super();
//
//    this.password = password;
//    this.lastName = lastName;
//    this.firstName = firstName;
//    this.userType = userType;
//    this.email = email;
//    this.organizationCode = organizationCode;
//    this.cusUrl = cusUrl;
//    this.dashboardCode = dashboardCode;
//    this.isActive = isActive;
//    this.contactType = contactType;
//    this.id = id;
//}


  @Override
  public final boolean equals(Object o) {
    if (this == o) return true;
    if (o == null) return false;
    Class<?> oEffectiveClass = o instanceof HibernateProxy ? ((HibernateProxy) o).getHibernateLazyInitializer().getPersistentClass() : o.getClass();
    Class<?> thisEffectiveClass = this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass() : this.getClass();
    if (thisEffectiveClass != oEffectiveClass) return false;
    User user = (User) o;
    return false;
  }

  @Override
  public final int hashCode() {
    return this instanceof HibernateProxy ? ((HibernateProxy) this).getHibernateLazyInitializer().getPersistentClass().hashCode() : getClass().hashCode();
  }
}
