const app = require('./createApp')

const port = process.env.PORT || 9000

app.listen(port, () => {
  console.log(`App live at http://localhost:${port}`)
})
