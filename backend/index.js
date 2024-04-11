import express from "express";
import   { connection }  from "./database/db.js";
import defaultdata from "./defaultData.js";
import router from "./router.js";
import cors from 'cors'
import bodyParser from "body-parser";
import paymentRouter from './paymentRouter.js'
const app = express();

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', router)
app.use('/api', paymentRouter)

const PORT=8000;
connection();
app.listen(PORT,()=>console.log(`server is running successfully on PORT ${PORT}`))
defaultdata()