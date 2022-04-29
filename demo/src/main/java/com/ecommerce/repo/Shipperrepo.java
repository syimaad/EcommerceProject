package com.ecommerce.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.entities.Shipper;

@Repository
public interface Shipperrepo extends JpaRepository<Shipper,Integer> {



}