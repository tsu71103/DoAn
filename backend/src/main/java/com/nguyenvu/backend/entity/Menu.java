package com.nguyenvu.backend.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
// import java.util.List;
// import com.fasterxml.jackson.annotation.JsonIgnore;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity


public class Menu    {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
   private Long id;
   private String menu;
   private String menu_item;
   private String href;
    //
}
