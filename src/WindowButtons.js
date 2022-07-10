import './WindowButtons.css'

const WindowButton = () => {



    const fetchStats = () => {
        let url = "https://yokogawarotorinfo.azurewebsites.net/api/Function1?code=C8Fhp53BsSjfgYLOKQFVWm4FitWFlygKm2V_Gc3rAyNCAzFuEY2fMw==";
        fetch(url)
            .then(res => res.json())
            .then(data => {
                let rpm = data.MotorInfo.RPM;
                let temp = data.MotorInfo.temprature;
                let status = data.MotorInfo.OverallStatus;

                document.getElementById("statRpm").innerText = rpm;
                document.getElementById("statTemp").innerText = temp;
                document.getElementById("statStatus").innerText = status;

             });
    };




    return (
        <div className="WindowButton">
            <div id="windowButtonGrid">
                <button id="fanSwitch" className="button">Fan Switch</button>
                 <button id="wireframe" className="button">Wireframe</button>
                 <button id="refresh" className="button" onClick={() => fetchStats()}>Refresh </button>
            </div>
        </div>
    );
}

export default WindowButton;
