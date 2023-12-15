package com.nguyenvu.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;
// import com.fasterxml.jackson.annotation.JsonIgnore;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity


public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String fullname;
   private String email;
   private String phone_number;
   private String address;
   private String password;
   private Date created_at;
   private Date update_at;
   private int  deleted;

   @ManyToOne
   private Role role;

   @OneToMany(mappedBy = "user")
   private List<Token> token;

    //
}
