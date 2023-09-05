const UserModel = require("../model/user.model");

class UserService {
    constructor() {
        this.userModel = new UserModel();
    }
    async findByEmail(email) {
        const validasi = await this.userModel.findByEmail(email);
        if (validasi) {
            return validasi;
        } else {
            throw new Error('user not found');
        }
    }
}

module.exports = UserService;