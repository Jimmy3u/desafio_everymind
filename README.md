# Everymind - Nunes Sports

Um CRUD simples fullstack utilizando Springboot e React com a framework Hilia seguindo os requisitos a seguir : 

```
## Os requisitos necessários para a entrega são:
- Ter uma base de dados com uma tabela produtos com os campos:
    - Nome do produto
    - Código do produto
    - Descrição do produto
    - Preço do produto
- Criar uma página web na tecnologia de sua preferência para o CRUD de produtos.
- Nessa página o usuário deverá ter a habilidade de exibir os produtos em uma tabela, criar, editar e deletar produtos que estão salvos na base.
- Todas as ações na página deverão refletir no banco de dados
```

## Tecnologias Utilizadas
- SpringBoot - https://spring.io/
- Hilia - https://hilla.dev/
- Java 17
- Hibernate
- H2 (No modo de Desenvolvimento) 
- MariaDB
- Docker

A aplicação pode ser executada em modo de desenvolvimento(Assim utilizando a database em memoria H2) copiando esse repositorio e utilizando o comando:

``` 
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev - MacOs ou Linux
mvnw spring-boot:run -Dspring-boot.run.profiles=dev- Windows
```
* OBS : Caso ja tenha o node instalado no PC, principalmente a versão 9.2.0 do NPM a aplicação não sera executada, para corrigir isso a documentação da framework sugere:
  - Atualizar o npm seguindo o comando : ``` npm install -g npm@latest``` 
  - Executar o comando do maven 
  ```./mvnw com.github.eirslett:frontend-maven-plugin:1.10.0:install-node-and-npm -DnodeVersion="v20.10.0"``` 
   para que ele instale a versão correta do node para execução da aplicação
  
- Voce pode tambem rodar utilizando o Docker Compose com o comando, compilando o aplicativo e rodando junto de uma instancia de um container MariaDB.
```
Docker compose up
```
### Apos isso a aplicação estara rodando na porta 8080 caso em modo de desenvolvimento ou na porta 80 caso seja executada pelo docker.