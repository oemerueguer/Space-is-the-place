import { useState, useEffect } from 'react'
import { client } from '../client'
import Content from './Content'
import Nasa from './Nasa'
import {useParams, useHistory} from 'react-router-dom'

function Home() {
    const {page} = useParams()
    let history = useHistory();

    const [data, setData] = useState([])
    const [numPages, setNumPages] = useState(1)
    const [resultsPerPage, setResultsPerPage] = useState(3)
    const [skip, setSkip] = useState(0)
  

    const changePage = (p) => {
        setSkip(p*resultsPerPage)
        history.push(`/home/${p +1}`)
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    useEffect(() => {
        setSkip((page-1)*resultsPerPage)
    }, [])

    useEffect(() => {
        client.getEntries({
            content_type: 'blogPost',
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
        <>{!skip && <Nasa />}
        {console.log(page)}
            <h1>Other Blog Posts:</h1>
            <Content data={data} numPages={numPages} changePage={changePage} page={page}/>
        </>
    )
}


export default Home