import React from 'react';
import video from '../assets/Pexels_Videos_4097_Drone_Shot_Of_Forest.mp4'

const Video = () =>{
    return(
        <div>
            <video className='video' autoPlay loop muted playsInline>
                <source src={video} type='video/mp4' />
            </video>
        </div>
    )
}
export default Video