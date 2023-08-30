import questionmodel from '../models/questionModel.js';

const createQuestion = async (req, res) => {
  try {
    const { question, optione1, optione2, optione3, optione4, answer ,AdmitId } = req.body;

    const newQuestion = new questionmodel({
      question,
      optione1,
      optione2,
      optione3,
      optione4,
      answer,
      AdmitId
    });

    const savedQuestion = await newQuestion.save();
    res.status(201).json(savedQuestion);
  } catch (error) {
    res.status(500).json({ message: 'Error creating question', error: error.message });
  }
};


const getAllquestion = async (req,res) => {
    try {
        
        const questions = await questionmodel.find();
        res.status(201).send({
            success : true,
            questions
        })
    } catch (error) {
        res.status(500).send({
            success : false,
            error,
        })
    }
}

export {  getAllquestion,createQuestion};
