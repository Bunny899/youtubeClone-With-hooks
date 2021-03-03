import React from 'react'

const VideoList = (props) => {
    const onListVideoClick = (video) => {
        props.changeSelection(video)
    }
    return (
        <div>
            {props.videos.length > 0 && props.videos.map(video => (
                <div style={{padding:'20px' }}>
                    <div>
                    <img alt="Loading..." style={{cursor: 'pointer'}} onClick={() => { onListVideoClick(video) }} src={video.thumbnails.medium.url} height="150px" width="300px" / >
                    </div>
                    <div>
                        <h3>{video.title}</h3>
                        <h4>{video.channel.title}</h4>
                    </div>
                </div>
                )
            )}
        </div>
    )
}

export default VideoList