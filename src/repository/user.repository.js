const BaseRepository = require('./base.repository');

let _user = null;

class UserRepository extends BaseRepository {
  constructor({ User }) {
    super(User);
    _user = User;
  }

  async getUserByUserName(username) {
    // eslint-disable-next-line no-return-await
    return await _user.findOne({ username });
  }
}

module.exports = UserRepository;
