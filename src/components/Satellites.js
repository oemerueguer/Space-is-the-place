import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'
import {useParams, useHistory} from 'react-router-dom'


export default function Satellites () {
    const {page} = useParams()
    let history = useHistory();

    const [data, setData] = useState(false)
    const [numPages, setNumPages] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(3)
    const [skip, setSkip] = useState(0)
  

    const changePage = (p) => {
        setSkip(p*resultsPerPage)
        history.push(`/satellites/${p +1}`)
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        setSkip((page-1)*resultsPerPage)
    }, [])
    
    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
            'fields.objectType': 'Satellite',
            skip: `${skip}`,
            limit: `${resultsPerPage}`,
            order: '-fields.createdAt'
        })
            .then(response => {
                setData(response.items)
                setNumPages(Math.ceil(response.total / resultsPerPage))
            })
    }, [resultsPerPage, skip])


    return (
        <>
        <h1>Satellites</h1>
<Content data={data} numPages={numPages} changePage={changePage} page={page}/>
        </>
    )
}