package dsc.timmyroom.backend.service;

import dsc.timmyroom.backend.entity.User;
import dsc.timmyroom.backend.repository.UserRepository;
import dsc.timmyroom.backend.auth.MyUserDetail;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
@Slf4j
public class UserService implements UserDetailsService {
    private final UserRepository userRepository;

    @Transactional
    public void joinUser(User user){
        BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        user.setPhone(passwordEncoder.encode(user.getPhone()));
        userRepository.save(user);
    }

    @Override
    public UserDetails loadUserByUsername(String nickname) throws UsernameNotFoundException {
        // 여기서 받은 유저 패스워드와 비교하여 로그인 인증
        User user = userRepository.findUserByNickname(nickname);
        return new MyUserDetail(user);
    }
}
