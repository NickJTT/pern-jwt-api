const UserService = require('../services/userService');

module.exports = class DashBoardController {
    static getUser = async id => {
        return await UserService.getUserById(id);
    }
}
