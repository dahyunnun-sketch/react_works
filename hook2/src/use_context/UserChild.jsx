import UserGrandChild from "./UserGrandChild";

const UserChild = () => {

    return(
        <div>
            <h2>UserChild 컴포넌트 입니다.</h2>
            <p>(User 데이터를 전달하지 않음)</p>
            <UserGrandChild />
        </div>
    )
}

export default UserChild;