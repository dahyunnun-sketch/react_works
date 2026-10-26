import { useContext } from "react";
import { UserContext } from "./UserParent";

const UserGrandChild = () => {
    // 공급받은 context를 사용
    const user = useContext(UserContext);

    return(
        <div>
            <h2>UserGrandChild 컴포넌트 입니다.</h2>
            <p>이름 : {user.name}</p>
            <p>나이 : {user.age}</p>
        </div>
    )
}

export default UserGrandChild;