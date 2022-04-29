package com.ecommerce.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.ecommerce.entities.Category;
import com.ecommerce.entities.Payment;
import com.ecommerce.repo.Categoryrepo;
import com.ecommerce.repo.Paymentrepo;

@Service
public class PaymentServiceImpl implements PaymentService{
	
	@Autowired
	private Paymentrepo paymentRepo;

	@Override
	public Payment createPayment(Payment payment) {
		// TODO Auto-generated method stub
		paymentRepo.save(payment);
		return payment;
	}

	@Override
	public List<Payment> getPayment() {
		// TODO Auto-generated method stub
		return paymentRepo.findAll();
	}

	@Override
	public Payment getPaymentByID(int payment_id) {
		// TODO Auto-generated method stub
		return paymentRepo.getOne(payment_id);
	}

	@Override
	public Payment addPayment(Payment payment) {
		// TODO Auto-generated method stub
		paymentRepo.save(payment);
		return payment;
	}

	@Override
	public void deletePayment(int payment_id) {
		// TODO Auto-generated method stub
		Payment pay=paymentRepo.getOne(payment_id);
		paymentRepo.delete(pay);
	}

	@Override
	public Payment updatePayment(Payment payment) {
		// TODO Auto-generated method stub
		paymentRepo.save(payment);
		return payment;
	}


	
}
