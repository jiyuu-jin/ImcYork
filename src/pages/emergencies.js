import React from 'react'
import Link from 'gatsby-link'

const Emergencies = () =>
  <div>
      <div className="spacer"/>
      <div className="row">
        <div className="col offset-m2 m4 center">
            <img src="/images/emergencies.jpg"/>
        </div>
        <div className="col m6">
            <h5>
                If you or a family member is experiencing a life threatening medical emergency please
                <a href="tel:911"><span className="red-text"> call 911</span></a>  immediately.
            </h5>
            <h5>
                If you or your family member is in need of admission to Memorial Hospital or York Hospital please request one of our IMC doctors as your hospital physician.
            </h5>
            <h5>
                Once crisis care is initiated, please call our office to notify your physician of the situation.
            </h5>
            <br/>
            <h5>
                If you are experiencing a non-life threatening medical emergency please call our office for an appointment and/or medical assistance.
            </h5>
            <a href="tel:717-843-8051"><h4 className="center red-text">717-843-8051</h4></a>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>;
export default Emergencies;
