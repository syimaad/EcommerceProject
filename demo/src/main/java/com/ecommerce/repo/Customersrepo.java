package com.ecommerce.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.entities.Category;
import com.ecommerce.entities.Customers;

@Repository
public interface Customersrepo extends JpaRepository<Customers,Integer> {



}
