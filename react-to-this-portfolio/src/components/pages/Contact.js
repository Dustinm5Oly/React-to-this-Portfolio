import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';



export default function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!errorMessage) {
            console.log("Submit Form", formState)
        }
    }
    const handleChange = (e) => {
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value)
            if (!isValid) {
                setErrorMessage("Your Email is invalid")
            }
            else {
                setErrorMessage("")
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
            console.log("Handle Form", formState)
        }
    }
    return (
        <section>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlfor="name">
                        Name:
                    </label>
                    <input type="text" name="name" defaultValue={name} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlfor="email">
                        Email:
                    </label>
                    <input type="email" name="email" defaultValue={email} onBlur={handleChange} />
                </div>
                <div>
                    <label htmlfor="message">
                        Message:
                    </label>
                    <textarea name="message" rows="5" defaultValue={email} onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">
                            {errorMessage}
                        </p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}