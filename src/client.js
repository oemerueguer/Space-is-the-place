import * as contentful from 'contentful'
require('dotenv').config()


export const client = contentful.createClient({
    space : process.env.REACT_APP_SPACE_ID,
    accessToken : process.env.REACT_APP_API_TOKEN
})