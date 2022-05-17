import "./ChartBar.css";

const ChartBar = ( props ) => {

    let percentage = Math.round((props.value/props.totalValue) * 100) + '%';
    
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:percentage}}> </div>
            </div>
            <div className="chart-bar__label"> {props.month} </div>
        </div>
    );
}

export default ChartBar;