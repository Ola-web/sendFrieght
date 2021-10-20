import React from 'react'
import './ImportExport.css'
import Error from '../icons/ic_error_24px.svg'
import Room from '../icons/ic_room_24px.svg'
import Calender from '../icons/calendar_today_black_24dp.svg'

function ImportExport() {
    return (
        <div className="importExport">
            <div className="importExport__top">
                <img src={Error} alt="error icon" />
            </div>
            <div className="importExport__middle">
                <div className="importExport__middle-imEx">
                    <button className="btn-imex">Import</button>
                    <button className="btn-imex">Export</button>
                </div>
                <div className="importExport__middle-input-from">
                    <img src={Room} alt="" /><span>From</span>
                    <input type="text" name="from" id="from" placeholder="City or post" />
                </div>
                <div className="importExport__middle-input-to">
                <img src={Room} alt="" /><span>To</span>
                    <input type="text" name="to" id="to" placeholder="City or post"/>
                </div>
            </div>
            <div className="importExport__bottom">
                <div className="importExport__bottom-inputDate">
                    <img src={Calender} alt="calender" />
                <input  type="text" name="date" id="date" placeholder="Ready Date" />
                </div>
                <div className="importExport__bottom-incoterms">
                    <select>
                        <option value="incoterms">Incoterms</option>
                    </select>
                    <img src={Calender} alt="calender" />
                </div>
                <div className="importExport__bottom-cargo">
                    <input type="text" placeholder="Total Cargo Value"/>
                </div>
                
            </div>
        </div>
    )
}

export default ImportExport
