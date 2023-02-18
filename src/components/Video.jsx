import React from 'react';
import video from '../assets/Pexels_Videos_4097_Drone_Shot_Of_Forest.mp4'

const Video = () =>{
    return(
        <div>
            {/*<video className='video' src={video} autoPlay loop muted />
            
  width: 120%;
  height: 70%;*/}
            <div className="video"
          dangerouslySetInnerHTML={{
            __html: `<video autoplay loop muted playsinline>
      <source className="" src=${video} type="video/mp4" />
      Your browser does not support the video tag.
</video>`,
          }}
        />
        </div>
    )
}
export default Video