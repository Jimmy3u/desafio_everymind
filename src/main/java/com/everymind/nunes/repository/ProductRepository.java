package com.everymind.nunes.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.everymind.nunes.models.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}
