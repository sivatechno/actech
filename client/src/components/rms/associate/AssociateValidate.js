
export const AssociateProfileValidate = (values) => {
    let errors={};

    if(!values.firstname){
        errors.firstname="* Please Enter FirstName"
    }
    if(!values.lastname){
        errors.lastname="* Please Enter Lastname"
    }
    if(!values.email){
        errors.email="* Please Enter email"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="* Please Enter Valid Email"
    }
    if(!values.country){
        errors.country="* Please enter the Country"
    }
    if(!values.city){
        errors.city="* Please enter the city"
    }
    if(!values.address){
        errors.address="* Please enter the Address"
    }
    if(!values.state){
        errors.state="* Please enter the State"
    }
    if(!values.phonenumber){
        errors.phonenumber="* Please enter the Phone Number"
    }else if( !/^[0-9\b]+$/.test(values.phonenumber)){
        errors.phonenumber="* Please enter the integer values"
    }
    if(!values.postalcode){
        errors.postalcode="* Please enter the Postal Code"
    }else if( !/^[0-9\b]+$/.test(values.postalcode)){
        errors.postalcode="* Please enter the integer values"
    }
    if(!values.dob){
        errors.dob="* Please enter the Date "
    }
    return errors;
};

export const AssociateEducationValidate = (values) => {
    let errors={};

    if(!values.sslcboard){
        errors.sslcboard="* Please Enter SSLC Board"
    }
    if(!values.sslcschoolname){
        errors.sslcschoolname="* Please Enter School Name"
    }
    if(!values.sslcyearpassedout){
        errors.sslcyearpassedout="* Please Enter year passed out"
    }else if( !/^[0-9\b]+$/.test(values.sslcyearpassedout)){
        errors.sslcyearpassedout="* Please enter Integer values"
    }
    if(!values.sslcmark){
        errors.sslcmark="* Please enter the Mark"
    }else if( !/^[0-9\b]+$/.test(values.sslcmark)){
        errors.sslcmark="* Please Enter Integer value"
    }
    if(!values.hscboard){
        errors.hscboard="* Please Enter Board"
    }
    if(!values.hscchoolname){
        errors.hscchoolname="* Please Enter School Name"
    }
    if(!values.hscyearpassedout){
        errors.hscyearpassedout="* Please Enter Passed out year"
    }else if( !/^[0-9\b]+$/.test(values.hscyearpassedout)){
        errors.hscyearpassedout="* Please enter the integer values"
    }
    if(!values.hscmark){
        errors.hscmark="* Please enter the Mark"
    }else if( !/^[0-9\b]+$/.test(values.hscmark)){
        errors.hscmark="* Please enter the integer values"
    }
    if(!values.university){
        errors.university="* Please enter the University"
    }
    if(!values.college){
        errors.college="* Please enter the College"
    }
    if(!values.passedoutyear){
        errors.passedoutyear="* Please enter the Address"
    }else if( !/^[0-9\b]+$/.test(values.passedoutyear)){
        errors.passedoutyear="* Please enter the integer values"
    }
    if(!values.degree){
        errors.degree="* Please enter the Degree"
    }
    if(!values.cgpa){
        errors.cgpa="* Please enter the CGPA"
    }else if( !/^[0-9\b]+$/.test(values.cgpa)){
        errors.cgpa="* Please enter the integer values"
    }
    if(!values.qualification){
        errors.qualification="* Please enter the Qualification"
    }
    return errors;
};

export const AssociateCompanyValidate = (values) => {
    let errors={};

    if(!values.company){
        errors.company="* Please Enter Company Name"
    }
    if(!values.designation){
        errors.designation="* Please Enter Designation"
    }
    if(!values.companyaddress){
        errors.companyaddress="* Please Enter Company Address"
    }
    if(!values.yearsofexp){
        errors.yearsofexp="* Please Enter years Of Experience"
    }else if( !/^[0-9\b]+$/.test(values.yearsofexp)){
        errors.yearsofexp="* Please enter the integer values"
    }
    if(!values.currentsalary){
        errors.currentsalary="* Please enter the Country"
    }else if( !/^[0-9\b]+$/.test(values.currentsalary)){
        errors.currentsalary="* Please enter the  integer values"
    }
    if(!values.expectsalary){
        errors.expectsalary="* Please enter the city"
    }else if( !/^[0-9\b]+$/.test(values.expectsalary)){
        errors.expectsalary="* Please enter the  integer values"
    }
    return errors;
};

export const AssociateCertificateValidate = (values) => {
    let errors={};

    if(!values.institutename){
        errors.institutename="* Please Enter Institute Name"
    }
    if(!values.instituteaddress){
        errors.instituteaddress="* Please enter the Country"
    }
    if(!values.coursename){
        errors.coursename="* Please Enter Course name"
    }
    if(!values.duration){
        errors.duration="* Please Enter Duration"
    }else if( !/^[0-9\b]+$/.test(values.duration)){
        errors.duration="* Please enter the integer values"
    }
    if(!values.project){
        errors.project="* Please enter the Country"
    }
    if(!values.projectduration){
        errors.projectduration="* Please Enter Project Duration"
    }else if( !/^[0-9\b]+$/.test(values.projectduration)){
        errors.projectduration="* Please enter the integer values"
    }
    if(!values.primaryskill){
        errors.primaryskill="* Please enter the Country"
    }
    if(!values.secondaryskill){
        errors.secondaryskill="* Please enter the Country"
    }
    return errors;
};
// export default  AssociateEducationValidate , AssociateProfileValidate ;