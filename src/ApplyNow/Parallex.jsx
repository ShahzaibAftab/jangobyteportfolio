import React, { useEffect } from 'react';
import { Jumbotron, Container } from 'react-bootstrap'; // Import directly from 'react-bootstrap'
import './Parallax.css'; // Create this CSS file to style the parallax section

const Parallax = () => {
    useEffect(() => {
        const parallaxScroll = () => {
            const parallaxContainer = document.querySelector('.parallax');
            const scrollTop = window.pageYOffset;
            parallaxContainer.style.backgroundPositionY = `-${scrollTop * 0.5}px`;
        };

        window.addEventListener('scroll', parallaxScroll);

        return () => {
            window.removeEventListener('scroll', parallaxScroll);
        };
    }, []);

    return (
        <Jumbotron fluid className="parallax">
            <Container>
                <h1>Parallax Scrolling</h1>
                <p>This is a parallax scrolling section created with React-Bootstrap.</p>
            </Container>
        </Jumbotron>
    );
};

export default Parallax;
