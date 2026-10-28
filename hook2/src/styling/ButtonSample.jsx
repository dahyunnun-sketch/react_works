import styled from "styled-components";

// 컴포넌트형 버튼
const Button = styled.button`
    border: 1px solid #ccc;
    padding: 8px 16px;

    // 2번 버튼
    // props를 이용해서 스타일을 동적으로 변경
    color: ${props => props.color};
    background-color: ${props => props.backgroundColor};

    // 3번 버튼
    ${props => props.primary && `
        color: gray;
        background-color: purple;
    `}
`

const ButtonSample = () => {
    
    return(
        <div>
            <h2>style components 실습</h2>
            <Button>기본 버튼</Button>
            <Button 
                color="green" 
                backgroundColor="yellow"
            >녹색 버튼</Button>
            <Button primary>보라 버튼</Button>
        </div>
    )
}

export default ButtonSample;