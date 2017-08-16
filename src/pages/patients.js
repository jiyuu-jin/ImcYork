import React from 'react'
import Link from 'gatsby-link'

const Patients = () =>
  <div className="container">
    <h2>Patient Information <span className="orange-text right"><h5>New Patient Form</h5></span></h2>
      <div className="divider"></div>
      <h3>Procedures</h3>
        <h6>
            <div className="row">
                <div className="col s12 m3">• Cardiac Monitor</div>
                <div className="col s12 m3">• SculpSure</div>
                <div className="col s12 m3">• Biometric screening</div>
                <div className="col s12 m3">• Arterial Brachial Index</div>
            </div>
            <div className="row">
                <div className="col s12 m3">• Coumadin Management</div>
                <div className="col s12 m3">• Ear Lavages</div>
                <div className="col s12 m3">• EKG/ICG</div>
                <div className="col s12 m3">• Lesion Removal</div>
            </div>
            <div className="row">
                <div className="col s12 m3">• PFT</div>
                <div className="col s12 m3">• Pulse Oximetry</div>
                <div className="col s12 m3">• Cryotherapy for Skin Lesions</div>
            </div>
        </h6>
      <div className="divider"></div>
      <h3>Insurance</h3>
      <h5>We participate with most insurance plans including the following larger networks:</h5>
      <h6>
          <div className="row">
              <div className="col s12 m3">• Aetna</div>
              <div className="col s12 m3">• Capital BlueCross</div>
              <div className="col s12 m3">• Cigna</div>
              <div className="col s12 m3">• Coventry</div>
          </div>
          <div className="row">
              <div className="col s12 m3">• Gesinger</div>
              <div className="col s12 m3">• Health America</div>
              <div className="col s12 m3">• Highmark Blueshield</div>
              <div className="col s12 m3">• Medicare</div>
          </div>
          <div className="row">
              <div className="col s12 m3">• South Central Prefered</div>
              <div className="col s12 m3">• United Health Care</div>
              <div className="col s12 m3">• Humaua</div>
              <div className="col s12 m3">• Bravo</div>
          </div>
      </h6>













  </div>;

export default Patients;
