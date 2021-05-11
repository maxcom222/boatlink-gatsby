import React, { useState } from "react";
import { Link } from "gatsby";
import StarRatings from 'react-star-ratings';
import Autosuggest from 'react-autosuggest';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Button from "../components/buttons";

import logo from "../images/logo.png";
import logoMobile from "../images/logo-mobile.png";
import logoLg from "../images/logo-lg.png";
import googlePlay from "../images/google-play.png";
import appStore from "../images/app-store.png";
import googlePlaySm from "../images/google-play-sm.png";
import appStoreSm from "../images/app-store-sm.png";
import googlePlayLg from "../images/google-play-lg.png";
import appStoreLg from "../images/app-store-lg.png";
import googlePlayXl from "../images/google-play-xl.png";
import appStoreXl from "../images/app-store-xl.png";
import featured1 from "../images/featured/1.png";
import featured2 from "../images/featured/2.png";
import boat from "../images/findaboat.svg";
import book from "../images/bookboat.svg";
import happy from "../images/feelfreeandhappy.svg";
import arrowRight from "../images/arrow-right.svg";
import illustrations from "../images/illustrations.png";
import iphone from "../images/iphone.png";
import payments from "../images/payments.png";
import facebook from "../images/feather-facebook.png";
import linkedin from "../images/feather-linkedin.png";
import twitter from "../images/feather-twitter.png";

const boats = [
  {
    name: 'A Boat',
    id: 1
  },
  {
    name: 'B Boat',
    id: 2
  },
  {
    name: 'C Boat 1',
    id: 3
  },
  {
    name: 'C Boat 2',
    id: 4
  }
];

function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  const regex = new RegExp('^' + escapedValue, 'i');

  return boats.filter(el => regex.test(el.name));
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  return (
    <span>{suggestion.name}</span>
  );
}

