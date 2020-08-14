let _authService = null;

class AuthController {
  constructor({ AuthService }) {
    _authService = AuthService;
  }

  async singUp(request, response) {
    const { body } = request;
    const createdUser = await _authService.singUp(body);
    return response.status(201).send(createdUser);
  }

  async singIn(request, response) {
    const { body } = request;
    const credentials = await _authService.singIn(body);
    return response.send(credentials);
  }
}

module.exports = AuthController;
