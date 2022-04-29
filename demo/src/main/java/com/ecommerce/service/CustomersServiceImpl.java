package com.ecommerce.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.ecommerce.entities.Category;
import com.ecommerce.entities.Customers;
import com.ecommerce.repo.Categoryrepo;
import com.ecommerce.repo.Customersrepo;

@Service
public class CustomersServiceImpl implements CustomersService{
	
	@Autowired
	private Customersrepo customersRepo;

	@Override
	public Customers createCustomers(Customers customers) {
		// TODO Auto-generated method stub
		customersRepo.save(customers);
		return customers;
	}

	@Override
	public List<Customers> getCustomers() {
		// TODO Auto-generated method stub
		return customersRepo.findAll();
	}

	@Override
	public Customers getCustomersByID(int customerid) {
		// TODO Auto-generated method stub
		return customersRepo.getOne(customerid);
	}

	@Override
	public Customers addCustomers(Customers customers) {
		// TODO Auto-generated method stub
		customersRepo.save(customers);
		return customers;
	}

	@Override
	public void deleteCustomers(int customerid) {
		// TODO Auto-generated method stub
		Customers cus=customersRepo.getOne(customerid);
		customersRepo.delete(cus);
	}

	@Override
	public Customers updateCustomers(Customers customers) {
		// TODO Auto-generated method stub
		customersRepo.save(customers);
		return customers;
	}

	

	


	
}
