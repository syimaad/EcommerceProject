package com.ecommerce.entities;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="category")
public class Category {
	private int categoryid;
	private String categoryname;
	private String description;
	private String active;
	private Set<Product> product;
	
	@OneToMany(mappedBy="category", cascade = CascadeType.ALL)
	public Set<Product> getProdduct() {
		return product;
	}
	public void setProdduct(Set<Product> product) {
		this.product = product;
	}
	public Category(int categoryid, String categoryname, String description, String active) {
		super();
		this.categoryid = categoryid;
		this.categoryname = categoryname;
		this.description = description;
		this.active = active;
	}
	public Category() {
		super();
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	public int getCategoryid() {
		return categoryid;
	}
	public void setCategoryid(int categoryid) {
		this.categoryid = categoryid;
	}
	public String getCategoryname() {
		return categoryname;
	}
	public void setCategoryname(String categoryname) {
		this.categoryname = categoryname;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getActive() {
		return active;
	}
	public void setActive(String active) {
		this.active = active;
	}
	@Override
	public String toString() {
		return "category [categoryid=" + categoryid + ", categoryname=" + categoryname + ", description=" + description
				+ ", active=" + active + "]";
	}
	
	
}
