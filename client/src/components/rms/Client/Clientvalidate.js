

const Clientvalidate = (values) => {
    let errors={};
    
    if(!values.clientname){
        errors.clientname="* Please Enter Client_name"
    }
    if(!values.companyname){
        errors.companyname="* Please Enter company_name"
    }
    if(!values.clientemail){
        errors.clientemail="* Please Enter Client_email"
    }else if(!/\S+@\S+\.\S+/.test(values.clientemail)){
        errors.clientemail="* Please Enter Valid Email"
    }
    if(!values.password){
        errors.password="* Please Enter Password"
    }else if(values.password.length < 8){
        errors.password="* Password must be in 8 Characters"
    }
    if(!values.Address){
        errors.Address="* Please Select Address"
    }
    if(!values.Country){
        errors.Country="* Please Select Country"
    }
    if(!values.State){
        errors.State="* Please Select State"
    }
    if(!values.City){
        errors.City="* Please Select City"
    }
    if(!values.Pincode){
        errors.Pincode="* Please Select Pincode"
    }
   
    if(!values.startdate){
        errors.startdate="* Please Select StartDate"
    }
    if(!values.enddate){
        errors.enddate="* Please Select EndtDate"
    }
    return errors;
};

export default Clientvalidate;
