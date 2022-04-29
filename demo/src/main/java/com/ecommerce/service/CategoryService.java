package com.ecommerce.service;

import java.util.List;

import com.ecommerce.entities.Category;

public interface CategoryService {

	public Category createCategory(Category category);
	public List<Category> getCategories();
	
	public Category getCategoryByID(int categoryid);
	public Category addCategory(Category category);
	public void deleteCategory(int categoryid);
	Category updateCategory(Category category);
}
