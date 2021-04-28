import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'


export default function Stars () {
    const [data, setData] = useState([])


    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
            'fields.objectType': 'Star',
            limit: 200,
            order: '-fields.createdAt'
        })
            .then(response => setData(response.items))
    }, [])


    return (
        <>
        <h1>Stars</h1>
<Content data={data} />
        </>
    )
}