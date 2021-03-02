package dsc.timmyroom.backend.auth;

import dsc.timmyroom.backend.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@EnableWebSecurity        //spring security 를 적용한다는 Annotation
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserService userService;

    /**
     * 규칙 설정
     * @param http
     * @throws Exception
     *
     * HttpSecurity 객체를 이용해 각 요청을 먼저 intercept한다.
     * URL별 인증 여부, login 처리, logout 처리 등 다양한 처리 가능
     *
     * antMatchers : 각 URL 요청에 대한 접근 여부 설정
     *                  /userAccess에 접근할 경우 hasRole()을 통해 USER라는 권한 가진 유저만 접근 가능
     *                  anonymous()는 인증되지 않은 사용자만 접근 가능
     */
    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/userAccess").hasRole("USER")
                .antMatchers("/sign-up").anonymous()
                .and()
                .formLogin()
                .and()
                .csrf().disable();		//로그인 창
    }

    /**
     * 로그인 인증 처리 메소드
     * @param auth
     * @throws Exception
     */
    @Override
    public void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userService).passwordEncoder(new BCryptPasswordEncoder());
    }

    // https://cjw-awdsd.tistory.com/35
}
