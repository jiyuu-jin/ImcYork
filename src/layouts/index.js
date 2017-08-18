import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
require("expose-loader?$!jquery");
import "materialize-css"
import "materialize-css/dist/css/materialize.css"
import './index.css'



const Header = () =>({

    render(){
        return(
            <div>
                <nav className="white" role="navigation">
                    <div className="nav-wrapper container">
                        <Link to="/" width="96px" id="logo-container" href="#"><img className="site-logo" height="50px" src="/images/logo.png"/></Link>
                        <ul className="right hide-on-med-and-down">
                            <li><Link to="/patients/" href="#">Patient Information</Link></li>
                            <li><Link to="/physicians/">Physicians</Link></li>
                            <li><Link to="/appointments/">Appointemnts and Refills</Link></li>
                            <li><Link to="/emergencies/">Emergencies</Link></li>
                            <li><Link to="/mdvip/" className="bigger orange-text text-darken-1" >MDVIP</Link></li>
                            <li><Link to="/sculpsure/" className=" bigger orange-text text-darken-1">SculpSure</Link></li>
                            <li><Link to="/faqs/">FAQ's</Link>></li>
                        </ul>

                        <ul id="nav-mobile" className="side-nav">
                            <li><a href="#">New Patient Form</a></li>
                            <li><a href="#">The Patient Experience</a></li>
                            <li><a href="#">Physicians</a></li>
                            <li><a href="#">Appointemnts and Refills</a></li>
                            <li><a href="#">Emergencies</a></li>
                            <li><a href="#">FAQ's</a></li>
                            <li><a href="#">About Us</a></li>
                        </ul>
                        <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
                    </div>
                </nav>
            </div>
        )
    },

    componentDidMount(){
        $('.button-collapse').sideNav();
    }


});


const TemplateWrapper = ({ children }) =>
  <div>
    <Helmet
      title="Internal Medicine Consultants"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <div>
      {children()}
    </div>
      <footer className="page-footer orange">
          <div className="container">
              <div className="row">
                  <div className="col l6 s12">
                      <h5 className="white-text">Our Team</h5>
                      <p className="grey-text text-lighten-4">Every person in our office, from our receptionists to our back office staff to our physicians, operates as part of a team to provide you with the best patient experience and immediate access to our physicians.</p>
                  </div>
                  <div className="col offest-l3 l3 s12">
                      <h5 className="white-text">Connect</h5>
                      <ul>
                          <li><a className="white-text" href="#!">Link 1</a></li>
                          <li><a className="white-text" href="#!">Link 2</a></li>
                          <li><a className="white-text" href="#!">Link 3</a></li>
                          <li><a className="white-text" href="#!">Link 4</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="footer-copyright">
              <div className="container">
                  Created by  <a className="brown-text" href="http://pelkey.io"> Zachary Pelkey</a>
              </div>
          </div>
      </footer>
  </div>;

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
