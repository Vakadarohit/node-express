// const express = require('express')
// const app = express()
// const {products}= require('./data')
// app.get('/',(req,res)=>{
//     res.json(products)
// })
// app.listen(3400,()=>{
//     console.log('server is listening...')
// })

// const express = require('express')
// const app = express()
// const {products} = require('./data')

// app.get('/',(req,res)=>{
//     res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
// })
// app.get('/api/products',(req,res)=>{
//   const newProducts = products.map((product)=>{
//     const {id,name,image} = product;
//     return {id,name,image}
//   })

//   res.json(newProducts)
// })
// app.listen(7900,()=>{
//     console.log('server listening.....')
// })

// const express = require('express')
// const app = express()
// const {products} = require('./data')

// app.get('/',(req,res)=>{
//     res.send('<h1>Home page</h1><a href="/api/products">Products</a>')
// })

// app.get('/api/products',(req,res)=>{
//     const newProducts = products.map((product)=>{
//         const {name,id,image} = product
//         return {name,id,image}
//     })
//     res.json(newProducts)
// })

// app.get('/api/products',(req,res)=>{
//     const singleProduct = products.find((product)=> product.id === 1)
//     res.json(singleProduct)
// })

// app.get('/api/products/:productID',(req,res) => {
//     const { productID } = req.params
//     const singleProduct = products.find((product) => product.id === Number( productID )
//     )
//     if(!singleProduct) {
//         return res.status(404).send('Product does not exist')
//     }
//     return res.json(singleProduct)
// })

// app.get('/api/products/:productID',(req,res)=>{
//     const {productID} = req.params
//     const singleProduct = products.find((product) => product.id === Number (productID))
//     if(!singleProduct){
//         res.status(404).send('this product does not exist')
//     }
//     return res.json(singleProduct)
// })

// app.get('/api/v1/query',(req,res)=>{
//     const {search , limit} = req.query
//     let sortedProducts = [...products]
//     if(search) {
//         sortedProducts = sortedProducts.filter((product)=>{
//             return product.name.startsWith(search)
//         })
//     }
//     if(limit) {
//         sortedProducts = sortedProducts.slice(0,Number(limit))
//     }
//     if(sortedProducts.length < 1){
//         return res.status(200).json(sortedProducts) 
//     }
//     res.status(200).json(sortedProducts)
// })

// const express = require('express')
// const morgan = require('morgan')  
// const app = express()
// const logger = require('./logger')
// const authorize = require('./authorize')


// app.use(morgan('tiny'))
// app.use([authorize,logger]) 

// app.get('/',(req,res)=>{
//     console.log(req.user)
//     res.send('Home')
// })
// app.get('/api/about',(req,res)=>{
//     res.send('About')
// })
// app.get('/api/products',(req,res)=>{
//     res.send('Products')
// })
// app.get('/api/items',(req,res)=>{
//     res.send('Items')
// }) 
// app.listen(8910,()=>{
//     console.log('server listening....')
// })

// const express = require('express')
// const app = express()
// const log = require('./log')

// app.use(log)

// app.get('/',(req,res)=>{
//     res.send('Home')
// })
// app.get('/about',(req,res)=>{
//     res.send('About')
// })
// app.get('/api/cool',(req,res)=>{
//     res.send('cool')
// })

// app.listen(9070,()=>{
//     console.log('server listening')
// })

// const express = require('express')
// const app = express()
// let {people} = require('./data')


// app.get('/api/people',(req,res)=>{
//     res.status(200).json({success:true,data:people})
// })

// app.listen(7000,()=>{
//     console.log('server is listening...')
// })

const express = require('express')
const app = express()
let {people} = require('./data')

app.use(express.static('./methods-public'))

app.use(express.urlencoded({ extended : false }))

app.get('/api/people',(req,res)=>{
    res.status(200).json({success:true , data:people})
})

app.post('/login',(req,res)=>{
    // res.send('Login')
    const {name} = req.body;
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    } 
    res.status(401).send('Please provide credit card credentials')
})

app.listen(6100,()=>{
    console.log('server is listening...')
})