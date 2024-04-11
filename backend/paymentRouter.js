import express from "express";
import {phonepePayment,checkstatus } from "./paymentController.js";
const paymentrouter = express.Router();


paymentrouter.post('/payment', phonepePayment);
paymentrouter.post('/status/:txnId', checkstatus);
export default paymentrouter