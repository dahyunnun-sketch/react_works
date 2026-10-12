import { Link } from "react-router-dom";
const Header = () => {

    return(
        <div>
            <div className='header'>
            <Link to="/">Home</Link>
            <Link to="/signup">회원가입</Link>
            <Link to="/signin">로그인</Link>
            <Link to="/board">게시판</Link>
          </div>
        </div>
    )
}

export default Header;