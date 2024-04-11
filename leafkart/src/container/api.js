import axios from "axios";
const URL="http://localhost:8000"
export  const authenticateUser= async(data)=>{
    try {
      const response = await axios.post(`${URL}/signup`, data);
      return response; 
    } catch (error) {
        console.log("error",error.message)
    
    }
}
const authenticateLogin=async(data)=>{
  try {
   return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("error",error.message)
  }
}



export default authenticateLogin