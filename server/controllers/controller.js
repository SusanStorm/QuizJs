import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";
import questions, { answers } from '../database/data.js'

/** get all questions */
export async function getQuestions(req, res){
    try {
        const q = await Questions.find();
        res.json(q)
    } catch (error) {
        res.json({ error })
    }
}

/** insert all questinos */
export async function insertQuestions(req, res){
    try {
        Questions.insertMany({ questions, answers }).then(function(){
            res.json({ msg: "Data Saved Successfully...!"})
        }).catch(function(err){
            console.log(err);
        })
        
    } catch (error) {
        res.json({ error })
    }
}

/** Delete all Questions */
export async function dropQuestions(req, res){
   try {
        Questions.deleteMany().then(function(){
            res.json({msg: "Deleted sucessfuly"})
        }).catch(function(err){
            console.log(err);
        })
   } catch (error) {
        res.json({ error })
   }
}

/** get all result */
export async function getResult(req, res){
    try {
        const r = await Results.find();
        res.json(r)
    } catch (error) {
        res.json({ error })
    }
}

/** post all result */
export async function storeResult(req, res){
   try {
        const { username, result, attempts, points, achived } = req.body;
        if(!username && !result) throw new Error('Data Not Provided...!');

      
Results.create({ username, result, attempts, points, achived }).then((result)=>{
    res.json({msg : "Result saved sucessfully..!"})
}).catch((err)=>{
    res.json({msg : "Result saved sucessfully..!"})
})
      
   } catch (error) {
        res.json({error})
   }
}

/** delete all result */
export async function dropResult(req, res){
    try {
        await Results.deleteMany();
        res.json({ msg : "Result Deleted Successfully...!"})
    } catch (error) {
        res.json({ error })
    }
}