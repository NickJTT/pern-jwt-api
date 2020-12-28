const UserService = require('../services/userService');

module.exports = class AuthController {
    static register = async(name, email, password) => {
        return await UserService.register(name, email, password);
    }

    static login = async(email, password) => {
        return await UserService.login(email, password);
    }
}
