import React from 'react'
import Link from 'gatsby-link'

const ThirdPage = () =>
  <div>
      <div className="row">
          <div className="col s12 m4 center">
              <div className="card">
                 <div class="card-image waves-effect waves-block waves-light">
                     <h5>Dr. Thomas F. Kurland</h5>
                     <img height="200px" src="/images/Tom2.jpg"/>
                 </div>
              </div>
          </div>
          <div className="col s12 m4 center">
              <div className="card">
                  <div class="card-image waves-effect waves-block waves-light">
                      <h5>Dr. Peter A. Kouvatsos</h5>
                      <img height="200px" src="/images/Pete3.jpg"/>
                  </div>
              </div>
          </div>
          <div className="col s12 m4 center">
              <div className="card">
                  <div class="card-image waves-effect waves-block waves-light">
                      <h5>Dr. Craig Bradley</h5>
                      <img height="200px" src="/images/Bradley.jpg"/>
                  </div>
               </div>
          </div>

      <div className="row">
         <div className="col s12 offset-m4 m4 center">
             <div className="card">
                 <div class="card-image waves-effect waves-block waves-light">
                    <h5>Carol Snyder, CRNP</h5>
                    <img height="200px" src="/images/Carol.jpg"/>
                 </div>
             </div>
         </div>
       </div>

      </div>
  </div>;

export default ThirdPage;
