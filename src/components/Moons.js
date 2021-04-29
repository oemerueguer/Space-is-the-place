import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'
import {useParams, useHistory} from 'react-router-dom'


export default function Moons () {
    const {page} = useParams()
    let history = useHistory();

    const [data, setData] = useState(false)
    const [numPages, setNumPages] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(3)
    const [skip, setSkip] = useState(0)
  

    const changePage = (p) => {
        setSkip(p*resultsPerPage)
        history.push(`/moons/${p +1}`)
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        setSkip((page-1)*resultsPerPage)
    }, [])

    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
            'fields.objectType': 'Moon',
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
        <h1>Moons</h1>
<Content data={data} numPages={numPages} changePage={changePage} page={page} />
        </>
    )
}