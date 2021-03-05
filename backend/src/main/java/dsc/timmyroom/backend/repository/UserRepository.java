package dsc.timmyroom.backend.repository;

import dsc.timmyroom.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.lang.reflect.Member;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findUserByNickname(String Nickname);

    // 궁금한거 User랑 Optional<User>의 차이
    // findByNickname 이랑
    // findUserByNickname이랑 뭐가다른지

    /*
    public EntityManager em = null;


    User findUserByNickname(String nickname){
        TypedQuery<User> query = em.createQuery("select m from User as m where m.nickname =?1", User.class)
                .setParameter(1, nickname);
        return query.getSingleResult();
    }
     */
}
