import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'
import {useParams, useHistory, useLocation} from 'react-router-dom'


export default function Planets () {
    const {page} = useParams()
    let history = useHistory();
    let location = useLocation()

    const [data, setData] = useState(false)
    const [numPages, setNumPages] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(3)
    const [skip, setSkip] = useState(0)
  

    const changePage = (p) => {
        setSkip(p*resultsPerPage)
        history.push(`/planets/${p +1}`)
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        if(page)setSkip((page-1)*resultsPerPage)
        else setSkip(0)
    }, [location])

    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
            'fields.objectType': 'Planet',
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
        <h1>Planets</h1>
<Content data={data} numPages={numPages} changePage={changePage} page={page}/>
        </>
    )
}