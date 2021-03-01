package dsc.timmyroom.backend.controller;

import dsc.timmyroom.backend.auth.MyUserDetail;
import dsc.timmyroom.backend.entity.User;
import dsc.timmyroom.backend.repository.UserRepository;
import dsc.timmyroom.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
@RequiredArgsConstructor
@Slf4j
public class JoinController {
    private final UserService userService;

    /**
     * 회원가입 폼
     * @return
     */
    @GetMapping("/sign-up")
    public String signUpForm() {
        return "signup";
    }

    /**
     * 회원가입 진행
     * @param user
     * @return
     */
    @PostMapping("/sign-up")
    public String signUp(User user) {
        user.setRole("USER");
        userService.joinUser(user);
        return "redirect:/login";
    }

    /**
     * 유저 페이지
     * @param model
     * @param authentication
     * @return
     */
    @GetMapping("/")
    public String userAccess(Model model, Authentication authentication) {
        MyUserDetail userDetail = (MyUserDetail)authentication.getPrincipal();
        System.out.println(userDetail.getUsername());
        log.info(userDetail.getUsername());
        model.addAttribute("info", userDetail.getUsername());
        return "user_access";
    }
}
