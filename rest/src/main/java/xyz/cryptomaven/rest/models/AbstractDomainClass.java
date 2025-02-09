package xyz.cryptomaven.rest.models;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Data;

import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;

@Data
public class AbstractDomainClass implements Serializable {


        @Version
        private Integer version;
        private Date dateCreated;
        private LocalDateTime lastUpdated;

        @PreUpdate
        @PrePersist
        public void updateTimeStamps() {
                lastUpdated = LocalDateTime.now();
                if (dateCreated == null) {
                        dateCreated = new Date();
                }
        }
}
