import React from 'react'
import './Services.css'

function Services() {
    return (
        <div className="services">
            <div className="service__top">
                <h4>Select a service</h4>
            </div>
            <div className="service__bottom">
                <div className="service__bottom-air">
                    <p>Air Freight</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" viewBox="0 0 48 48"  className="flight"><path d="M20.36 18"/><path  d="M42 32v-4L26 18V7c0-1.66-1.34-3-3-3s-3 1.34-3 3v11L4 28v4l16-5v11l-4 3v3l7-2 7 2v-3l-4-3V27l16 5z"/></svg>
                </div>
                <div className="service__bottom-air">
                    <p>Sea Freight</p>
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="84px" viewBox="0 0 24 24" width="84px" fill="#000000" className="flight"><rect fill="none" height="24" width="24"/><path d="M19.77,12.66l-1.12,3.97c-0.78-0.43-1.07-0.86-2.65-2.67C14.4,15.78,13.57,17,12,17c-1.53,0-2.34-1.15-4-3.04 c-1.6,1.82-1.87,2.21-2.65,2.65l-1.13-3.96L12,10.11L19.77,12.66z M15,1H9v3H6C4.9,4,4,4.9,4,6v4.62l-1.29,0.42 c-0.63,0.19-0.81,0.84-0.66,1.28L3.95,19H4c1.6,0,3.02-0.88,4-2c0.98,1.12,2.4,2,4,2s3.02-0.88,4-2c0.98,1.12,2.4,2,4,2h0.05 l1.91-6.68c0.11-0.37,0.04-1.06-0.66-1.28L20,10.62V6c0-1.1-0.9-2-2-2h-3V1L15,1z M6,9.97V6h12v3.97L12,8L6,9.97L6,9.97z M16,19.68 c-1.22,0.85-2.61,1.28-4,1.28s-2.78-0.43-4-1.28C6.78,20.53,5.39,21,4,21H2v2h2c1.38,0,2.74-0.35,4-0.99c1.26,0.64,2.63,0.97,4,0.97 s2.74-0.32,4-0.97c1.26,0.65,2.62,0.99,4,0.99h2v-2h-2C18.61,21,17.22,20.53,16,19.68L16,19.68z"/></svg>
                </div>
                <div className="service__bottom-air">
                    <p>Inland <br/>  (Truck & Barge)</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="84" height="84" className="inland" viewBox="0 0 48 48"><path d="M40 16h-6V8H6c-2.21 0-4 1.79-4 4v22h4c0 3.31 2.69 6 6 6s6-2.69 6-6h12c0 3.31 2.69 6 6 6s6-2.69 6-6h4V24l-6-8zM12 37c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm27-18l3.93 5H34v-5h5zm-3 18c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"/></svg>
                </div>
                <div className="service__bottom-air">
                    <p>Customs <br />Clerance</p> 
                    <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="84px" viewBox="0 0 24 24" width="84px" fill="#000000" className="flight"><g><rect fill="none" height="24" width="24"/></g><g><g/><g><circle cx="15.5" cy="9.5" r="1.5"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="M12,18c2.28,0,4.22-1.66,5-4H7C7.78,16.34,9.72,18,12,18z"/><path d="M11.99,2C6.47,2,2,6.48,2,12c0,5.52,4.47,10,9.99,10C17.52,22,22,17.52,22,12C22,6.48,17.52,2,11.99,2z M12,20 c-4.42,0-8-3.58-8-8c0-4.42,3.58-8,8-8s8,3.58,8,8C20,16.42,16.42,20,12,20z"/></g></g></svg>
                </div>
            </div>
        </div>
    )
}

export default Services
