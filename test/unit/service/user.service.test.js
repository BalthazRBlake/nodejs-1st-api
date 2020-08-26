/* eslint-disable no-undef */
const { UserService } = require('../../../src/service');
const { userRepositoryMock } = require('../../mocks');
const {
  userModelMock: { user, users },
} = require('../../mocks');

describe('User Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should find a user by id', async () => {
    const UserRepository = userRepositoryMock;
    UserRepository.get.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.get(user._id);
    expect(expected).toMatchObject(user);
  });

  it('Should find a user by username', async () => {
    const UserRepository = userRepositoryMock;
    UserRepository.getUserByUserName.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getUserByUserName(user.username);
    expect(expected).toMatchObject(user);
  });

  it('Should return a user collection', async () => {
    const UserRepository = userRepositoryMock;
    UserRepository.getAll.mockReturnValue(users);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.getAll();
    expect(expected).toMatchObject(users);
  });

  it('Should update a user by id', async () => {
    const UserRepository = userRepositoryMock;
    UserRepository.update.mockReturnValue(user);

    const _userService = new UserService({ UserRepository });
    const expected = await _userService.repository.update(user._id, user);
    expect(expected).toMatchObject(user);
  });

  it('Should delete a user by id', async () => {
    const UserRepository = userRepositoryMock;
    UserRepository.delete.mockReturnValue(true);

    const _userService = new UserService({ UserRepository });

    const expected = await _userService.repository.delete(user._id);
    expect(expected).toEqual(true);
  });
});
