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

import com.ecommerce.entities.Shipper;
import com.ecommerce.entities.Shipper;
import com.ecommerce.service.ShipperService;

@RestController
@RequestMapping("/shipper")
public class ShipperController {
	@Autowired
	ShipperService shipperService;
	
	@PostMapping("/create")
	public Shipper createShipper(@RequestBody Shipper shipper) {
		 this.shipperService.createShipper(shipper);
		return shipper;		
	}
	@GetMapping("/shipper")
	public List<Shipper> getShipper() {
		return this.shipperService.getShipper();
	}
	@GetMapping("/shipper/{shipper_id}")
	public Shipper getShipperByID(@PathVariable int shipper_id) {
		return this.shipperService.getShipperByID(shipper_id);
	}
	@PostMapping("/shipper")
	public  Shipper addShipper(@RequestBody Shipper shipper) {
		return this.shipperService.addShipper(shipper);
	}
	@DeleteMapping("/shipper/{shipper_id}")
	public void deleteShipper(@PathVariable int shipper_id) {
		this.shipperService.deleteShipper(shipper_id);
		
	}
	@PutMapping("/shipper")
	public Shipper updateShipper(@RequestBody Shipper shipper) {
		return this.shipperService.updateShipper(shipper);
	}
}