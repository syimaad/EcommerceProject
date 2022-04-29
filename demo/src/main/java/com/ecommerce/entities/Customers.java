package com.ecommerce.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="customers")
public class Customers {
	
//	@OneToOne(mappedBy = "customer", cascade=CascadeType.ALL)
//	public orders getOrder() {
//		return order;
//	}
//	public void setOrder(orders order) {
//		this.order = order;
//	}
	private int customerid;
	private String customername;
	private String address;
	private String password;
	private String billingaddress;
	//private orders order;
	public Customers(int customerid, String customername, String address, String password, String billingaddress) {
		super();
		this.customerid = customerid;
		this.customername = customername;
		this.address = address;
		this.password = password;
		this.billingaddress = billingaddress;
	}
	@Override
	public String toString() {
		return "customers [customerid=" + customerid + ", customername=" + customername + ", address=" + address
				+ ", password=" + password + ", billingaddress=" + billingaddress + "]";
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getCustomerid() {
		return customerid;
	}
	public void setCustomerid(int customerid) {
		this.customerid = customerid;
	}
	public String getCustomername() {
		return customername;
	}
	public void setCustomername(String customername) {
		this.customername = customername;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getBillingaddress() {
		return billingaddress;
	}
	public void setBillingaddress(String billingaddress) {
		this.billingaddress = billingaddress;
	}
	public Customers() {
		super();
	}
}
