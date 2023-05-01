const QUIZ = require('../schema/quiz')
const RESULT = require('../schema/resultSch')
const USER = require('../schema/Myuser')
const jwt = require('../config/GenerateToken')
const now = Date()
const POST = async(req,res)=>{
    const postData = await QUIZ.create(req.body)
    if(postData){
        res.status(201).json({
            postData,postedBy:req.user
        })
    }else{
        throw new Error("Invalid Data")
    }
}


const active = async (req, res) => {
    try {
      const now = new Date();
 const timer = setTimeout(() => {
        // After 5 minutes, change the API response
       
             console.log("5 Minutes Passed")
           
      }, 3000);


      const quiz = await QUIZ.findOne({ startDate: { $lte: now }, endDate: { $gte: now } });
      
      if (quiz) {
        res.json(quiz);
      } else {
        res.status(404).json({ message: 'No active quiz found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };


  const getPublish = async(req,res)=>{
    const {id} = req.params;
    const now = new Date();
    const getpublish1 = await QUIZ.findByIdAndUpdate(id,{
      getActiveQuiz:true,
      startDate :now.toLocaleString()
    },{new:true})

    setTimeout(() => {
      
      res.end()
    }, 5 * 60 * 1000)
   
    res.json(getpublish1)
  }




  const getAll = async (req, res) => {
    console.log(req.user)
    try {
      const quiz = await QUIZ.find({}).populate('postedBy');
      if (quiz) {
        res.json({quiz,postedBy:req.user});
      } else {
        res.status(404).json({ message: 'No active quiz found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };



  const getResult = async(req,res)=>{
        const params = req.params.id
     const {attemptedQuestion} = req.body;
      
        const quiz = await QUIZ.findByIdAndUpdate(params,{
          endDate:now.toLocaleString()
        },{new:true});
        const answer = quiz.answer
        const allQuestions = Object.keys(answer)
        const lengthTotal = allQuestions.length
        console.log(allQuestions)
        let score = 0;
        for(let i =0;i<lengthTotal;i++){
          let questionNO = allQuestions[i];
          if(answer[questionNO] == attemptedQuestion[questionNO]){
            score+=1;
          }
        }
      const mm = await RESULT.create({Score:score,start:quiz?.startDate,end:quiz?.endDate})
      
      res.json({
        status:"finished",mm, outoff:lengthTotal
      })
    
  }


  const allResult = async(req,res)=>{
    const getAll = await RESULT.find().populate("getBy","").populate("postedData","startDate endDate");
    res.json({getAll
    ,getBy:req.user,postedData:req.data
    })
  }

 
  
  

module.exports = {POST,active,getAll,getResult,getPublish,allResult}

