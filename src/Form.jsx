import { Button,TextField } from '@mui/material';
import { useState } from 'react';
function RegistrationForm() {
    //Full Name,Email,Phone Number,Address,Submit,Reset Button
    const [fullName,setFullName]=useState('');
    const [phoneNumber,setPhoneNumber]=useState('');
    const [address,setAdress]=useState('');
    function handleSubmit() {
        //st1: check wether all fields are entered
        if(!fullName){
            alert('Please fill all the mandatory fields');
            return;
        }
        //st2: Store the form data in data base
        //st3: Alert about successful submission
        alert(`Thanks For Registering Your Details:\nFull Name:${fullName} \nPhone Number:${phoneNumber} \nAdress:${address}!`);
       
        //st4: Clear the form fields
        setFullName("");
        setPhoneNumber("");
        setAdress("");

    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    fullWidth
                    margin='normal'
                    required
                />
                <TextField
                label="PhoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                fullWidth
                margin='normal'
                required
                />
                <TextField
                label="Address"
                value={address}
                onChange={(e) => setAdress(e.target.value)}
                fullWidth
                margin='normal'
                required
                />
                <Button type="submit" variant="contained" color="primary">
                    Submit
                    </Button>
            </form>
        </div>
    );
}
export default RegistrationForm