const IndexPage = () => {
  const [keyword, setKeyword] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [openMobileToggle, setOpenMobileToggle] = useState(false);

  const inputProps = {
    placeholder: "Location",
    value: keyword,
    onChange: (e, {newValue, method}) => {
      setKeyword(newValue);
    }
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  return(
    <>
      <div>
        <section className="banner-wrapper">
          <nav className="navbar navbar-expand-lg navbar-dark">
            <div className="container">
              <div className="d-flex align-items-center">
                <a className="navbar-logo" href="/"><img src={logo} alt="logo" /></a>
                <button
                  onClick={() => setOpenMobileToggle(!openMobileToggle)}
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded={openMobileToggle}
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon" />
                </button>
                <div className={`collapse navbar-collapse ${openMobileToggle ? 'open' : ''}`} id="navbarNavDropdown">
                  <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                      <a className="nav-link" href="#">HOME</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">HOW IT WORKS</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">FAQ</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">CONTACT US</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <img src={facebook} />
                      </a>
                      <a className="nav-link" href="#">
                        <img src={linkedin} />
                      </a>
                      <a className="nav-link" href="#">
                        <img src={twitter} />
                      </a>
                    </li>
                  </ul>
                  <div className="download-app-wrapper">
                    <p>Download the App</p>
                    <div>
                      <a href="#">
                        <img src={googlePlay} />
                      </a>
                      <a href="#">
                        <img src={appStore} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item d-flex align-items-center">
                    <a className="nav-btn-download">Download the App</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-btn-download" href="#">
                      <img src={googlePlaySm} />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-btn-download" href="#">
                      <img src={appStoreSm} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="navbar-logo-mobile">
                <a href="/">
                  <img src={logoMobile} />
                </a>
              </div>
            </div>
          </nav>
          <div className="banner-container d-flex align-items-center">
            <div className="banner-mask"></div>
            <div className="container">
              <div className="row d-flex justify-content-lg-center">
                <div className="w-100">
                  <div className="content">
                    <h2 className="banner-title text-center mb-40">Connecting adventure<br />
                    seekers with great boats</h2>
                    <div className="banner-search-container">
                      <h5 className="text-white">Book your vacation on yacht</h5>
                      <div className="d-flex justify-content-between">
                      <Autosuggest
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={onSuggestionsClearRequested}
                        getSuggestionValue={getSuggestionValue}
                        renderSuggestion={renderSuggestion}
                        inputProps={inputProps}
                      />
                        <Button search>Search</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="featured">
          <div className="container text-center">
            <div className="d-flex justify-content-between heading">
              <h3 className="featured-title">Listings near Torronto</h3>
              <a className="view-all link blue underline" href="#">View All 25 &gt;</a>
            </div>
            <div className="item-boat-container row">
              <div className="col-lg-3 col-md-6">
                <div className="item-boat">
                  <img src={featured1} alt="work" />
                  <h4 className="boat-name">Private boat trip for 12 guests</h4>
                  <div className="boat-attr">
                    <p>Asos, Greece</p>
                    <p>12 guests</p>
                  </div>
                  <div className="boat-footer">
                    <div>
                      <div className="d-flex align-items-center">
                        <h4 className="boat-price">$240</h4>&nbsp;
                        <p className="boat-unit">/person</p>
                      </div>
                      <div className="boat-review">
                        <StarRatings
                          rating={4}
                          starRatedColor="#FFD234"
                          numberOfStars={5}
                          name='rating'
                          starDimension="15px"
                          starSpacing="2px"
                        />
                        &nbsp;&nbsp;
                        <p className="boat-review-counts">(28)</p>
                      </div>
                    </div>
                    <a href="#" className="link blue">View &gt;</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item-boat">
                  <img src={featured2} alt="work" />
                  <h4 className="boat-name">Private boat trip for 12 guests</h4>
                  <div className="boat-attr">
                    <p>Asos, Greece</p>
                    <p>12 guests</p>
                  </div>
                  <div className="boat-footer">
                    <div>
                      <div className="d-flex align-items-center">
                        <h4 className="boat-price">$240</h4>&nbsp;
                        <p className="boat-unit">/person</p>
                      </div>
                      <div className="boat-review">
                        <StarRatings
                          rating={4}
                          starRatedColor="#FFD234"
                          numberOfStars={5}
                          name='rating'
                          starDimension="15px"
                          starSpacing="2px"
                        />
                        &nbsp;&nbsp;
                        <p className="boat-review-counts">(28)</p>
                      </div>
                    </div>
                    <a href="#" className="link blue">View &gt;</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item-boat">
                  <img src={featured1} alt="work" />
                  <h4 className="boat-name">Private boat trip for 12 guests</h4>
                  <div className="boat-attr">
                    <p>Asos, Greece</p>
                    <p>12 guests</p>
                  </div>
                  <div className="boat-footer">
                    <div>
                      <div className="d-flex align-items-center">
                        <h4 className="boat-price">$240</h4>&nbsp;
                        <p className="boat-unit">/person</p>
                      </div>
                      <div className="boat-review">
                        <StarRatings
                          rating={4}
                          starRatedColor="#FFD234"
                          numberOfStars={5}
                          name='rating'
                          starDimension="15px"
                          starSpacing="2px"
                        />
                        &nbsp;&nbsp;
                        <p className="boat-review-counts">(28)</p>
                      </div>
                    </div>
                    <a href="#" className="link blue">View &gt;</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <div className="item-boat">
                  <img src={featured2} alt="work" />
                  <h4 className="boat-name">Private boat trip for 12 guests</h4>
                  <div className="boat-attr">
                    <p>Asos, Greece</p>
                    <p>12 guests</p>
                  </div>
                  <div className="boat-footer">
                    <div>
                      <div className="d-flex align-items-center">
                        <h4 className="boat-price">$240</h4>&nbsp;
                        <p className="boat-unit">/person</p>
                      </div>
                      <div className="boat-review">
                        <StarRatings
                          rating={4}
                          starRatedColor="#FFD234"
                          numberOfStars={5}
                          name='rating'
                          starDimension="15px"
                          starSpacing="2px"
                        />
                        &nbsp;&nbsp;
                        <p className="boat-review-counts">(28)</p>
                      </div>
                    </div>
                    <a href="#" className="link blue">View &gt;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="how-work">
          <div className="container-small">
            <div className="heading text-center">
              <h2 className="title-2">How it work?</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,<br />
              porttitor rhoncus dolor purus non et luctus venen et luctus venen agna fringilla urna</p>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12 d-flex justify-content-center">
                <div className="box-howwork">
                  <img src={boat} alt="work" className="mb-30" />
                  <h4 className="mb-15">Find a boat</h4>
                  <p className="">Choose best one what you like and feel what best for you</p>
                  <a href="#" className="link blue small">
                    <img src={arrowRight} />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 d-flex justify-content-center">
                <div className="box-howwork colored">
                  <img src={book} alt="work" className="mb-30" style={{paddingBottom: 6}} />
                  <h4 className="mb-15 text-white">Book boat</h4>
                  <p className="text-white">Take you time like you want on ocean or sea</p>
                  <a href="#" className="link blue small">
                    <span>Download App</span>&nbsp;&nbsp;
                    <img src={arrowRight} />
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 d-flex justify-content-center">
                <div className="box-howwork">
                  <img src={happy} alt="work" className="mb-30" style={{paddingBottom: 8}} />
                  <h4 className="mb-15">Feel free and happy</h4>
                  <p className="">Have a best travel vacation on yacht for best relax</p>
                  <a href="#" className="link blue small">
                    <img src={arrowRight} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="company">
          <div className="container">
            <div className="row d-flex align-items-center">
              <div className="col-md-6">
                <div className="image">
                  <img src={illustrations} alt="company" />
                </div>
              </div>
              <div className="col-md-6">
                <div className="text text-1">
                  <h3 className="title-2">Creativity & Technology</h3>
                  <p className="mb-30">Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech solutions together with a team of creative experts on-call with the tools you need based on real-time results</p>
                </div>
                <div className="text text-2">
                  <h3 className="title-2">Defines our true value</h3>
                  <p className="mb-30">Some networks believe that by only offering a basic tracking system their affiliates can reach a high level of creativity. We like to set the bar a lot higher by offering you cutting-edge tech.</p>
                </div>
                <div className="d-flex download-img-wrapper">
                  <a href="#">
                    <img className="download-img" src={googlePlayLg} />
                  </a>
                  <a href="#">
                    <img className="download-img" src={appStoreLg} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="check">
          <div className="container text-center">
            <div className="content">
              <h2 className="title-2 text-white">Subscribe to have <span style={{color: '#0096EA'}}>Discount 10%</span></h2>
              <p className="text-white" style={{opacity: 0.7}}>Get the Onboarding Package for Free and enjoy our platform with<br />the support of our professional onboarding team.</p>
              <form className="form-inline d-flex justify-content-center align-items-center">
                <div className="subscribe-form-group">
                  <input type="text" placeholder="Your email" />
                  <button type="submit">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </section>
        <section className="faq">
          <div className="container">
            <div className="heading text-center">
              <h2 className="title-2">FAQ</h2>
              <p className="">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna,<br />porttitor rhoncus dolor purus non et luctus venen et luctus venen agna fringilla urna</p>
            </div>
            <div className="mb-30">
              <Accordion>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How are Boatlink better from other booking platforms?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non et luctus venen et luctus venen agna fringilla urna Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How are Boatlink better from other booking platforms?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non et luctus venen et luctus venen agna fringilla urna Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                  <AccordionItemHeading>
                    <AccordionItemButton>
                      How are Boatlink better from other booking platforms?
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non et luctus venen et luctus venen agna fringilla urna Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, 
                    </p>
                  </AccordionItemPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="d-flex justify-content-center">
              <a className="link blue underline" href="#">View All &gt;</a>
            </div>
          </div>
        </section>
        <section className="connecting">
          <div className="container d-flex justify-content-center d-flex align-items-center">
            <div className="content">
              <div className="d-flex align-items-center">
                <div>
                  <h2 className="banner-bottom-title">Connecting Adventure <br />Seekers With Great Boats</h2>
                  <h5 className="banner-bottom-text">Book motorboat or sail yacht for have a great vacation ever!</h5>
                  <div className="d-flex download-img-wrapper">
                    <a href="#">
                      <img className="download-img" src={googlePlayXl} />
                    </a>
                    <a href="#">
                      <img className="download-img" src={appStoreXl} />
                    </a>
                  </div>
                </div>
              </div>
              <img src={iphone} />
            </div>
          </div>
        </section>
        <footer className="footer">
          <div className="container">
            <div className="wrapper">
              <div className="footer-col">
                <div className="who">
                  <img src={logoLg} alt="image" className="footer-logo" />
                  <div className="social-container">
                    <a href="#">
                      <img src={facebook} />
                    </a>
                    <a href="#">
                      <img src={linkedin} />
                    </a>
                    <a href="#">
                      <img src={twitter} />
                    </a>
                  </div>
                </div>
              </div>
              <div className="footer-col">
                <div className="links">
                  <h4>Download the app</h4>
                  <ul>
                    <li>
                      <a>You can download the app for Android<br />or iOS for have a full experience</a>
                    </li>
                    <li>
                      <div className="download-img-wrapper">
                        <a href="#"><img src={googlePlay} /></a>
                        <a href="#"><img src={appStore} /></a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col">
                <div className="links">
                  <h4>Services</h4>
                  <ul>
                    <li>
                      <a href="#0">How It Works</a>
                    </li>
                    <li>
                      <a href="#0">FAQ</a>
                    </li>
                    <li>
                      <a href="#0">Terms & Conditions</a>
                    </li>
                    <li>
                      <a href="#0">Privacy</a>
                    </li>
                    <li>
                      <a href="#0">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-col">
                <div className="links">
                  <h4>Get in Touch</h4>
                  <ul>
                    <li>
                      <a href="mailto:info@boatlink.com">info@boatlink.com</a>
                    </li>
                    <li>
                      <a href="tel:+1 844-721-7120">+1 844-721-7120</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <div className="bottom">
          <div className="container d-flex justify-content-between align-items-center">
            <span className="copyright">Copyright 2021 BoatLink</span>
            <div className="d-flex align-items-center">
              <span>Supported:&nbsp;&nbsp;</span>
              <img src={payments} />
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default IndexPage
