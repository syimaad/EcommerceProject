package com.ecommerce.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="product")
public class Product {
	private int product_id;
	
	private String sku;
	private int vendorproductid;
	private String productname;
	private String productdescription;
	private int quantityperunit;
	private int unitprice;
	private int size;
	private String colour;
	private int discount;
	private int unitweight;
	private int unitsinstock;
	private int unitsonorder;
	private boolean productavailable;
	
	private Category category;
	
	
	@ManyToOne
	@JoinColumn(name="categoryid")
	public Category getCategory() {
		return category;
	}
	public void setCategory(Category category) {
		this.category = category;
	}
	public Product(int product_id, String sku, int vendorproductid, String productname,
			String productdescription, int quantityperunit, int unitprice, int size, String colour, int discount,
			int unitweight, int unitsinstock, int unitsonorder, boolean productavailable) {
		super();
		this.product_id = product_id;
		
		this.sku = sku;
		this.vendorproductid = vendorproductid;
		this.productname = productname;
		this.productdescription = productdescription;
		this.quantityperunit = quantityperunit;
		this.unitprice = unitprice;
		this.size = size;
		this.colour = colour;
		this.discount = discount;
		this.unitweight = unitweight;
		this.unitsinstock = unitsinstock;
		this.unitsonorder = unitsonorder;
		this.productavailable = productavailable;
		
	}
	public Product() {
		super();
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getProduct_id() {
		return product_id;
	}
	public void setProduct_id(int product_id) {
		this.product_id = product_id;
	}
	
	
	public String getSku() {
		return sku;
	}
	public void setSku(String sku) {
		this.sku = sku;
	}
	public int getVendorproductid() {
		return vendorproductid;
	}
	public void setVendorproductid(int vendorproductid) {
		this.vendorproductid = vendorproductid;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getProductdescription() {
		return productdescription;
	}
	public void setProductdescription(String productdescription) {
		this.productdescription = productdescription;
	}
	public int getQuantityperunit() {
		return quantityperunit;
	}
	public void setQuantityperunit(int quantityperunit) {
		this.quantityperunit = quantityperunit;
	}
	public int getUnitprice() {
		return unitprice;
	}
	public void setUnitprice(int unitprice) {
		this.unitprice = unitprice;
	}
	public int getSize() {
		return size;
	}
	public void setSize(int size) {
		this.size = size;
	}
	public String getColour() {
		return colour;
	}
	public void setColour(String colour) {
		this.colour = colour;
	}
	public int getDiscount() {
		return discount;
	}
	public void setDiscount(int discount) {
		this.discount = discount;
	}
	public int getUnitweight() {
		return unitweight;
	}
	public void setUnitweight(int unitweight) {
		this.unitweight = unitweight;
	}
	public int getUnitsinstock() {
		return unitsinstock;
	}
	public void setUnitsinstock(int unitsinstock) {
		this.unitsinstock = unitsinstock;
	}
	public int getUnitsonorder() {
		return unitsonorder;
	}
	public void setUnitsonorder(int unitsonorder) {
		this.unitsonorder = unitsonorder;
	}
	public boolean isProductavailable() {
		return productavailable;
	}
	public void setProductavailable(boolean productavailable) {
		this.productavailable = productavailable;
	}
	@Override
	public String toString() {
		return "Product [product_id=" + product_id + ", sku=" + sku + ", vendorproductid=" + vendorproductid
				+ ", productname=" + productname + ", productdescription=" + productdescription + ", quantityperunit="
				+ quantityperunit + ", unitprice=" + unitprice + ", size=" + size + ", colour=" + colour + ", discount="
				+ discount + ", unitweight=" + unitweight + ", unitsinstock=" + unitsinstock + ", unitsonorder="
				+ unitsonorder + ", productavailable=" + productavailable + ", category=" + category + "]";
	}
	
}