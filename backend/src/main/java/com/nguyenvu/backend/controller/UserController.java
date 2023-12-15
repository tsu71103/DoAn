package com.nguyenvu.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.nguyenvu.backend.entity.User;
import com.nguyenvu.backend.repository.UserRepository;
import com.nguyenvu.backend.service.UserService;

import jakarta.servlet.http.HttpServletRequest;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders= "Content-Range")

@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    private UserService productService;
    // Create User REST API

@PostMapping

public ResponseEntity<User> createUser(@RequestBody User User) {
User savedUser = productService.createUser(User);
return new ResponseEntity<>(savedUser, HttpStatus.CREATED);


}
// Get User by id REST API

// http://1ocalhost:8080/api/Users/1

@GetMapping("{id}")

public ResponseEntity<User> getUserById(@PathVariable("id") Long UserId) {
User User = productService.getUserById(UserId);
return new ResponseEntity<>(User, HttpStatus.OK);
}
// Get All Users REST API

// http://1ocalhost:8080/api/Users

@GetMapping

public ResponseEntity<List<User>> getAllUsers() {
List<User> Users = productService.getAllUsers();
HttpHeaders headers = new HttpHeaders();
headers.add("Content-Range", "item 0-"+ Users.size()+"/"+Users.size());
return ResponseEntity.ok().headers(headers).body(Users);



}
// Update User REST API
@PutMapping("{id}")
// http://localhost:8080/api/Users/1
public ResponseEntity<User> updateUser(@PathVariable("id") Long UserId,
@RequestBody User User) {
User.setId(UserId);
User updatedUser = productService.updateUser(User);
return new ResponseEntity<>(updatedUser, HttpStatus.OK);
}
// Delete User REST API

@DeleteMapping("{id}")

public ResponseEntity<String> deleteUser(@PathVariable("id") Long UserId) {
productService.deleteUser(UserId);
return new ResponseEntity<>("User successfully deleted!", HttpStatus.OK);
}
@PostMapping("/register")
public ResponseEntity register(@RequestBody User user) {
    userRepository.save(user);

    
    return new ResponseEntity("Dang ky thanh cong",HttpStatus.OK);
}
@PostMapping("/login")
public ResponseEntity<?> login(@RequestBody User user) {
    Optional<User> existingUser = userRepository.findByFullnameAndPassword(user.getFullname(), user.getPassword());

    if (existingUser.isPresent()) {
        return ResponseEntity.ok("Login successful");
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login failed");
    }
}
   @PostMapping("/logout")
    public ResponseEntity logout(HttpServletRequest request) {
        // Thực hiện logic logout ở đây
        // Ví dụ: invalidate session
        request.getSession().invalidate();
        return ResponseEntity.ok().build();
    }


    
}