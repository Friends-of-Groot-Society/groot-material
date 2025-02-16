package xyz.cryptomaven.rest.models;

import jakarta.persistence.MappedSuperclass;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Version;
import lombok.*;

import java.io.Serializable;
import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Date;

@RequiredArgsConstructor
@MappedSuperclass
public class  AbstractDomainClass implements Serializable {


        @Version
        private Integer version;
        private Date dateCreated;
        private Timestamp timeCreated;
        @Setter
        private LocalDateTime lastUpdated;
        private Timestamp timeUpdated;

        @PreUpdate
        @PrePersist
        public void updateTimeStamps() {
                lastUpdated = LocalDateTime.now();
                if (timeUpdated == null) {
                  timeUpdated = Timestamp.valueOf(LocalDateTime.now());
                }
        }

  public void setDateCreated(java.sql.Date date) {
dateCreated= date;
if (timeCreated == null) {
  timeCreated = Timestamp.valueOf(date.toLocalDate().atStartOfDay());
}
  }

}
