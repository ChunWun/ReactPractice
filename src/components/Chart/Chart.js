import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ( props ) => {

    const chartData = [
        { value:0, month:'Jan'},
        { value:0, month:'Feb'},
        { value:0, month:'Mar'},
        { value:0, month:'Apr'},
        { value:0, month:'May'},
        { value:0, month:'Jun'},
        { value:0, month:'Jul'},
        { value:0, month:'Aug'},
        { value:0, month:'Sep'},
        { value:0, month:'Oct'},
        { value:0, month:'Nov'},
        { value:0, month:'Dec'}
    ];
    
    const showChartBar = () => {
        let totalValue = 0;
        props.items.forEach((item)=> {
            chartData[item.date.getMonth()].value += item.price;
            totalValue += item.price;
        })

        return(
            chartData.map((item => {
                return (
                    <ChartBar
                        key= {item.month}
                        totalValue = {totalValue}
                        value = {item.value}
                        month = {item.month}
                    />
                );
            }))   
        )
    }

    return(
        <div className="chart">
            {showChartBar()}
        </div>
    );
}

export default Chart;