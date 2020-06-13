const { generateToken } = require("../helper/jwt.helper");
let _userService = null;

class AuthService {
  constructor({ UserService }){
    _userService = UserService;
  }

  async singUp(user) {
    const { username } = user;
    const userExists = await _userService.getUserByUserName(username);

    if (userExists) {
      const error = new Error();
      error.status = 401;
      error.message = "username has already been taken."
      throw error;
    }

    return await _userService.create(user);
  }

  async singIn(user) {
     const { username, password } = user;
     const userExists = await _userService.getUserByUserName(username);

     if (!userExists) {
      const error = new Error();
      error.status = 400;
      error.message = "Wrong credentials"
      throw error;
    }

    const validPassword = userExists.comparePasswords(password);

    if (!validPassword) {
      const error = new Error();
      error.status = 400;
      error.message = "Wrong credentials"
      throw error;
    }

    const userToEncode = {
      username: userExists.username,
      id: userExists._id
    };

    const token = generateToken(userToEncode);

    return { token, user: userExists };
  }
}

module.exports = AuthService;