import React from 'react';
import { Carousel } from 'react-bootstrap';

const Ourdomain = () => {
  const inlineShadow = {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)'
  }
  return (
    <section style={{ color: '#000', backgroundColor: '#f3f2f2' }}>
      <div className='container-fluid py-5'>
        <h2 className='d-flex justify-content-center mb-3'>Our Domain</h2>
        <p className="mb-4 pb-2 mb-md-5 pb-md-0 text-muted mx-auto text-center" style={{ width: '60%' }}><i>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
          numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
          quisquam eum porro a pariatur veniam.</i>
        </p>
        <Carousel controls={true} indicators={false} style={{ paddingLeft: '100px', paddingRight: '100px' }}>
          <Carousel.Item>
            <div className='row d-flex justify-content-around'>
              <div style={inlineShadow} className='card col-3'>
                <h3 className='text-info mx-auto pt-2'>Web Applications</h3>
                <p className='text-info col-6 inline-Text' style={{ letterSpacing: '1px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. facilisis eros quis urna consectetur, ac fringilla tortor pharetra. Fusce id aliquet odio, eu tincidunt erat
                </p>
              </div>
              <div style={inlineShadow} className='card col-3'>
                <h3 className='text-info mx-auto pt-2'>Mobile Applications</h3>
                <p className='text-info col-6 inline-Text' style={{ letterSpacing: '1px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. facilisis eros quis urna consectetur, ac fringilla tortor pharetra. Fusce id aliquet odio, eu tincidunt erat
                </p>
              </div>
              <div style={inlineShadow} className='card col-3'>
                <h3 className='text-info mx-auto pt-2'>Cloud Applications</h3>
                <p className='text-info col-6 inline-Text' style={{ letterSpacing: '1px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. facilisis eros quis urna consectetur, ac fringilla tortor pharetra. Fusce id aliquet odio, eu tincidunt erat
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='row d-flex justify-content-around'>
              <div style={inlineShadow} className='card col-3'>
                <h3 className='text-info mx-auto pt-2'>Desktop Applications</h3>
                <p className='text-info col-6 inline-Text' style={{ letterSpacing: '1px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. facilisis eros quis urna consectetur, ac fringilla tortor pharetra. Fusce id aliquet odio, eu tincidunt erat
                </p>
              </div>
              <div style={inlineShadow} className='card col-3'>
                <h3 className='text-info mx-auto pt-2'>IOS Applications</h3>
                <p className='text-info col-6 inline-Text' style={{ letterSpacing: '1px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. facilisis eros quis urna consectetur, ac fringilla tortor pharetra. Fusce id aliquet odio, eu tincidunt erat
                </p>
              </div>
              <div style={inlineShadow} className='card col-3'>
                <h3 className='text-info mx-auto pt-2'>AI Applications</h3>
                <p className='text-info col-6 inline-Text' style={{ letterSpacing: '1px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. facilisis eros quis urna consectetur, ac fringilla tortor pharetra. Fusce id aliquet odio, eu tincidunt erat
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className='row d-flex justify-content-around'>
              <div style={inlineShadow} className='card col-3'>
                <h3 className='text-info mx-auto pt-2'>MAC Applications</h3>
                <p className='text-info col-6 inline-Text' style={{ letterSpacing: '1px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. facilisis eros quis urna consectetur, ac fringilla tortor pharetra. Fusce id aliquet odio, eu tincidunt erat
                </p>
              </div>
              <div style={inlineShadow} className='card col-3'>
                <h3 className='text-info mx-auto pt-2'>ML Applications</h3>
                <p className='text-info col-6 inline-Text' style={{ letterSpacing: '1px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. facilisis eros quis urna consectetur, ac fringilla tortor pharetra. Fusce id aliquet odio, eu tincidunt erat
                </p>
              </div>
              <div style={inlineShadow} className='card col-3'>
                <h3 className='text-info mx-auto pt-2'>Cloud Applications</h3>
                <p className='text-info d-flex px-auto col-6 inline-Text' style={{ letterSpacing: '1px' }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. facilisis eros quis urna consectetur, ac fringilla tortor pharetra. Fusce id aliquet odio, eu tincidunt erat
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default Ourdomain;
