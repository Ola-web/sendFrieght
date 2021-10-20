import React from 'react'
import './Cargo.css'

function Cargo() {
    return (
        <div className="cargo">
            <div className="cargo__top">
                <h3>Cargo Details</h3>
                <div className="cargo__top-container">
                    <label className="cargo__top-dengerous">
                        <input type="checkbox" />
                        <div className="slider round"></div>
                    </label>
                    <span className="dangerous">Dangerous Cargo (ex. Chemicals, Battery)</span>
                </div>
                
               
            </div>
            <div className="cargo__middle">
                <div className="cargo__middle-btn">
                    <button className="total">Total Dimensions</button>
                    <button className="package">Package Details</button>
                </div>
            </div>
            <div className="cargo__bottom">
                <div className="volume">
                    <input type="text" placeholder="cbm" />
                    <span>Total Volume</span>
                </div>
                <div className="weight">
                    <input type="text" placeholder="kg" />
                    <span>Total Weight</span>
                </div>
            </div>
        </div>
    )
}

export default Cargo
