import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";

const PORT = 4000 || process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is runnint at ${PORT}`);
})
