import React from 'react'
import Link from 'gatsby-link'

const Faqs = () =>
    <div>
        <div className="spacer"/>
        <div className="row">
            <div className="col offset-m2 m4 center">
                <img src="/images/faqs.jpg"/>
            </div>
            <div className="col m6">
                <h5>Missed Appointments</h5>
                <span className="question orange-text">Do I get charged for a missed appointment?</span>
                There is a $25.00 charge if you do not notify our staff within 24 hours in advance of your appointment.

                <h5>Medical Record Request</h5>
                <span className="question orange-text">What do I need to know about requesting my medical records?</span>
                You must come in to the office to sign a release form in person. There is a $25.00 fee if transfering records out of the practice. If you need your medical records transfered to another doctor’s office please bring their fax number.

                <h5> Insurance Cards </h5>
                <span className="question orange-text">When do I need to bring my insurance card?</span>
                Please bring your insurance card with you for every visit.

                <h5> New Patients </h5>
                <span className="question orange-text">What do I need to bring to my first appointment?</span>
                Please bring the following: driver’s license, all medication bottles, and a list of any allergies. Also, please have your medical records transfered to our office before your first appointment.

                <h5> Co-pay </h5>
                <span className="question orange-text">When do I have to pay my co-pay?</span>
                Your co-pay is due at the time of visit.
            </div>
        </div>
        <br/>
        <br/>
        <br/>
    </div>;

export default Faqs;
