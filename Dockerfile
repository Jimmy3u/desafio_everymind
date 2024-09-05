## Copia os arquivos em um container JDK, e depois compila o programa
FROM eclipse-temurin:17-jdk-alpine AS builder
WORKDIR /tmp/build
COPY src /tmp/build/src
COPY frontend /tmp/build/frontend
COPY mvnw /tmp/build/
COPY .mvn /tmp/build/.mvn
COPY pom.xml /tmp/build/
COPY package-lock.json /tmp/build/
RUN ./mvnw clean package -Pproduction

## Extrai o jar para ser executado no container JRE
FROM builder as prepare-jar
RUN mkdir -p target/dependency
WORKDIR /tmp/build/target/dependency
RUN java -Djarmode=layertools -jar ../*.jar extract 

## Copia os arquivos extraidos do container anterior em um novo
## exclusivo para a execução do aplicativo
FROM eclipse-temurin:17-jre-alpine 
EXPOSE 80
VOLUME /tmp
WORKDIR /app
ARG EXTRACTED=/tmp/build/target/dependency
COPY --from=prepare-jar ${EXTRACTED}/dependencies/ ./
COPY --from=prepare-jar ${EXTRACTED}/spring-boot-loader/ ./
COPY --from=prepare-jar ${EXTRACTED}/snapshot-dependencies/ ./
COPY --from=prepare-jar ${EXTRACTED}/application/ ./
ENTRYPOINT ["java","org.springframework.boot.loader.launch.JarLauncher", "--spring.profiles.active=docker"]
#RUN java org.springframework.boot.loader.launch.JarLauncher