import React, { useState } from 'react';
import '../CartForm.css'
function Form() {
    const [msg, setMsg] = useState(false);
    function handleSubmit(e) {
        e.preventDefault();
        setMsg(msg => !msg);
    }
    function handleEdit(e) {
        e.preventDefault();
        setMsg(false);
    }
    return (
        <div className='address-container'>
            <h1>Shipping Address</h1>


            {msg ? (<p id="thank-you-message">
                Thank you for Placing your Order. We will be in touch with you very soon.
            </p>) :
                (<form className='adress-form'>
                    <label for="fname">Full name:</label>
                    <input type="text" id="fname" name="fname" required=""></input>
                    <label for="lname">Address:</label>
                    <input type="text" id="lname" name="lname" required></input>
                    <label for="lname">Phone No:</label>
                    <input type="tel" id="lname" name="lname" required></input>
                    <label for="lname">State:</label>
                    <input type="text" id="lname" name="lname" required></input>
                    <label for="lname">PinCode:</label>
                    <input type="number" id="lname" name="lname" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required></input>
                    <label for="lname">Email:</label>
                    <input type="email" id="lname" name="lname" required></input>
                </form>
                )}
            <div className='form-buttons'>
                <button type="submit" onClick={handleSubmit}  >
                    Save
                </button>
                <button type="submit" onClick={handleEdit}>
                    Edit
                </button>
            </div>

        </div>
    )
}
export default Form