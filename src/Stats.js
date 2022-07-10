import './Stats.css'

const Stats = () => {
    return (
        <div className="Stats"> 
            <div id="statData" >
                <span className="item" id="statRpm"> RPM </span> <br/>
                <span className="item" id="statTemp"> Temperature </span> <br/>
                <span className="item" id="statStatus"> OverallStatus </span> <br/> 
            </div>
        </div> 
    );
}

export default Stats;
