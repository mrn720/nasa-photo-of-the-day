import React from 'react'
import ReactPlayer from "react-player"

function Photo (props) {
    const { media_type, url } = props.props
    let media;
    if(media_type == "video") {
        media = <ReactPlayer url = {url}/>
    } else {
        media = <img src={url} alt='NASA Pic of the Day' />
    }

    return media

}

export default Photo 