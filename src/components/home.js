import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'


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
<Content data={data} />
        </>
    )
}


export default Home