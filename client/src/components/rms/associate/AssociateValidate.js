
export const AssociateProfileValidate = (values) => {
    let errors={};

    if(!values.firstname){
        errors.firstname="* Please Enter FirstName"
    }else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.firstname)){
        errors.firstname="* Characters only accept in the field"
    }
    if(!values.lastname){
        errors.lastname="* Please Enter Lastname"
    } else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.lastname)){
        errors.lastname="* Characters only accept in the field"
    }
    if(!values.email){
        errors.email="* Please Enter email"
    }else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="* Please Enter Valid Email"
    }
    if(!values.country){
        errors.country="* Please enter the Country"
    } else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.country)){
        errors.country="* Characters only accept in the field"
    }
    if(!values.city){
        errors.city="* Please enter the city"
    } else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.city)){
        errors.city="* Characters only accept in the field"
    }
    if(!values.address){
        errors.address="* Please enter the Address"
    }
    if(!values.state){
        errors.state="* Please enter the State"
    } else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.state)){
        errors.state="* Characters only accept in the field"
    }
    if(!values.phonenumber){
        errors.phonenumber="* Please enter the Phone Number"
    }else if( !/^[0-9\b]+$/.test(values.phonenumber)){
        errors.phonenumber="* Please enter the integer values"
    }
    if(!values.postalcode){
        errors.postalcode="* Please enter the Postal Code"
    }else if( !/^[0-9\b]+$/.test(values.postalcode)){
        errors.postalcode="* Please enter the 6 integer values"
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
    } else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.sslcboard)){
        errors.sslcboard="* Characters only accept in the field"
    }
    if(!values.sslcschoolname){
        errors.sslcschoolname="* Please Enter School Name"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.sslcschoolname)){
        errors.sslcschoolname="* Characters only accept in the field"
    }
    if(!values.sslcyearpassedout){
        errors.sslcyearpassedout="* Please Enter year passed out"
    }else if( !/^[0-9\b]+$/.test(values.sslcyearpassedout)){
        errors.sslcyearpassedout="* Please enter Integer values"
    }
    if(!values.sslcmark){
        errors.sslcmark="* Please enter the Mark"
    }else if( !/^\d{1,}(\.\d{0,4})?$/.test(values.sslcmark)){
        errors.sslcmark="* Please Enter Integer value"
    }
    if(!values.hscboard){
        errors.hscboard="* Please Enter Board"
    } else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.hscboard)){
        errors.hscboard="* Characters only accept in the field"
    }
    if(!values.hscschoolname){
        errors.hscschoolname="* Please Enter School Name"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.hscschoolname)){
        errors.hscschoolname="* Characters only accept in the field"
    }
    if(!values.hscyearpassedout){
        errors.hscyearpassedout="* Please Enter Passed out year"
    }else if( !/^[0-9\b]+$/.test(values.hscyearpassedout)){
        errors.hscyearpassedout="* Please enter the integer values"
    }
    if(!values.hscmark){
        errors.hscmark="* Please enter the Mark"
    }else if( !/^[1-9]\d*(?:\.\d{0,2})?$/.test(values.hscmark)){
        errors.hscmark="* Please enter the integer values"
    }
    if(!values.university){
        errors.university="* Please enter the University"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.university)){
        errors.university="* Characters only accept in the field"
    }
    if(!values.college){
        errors.college="* Please enter the College"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.college)){
        errors.college="* Characters only accept in the field"
    }
    if(!values.passedoutyear){
        errors.passedoutyear="* Please enter the Address"
    }else if( !/^[0-9\b]+$/.test(values.passedoutyear)){
        errors.passedoutyear="* Please enter the integer values"
    }
    if(!values.degree){
        errors.degree="* Please enter the Degree"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.degree)){
        errors.degree="* Characters only accept in the field"
    }
    if(!values.cgpa){
        errors.cgpa="* Please enter the CGPA"
    }else if( !/^[+-]?\d*(?:[.,]\d*)?$/.test(values.cgpa) ){
        errors.cgpa="* Please enter the integer values"
    }
    if(!values.qualification){
        errors.qualification="* Please enter the Qualification"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.qualification)){
        errors.qualification="* Characters only accept in the field"
    }
    return errors;
};

export const AssociateCompanyValidate = (values) => {
    let errors={};

    if(!values.company){
        errors.company="* Please Enter Company Name"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.company)){
        errors.company="* Characters only accept in the field"
    }
    if(!values.designation){
        errors.designation="* Please Enter Designation"
    } else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.designation)){
        errors.designation="* Characters only accept in the field"
    }
    if(!values.companyaddress){
        errors.companyaddress="* Please Enter Company Address"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.companyaddress)){
        errors.companyaddress="* Characters only accept in the field"
    }
    if(!values.yearsofexp){
        errors.yearsofexp="* Please Enter years Of Experience"
    }else if( !/^[0-9\b]+$/.test(values.yearsofexp)){
        errors.yearsofexp="* Please enter the integer values"
    }
    if(!values.currentsalary){
        errors.currentsalary="* Please enter the current Salary"
    }else if( !/^[0-9\b]+$/.test(values.currentsalary)){
        errors.currentsalary="* Please enter the  integer values"
    }
    if(!values.expectsalary){
        errors.expectsalary="* Please enter the Expect salary"
    }else if( !/^[0-9\b]+$/.test(values.expectsalary)){
        errors.expectsalary="* Please enter the  integer values"
    }
    return errors;
};

export const AssociateCertificateValidate = (values) => {
    let errors={};

    if(!values.institutename){
        errors.institutename="* Please Enter Institute Name"
    }else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.institutename)){
        errors.institutename="* Characters only accept in the field"
    }
    if(!values.instituteaddress){
        errors.instituteaddress="* Please enter the Country"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.instituteaddress)){
        errors.instituteaddress="* Characters only accept in the field"
    }
    if(!values.coursename){
        errors.coursename="* Please Enter Course name"
    } else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.coursename)){
        errors.coursename="* Characters only accept in the field"
    }
    if(!values.duration){
        errors.duration="* Please Enter Duration"
    }else if( !/^[0-9\b]+$/.test(values.duration)){
        errors.duration="* Please enter the integer values"
    }
    if(!values.project){
        errors.project="* Please enter the Country"
    } else if(!/^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/.test(values.project)){
        errors.project="* Characters only accept in the field"
    }
    if(!values.projectduration){
        errors.projectduration="* Please Enter Project Duration"
    }else if( !/^[0-9\b]+$/.test(values.projectduration)){
        errors.projectduration="* Please enter the integer values"
    }
    if(!values.primaryskill){
        errors.primaryskill="* Please enter the Country"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.primaryskill)){
        errors.primaryskill="* Characters only accept in the field"
    }
    if(!values.secondaryskill){
        errors.secondaryskill="* Please enter the Country"
    } else if(!/^([\s\.]?[a-zA-Z]+)+$/.test(values.secondaryskill)){
        errors.secondaryskill="* Characters only accept in the field"
    }
    return errors;
};