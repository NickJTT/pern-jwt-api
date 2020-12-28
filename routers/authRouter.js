const router = require('express').Router();
const controller = require('./../controllers/authController');
const validateInfo = require('./../middleware/validateInfo');
const authorization = require('../middleware/authorization');

router.post('/register', validateInfo, async (request, response) => {
    try {
        const { name, email, password } = request.body;
        const token = await controller.register(name, email, password);
        if (token.length > 0)
            return response.json({ token });
        return response.status(401).json('User already exist!');
    } catch (exception) {
        console.error(exception.message);
        return response.status(500).json('Server Error!');
    }
});

router.post('/login', validateInfo, async (request, response) => {
    try {
        const { email, password } = request.body;
        const token = await controller.login(email, password);
        if (token.length > 0)
            return response.json({ token });
        return response.status(401).json('Password or Email is incorrect!');
    } catch (exception) {
        console.error(exception.message);
        return response.status(500).json('Server Error!');
    }
});

router.get('/is-verified', authorization, async (request, response) => {
    try {
        return response.json(true);
    } catch (exception) {
        console.error(exception.message);
        return response.status(500).json('Server Error!');
    }
});

module.exports = router;
