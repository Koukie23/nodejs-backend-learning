const validateContact = (req, res, next) => {
    const { name, phone } = req.body;
    if(!name){
        return res.status(400).json({
            message: 'Name is required'
        });
    }
    if(phone!=undefined && !/^\d{11}$/.test(phone)){
        return res.status(400).json({
            message: 'Phone number must be 11 digits'
        });
    }
    next();
};

module.exports = validateContact;