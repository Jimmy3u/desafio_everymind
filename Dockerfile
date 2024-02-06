FROM eclipse-temurin:17-jdk-alpine
COPY src src
COPY frontend frontend
COPY mvnw .
COPY .mvn .mvn
COPY pom.xml .
COPY package-lock.json .
EXPOSE 8080
ENTRYPOINT [ "./mvnw", "spring-boot:run", "-Dspring-boot.run.profiles=prod"]