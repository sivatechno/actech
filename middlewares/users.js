const authpage = (permissions) => {
    return(req,res,next) => {
        const userRole = req.body.role
        if(permissions.includes(userRole)) {
            next()
        }
        else{
            res.status(401).json("You dont have a permission")
        }
    }
};


module.exports = {authpage};