import React from 'react'
import { Carousel } from 'react-bootstrap';

const Testimonial = () => {
    const inlineShadow = {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)'
    }
    return (
        <section style={{ color: '#000', backgroundColor: '#f3f2f2' }}>
            <div className="container py-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10 col-xl-8 text-center">
                        <h3 style={{ fontSize: '50px' }} className="fw-bold mb-4">Testimonials</h3>
                        <p className="mb-4 pb-2 mb-md-5 pb-md-0 text-muted"><i>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet
                            numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum
                            quisquam eum porro a pariatur veniam.</i>
                        </p>
                    </div>
                </div>

                <Carousel controls={false} indicators={false}>
                    <Carousel.Item>
                        <div className="row text-center">
                            <div className="col-md-3 mb-4 mb-md-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Teresa May</h5>
                                        <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                                            ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4 mb-md-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Maggie McLoan</h5>
                                        <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted" >
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Autem, totam debitis suscipit saepe
                                            sapiente magnam officiis quaerat odio assumenda perferendis
                                            labore laboriosam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                        <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted" style={{ letterSpacing: '1px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Cras sit amet nibh libero, in gravida
                                            nulla metus scelerisque commodo cras purus odio,
                                            vestibulum in tempus viverra turpis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                        <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted" >
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Cras sit amet nibh libero, in gravida
                                            nulla metus scelerisque commodo cras purus odio,
                                            vestibulum in tempus viverra turpis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row text-center">
                            <div className="col-md-3 mb-4 mb-md-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Teresa May</h5>
                                        <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                                            ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4 mb-md-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Maggie McLoan</h5>
                                        <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted" >
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Autem, totam debitis suscipit saepe
                                            sapiente magnam officiis quaerat odio assumenda perferendis
                                            labore laboriosam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                        <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted" style={{ letterSpacing: '1px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Cras sit amet nibh libero, in gravida
                                            nulla metus scelerisque commodo cras purus odio,
                                            vestibulum in tempus viverra turpis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                        <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted" >
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Cras sit amet nibh libero, in gravida
                                            nulla metus scelerisque commodo cras purus odio,
                                            vestibulum in tempus viverra turpis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="row text-center">
                            <div className="col-md-3 mb-4 mb-md-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Teresa May</h5>
                                        <h6 className="font-weight-bold my-3">Founder at ET Company</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted">
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipisicing elit. Quod eos id officiis hic tenetur quae quaerat
                                            ad velit ab hic tenetur.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-4 mb-md-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(15).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Maggie McLoan</h5>
                                        <h6 className="font-weight-bold my-3">Photographer at Studio LA</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted" >
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Autem, totam debitis suscipit saepe
                                            sapiente magnam officiis quaerat odio assumenda perferendis
                                            labore laboriosam.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                        <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted" style={{ letterSpacing: '1px' }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Cras sit amet nibh libero, in gravida
                                            nulla metus scelerisque commodo cras purus odio,
                                            vestibulum in tempus viverra turpis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 mb-0">
                                <div className="cardTestimonials shadow">
                                    <div className="cardTestimonials-body py-4 mt-2">
                                        <div className="d-flex justify-content-center mb-4">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(17).webp"
                                                className="rounded-circle shadow-1-strong" width="100" height="100" />
                                        </div>
                                        <h5 className="font-weight-bold">Alexa Horwitz</h5>
                                        <h6 className="font-weight-bold my-3">Front-end Developer in NY</h6>
                                        <ul className="list-unstyled d-flex justify-content-center">
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                            <li>
                                                <img src='https://www.svgrepo.com/show/452106/star.svg' className='svg-Icon' alt='star' />
                                            </li>
                                        </ul>
                                        <p className="mb-2 inline-Text text-muted" >
                                            <svg xmlns="http://www.w3.org/2000/svg" style={{ paddingRight: '5px', paddingBottom: '7px' }} width="25" height="25" fill="currentColor" class="bi bi-quote" viewBox="0 0 16 16" id="IconChangeColor"> <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z" id="mainIconPathAttribute" fill="#03989e"></path> </svg>
                                            Cras sit amet nibh libero, in gravida
                                            nulla metus scelerisque commodo cras purus odio,
                                            vestibulum in tempus viverra turpis.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>

            </div>
        </section>
    )
}

export default Testimonial
