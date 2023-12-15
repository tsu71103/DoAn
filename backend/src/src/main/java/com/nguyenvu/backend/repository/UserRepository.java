package com.nguyenvu.backend.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.nguyenvu.backend.entity.User;




public interface UserRepository extends JpaRepository<User, Long> {
    
}
