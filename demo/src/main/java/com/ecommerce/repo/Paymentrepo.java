package com.ecommerce.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.entities.Category;
import com.ecommerce.entities.Payment;

@Repository
public interface Paymentrepo extends JpaRepository<Payment,Integer> {



}
