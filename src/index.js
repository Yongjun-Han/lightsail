import express  from "express";

const app = express();
const port = 3000;

app.use(express.json());
app.listen(port,()=> {
  console.log(`테스트서버 http://localhost:${port}에서 실행중`)
})

app.get('/',(req,res)=>{
  res.send(`테스트서버 http://localhost:${port}에서 실행중`)
});

app.get('/:name',(req,res)=>{
  res.send(`안녕하세요 ${req.params.name} 님`)
});