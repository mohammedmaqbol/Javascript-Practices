import  express  from 'express'
const route = express.Router()

route.get('/', (req, res) => {
    res.send('Welecome Node !')
})


export default route