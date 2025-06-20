import './Display.css'

function Display(){
    const hour = 0;
    const min = 0;
    const dist = 0;
    const flights = 0;

    return(
        <div className='backGroundBox'>
            <span className='flightCount'>{flights} flights</span>
            <span className='flightDist'>{dist} km</span>
            <span className='flightHours'>{hour} H {min} M</span>
        </div>
    );
}

export default Display