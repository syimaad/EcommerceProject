package com.ecommerce.entities;

import java.sql.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import org.hibernate.annotations.GeneratorType;
@Entity
@Table(name="orders")
public class Orders {
	private int order_id;
	private int invoicenumber;
	private java.sql.Date orderdate;
	
	public java.sql.Date getOrderdate() {
		return orderdate;
	}
	public void setOrderdate(java.sql.Date orderdate) {
		this.orderdate = orderdate;
	}
	private java.sql.Date shipdate;
	private String freight;
private String transactstatus;
	private String errormessage;
	private boolean fulfilled;
	private boolean deleted;
	private boolean paid;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	public int getOrder_id() {
		return order_id;
	}
	public void setOrder_id(int order_id) {
		this.order_id = order_id;
	}
	@Column(name="ordernumber")
	public int getInvoicenumber() {
		return invoicenumber;
	}
	public void setInvoicenumber(int invoicenumber) {
		this.invoicenumber = invoicenumber;
	}
	public java.sql.Date getShipdate() {
		return shipdate;
	}
	public void setShipdate(java.sql.Date shipdate) {
		this.shipdate = shipdate;
	}
	public String getFreight() {
		return freight;
	}
	public void setFreight(String freight) {
		this.freight = freight;
	}
	public String getTransactstatus() {
		return transactstatus;
	}
	public void setTransactstatus(String transactstatus) {
		this.transactstatus = transactstatus;
	}
	@Column(name="errmsg")
	public String getErrormessage() {
		return errormessage;
	}
	public void setErrormessage(String errormessage) {
		this.errormessage = errormessage;
	}
	public boolean isFulfilled() {
		return fulfilled;
	}
	public void setFulfilled(boolean fulfilled) {
		this.fulfilled = fulfilled;
	}
	public boolean isDeleted() {
		return deleted;
	}
	public void setDeleted(boolean deleted) {
		this.deleted = deleted;
	}
	public boolean isPaid() {
		return paid;
	}
	public void setPaid(boolean paid) {
		this.paid = paid;
	}


	
	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Orders(int order_id, int invoicenumber, Date shipdate, String freight, String transactstatus,
			String errormessage, boolean fulfilled, boolean deleted, boolean paid) {
		super();
		this.order_id = order_id;
		this.invoicenumber = invoicenumber;
		this.shipdate = shipdate;
		this.freight = freight;
		this.transactstatus = transactstatus;
		this.errormessage = errormessage;
		this.fulfilled = fulfilled;
		this.deleted = deleted;
		this.paid = paid;
	}
	
	public Orders(Date orderdate) {
		super();
		this.orderdate = orderdate;
	}
	@Override
	public String toString() {
		return "Orders [order_id=" + order_id + ", invoicenumber=" + invoicenumber + ", orderdate=" + orderdate
				+ ", shipdate=" + shipdate + ", freight=" + freight + ", transactstatus=" + transactstatus
				+ ", errormessage=" + errormessage + ", fulfilled=" + fulfilled + ", deleted=" + deleted + ", paid="
				+ paid + "]";
	}
	
	
}





//private payment payments;
//@OneToOne
//@PrimaryKeyJoinColumn
//public payment getPayments() {
//	return payments;
//}
//
//public void setPayments(payment payments) {
//	this.payments = payments;
//}


//private customers customer;
//
//@OneToOne
//@PrimaryKeyJoinColumn
//public customers getCustomer() {
//	return customer;
//}
//public void setCustomer(customers customer) {
//	this.customer = customer;
//}
//

//@OneToOne(mappedBy = "order", cascade=CascadeType.ALL)
//private shipper ship;