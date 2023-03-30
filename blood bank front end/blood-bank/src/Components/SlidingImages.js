import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='../images/facts.png'
        alt='...'
        height="550px"
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='../images/fact5.jpg'
        alt='...'
        height="550px"
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='../images/fact6.jpg'
        alt='...'
        height="550px"
      />
    </MDBCarousel>
  );
}