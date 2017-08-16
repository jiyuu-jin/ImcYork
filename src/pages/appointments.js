import React from 'react'
import Link from 'gatsby-link'

const Appointments = () =>
    <div>
        <div className="spacer"/>
        <div className="row">
            <div className="col offset-m2 m4 center">
                <img src="/images/contact.jpg"/>
            </div>
            <div className="col m6">
                <h5>
                    We look forward to speaking with you!
                </h5>
                <a href="tel:717-843-8051">
                <h6 className="orange-text">
                    717-843-8051
                </h6>
                </a>
                <h6>
                    1-800-782-7780
                </h6>
                <h6>
                    (MDVIP) 717-850-4049
                </h6>

                <div className="divider"></div>
                <h5 className="orange-text">
                Conveniently located next to
                Memorial Hospital at
                </h5>
                <h6>
                    1777 5th Avenue
                    York, PA 17403
                </h6>
                <h6>
                    Click here for directions.
                </h6>
                <div className="divider"></div>
                <h5 className="orange-text">
                          Office Hours:
                </h5>
                <h6>
                    Monday - Thursday  8am - 5pm
                </h6>
                <h6>
                    Friday  8am - 12pm
                </h6>
            </div>
        </div>
        <br/>
        <br/>
        <br/>
    </div>;

export default Appointments;
