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
import com.ecommerce.service.CategoryService;

@RestController
@RequestMapping("/category")
public class CategoryController {
	@Autowired
	CategoryService categoryService;
	
	@PostMapping("/create")
	public Category createCategory(@RequestBody Category category) {
		 this.categoryService.createCategory(category);
		return category;		
	}
	@GetMapping("/category")
	public List<Category> geCategories() {
		return this.categoryService.getCategories();
	}
	@GetMapping("/category/{categoryid}")
	public Category getCategoryByID(@PathVariable int categoryid) {
		return this.categoryService.getCategoryByID(categoryid);
	}
	@PostMapping("/category")
	public  Category addCategory(@RequestBody Category category) {
		return this.categoryService.addCategory(category);
	}
	@DeleteMapping("/category/{categoryid}")
	public void deleteCategory(@PathVariable int categoryid) {
		this.categoryService.deleteCategory(categoryid);
		
	}
	@PutMapping("/category")
	public Category updateCategory(@RequestBody Category category) {
		return this.categoryService.updateCategory(category);
	}

}