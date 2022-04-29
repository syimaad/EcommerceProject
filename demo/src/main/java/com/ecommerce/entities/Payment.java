package com.ecommerce.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;
import org.hibernate.annotations.ValueGenerationType;

@Entity
@Table(name="payment")
public class Payment {
	private int payment_id;
	private String payment_type;
	private Boolean allowed;
	public Payment(int payment_id, String payment_type, Boolean allowed) {
		super();
		this.payment_id = payment_id;
		this.payment_type = payment_type;
		this.allowed = allowed;
	}
	@Override
	public String toString() {
		return "payment [payment_id=" + payment_id + ", payment_type=" + payment_type + ", allowed=" + allowed + "]";
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getPayment_id() {
		return payment_id;
	}
	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}
	public String getPayment_type() {
		return payment_type;
	}
	public void setPayment_type(String payment_type) {
		this.payment_type = payment_type;
	}
	public Boolean getAllowed() {
		return allowed;
	}
	public void setAllowed(Boolean allowed) {
		this.allowed = allowed;
	}
	public Payment() {
		super();
	}
	
}
