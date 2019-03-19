const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(require('./headers'))
app.use(bodyParser.json())


let items = [
  { id: 1, name: 'computer', price: 300, image: 'https://pisces.bbystatic.com/image2/BestBuy_US/store/ee/2015/com/pm/nav_desktops_1115.jpg;maxHeight=288;maxWidth=520' },
  { id: 2, name: 'car', price: 3000, image: 'https://assets.pcmag.com/media/images/501585-apple-concept-car-credit-meni-tsibas-when-using-this-image-in-your-stories.jpg?thumb=y&width=810&height=456' },
]

let cart = []


app.get('/', (req, res) => {
  res.send({ text: 'Success' })
})

app.get('/kitchen', (req, res) => {
  res.send({ text: 'Ham-Sandwich w Jalapenos & Cheese & Bacon' })
})

app.get('/items', (req, res) => {
  res.send(items)
})

app.get('/cart', (req, res) => {
  res.send(cart)
})

app.post('/cart', (req, res) => {
  console.log('/cart POST - endpoint activated ')
  console.log(req.body)

  cart.push(req.body)

  res.send(cart)
})




app.listen(5000, (err) => {
  if(err){ throw err }
  console.log('Server up and running on port 5000...')

})
