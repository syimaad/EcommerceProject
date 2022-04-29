
package com.ecommerce.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.ecommerce.entities.Orders;
import com.ecommerce.repo.Ordersrepo;

@Service
public class OrdersServiceImpl implements OrdersService{
	
	@Autowired
	private Ordersrepo ordersRepo;

	@Override
	public Orders createOrders(Orders orders) {
		// TODO Auto-generated method stub
		ordersRepo.save(orders);
		return orders;
	}

	@Override
	public List<Orders> getOrders() {
		// TODO Auto-generated method stub
		return ordersRepo.findAll();
	}


	@Override
	public void deleteOrders(int order_id) {
		// TODO Auto-generated method stub
		Orders ord=ordersRepo.getOne(order_id);
		ordersRepo.delete(ord);
	}

	@Override
	public Orders updateOrders(Orders orders) {
		// TODO Auto-generated method stub
		ordersRepo.save(orders);
		return orders;
	}

	@Override
	public Orders getOrderByID(int order_id) {
		// TODO Auto-generated method stub
		return ordersRepo.getOne(order_id);
	}

	@Override
	public Orders addOrders(Orders orders) {
		// TODO Auto-generated method stub
		ordersRepo.save(orders);
		return orders;
	}


	
}
