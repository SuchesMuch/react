import { collection, addDoc } from "firebase/firestore";
import { db } from "../app.js"

export const saveToken =  async (req,res,next) => {
  try {
    const docRef = await addDoc(collection(db, "devices"), {
      currentToken: req.body.currentToken
    });
    console.log("Document written with ID: ", docRef.id);
    res.status(200).json({success:true,message:`Document written with ID: ${docRef.id}`})
  } catch (e) {
    res.status(200).json({success:'false',err:e})
  }
} 
