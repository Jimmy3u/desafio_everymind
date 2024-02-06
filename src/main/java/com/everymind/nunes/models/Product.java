package com.everymind.nunes.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

@Entity
@Table(name = "tb_produtos")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @NotNull
    @NotBlank
    private String productName;
    private String productDesc;
    @NotNull
    private Double productPrice;

    public Product() {
    }

    public long getId() {
        return id;
    }

    public void setId(long productID) {
        this.id = productID;
    }

    public String getProductName() {
        return productName;
    }

    public void setProductName(String productName) {
        this.productName = productName;
    }

    public String getProductDesc() {
        return productDesc;
    }

    public void setProductDesc(String productDesc) {
        this.productDesc = productDesc;
    }

    public Double getProductPrice() {
        return productPrice;
    }

    public void setProductPrice(Double productPrice) {
        this.productPrice = productPrice;
    }

    @Override
    public String toString() {
        return "Product [productID=" + id + ", productName=" + productName + ", productDesc=" + productDesc
                + ", productPrice=" + productPrice + "]";
    }

}
