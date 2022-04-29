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
import com.ecommerce.entities.Orders;
import com.ecommerce.service.OrdersService;

@RestController
@RequestMapping("/orders")
public class OrdersController {
	@Autowired
	OrdersService ordersService;
	
	@PostMapping("/create")
	public Orders createOrders(@RequestBody Orders orders) {
		 this.ordersService.createOrders(orders);
		return orders;		
	}
	@GetMapping("/orders")
	public List<Orders> getOrders() {
		return this.ordersService.getOrders();
	}
	@GetMapping("/orders/{order_id}")
	public Orders getOrdersByID(@PathVariable int order_id) {
		return this.ordersService.getOrderByID(order_id);
	}
	@PostMapping("/orders")
	public  Orders addOrders(@RequestBody Orders orders) {
		return this.ordersService.addOrders(orders);
	}
	@DeleteMapping("/orders/{order_id}")
	public void deleteOrders(@PathVariable int order_id) {
		this.ordersService.deleteOrders(order_id);
		
	}
	@PutMapping("/orders")
	public Orders updateOrders(@RequestBody Orders orders) {
		return this.ordersService.updateOrders(orders);
	}
}