package com.ecommerce.service;

import java.util.List;

import com.ecommerce.entities.Category;
import com.ecommerce.entities.Customers;

public interface CustomersService {

	public Customers createCustomers(Customers customers);
	public List<Customers> getCustomers();
	
	public Customers getCustomersByID(int customersid);
	public Customers addCustomers(Customers customers);
	public void deleteCustomers(int customersid);
	Customers updateCustomers(Customers customers);
}
