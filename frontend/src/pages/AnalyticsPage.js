import React from "react";

class AnalyticsPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <button onClick={this.props.apriMenu} className='menu'><i class='fas fa-bars'/></button>
            
        </div>;
    }
}

export default AnalyticsPage;