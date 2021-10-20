import React from 'react'
import './AdditionalServices.css'

function AdditionalServices() {
    return (
        <div className="additionalServices">
            <div className="additionalServices__title">
                <h3>Additional Services</h3>
            </div>
            <div className="additionalServices__top">
                <div className="additionalServices__topLeft">
                    <label htmlFor="switch" className="switch">
                        <input  type="checkbox"  />
                        <div className="sliderone round"></div>
                    </label>
                    <div className="exportForwarding">
                        <h3>Export Forwarding</h3>
                        <p>We handle customs clearance and documentation.</p>
                    </div>
                </div>
                    <div className="additionalServices__topRight">
                    <label htmlFor="switch" className="switch">
                        <input type="checkbox"  />
                        <div className="sliderone round"></div>
                    </label>
                    <div className="exportForwarding">
                        <h3>Import Customs Clearance</h3>
                        <p>We handle import customs and regulatory requirements.</p>
                    </div>
               </div>
            </div>
            <div className="additionalServices__bottom">
                <div className="additionalServices__topLeft">
                    <label htmlFor="switch" className="switch">
                        <input type="checkbox"  />
                        <div className="sliderone round"></div>
                    </label>
                    <div className="exportForwarding">
                        <h3>Cargo Insurance</h3>
                        <p>Protect your cargo from logistics risks up to its full value.</p>
                    </div>
                </div>
                <div className="additionalServices__topRight adjust-margin ">
                    <label htmlFor="switch" className="switch">
                        <input type="checkbox"  />
                        <div className="sliderone round"></div>
                    </label>
                    <div className="exportForwarding">
                        <h3>Transport / Delivery</h3>
                        <p>We deliver the cargo to your door step from the ports.</p>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default AdditionalServices
