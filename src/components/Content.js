import { Card, Icon, Pagination, Grid } from 'semantic-ui-react';
import './Content.css'




export default function Content({ data, numPages, changePage, page }) {

    const calcDate = (time) => {
        const event = new Date(time)
        return (event.toLocaleDateString(undefined, {
            hour: 'numeric',
            minute: 'numeric'
        }))
    }
    console.log(data)
    return (
        <div className='contentContainer'>

            {!data ? <h3>Loading...</h3> : data.length === 0 ? <h3>Nothing found :(</h3> : data.map((e) => (
                <>
                    <Card
                        className='CardLayOut'
                        image={e.fields.postImage.fields.file.url}
                        header={e.fields.postTitle}
                        meta={`${e.fields.objectType} | Size rel. to other ${e.fields.objectType}s: ${e.fields.relativeSize}`}
                        aligned="center"
                        description={e.fields.description.content[0].content[0].value}
                        extra={<p>
                            <Icon name='Distance' />
                            {e.fields.objectType == 'Star' ? 'Distance to Earth: ' : e.fields.objectType == 'Planet' ? 'Distance to Sun: ' : e.fields.objectType == 'Moon' ? 'Distance to Planet: ' : 'Distance to Earth: '}
                            {e.fields.distanceEarth}
                            <Icon name='created_at' />
                            {`Created at: ${calcDate(e.fields.createdAt)}`}
                            {e.fields.amountOfObjects ?
                                <><br /><Icon name='Distance' />
                                    {`Number of Moons: ${e.fields.amountOfObjects}`}
                                    <Icon name='Distance' />
                                    {`Length of one Year: ${e.fields.lengthOfYear}`}
                                    </> : ''}
                        </p>}
                        centered
                    />
                </>
            ))
            }
            <Grid><Grid.Column textAlign="center"><Pagination className='pagination' inverted defaultActivePage={page} totalPages={numPages} onPageChange={((e, data) => changePage(data.activePage -1))} /></Grid.Column></Grid>
        </div>
    )
}