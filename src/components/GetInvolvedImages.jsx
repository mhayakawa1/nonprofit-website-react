import React from 'react';
import giImage1 from '../images/get-involved-images/get-involved-1.jpg';
import giImage2 from '../images/get-involved-images/get-involved-2.jpg';
import giImage3 from '../images/get-involved-images/get-involved-3.jpg';
import giImage4 from '../images/get-involved-images/get-involved-4.jpg';
import giImage5 from '../images/get-involved-images/get-involved-5.jpg';
import giImage6 from '../images/get-involved-images/get-involved-6.jpg';
import giImage7 from '../images/get-involved-images/get-involved-7.jpg';
import giImage8 from '../images/get-involved-images/get-involved-8.jpg';

const imagesInfo = {
    [giImage1]: 'Woman holding tray of potted saplings',
    [giImage2]: 'Adult and child planting sapling',
    [giImage3]: 'Close up of person with gloves planting sapling',
    [giImage4]: 'Child holding two potted saplings in both hands',
    [giImage5]: 'Close up of two people preparing to plant a sapling with a trowel',
    [giImage6]: 'Smiling man posing with a young evergreen tree on a cart',
    [giImage7]: 'Two adults and two children planting a young tree with a shovel',
    [giImage8]: 'Mangrove saplings in shallow water at the beach'
}

const Image = ({ src, alt }) => {
    return (
        <img className='get-involved-image' src={src} alt={alt} />
    )
}

const getInvolvedImages = () => {
    const images = Object.entries(imagesInfo).map(([key, value], index) =>
        <Image key={index} src={key} alt={value} />
    )
    return (
        <div className='get-involved-images'>
            {images}
        </div>
    )
}
export default getInvolvedImages;