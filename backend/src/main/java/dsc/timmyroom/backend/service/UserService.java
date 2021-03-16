package dsc.timmyroom.backend.service;


import dsc.timmyroom.backend.auth.JwtTokenProvider;
import dsc.timmyroom.backend.entity.User;
import dsc.timmyroom.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String nickname) throws UsernameNotFoundException {
        return (UserDetails) userRepository.findUserByNickname(nickname)
                .orElseThrow(()-> new UsernameNotFoundException("사용자를 찾을 수 없습니다."));
    }

    /**
     * 중복 회원 검증
     */
    private void validateDuplicateUser(User user) {
        Optional<User> findUser = userRepository.findUserByNickname(user.getNickname());
        if (findUser != null) {
            throw new IllegalStateException("이미 존재하는 회원입니다.");
        }
        // https://blog.naver.com/PostView.nhn?blogId=qjawnswkd&logNo=222056895788
    }
    /*
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
     */
}
