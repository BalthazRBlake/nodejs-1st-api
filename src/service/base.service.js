class BaseService {
  constructor(repository) {
    this.repository = repository;
  }

  async get(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = 'id must be sent';
      throw error;
    }

    const currentEntity = await this.repository.get(id);

    if (!currentEntity) {
      const error = new Error();
      error.status = 404;
      error.message = 'not found entity';
      throw error;
    }

    return currentEntity;
  }

  async getAll(pageSize, pageNum) {
    return this.repository.getAll(pageSize, pageNum);
  }

  async create(entity) {
    return this.repository.create(entity);
  }

  async update(id, entity) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = 'id must be sent';
      throw error;
    }

    return this.repository.update(id, entity);
  }

  async delete(id) {
    if (!id) {
      const error = new Error();
      error.status = 400;
      error.message = 'id must be sent';
      throw error;
    }

    return this.repository.delete(id);
  }
}

module.exports = BaseService;
