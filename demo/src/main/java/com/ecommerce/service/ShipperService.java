package com.ecommerce.service;

import java.util.List;

import com.ecommerce.entities.Shipper;

public interface ShipperService {

	Shipper createShipper(Shipper shipper);

	List<Shipper> getShipper();

	Shipper getShipperByID(int shipper_id);

	Shipper addShipper(Shipper shipper);

	void deleteShipper(int shipper_id);

	Shipper updateShipper(Shipper shipper);

}
