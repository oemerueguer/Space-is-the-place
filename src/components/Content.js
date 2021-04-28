import { Card, Icon } from 'semantic-ui-react';



export default function Content({data}) {

    const calcDate = (time) => {
        const event = new Date(time)
        return (event.toLocaleDateString(undefined, {
            hour: 'numeric',
            minute: 'numeric'
        }))
    }

    return (
        <>
            {console.log(data)}
            {data.map((e) => (
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
                            {`Distance to XYZ: ${e.fields.distanceEarth}`}
                            <Icon name='created_at' />
                            {`Created at: ${calcDate(e.fields.createdAt)}`}
                        </p>}
                        centered
                    />
                </>
            ))
            }
        </>
    )
}