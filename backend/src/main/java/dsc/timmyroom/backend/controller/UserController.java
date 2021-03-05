package dsc.timmyroom.backend.controller;


import dsc.timmyroom.backend.auth.MyUserDetail;
import dsc.timmyroom.backend.entity.User;
import dsc.timmyroom.backend.exception.ResourceNotFoundException;
import dsc.timmyroom.backend.repository.UserRepository;
import dsc.timmyroom.backend.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000"})
@RestController
@RequestMapping({"/"})
public class UserController {

    @Autowired
    private UserRepository userRepository;

    // get all users
    @GetMapping({"/users"})
    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    // create user
    @PostMapping("/users")
    public User createUser(@RequestBody User user){
        return userRepository.save(user);
    }

    // get user by id
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));
        return ResponseEntity.ok(user);
    }

    // update user
    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDetails){
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id:" + id));
        // user.getNickname() : 이건 현재 nickname 받아오는거
        // 새로운 정보를 받아야함
        user.setNickname(userDetails.getNickname());
        user.setPhone(userDetails.getPhone());
        user.setRole(userDetails.getRole());

        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist with id" + id));

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
