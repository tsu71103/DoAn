




package com.nguyenvu.backend.service.impl;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.nguyenvu.backend.entity.Orders;
import com.nguyenvu.backend.repository.OrdersRepository;
import com.nguyenvu.backend.service.OrdersService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor

public class OrdersServiceImpl implements OrdersService {
    private OrdersRepository galleryRepository;

    @Override
    public Orders createOrders(Orders gallery) {
        return galleryRepository.save(gallery);
    }

    @Override
    public Orders getOrdersById(Long galleryId){
        Optional<Orders> optionalOrders = galleryRepository.findById(galleryId);
        return optionalOrders.get();
    }

     @Override
    public List<Orders> getAllOrders() {
        return galleryRepository.findAll();
    }
@Override
      public Orders updateOrders(Orders Orders){
        Orders existingOrders = galleryRepository.findById(Orders.getId()).get();
        existingOrders.setFullname(Orders.getFullname());
         existingOrders.setEmail(Orders.getEmail());
         existingOrders.setPhone_number(Orders.getPhone_number());
         existingOrders.setOrder_date(Orders.getOrder_date());
         existingOrders.setStatus(Orders.getStatus());
        existingOrders.setTotal_money(Orders.getTotal_money());
        existingOrders.setUser(Orders.getUser());
        existingOrders.setOrderDetails(Orders.getOrderDetails());
        Orders updateOrders = galleryRepository.save(existingOrders);
        return updateOrders;
    }

    @Override
    public void deleteOrders(Long galleryId){
        galleryRepository.deleteById(galleryId);
    }

}
