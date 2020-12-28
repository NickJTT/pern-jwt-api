const router = require('express').Router();
const authorization = require('./../middleware/authorization');
const controller = require('./../controllers/dashBoardController');

router.get('/', authorization, async(request, response) => {
    try {
        return response.json(await controller.getUser(request.id));
    } catch (exception) {
        console.error(exception.message);
        return response.status(500).json('Server Error!');
    }
});

module.exports = router;
