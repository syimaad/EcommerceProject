package com.ecommerce.repo;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecommerce.entities.Category;

@Repository
public interface Categoryrepo extends JpaRepository<Category,Integer> {



}
