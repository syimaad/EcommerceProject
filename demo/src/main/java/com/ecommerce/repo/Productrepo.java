package com.ecommerce.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.entities.Product;

@Repository
public interface Productrepo extends JpaRepository<Product,Integer> {

}