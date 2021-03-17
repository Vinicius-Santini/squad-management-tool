import React from 'react'
import './pickRate.css'

const PickRate = () =>{
    return (
        <div className="pick-rate-section">
            
            <div className="most-picked-side">
                <div className="test1">
                    <div className="most-picked-side-title">
                        Most picked player
                    </div>
                    <div className="most-picked-side-data">
                        <img className="most-picked-side-photo" alt=""/>
                        <div className="most-picked-side-percentage">75%</div>
                    </div>
                </div>
            </div>
            <div className="midfield-circle"></div>
            <div className="less-picked-side">
                <div>
                    <div className="less-picked-side-title">
                        Less picked player
                    </div>
                    <div classname="less-picked-side-data">
                        <img className="less-picked-side-photo" alt=""/>
                        <div className="less-picked-side-percentage">25%</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickRate