const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = async(request, response, next) => {
    try {
        const jwtToken = request.header('token');
        if (!jwtToken)
            return response.status(403).send('Not Authorized!');
        const payload = jwt.verify(jwtToken, process.env.jwtSecret);
        request.id = payload.id;
    } catch (exception) {
        console.error(exception.message);
        return response.status(403).send('Not Authorized!');
    }
    next();
};
