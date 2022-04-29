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
import com.ecommerce.entities.Payment;
import com.ecommerce.service.CategoryService;
import com.ecommerce.service.PaymentService;

@RestController
@RequestMapping("/payment")
public class PaymentController {
	@Autowired
	PaymentService paymentService;
	
	@PostMapping("/create")
	public Payment createPayment(@RequestBody Payment payment) {
		 this.paymentService.createPayment(payment);
		return payment;		
	}
	@GetMapping("/payment")
	public List<Payment> getPayment() {
		return this.paymentService.getPayment();
	}
	@GetMapping("/payment/{payment_id}")
	public Payment getPaymentByID(@PathVariable int payment_id) {
		return this.paymentService.getPaymentByID(payment_id);
	}
	@PostMapping("/payment")
	public  Payment addpayment(@RequestBody Payment payment) {
		return this.paymentService.addPayment(payment);
	}
	@DeleteMapping("/payment/{payment_id}")
	public void deletePayment(@PathVariable int payment_id) {
		this.paymentService.deletePayment(payment_id);
		
	}
	@PutMapping("/payment")
	public Payment updatePayment(@RequestBody Payment payment) {
		return this.paymentService.updatePayment(payment);
	}

}