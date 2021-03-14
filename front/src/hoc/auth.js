import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default (Component, option, adminRoute = null) => {
    /*
    option: null => 누구나 출입가능한 페이지
          : true => 로그인한 유저만 출입가능한 페이지 
          : false => 로그인한 유저는 출입 불가능한 페이지 
    */

    const AuthenticateCheck = (props) => {
        const isLoggedIn = useSelector((state) => state.user.isLoggedIn);

        useEffect(() => {
            // 로그인 되어 있지 않다면, logOutMain으로 이동시키기
            if (!isLoggedIn && option) {
                props.history.push('/');
            }
        }, []);

        return <Component />;
    };

    return AuthenticateCheck;
};
