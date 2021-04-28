import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'


export default function Planets () {
    const [data, setData] = useState([])


    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
            'fields.objectType': 'Planet',
            limit: 200,
            order: '-fields.createdAt'
        })
            .then(response => setData(response.items))
    }, [])


    return (
        <>
        <h1>Planets</h1>
<Content data={data} />
        </>
    )
}