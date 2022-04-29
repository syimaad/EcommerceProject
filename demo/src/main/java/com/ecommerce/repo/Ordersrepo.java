package com.ecommerce.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


import com.ecommerce.entities.Orders;

@Repository
public interface Ordersrepo extends JpaRepository<Orders,Integer> {

}
