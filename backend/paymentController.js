import crypto from 'crypto'; 
import axios from 'axios';
import dotenv from 'dotenv'; 

dotenv.config(); 
export const phonepePayment = async (req, res) => {
    try {
      const merchantTransactionID = "MT" + Date.now();
      const merchantUserID = 'MUID'+ Date.now(); 
    
    const data = {
      merchantId: 'PGTESTPAYUAT',
      merchantUserId: merchantUserID,
      merchantTransactionId:merchantTransactionID,
      name:req.body.name,
      amount: req.body.amount * 100,
      redirectUrl: `http://localhost:5173/api/status/${merchantTransactionID}`,
      redirectMode: "POST",
      paymentInstrument: {
        type: "PAY_PAGE"
      }
    };

    const payload = JSON.stringify(data);
    const payloadMain = Buffer.from(payload).toString("base64");
    const keyindex = 1;
    const string = payloadMain + '/pg/v1/pay' + '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = `${sha256}###${keyindex}`;
    const prodUrl = 'https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/pay';
    console.log("Constructed payload:", payload);
    const options = {
      method: 'POST',
      url: prodUrl,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum
      },
      data: {
        request: payloadMain
      }
    };

    const response = await axios.request(options);
console.log(response.data)
    if (response.status !== 200) {
      throw new Error(`Error initiating PhonePe payment: ${response.statusText}`);
    }

    return res.redirect(response.data.data.instrumentResponse.redirectInfo.url);
  }
  catch (error) {
    console.error(error);
    return res.status(500).send({
      message: error.message,
      success: false
    });
  }
};

export const checkstatus = async (request, res) => {
  try {
    const merchantTransactionID = request.body.transactionID;
    const merchantID = request.body.merchantID;
    const keyindex = 1;
    const string = `/pg/v1/status/${merchantID}/${merchantTransactionID}${process.env.SALT_KEY}`;
    const sha256 = crypto.createHash('sha256').update(string).digest('hex');
    const checksum = `${sha256}###${keyindex}`;
    const options = {
      method: 'GET',
      url: `https://api-preprod.phonepe.com/apis/pg-sandbox/pg/v1/status/${merchantID}/${merchantTransactionID}`,
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json',
        'X-VERIFY': checksum,
        'X-MERCHANT-ID': `${merchantID}`
      }
    };

    const response = await axios.request(options);

    if (response.data.success) {
      const successUrl = 'http://localhost:5173/success'; 
      return response.redirect(successUrl);
    } else {
      const failureUrl = 'http://localhost:5173/fail'; 
      return response.redirect(failureUrl);
    }
  } catch (error) {
    console.error(error);
    return response.status(500).send({
      message: error.message,
      success: false
    });
  }
};
