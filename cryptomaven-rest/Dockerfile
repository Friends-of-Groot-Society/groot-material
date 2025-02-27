FROM openjdk:17-jdk-slim

LABEL maintainer=thomas1.maestas@gmail.com

COPY target/cryptomaven-rest-0.0.1-SNAPSHOT.jar cryptomaven.jar

ENTRYPOINT ["java", "-jar", "cryptomaven.jar"]

