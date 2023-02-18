import React from 'react';
import video from '../assets/Pexels_Videos_4097_Drone_Shot_Of_Forest.mp4'

const Video = () =>{
    return(
        <div>
            
            <div className="fullscreen-video-wrap" dangerouslySetInnerHTML={{ __html: `
            <video className='video' autoPlay loop muted playsInline>
                <source src="${video}" type="video/mp4" />
            </video>            
        ` }}></div>
        </div>
    )
}
export default Video
{/*<video className='video' autoPlay loop muted playsInline>
                <source src={video} type='video/mp4' />
            </video>*/}