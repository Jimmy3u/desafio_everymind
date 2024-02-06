# Everymind - Nunes Sports

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

A aplicação foi feita utilizando SpringBoot e a framework Hilia(React). 
- pode ser executada em modo de desenvolvimento(Assim utilizando a database em memoria H2) copiando esse repositorio e utilizando o comando:

``` 
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev - MacOs ou Linux
mvnw spring-boot:run -Dspring-boot.run.profiles=dev- Windows
```