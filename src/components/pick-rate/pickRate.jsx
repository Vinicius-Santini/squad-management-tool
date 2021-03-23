import React from 'react'
import './pickRate.css'

const PickRate = ( {players} ) =>{
    
    const orderedByPick = players.sort((a, b) => (a.pick_rate < b.pick_rate) ? 1 
    : ((a.pick_rate > b.pick_rate) ? -1 : 0));
    const mostPickedPlayer = orderedByPick[0];
    const lessPickedPlayer = orderedByPick[orderedByPick.length - 1]
    
    return (
        <div className="pick-rate-section">
            
            <div className="most-picked-side">
                <div className="test1">
                    <div className="most-picked-side-title">
                        Most picked player
                    </div>
                    <div className="most-picked-side-data">
                        <div className="most-picked-side-photo">
                            <div className="pick-rate-photo-content">{ mostPickedPlayer != null ? 
                                `${mostPickedPlayer.first_name.charAt(0)}${mostPickedPlayer.last_name.charAt(0)}` : ''}
                            </div>
                        </div>
                        <div className="most-picked-side-percentage">{ mostPickedPlayer != null ? `${mostPickedPlayer.pick_rate}%` : '' }
                        </div>
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
                        <div className="less-picked-side-photo">
                            <div className="pick-rate-photo-content">{ lessPickedPlayer != null ? 
                            `${lessPickedPlayer.first_name.charAt(0)}${lessPickedPlayer.last_name.charAt(0)}` : ''}</div>
                        </div>
                        <div className="less-picked-side-percentage">{ lessPickedPlayer != null ? `${lessPickedPlayer.pick_rate}%` : '' }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PickRate