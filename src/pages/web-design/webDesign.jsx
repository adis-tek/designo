import React from 'react';
import './web-design.scss';
import { NavLink } from 'react-router-dom';
import leaf from '../../assets/shared/desktop/bg-pattern-leaf.svg';
import CTACircles from '../../assets/web-design/desktop/bg-pattern-intro-web.svg';
import TwoCircles from '../../assets/shared/mobile/bg-pattern-design-pages-intro-mobile.svg';
import Express from '../../assets/web-design/desktop/image-express.jpg';
import Transfer from '../../assets/web-design/desktop/image-transfer.jpg';
import Photon from '../../assets/web-design/desktop/image-photon.jpg';
import Builder from '../../assets/web-design/desktop/image-builder.jpg';
import Blogr from '../../assets/web-design/desktop/image-blogr.jpg';
import Camp from '../../assets/web-design/desktop/image-camp.jpg';
import rightArrow from '../../assets/shared/desktop/icon-right-arrow.svg';

function webDesign() {
    return (
        <>
        <div className="design-container">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link rel="icon" type="image/png" sizes="32x32" href="./assets/favicon-32x32.png" />
        
        <title>Web Design</title>
        </head>
        <img src={leaf} className="background-leaf-one" />
        <body className="design-body">

        <div className="top-banner">
        <h1 className="banner-heading">Web Design</h1>
        <p className="banner-description">We build websites that serve as powerful marketing tools and bring memorable brand experiences.</p>
        <div className="circles-container">
            <img src={CTACircles} alt="circles" className="cta-banner-circles" />
            <img src={TwoCircles} alt="circles" className="two-circles-mobile" />
        </div>
        </div>

        <div className="projects-container">

        <div className="row-container">
        <div class="card">
        <img src={Express} alt="project" className="card-image" />
        <h3 className="card-title">Express</h3>
        <p className="card-description">A multi-carrier shipping website for ecommerce businesses</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Express</h3>
        <p className="tablet-card-description">A multi-carrier shipping website for ecommerce businesses</p>
        </div>
        </div>

        <div class="card">
        <img src={Transfer} alt="project" className="card-image" />
        <h3 className="card-title">Transfer</h3>
        <p className="card-description">Site for low-cost money transfers and sending money within seconds</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Transfer</h3>
        <p className="tablet-card-description">Site for low-cost money transfers and sending money within seconds</p>
        </div>
        </div>

        <div class="card">
        <img src={Photon} alt="project" className="card-image" />
        <h3 className="card-title">Photon</h3>
        <p className="card-description">A state-of-the-art music player with high-resolution audio and DSP effects</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Photon</h3>
        <p className="tablet-card-description">A state-of-the-art music player with high-resolution audio and DSP effects</p>
        </div>
        </div>

        </div>

        <div className="row-container">
        <div class="card">
        <img src={Builder} alt="project" className="card-image" />
        <h3 className="card-title">Builder</h3>
        <p className="card-description">Connects users with local contractors based on their location</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Builder</h3>
        <p className="tablet-card-description">Connects users with local contractors based on their location</p>
        </div>
        </div>

        <div class="card">
        <img src={Blogr} alt="project" className="card-image" />
        <h3 className="card-title">Blogr</h3>
        <p className="card-description">Blogr is a platform for creating an online blog or publication</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Blogr</h3>
        <p className="tablet-card-description">Blogr is a platform for creating an online blog or publication</p>
        </div>
        </div>

        <div class="card">
        <img src={Camp} alt="project" className="card-image" />
        <h3 className="card-title">Camp</h3>
        <p className="card-description">Get expert training in coding, data, design, and digital marketing</p>
        <div className="tablet-row">
        <h3 className="tablet-card-title">Camp</h3>
        <p className="tablet-card-description">Get expert training in coding, data, design, and digital marketing</p>
        </div>
        </div>

        </div>

        </div>

        <div className="page-images-container">

        <div className="app-design">
            <div className="image-text-container">
            <h1 className="image-text">App Design</h1>
            <NavLink to="/app-design">
            <h3 className="image-text-link">View Projects <img src={rightArrow} /></h3>
            </NavLink>
        </div>
        </div>
            
        <div className="graphic-design">
            <div className="image-text-container">
            <h1 className="image-text">Graphic Design</h1>
            <NavLink to="/graphic-design">
            <h3 className="image-text-link">View Projects <img src={rightArrow} /></h3>
            </NavLink>
        </div>
        </div>

        </div>
        </body>
    </div>
</>
    )
}

export default webDesign;
