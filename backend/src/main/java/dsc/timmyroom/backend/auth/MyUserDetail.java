package dsc.timmyroom.backend.auth;


import dsc.timmyroom.backend.entity.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

public class MyUserDetail implements UserDetails {
    private String nickname;
    private String phone;
    private String auth;

    public MyUserDetail(User user) {
        this.nickname = user.getNickname();
        this.phone = "{noop}" + user.getPhone();
        this.auth = "ROLE_" + user.getRole();
    }

    // 계정이 가지고 있는 권한 목록 반환
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(new SimpleGrantedAuthority(this.auth));
    }

    // 계정의 비밀번호 반환
    @Override
    public String getPassword() {
        return this.phone;
    }

    // 계정의 이름 반환
    @Override
    public String getUsername() {
        return this.nickname;
    }

    // 계정의 만료 여부 false=만료
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    // 계정의 잠김 여부 false=잠김
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    // 계정의 비밀번호 만료 여부 false=만료
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    // 계정 활성화 여부 false=비활성
    @Override
    public boolean isEnabled() {
        return true;
    }
}
