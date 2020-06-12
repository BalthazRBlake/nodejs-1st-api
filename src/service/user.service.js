const BaseService = require("./base.service");
let _userRepository = null;

class UserService extends BaseService {
  constructor({ UserRepository }) {
    super(UserRepository);
    _userRepository = UserRepository;
  }

  async getUSerByUserName(username) {
    return await _userRepository.getUSerByUserName(username);
  }
}

module.exports = UserService;