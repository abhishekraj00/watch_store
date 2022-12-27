function validation(data){
    const error = {}
    const nameregx = /^[a-zA-Z ]*$/;
    const emailregx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const numberregx = /^\d+$/;

    if(data.fname === ""){
        error.fname = "Please enter your first name"
    }else if(!nameregx.test(data.fname)){
        error.fname = "Please enter valid name"
    }

    if(data.lname === ""){
        error.lname = "Please enter your last name"
    }else if(!nameregx.test(data.lname)){
        error.lname = "Please enter valid name"
    }

    if(data.address === ""){
        error.address = "Please enter your address"
    }else if(data.address.trim().length < 10){
        error.address = "Minimum 10 character required"
    }

    if(data.email === ""){
        error.email = "Please enter your email"
    }else if(!emailregx.test(data.email)){
        error.email = "Please enter valid email"
    }

    if(data.pincode === ""){
        error.pincode = "Please enter your pincode"
    }else if(!numberregx.test(data.pincode)){
        error.pincode = "Please enter valid pincode"
    }else if(data.pincode.length !== 6){
        error.pincode = "Pincode must be 6 digit"
    }

    if(data.city === ""){
        error.city = "Please enter your city"
    }else if(!nameregx.test(data.city)){
        error.city = "Please enter valid city"
    }

    if(data.state === ""){
        error.state = "Please enter your state"
    }else if(!nameregx.test(data.state)){
        error.state = "Please enter valid state"
    }

    if(data.country === ""){
        error.country = "Please enter your coutry"
    }else if(!nameregx.test(data.country)){
        error.country = "Please enter valid country"
    }

    return error;

}

export default validation;