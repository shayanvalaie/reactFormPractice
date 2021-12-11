import React, { useState } from 'react';


const Header = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");


    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, password };
        console.log("Welcome", newUser);

    };

    const firstNameValidation = () => {
        if (firstName < 2) {
            return "FirstName must be longer than 2 characters";
        }
    };

    const lastNameValidation = () => {
        if (lastName < 2) {
            return "LastName must be longer than 2 characters";
        }
    };



    const passwordValidation = () => {
        if (password !== confirmPassword) {
            console.log("passwords must match")
            return "passwords must match";
        }
    };

    return (
        <form onSubmit={createUser}>

            <div>
                <label>FirstName: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} />
                <h3>{firstNameValidation()}</h3>
            </div>
            <div>
                <label>LastName: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} />

            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={(e) => setPassword(e.target.value)} />
            </div>



            <div>
                <label> Confirm Password: </label>
                <input type="text" onChange={(e) => setConfirmPassword(e.target.value)} />
                <h3>{lastNameValidation()}</h3>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default Header;