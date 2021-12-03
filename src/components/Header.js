import React, { useState } from 'react'

const Header = props => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const center = {

        alignItems: "center",
        justifyContent: "center",
        padding: "50px",

    }

    const marginTop = {
        marginTop: "20px"
    }



    return (

        <div style={center}>
            <form>
                <div style={marginTop}>
                    <label>FirstName: </label>
                    <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                </div>
                <div style={marginTop}>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e) => setLastName(e.target.value)} />
                </div>
                <div style={marginTop}>
                    <label>Email: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div style={marginTop}>
                    <label>Password: </label>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div style={marginTop}>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>
                <input type="submit" value="Create User" />
            </form>




            <div>
                <h1>{firstName}</h1>
                <h1>{lastName}</h1>
                <h1>{email}</h1>
                <h1>{password}</h1>
                <h1>{confirmPassword}</h1>
            </div>
        </div>
    )
}



export default Header
