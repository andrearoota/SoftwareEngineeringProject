import React from 'react';

class MoneyPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return <div>
            <button onClick={this.props.apriMenu}>Menu</button>
        </div>;
    }
}

export default MoneyPage;