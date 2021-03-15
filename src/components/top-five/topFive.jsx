import React from 'react'
import "./topFive.css"

const TopFive = () => {
    return (
        <div className="top-five-section">
            <div className="top-five-heading">
                <h6>Top 5</h6>
            </div>
            <div className="top-five-tables-heading">
                <div className="top-five-high-avg-title">Highest avg age</div>
                <div className="top-five-low-avg-title">Lowest avg age</div>
            </div>
            <div className="top-five-tables">
                <div className="top-five-highest-table">
                    <div className="top-five-table-item">
                        <div className="top-five-table-item-team">Inter Milan</div>
                        <div className="top-five-table-item-avg">31.9</div>
                    </div>
                </div>
                <div className="top-five-lowest-table">
                    <div className="top-five-table-item">
                        <div className="top-five-table-item-team">Arsenal FC</div>
                        <div className="top-five-table-item-avg">21.1</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopFive