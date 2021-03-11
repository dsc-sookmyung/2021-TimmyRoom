package dsc.timmyroom.backend.controller;

import dsc.timmyroom.backend.auth.JwtTokenProvider;
import dsc.timmyroom.backend.auth.MyUserDetail;
import dsc.timmyroom.backend.entity.User;
import dsc.timmyroom.backend.repository.UserRepository;
import dsc.timmyroom.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;

@CrossOrigin(origins = {"http://localhost:3000"})
@RequiredArgsConstructor
@RestController
public class JoinController {

    private final PasswordEncoder passwordEncoder;
    private final JwtTokenProvider jwtTokenProvider;
    private final UserRepository userRepository;

    // 회원가입
    @PostMapping("/signup")
    public User join(@RequestBody User user) {
        // .phone(passwordEncoder.encode(user.getPhone()))
        //BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        //User findUser = userRepository.findUserByPhone(user.getPhone())
        user.setNickname(user.getNickname());
        user.setPhone(passwordEncoder.encode(user.getPhone()));
        user.setRole(user.getRole());
        return userRepository.save(user);
    }


    // 로그인
    @PostMapping("/login")
    public String login(@RequestBody User user) {
        User member = userRepository.findUserByNickname(user.getNickname())
                .orElseThrow(() -> new IllegalArgumentException("가입되지 않은 Nickname 입니다."));
        if (!passwordEncoder.matches(user.getPhone(), member.getPhone())) {
            throw new IllegalArgumentException("가입 유저의 휴대폰 번호가 아닙니다.");
        }
        return jwtTokenProvider.createToken(member.getNickname(), member.getRole());
    }
    /*
     * 회원가입 폼
     * @return
    @GetMapping("/sign-up")
    public String signUpForm() {
        return "signup";
    }
     * 회원가입 진행
     * @param user
     * @return
    @PostMapping("/sign-up")
    public String signUp(User user) {
        user.setRole("USER");
        userService.joinUser(user);
        return "redirect:/login";
    }
     * 유저 페이지
     * @param model
     * @param authentication
     * @return
    @GetMapping("/welcome")
    public String userAccess(Model model, Authentication authentication) {
        MyUserDetail userDetail = (MyUserDetail)authentication.getPrincipal();
        System.out.println(userDetail.getUsername());
        log.info(userDetail.getUsername());
        model.addAttribute("info", userDetail.getUsername());
        return "user_access";
    }
    */
}