import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'
import Nasa from './Nasa'

function Home() {
    const [data, setData] = useState([])


    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
            /* skip: 100, */
            limit: 200,
            order: '-fields.createdAt'
        })
            .then(response => setData(response.items))
    }, [])


    return (
        <>
      {/*   <h1>Nasa's Picture of the Day:</h1> */}
        <Nasa />
        <h1>Other Blog Posts:</h1>
<Content data={data} />
        </>
    )
}


export default Home