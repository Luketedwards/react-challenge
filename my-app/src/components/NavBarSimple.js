import React from 'react';
import css from "./css/NavBarSimple.module.css"

class NavBarSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "Hello, guest!",
            btnText: "log in"
        };
    }



    handleClick = () => {
        this.setState((prevState) => ({
            message: prevState.message === "Hello, guest!" ? "Welcome back, user!" : "Hello, guest!",
            buttonText: prevState.buttonText === "Log in" ? "Log out" : "Log in",
        }), ()=> console.log(this.state.message))
        
    }

    render() {
        return (
            <div className={css.NavBar}>
                <h1>My Gallery</h1>
                <span>{this.state.message}</span>
                <button onClick={() => this.handleClick()}>{this.state.btnText}</button>

            </div>

        )
    }

}

export default NavBarSimple;