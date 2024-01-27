import "./Test.css"
// import Hinh from './src/Hinh.svg';
function Test() {
    return (
        <>
            <div className="Total">
                <caption className="TTS1">TIME TABLE SEMESTER 1</caption>
                <div className="BIS" >Business Information Systems</div>
                <div className="MAPV" >Management Analysis and Problem Solving</div>
                <div className="BSSI" >Business Sustainability and Social Impact</div>
                <div className="FMS" >Future Management Skills</div>
                <div className="Buttoncontainer">
                <button className="Button">CLASS</button>
                </div>
                <button className="ButtonThu">TIME</button>
                <div className="Buttoncontainer">
                <div className="Day">Day</div>
                <div className="Time">Time</div>
                <div className="Month">Month</div>
                </div>
                {/* <div>
                <img src={Hinh} className="Earth" alt="Earth" />
                </div> */}
            </div>


        </>
    )
}
export default Test;