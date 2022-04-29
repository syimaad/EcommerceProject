package com.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecommerce.entities.Category;
import com.ecommerce.entities.Customers;
import com.ecommerce.service.CategoryService;
import com.ecommerce.service.CustomersService;

@RestController
@RequestMapping("/customers")
public class CustomersController {
	@Autowired
	CustomersService customersService;
	
	@PostMapping("/create")
	public Customers createCustomer(@RequestBody Customers customers) {
		 this.customersService.createCustomers(customers);
		return customers;		
	}
	@GetMapping("/customers")
	public List<Customers> geCustomers() {
		return this.customersService.getCustomers();
	}
	@GetMapping("/customers/{customerid}")
	public Customers getCustomersByID(@PathVariable int customerid) {
		return this.customersService.getCustomersByID(customerid);
	}
	@PostMapping("/customers")
	public  Customers addCustomers(@RequestBody Customers customers) {
		return this.customersService.addCustomers(customers);
	}
	@DeleteMapping("/customers/{customersid}")
	public void deleteCustomers(@PathVariable int customerid) {
		this.customersService.deleteCustomers(customerid);
		
	}
	@PutMapping("/customers")
	public Customers updateCustomers(@RequestBody Customers customers) {
		return this.customersService.updateCustomers(customers);
	}

}