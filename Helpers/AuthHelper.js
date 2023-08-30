import bcrypt from 'bcrypt';

const hashPassword =  async (password) =>{
    try {
        const saltRounds = 12
        const hashedPassword = await bcrypt.hash(password,saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
}

const comparePassword =  async (password,hashedPassword) => {
    return bcrypt.compare(password,hashedPassword)
}

export {hashPassword,comparePassword}