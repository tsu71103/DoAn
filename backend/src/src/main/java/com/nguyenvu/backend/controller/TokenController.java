package com.nguyenvu.backend.controller;

import lombok.AllArgsConstructor;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import com.nguyenvu.backend.entity.Token;

import com.nguyenvu.backend.service.TokenService;
import java.util.List;

@RestController
@AllArgsConstructor
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"}, exposedHeaders= "Content-Range")

@RequestMapping("api/tokens")
public class TokenController{
    private TokenService productService;
    // Create Token REST API

@PostMapping

public ResponseEntity<Token> createToken(@RequestBody Token Token) {
Token savedToken = productService.createToken(Token);
return new ResponseEntity<>(savedToken, HttpStatus.CREATED);


}
// Get Token by id REST API

// http://1ocalhost:8080/api/Tokens/1

@GetMapping("{id}")

public ResponseEntity<Token> getTokenById(@PathVariable("id") Long TokenId) {
Token Token = productService.getTokenById(TokenId);
return new ResponseEntity<>(Token, HttpStatus.OK);
}
// Get All Tokens REST API

// http://1ocalhost:8080/api/Tokens

@GetMapping

public ResponseEntity<List<Token>> getAllTokens() {
List<Token> Tokens = productService.getAllTokens();
HttpHeaders headers = new HttpHeaders();
headers.add("Content-Range", "item 0-"+ Tokens.size()+"/"+Tokens.size());
return ResponseEntity.ok().headers(headers).body(Tokens);



}
// Update Token REST API
@PutMapping("{id}")
// http://localhost:8080/api/Tokens/1
public ResponseEntity<Token> updateToken(@PathVariable("id") Long TokenId,
@RequestBody Token Token) {
Token.setId(TokenId);
Token updatedToken = productService.updateToken(Token);
return new ResponseEntity<>(updatedToken, HttpStatus.OK);
}
// Delete Token REST API

@DeleteMapping("{id}")

public ResponseEntity<String> deleteToken(@PathVariable("id") Long TokenId) {
productService.deleteToken(TokenId);
return new ResponseEntity<>("Token successfully deleted!", HttpStatus.OK);
}
}