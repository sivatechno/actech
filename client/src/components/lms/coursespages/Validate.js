

const Validate = (values) => {
    let errors = {}
    if(!values.Select)
    {
        errors.select= "*Please Select The Field"
    }
    if(!values.Enddate)
    {
        errors.enddate= "*Please Select The Finishing Date"
    }
    if(!values.Time)
    {
        errors.time= "*Please Select The Time"
    }
    if(!values.Startdate)
    {
        errors.startdate= "*Please Select The Starting Date"
    }
    return errors;
       
    
};

export default Validate;
