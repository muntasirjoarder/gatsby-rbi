import React from 'react'
import { Link } from 'gatsby'
import SimpleSlider from '../components/simpleslider'
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
                          <YoutubeEmbedVideo videoId="RnDC9MXSqCY" suggestions={false} />
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
                    <div class="col-12 col-md-4 app-holder">
                        <div class="inner text-center">
                            <img src={iconUrl} alt=""/>
                            <h3>Property<br/> management</h3>
                            <p>Real estate property transfers can be registered on a public blockchain ledger, leveraging auditability for external stakeholders and lowering bureaucracy times and costs.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 app-holder">
                        <div class="inner text-center">
                            <img src={iconUrl} alt=""/>
                            <h3>Home automation<br/> services</h3>
                            <p>Smart contract technologies coupled with shared transactions ledgers could automate service provision both in the context of home automation and post-occupancy management.</p>
                        </div>
                    </div>
                    <div class="col-12 col-md-4 app-holder">
                        <div class="inner text-center">
                            <img src={iconUrl} alt=""/>
                            <h3>Home<br/> sharing</h3>
                            <p>Among decentralized applications built on top of blockchain infrastructures, automatic home sharing services represent an interesting evolution of current centralized homestay networks.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

          
        
  </Layout>
)

export default IndexPage
