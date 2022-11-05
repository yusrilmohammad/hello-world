const express = require('express')
const app = express();
//let app = express();  // Compliant
//app.disable("x-powered-by");

const port = 3000

app.get('/', (req, res) => {
  res.send('test 2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
