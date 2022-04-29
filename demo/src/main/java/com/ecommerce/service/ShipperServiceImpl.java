package com.ecommerce.service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.ecommerce.entities.Shipper;
import com.ecommerce.repo.Shipperrepo;

@Service
public class ShipperServiceImpl implements ShipperService{
	
	@Autowired
	private Shipperrepo shipperRepo;

	@Override
	public Shipper createShipper(Shipper shipper) {
		// TODO Auto-generated method stub
		shipperRepo.save(shipper);
		return shipper;
	}

	@Override
	public List<Shipper> getShipper() {
		// TODO Auto-generated method stub
		return shipperRepo.findAll();
	}

	@Override
	public Shipper getShipperByID(int shipper_id) {
		// TODO Auto-generated method stub
		return shipperRepo.getOne(shipper_id);
	}

	@Override
	public Shipper addShipper(Shipper shipper) {
		// TODO Auto-generated method stub
		shipperRepo.save(shipper);
		return shipper;
	}

	@Override
	public void deleteShipper(int shipper_id) {
		// TODO Auto-generated method stub
		Shipper ship= shipperRepo.getOne(shipper_id);
		shipperRepo.delete(ship);
	}

	@Override
	public Shipper updateShipper(Shipper shipper) {
		// TODO Auto-generated method stub
		shipperRepo.save(shipper);
		return shipper;
	}
	
}