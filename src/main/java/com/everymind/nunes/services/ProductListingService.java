package com.everymind.nunes.services;

import java.util.List;

import com.everymind.nunes.models.Product;
import com.everymind.nunes.repository.ProductRepository;
import jakarta.validation.constraints.NotNull;
import com.vaadin.flow.server.auth.AnonymousAllowed;

import dev.hilla.BrowserCallable;

@AnonymousAllowed
@BrowserCallable
public class ProductListingService {
    private final ProductRepository productRepository;

    public ProductListingService(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }
    /*
     * Definindo o record do produto para ser utilizado no frontEnd
     */
    public record ProductRecord(
            Long id,
            @NotNull String productName,
            String productDesc,
            @NotNull double productPrice) {
    }
    /*
     * Metodo para transformar objetos de produto em Records
     */
    private ProductRecord toProductRecord(Product p) {
        return new ProductRecord(p.getId(),
                p.getProductName(),
                p.getProductDesc(),
                p.getProductPrice());
    }

    public List<ProductRecord> findAllProducts() {
        return productRepository.findAll().stream()
                .map(this::toProductRecord).toList();
    }

    public ProductRecord updateProduct(ProductRecord product) {
        /* 
         * Cria uma variavel p, sem tipo definido para armazenar o produto a ser alterado
         * e guarda a resposta do metodo save para ser retornada como um record.
         */
        var p = productRepository.findById(product.id).orElseThrow();

        p.setProductName(product.productName);
        p.setProductDesc(product.productDesc);
        p.setProductPrice(product.productPrice);

        var saved = productRepository.save(p);

        return toProductRecord(saved);
    }

    public ProductRecord saveProduct(ProductRecord product) {
        Product p = new Product();

        p.setProductName(product.productName);
        p.setProductDesc(product.productDesc);
        p.setProductPrice(product.productPrice);

        var saved = productRepository.save(p);

        return toProductRecord(saved);
    }

    public ProductRecord deleteProduct(Long id){
        var p = productRepository.findById(id).orElseThrow();
        productRepository.delete(p);
        return toProductRecord(p);
    }
}
