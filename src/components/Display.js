import './Display.css'

function Display(){
    const hour = 0;
    const min = 0;
    const dist = 0;
    const flights = 0;

    return(
        <div className='backGroundBox'>
            <div className="flightBox flightCount">
                <div className="value">{flights}</div>
                <div className="label">flights</div>
            </div>

            <div className="flightBox flightDist">
                <div className="value">{dist}</div>
                <div className="label">km</div>
            </div>

            <div className="flightBox flightHours">
                <div className="value">{hour}<span className="unit"> H</span></div>
                <div className="value">{min}<span className="unit"> M</span></div>
            </div>

        </div>
    );
}

export default Display;