import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'


export default function Moons () {
    const [data, setData] = useState([])


    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
            'fields.objectType': 'Moon',
            limit: 200,
            order: '-fields.createdAt'
        })
            .then(response => setData(response.items))
    }, [])


    return (
        <>
        <h1>Moons</h1>
<Content data={data} />
        </>
    )
}