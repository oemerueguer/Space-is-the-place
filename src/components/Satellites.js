import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'


export default function Satellites () {
    const [data, setData] = useState([])


    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
            'fields.objectType': 'Satellite',
            limit: 200,
            order: '-fields.createdAt'
        })
            .then(response => setData(response.items))
    }, [])


    return (
        <>
        <h1>Satellites</h1>
<Content data={data} />
        </>
    )
}