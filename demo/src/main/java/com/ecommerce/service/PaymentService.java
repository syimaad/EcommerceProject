package com.ecommerce.service;

import java.util.List;

import com.ecommerce.entities.Category;
import com.ecommerce.entities.Payment;

public interface PaymentService {

	public Payment createPayment(Payment payment);
	public List<Payment> getPayment();
	
	public Payment getPaymentByID(int payment_id);
	public Payment addPayment(Payment payment);
	public void deletePayment(int payment_id);
	Payment updatePayment(Payment payment);
}
