package com.nguyenvu.backend.service;


import com.nguyenvu.backend.entity.Orders;

import java.util.List;


public interface OrdersService {
    Orders createOrders(Orders orders);
    Orders getOrdersById(Long ordersId);
    List<Orders> getAllOrders();
    Orders updateOrders(Orders orders);
    void deleteOrders(Long ordersId);

}