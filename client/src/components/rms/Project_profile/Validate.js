

const Validate = (values) => {
    let errors={};
    
    if(!values.clientname){
        errors.clientname="* Please Enter Client Name"
    }
    if(!values.projectname){
        errors.projectname="* Please Enter Project Name"
    }
    if(!values.clientemail){
        errors.clientemail="* Please Enter Client E-Mail"
    }else if(!/\S+@\S+\.\S+/.test(values.clientemail)){
        errors.clientemail="* Please Enter Valid E-Mail"
    }
    if(!values.password){
        errors.password="* Please Enter Password"
    }else if(values.password.length < 8){
        errors.password="* Password must be in 8 Characters"
    }
    if(!values.startdate){
        errors.startdate="* Please Select Start Date"
    }
    if(!values.enddate){
        errors.enddate="* Please Select End Date"
    }
    if(!values.status){
        errors.status="* Please Select Status"
    }
    return errors;
};

export default Validate;
