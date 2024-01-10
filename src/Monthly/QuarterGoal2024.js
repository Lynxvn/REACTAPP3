import stylesQ from "./stylesQ";
import Banhxe from './Banhxe.svg';
function QuarterGoal2024() {
  return (
    <>
      <div className="QuarterGoal2024">
        <header className="QuarterGoal2024-header">
          <img style={stylesQ.img} src={Banhxe} className="QuarterGoal2024-logo" alt="logo" />
        </header>
      </div>

      <body>
        <p>
          <h1 style={stylesQ.headerstyle} >"QuarterGoal2024"</h1>
          <h2 style={stylesQ.H2Style}>GOALS</h2>
          <div style={stylesQ.ListStyle}>
            <div>Change rental area - chưa </div>
            <div>Create a business connecting AUS and VN sau tet </div>
          </div>
        </p>
      </body>
    </>
  )
}
export default QuarterGoal2024;