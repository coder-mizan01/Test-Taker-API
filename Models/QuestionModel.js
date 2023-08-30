
import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    question: {
        type: String,
        required: true,
      },
      optione1: {
        type: String,
        required: true,
      },
      optione2: {
        type: String,
        required: true,
      },
      optione3: {
        type: String,
        required: true,
      },
      optione4: {
        type: String,
        required: true,
      },
      answer : {
        type : String,
        required : true
      },
      AdmitId : {
        type : String,
        required : true
      }

})
//9653078740
const questionmodel = mongoose.model('Question',questionSchema);

export default questionmodel;