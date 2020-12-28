module.exports = (request, response, next) => {
    const { name, email, password } = request.body;

    const validateEmail = email => {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,3})+$/.test(email);
    }

    if (request.path === '/register') {
        if (![name, email, password].every(Boolean)) {
            return response.status(401).send('Missing Creditionals');
        } else if (!validateEmail(email)) {
            return response.status(401).send('Invalid Email!');
        }
    } else if (request.path === '/login') {
        if (![email, password].every(Boolean)) {
            return response.status(401).send('Missing Creditionals');
        } else if (!validateEmail(email)) {
            return response.status(401).send('Invalid Email!');
        }
    }

    next();
};
