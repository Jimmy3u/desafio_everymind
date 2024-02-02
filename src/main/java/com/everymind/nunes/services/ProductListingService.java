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

    public record ProductRecord(
            Long id,
            @NotNull String productName,
            String productDesc,
            @NotNull double productPrice) {
    }

    private ProductRecord toProductRecord(Product p) {
        return new ProductRecord(p.getProductID(),
                p.getProductName(),
                p.getProductDesc(),
                p.getProductPrice());
    }

    public List<ProductRecord> findAllProducts() {
        return productRepository.findAll().stream()
                .map(this::toProductRecord).toList();
    }

    public ProductRecord save(ProductRecord product) {
        var ProductObject = productRepository.findById(product.id).orElseThrow();

        ProductObject.setProductName(product.productName);
        ProductObject.setProductDesc(product.productDesc);
        ProductObject.setProductPrice(product.productPrice);

        var saved = productRepository.save(ProductObject);

        return toProductRecord(saved);
    }
}
