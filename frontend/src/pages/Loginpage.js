import React from "react";

class LoginPage extends React.Component {
    render(){
        return(
            <div>
                <form id="login">
                    Username<br />
                    <input type={"text"} />
                    <br />Password<br />
                    <input type={"password"} />
                    <br /><button>Entra</button>
                </form>
            </div>
        );
    }
}

export default LoginPage;