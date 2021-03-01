package dsc.timmyroom.backend.repository;

import dsc.timmyroom.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.TypedQuery;
import java.lang.reflect.Member;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    User findUserByNickname(String Nickname);
    /*
    public EntityManager em = null;


    User findUserByNickname(String nickname){
        TypedQuery<User> query = em.createQuery("select m from User as m where m.nickname =?1", User.class)
                .setParameter(1, nickname);
        return query.getSingleResult();
    }
     */
}
