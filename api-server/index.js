import express from 'express';

// 앱 객체 생성
const app = express();
const PORT = 8000; // 포트 설정

// 기본 라우트 설정
app.get('/', (req, res) => {
    res.send("<h1>Hello, Express !</h1>");
})

// 상품 목록 보기
// 상품 데이터 생성 -> 프런트에 보내기(json 데이터)
// app.get(URL 경로, 콜백함수)
// http://localhost:8000/api/products
app.get("/api/products", (req, res) => {
    const products = [
        {id:1, name : "무선 마우스", price : 30000},
        {id:2, name : "키보드", price : 50000},
        {id:3, name : "스피커", price : 80000}
    ]
    res.json(products); // json형태로 응답(반환)
});

// 요청 본문을(body) json형태로 파싱하기 위한 미들웨어
app.use(express.json());

// 상품 등록
// app.post(URL경로, 콜백함수)
// 포스트맨(Postman) - 데이터 테스트 도구
// id, name, price 보냄
app.post("/api/products", (req, res) => {
    console.log(req.body); //{id:4, name:"모니터", price:120000}
    res.send("상품이 등록되었습니다.");
})

// 서버 실행
app.listen(PORT, () => {
    console.log(`서버 실행중 ... http://localhost:${PORT}`);
})