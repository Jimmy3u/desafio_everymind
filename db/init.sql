use nunes;
CREATE TABLE tb_produtos (
    id bigint NOT NULL AUTO_INCREMENT,
    product_price float(30) not null,
    product_desc varchar(255),
    product_name varchar(255) not null,
    primary key (id)
);

