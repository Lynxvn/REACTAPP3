import "./Test.css";
import Sun from './Sun.svg'
import Hinh from './Hinh.svg'
function Test() {
    const Numbers = [1, 2, 3, 4];
    const Name = "Thư";

    return (
        <>
            <div className="Total">
                <caption className="TTS1">{Name} TIME TABLE SEMESTER 1</caption>
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
                </div>

                <div className="Outline"><a href="https://www.w3schools.com/css/css_outline.asp"></a>Outline</div>

            {/*   <div>{Numbers.map()}</div> */}
            </div>
            <>
                <div className="Solar">
                    <img src={Hinh} className="Earth" alt="Earth" />
                    <img src={Sun} className="Sun" alt="Sun" />
                </div>

            </>

        </>
    )
}
export default Test;

// 1. ôn react css 
// 2. how to create react component : 3 steps 
// 4. ôn bài java script : Map, array, object, how to write function , index , 
// 5. practice map , object is {key,value } pair , how to get key and value