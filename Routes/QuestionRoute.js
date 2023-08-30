
import express from 'express'

import { getAllquestion ,createQuestion} from '../Controllers/QuestionController.js'


const router = express.Router();

router.post('/create-question',createQuestion);

router.get('/all-question',getAllquestion)

export default router;