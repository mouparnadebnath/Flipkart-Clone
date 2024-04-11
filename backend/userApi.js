import user from "./model/user_shcema.js"
export const userSignup=async(request,response)=>{
    const users=request.body
    const newuser= new user(users)
    try {
        await newuser.save()
        const exists=await user.findOne({number})
        if (exists) {
            response.status(401).json({message:"Number already exists"})
        }

response.status(201).json({message:users})
} catch (error) {
    response.status(500).json({message:error.message})
}
}
export const userLogin=async(request,response)=>{
    try {
        const existingUser=await user.findOne({ email: request.body.email, password: request.body.password })
        if(existingUser) {
             return  response.status(200).json({data:user});
        } else {
            return response.status(401).json('Invalid Login');
        }
    } catch (error) {
        response.json({message:error.message});        
    }
}
