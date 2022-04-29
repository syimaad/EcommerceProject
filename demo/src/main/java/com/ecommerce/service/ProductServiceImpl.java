package com.ecommerce.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.ecommerce.entities.Product;
import com.ecommerce.exception.ProductNotFoundException;
import com.ecommerce.repo.Productrepo;

@Service
public class ProductServiceImpl implements ProductService{
	
	@Autowired
	private Productrepo productRepo;

	@Override
	public Product createProduct(Product product) {
		// TODO Auto-generated method stub
		productRepo.save(product);
		return product;
	}

//	@Override
//	public List<Product> getProduct() {
//		// TODO Auto-generated method stub
//		return productRepo.findAll();
//	}

//	@Override
//	public Product getProductByID(int product_id) {
//		// TODO Auto-generated method stub
//		return productRepo.getOne(product_id);
//	}

	@Override
	public Product addProduct(Product product) {
		// TODO Auto-generated method stub
		productRepo.save(product);
		return product;
	}

	@Override
	public void deleteProduct(int product_id) {
		// TODO Auto-generated method stub
		Product prod= productRepo.getOne(product_id);
		productRepo.delete(prod);
	}

	@Override
	public Product updateProduct(Product product) {
		// TODO Auto-generated method stub
		productRepo.save(product);
		return product;
	}

	@Override
	public List<Product> getAllProduct() throws ProductNotFoundException {
		// TODO Auto-generated method stub
		return productRepo.findAll();
	}
	   @Override
	    public Product getProductByID(int product_id) throws ProductNotFoundException {
	        Product product;
	        if (productRepo.findById(product_id).isEmpty()) {
	            throw new ProductNotFoundException();
	        } else {
	            product = productRepo.findById(product_id).get();
	        }
	        return productRepo.getOne(product_id);
	    }

	
}