import React from 'react'

const mainColor = {
    background: "red",
    width: "100%",
    height: "400px",
    marginTop: "20px",
    marginLeft: "20px"
}

function Main() {
    return (
        <div style={mainColor}>

            {this.props.yellow}

        </div>
    )
}

export default Main
