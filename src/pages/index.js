import React from 'react'
import { Link } from 'gatsby'
import SimpleSlider from '../components/simpleslider'
import SectionWithBg from '../components/sectionwithbg'
import ContactForm from '../components/contactform'
import Blurb from '../components/blurb'

import YoutubeEmbedVideo from 'youtube-embed-video'

import Layout from '../components/layout'
import Image from '../components/image'

const heroImgUrl = require('../dist/img/hero-img.svg')
const c1Url = require('../dist/img/c1.png')
const c2Url = require('../dist/img/c2.png')
const c3Url = require('../dist/img/c3.png')
const c4Url = require('../dist/img/c4.png')
const playUrl = require('../dist/img/play.svg')
const iconUrl = require('../dist/img/icon.svg')
const realUrl = require('../dist/img/real.svg')
const footerUrl = require('../dist/img/footer.png')
const youtubeId = 'RnDC9MXSqCY'


const IndexPage = () => (
  <Layout>

  
       <section className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start">
                        <label>Advancing Real Estate Into The 21st Century</label>
                        <h1>The Real Estate Blockchain Initiative</h1>
                        <a className="btn-blue" href="#">Learn More</a>
                    </div>
                    <div className="col-12 col-md-7">
                        <img src={heroImgUrl} alt=""/>
                    </div>
                    <div className="clients-slider">
                       <SimpleSlider>
                        <div className="item">
                              <div>
                                  <img src={c1Url} alt=""/>
                              </div>
                          </div>
                          <div className="item">
                              <div>
                                  <img src={c2Url} alt=""/>
                              </div>
                          </div>
                          <div className="item">
                              <div>
                                  <img src={c3Url} alt=""/>
                              </div>
                          </div>
                          <div className="item">
                              <div>
                                  <img src={c4Url} alt=""/>
                              </div>
                          </div>
                       </SimpleSlider>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5 d-flex flex-column justify-content-center align-items-start">
                        <h2>About RBI</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua. Ut enim ad mini veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    <div class="col-12 col-md-6 offset-md-1">
                        <div class="video-bg d-flex justify-content-center align-items-center">
                          <YoutubeEmbedVideo videoId={youtubeId} suggestions={false} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h2 class="h1">Blockchain<br/>Applications</h2>
                    </div>
                    
                    <Blurb 
                        blurbicon={iconUrl}
                        title="Property<br> management"
                        blurbbody="Real estate property transfers can be registered on a public blockchain ledger, leveraging auditability for external stakeholders and lowering bureaucracy times and costs."
                    />

                    
                    <Blurb 
                        blurbicon={iconUrl}
                        title="Home automation<br/> services"
                        blurbbody="Smart contract technologies coupled with shared transactions ledgers could automate service provision both in the context of home automation and post-occupancy management."
                    />

                    <Blurb 
                        blurbicon={iconUrl}
                        title="Home<br/> sharing"
                        blurbbody="Among decentralized applications built on top of blockchain infrastructures, automatic home sharing services represent an interesting evolution of current centralized homestay networks."
                    />

                </div>
            </div>
        </section>


       <SectionWithBg
            sectionclass="real-estate"
            bgimage={realUrl}
       >
             <div class="container">
                    <div class="row">
                        <div class="col-12 col-md-12 col-lg-5">
                            <h2 class="h1">Main areas of interest in the Real Estate</h2>
                            <p>Digital asset & Risk Management: decentralized information layers enable interoperable management for trading and post trading activities, which are typically related to financial assets lifecycle. In particular, Smart Bond maps a meaningful scenario in terms of process automation and dematerialization opportunities.</p>
                        </div>
                    </div>
                </div>
       </SectionWithBg>
          
       <SectionWithBg
            sectionclass="footer"
            bgimage={footerUrl}
       >
             <div class="container">
                <div class="row">
                    <div class="col-12 col-md-5">
                        <h2 class="h1">Lorem ipusm dolor</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div class="col-12 col-md-6 offset-md-1">
                       <ContactForm />
                    </div>
                    <div class="col-12 copy-text">
                        <p>Copyright 2018, RBI</p>
                    </div>
                </div>
            </div>
       </SectionWithBg>
  </Layout>
)

export default IndexPage
