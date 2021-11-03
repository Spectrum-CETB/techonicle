import React, { Component } from 'react';
import banner from './banner-image.png'
import './Style.css';


export class Homepage extends Component {
    render() {
        return (
            /*<div className="navbar navbar-expand-lg p-3">
                <div className="container">
                    <a href="#" className="navbar-brand"><h3>Techonicle</h3></a>

            <button className="navbar-toggler navbar-light " type="button" data-bs-toggle="collapse" data-bs-target="#navcontent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navcontent">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                <button type="button">About Us</button>
                </li>
                <li className="nav-item">
                <button type="button">Contacts</button>
                </li>
                <li className="nav-item">
                <button type="button">Get Started</button>
                </li>
              </ul>
            </div>
            </div> */
        
        

    <div className="banner text-center mt-5">
        <div className="bundle">
          <div className="d-md-flex px-5  align-items-center justify-content-between">
            <div className="banner-text">
              <h1>Techonicle - A Place to read,write,learn and explore tech </h1><br/>
              <h4>On any tech domains you can think about!</h4><br/>
              <a href="#about"><button className="xplr">Start Writing</button></a>
            </div>
            <img className="img-fluid d-sm-block" src={banner} alt="banner"></img>
          </div>
        </div>

     <section>
     <p className="b_title">#Trending Today</p>
      <div className="horizontal row px-5 pt-5 pb-2">
        
        <div className="col-md-4">
          <div className=" trend-blog p-1">
            <div className="mb-2" style={{display: 'flex', flexDirection: 'row', padding: '10px', textAlign:'justify', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
                  <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                  <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                      <div className="blog me-2"></div>
                      <p className="p-0 m-0" style={{ fontWeight: '500'}}>Oct 30</p>
                      <p className="p-0 m-0 ms-2" style={{display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside'}}><span class="list">4 min read</span></p>
                  </div>
              </div>
              
            </div>
          </div>

        </div>
        <div className="col-md-4">
          <div className="p-1 trend-blog ">
            <div className="pt-2 mb-2" style={{display: 'flex', flexDirection: 'row', padding: '10px', textAlign:'justify', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
                  <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                  <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                      <div className="blog me-2"></div>
                      <p className="p-0 m-0" style={{ fontWeight: '500'}}>Oct 30</p>
                      <p className="p-0 m-0 ms-2" style={{display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside'}}><span class="list">4 min read</span></p>
                  </div>
              </div>
              
            </div>
          </div>

        </div>
        <div className="col-md-4">
          <div className="p-1 trend-blog ">
            <div className="mb-2" style={{display: 'flex', flexDirection: 'row', padding: '10px', textAlign:'justify', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
                  <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                  <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                      <div className="blog me-2"></div>
                      <p className="p-0 m-0" style={{ fontWeight: '500'}}>Oct 30</p>
                      <p className="p-0 m-0 ms-2" style={{display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside'}}><span class="list">4 min read</span></p>
                  </div>
              </div>
              
            </div>
          </div>
         </div>
        </div>
      </section>
    
      <section>
      <div className="horizontal row px-5 pb-5">
      <div className="col-md-4">
          <div className="p-1 trend-blog ">
            <div className="mb-2" style={{display: 'flex', flexDirection: 'row', padding: '10px', textAlign:'justify', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
                  <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                  <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                      <div className="blog me-2"></div>
                      <p className="p-0 m-0" style={{ fontWeight: '500'}}>Oct 30</p>
                      <p className="p-0 m-0 ms-2" style={{display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside'}}><span class="list">4 min read</span></p>
                  </div>
              </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
          <div className="p-1 trend-blog ">
            <div className="mb-2" style={{display: 'flex', flexDirection: 'row', padding: '10px', textAlign:'justify', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
                  <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                  <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                      <div className="blog me-2"></div>
                      <p className="p-0 m-0" style={{ fontWeight: '500'}}>Oct 30</p>
                      <p className="p-0 m-0 ms-2" style={{display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside'}}><span class="list">4 min read</span></p>
                  </div>
              </div>
              </div>
            </div>
          </div>
          
          <div className="col-md-4">
          <div className="p-1 trend-blog ">
            <div className="mb-2" style={{display: 'flex', flexDirection: 'row', padding: '10px', textAlign:'justify', alignItems: 'center', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'space-evenly'}}>
                  <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit error provident voluptatibus obcaecati ullam alias.</h5>
                  <div className="mt-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                      <div className="blog me-2"></div>
                      <p className="p-0 m-0" style={{ fontWeight: '500'}}>Oct 30</p>
                      <p className="p-0 m-0 ms-2" style={{display: 'list-item', listStyleType: 'disc', listStylePosition: 'inside'}}><span class="list">4 min read</span></p>
                  </div>
              </div>
              </div>
            </div>
          </div>
         
          </div>
        </section>
        </div>
       
        )
        }
        }

export default Homepage