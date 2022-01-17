const Validate = (values) => {
    let errors={};
    
    if(!values.username){
        errors.username="* Please Enter username"
    }
    if(!values.phonenumber){
        errors.phonenumber="* Please Enter phonenumber"
    }
    if(!values.Email){
        errors.Email="* Please Enter Email"
    }else if(!/\S+@\S+\.\S+/.test(values.Email)){
        errors.Email="* Please Enter Valid Email"
    }
    if(!values.password){
        errors.password="* Please Enter Password"
    }else if(values.password.length < 8){
        errors.password="* Password must be in 8 Characters"
    }
    if(!values.Firstname){
        errors.Firstname="* Please Enter Firstname"
    }
    if(!values.Lastname){
        errors.Lastname="* Please Enter Lastname"
    }
    if(!values.country){
        errors.country="* Please Enter country"
    }
    if(!values.city){
        errors.city="* Please Enter city"
    }
    if(!values.state){
        errors.state="* Please Enter state"
    }
    if(!values.address){
        errors.address="* Please Enter address"
    }
    if(!values.postalcode){
        errors.postalcode="* Please Enter postalcode"
    }
    if(!values.uploadimage){
        errors.uploadimage="* Please Enter uploadimage"
    }
    if(!values.technology){
        errors.technology="* Please Enter Technology"
    }
    if(!values.company){
        errors.company="* Please Enter company"
    }

    return errors;
};

export default Validate;