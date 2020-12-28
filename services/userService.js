const pool = require('../pool');
const jwtGenerator = require('../utils/jwtGenerator');
const passwordEncryptor = require('../utils/passwordEncryptor');
const passwordComparator = require('../utils/passwordComparator');

module.exports = class UserService {
    static getUserById = async id => {
        return (await pool.query(`SELECT * FROM users WHERE id = '${ id }'`)).rows[0];
    }

    static getUserByEmail = async email => {
        return (await pool.query(`SELECT * FROM users WHERE email = '${ email }'`)).rows[0];
    }

    static userExist = async email => {
        if ((await this.getUserByEmail(email)) === undefined)
            return false;
        return true;
    }

    static register = async(name, email, password) => {
        if (await this.userExist(email))
            return '';
        password = await passwordEncryptor(password);
        const user = (await pool.query(`INSERT INTO users (name, email, password) VALUES ('${ name }', '${ email }', '${ password }') RETURNING id`)).rows[0].id;
        return jwtGenerator(user);
    }

    static login = async(email, password) => {
        if (await this.userExist(email)) {
            const user = await this.getUserByEmail(email);
            if (await passwordComparator(password, user.password))
                return jwtGenerator(user.id);
            return '';
        }
        return '';
    }
}
