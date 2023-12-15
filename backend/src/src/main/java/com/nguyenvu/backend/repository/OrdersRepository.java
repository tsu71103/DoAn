package com.nguyenvu.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvu.backend.entity.Orders;




public interface OrdersRepository extends JpaRepository<Orders, Long> {
    
}
