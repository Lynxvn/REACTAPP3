import styles from "./styles";

function Add() {
    return (
        <p>
            <h1 style={styles.headerstyle} >"HAPPY NEW YEAR 2024"</h1>
            <h2 style={styles.H2Style} >GOALS</h2>
            <div style={styles.ListStyle}>
                <div> HSK3 </div>
                <div> Tech intership in AUS </div>
                <div><a href="https://www.austechcomp.com/" target="_blank" > Take a tech competion</a></div>
                <div>Change rental area</div>
                <div>Create a business connecting AUS and VN</div>
            </div>
        </p>
    )
}
export default Add;