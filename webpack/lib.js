const dotenv = require('dotenv')
const path = require('path')
export const getEnvConfig = () => {
    const { mode } = process.env
    const envPath = path.resolve(__dirname, `.env${ mode ? `.${mode}` : `` }`)
    return dotenv.config({ path:envPath }).parsed
}

export const setPublicVar = () => {
    // let newObj = JSON.parse(JSON.stringify(obj))
    // Object.keys(newObj).map(item => {
    //     newObj[item] = JSON.stringify(newObj[item])
    // })
    // return newObj
} 
