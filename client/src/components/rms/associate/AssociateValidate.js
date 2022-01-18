const Validate = (values) => {
    let errors={};
    
    if(!values.firstname){
        errors.firstname="* Please Enter Firstname"
    }

    return errors;
};

export default Validate;
