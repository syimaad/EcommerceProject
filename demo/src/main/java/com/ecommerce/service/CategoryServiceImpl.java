package com.ecommerce.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.ecommerce.entities.Category;
import com.ecommerce.repo.Categoryrepo;

@Service
public class CategoryServiceImpl implements CategoryService{
	
	@Autowired
	private Categoryrepo categoryRepo;

	@Override
	public Category createCategory(Category category) {
		// TODO Auto-generated method stub
		categoryRepo.save(category);
		return category;
	}

	@Override
	public List<Category> getCategories() {
		// TODO Auto-generated method stub
		return categoryRepo.findAll();
	}

	@Override
	public Category getCategoryByID(int categoryid) {
		// TODO Auto-generated method stub
		return categoryRepo.getOne(categoryid);
	}

	@Override
	public Category addCategory(Category category) {
		// TODO Auto-generated method stub
		categoryRepo.save(category);
		return category;
	}

	@Override
	public void deleteCategory(int categoryid) {
		// TODO Auto-generated method stub
		Category cat=categoryRepo.getOne(categoryid);
		categoryRepo.delete(cat);
	}

	@Override
	public Category updateCategory(Category category) {
		// TODO Auto-generated method stub
		categoryRepo.save(category);
		return category;
	}


	
}
