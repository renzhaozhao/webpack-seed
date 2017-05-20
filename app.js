const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.resolve(__dirname, 'dist')))



app.set('port', process.env.PORT || 3000)
app.listen(app.get('port'), () => {
  console.log(`start in ${app.get('port')}`)
})

module.exports = app
