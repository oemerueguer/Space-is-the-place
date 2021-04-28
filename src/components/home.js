import {useState, useEffect} from 'react'
import {client} from '../client'
import axios from 'axios'


function Home () {
const [data, setData] = useState([])


useEffect(() => {
    client.getEntries({
        content_type : 'blogPost'
      })
      .then(response => setData(response.items))
}, [])


const calcDate = (time) => {
    const event = new Date(time)
return(event.toLocaleDateString('de-DE', {
            hour: 'numeric',
            minute: 'numeric'
          }))
}

    return(
    <>
    {console.log(data)}
    {data.map((e) => (
        <>
        <img height="200" src={e.fields.postImage.fields.file.url}/>
        <h2>{e.fields.postTitle}</h2>
        <h3>{e.fields.objectType} | Size relative to other {e.fields.objectType}s: {e.fields.relativeSize}</h3>
        <p>{e.fields.description.content[0].content[0].value}</p>
        <p>Distance to XYZ: {e.fields.distanceEarth}</p>
        <p>Post was created at: {calcDate(e.fields.createdAt)}</p>
        </>
    ))

    }
    


</>
)
}


export default Home