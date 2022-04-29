package com.ecommerce.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity
@Table(name="shipper")
public class Shipper {
	private int shipper_id;
	private long phone;
	private String companyname;
//	private orders order;
//	
//	@OneToOne
//	@PrimaryKeyJoinColumn
//	public orders getOrder() {
//		return order;
//	}
//	public void setOrder(orders order) {
//		this.order = order;
//	}
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getShipper_id() {
		return shipper_id;
	}
	public void setShipper_id(int shipper_id) {
		this.shipper_id = shipper_id;
	}
	public long getPhone() {
		return phone;
	}
	public void setPhone(long phone) {
		this.phone = phone;
	}
	public String getCompanyname() {
		return companyname;
	}
	public void setCompanyname(String companyname) {
		this.companyname = companyname;
	}
	
	
}
