import React from 'react'

const SingleVideo = (props) => {
    return (
        <div style={{padding:'20px'}}>
            <iframe width="560" height="315" title="video" src={`https://www.youtube.com/embed/${props.video.id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <h1>{props.video.title}</h1>
            <h4>{props.video.description}</h4>
        </div>
    )
}

export default SingleVideo
