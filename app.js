const express = require('express')
let app = express();  // Compliant
app.disable("x-powered-by");

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!, test 1')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
