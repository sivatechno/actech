

const Validate = (values) => {
    let errors={};
    
    if(!values.clientname){
        errors.clientname="* Please Enter Client_name"
    }
    if(!values.projectname){
        errors.projectname="* Please Enter Project_name"
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
    if(!values.startdate){
        errors.startdate="* Please Select StartDate"
    }
    if(!values.enddate){
        errors.enddate="* Please Select EndtDate"
    }
    return errors;
};

export default Validate;
