package com.ecommerce.service;

import java.util.List;

import com.ecommerce.entities.Category;
import com.ecommerce.entities.Orders;


public interface OrdersService {

	public Orders createOrders(Orders orders);

	public List<Orders> getOrders();

	public Orders getOrderByID(int order_id);

	public Orders addOrders(Orders orders);

	public Orders updateOrders(Orders orders);

	public void deleteOrders(int order_id);
}

