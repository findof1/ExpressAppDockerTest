import e from "express";

const app = e()

app.get('/', (req, res)=>{
  res.send('Yo, this is a docker container!')
})

app.listen(3000, ()=>{
  console.log('Listening on port 3000')
});