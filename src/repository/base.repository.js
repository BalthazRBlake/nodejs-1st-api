class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async get(id) {
    return this.model.findById(id);
  }

  async getAll(pageSize = 5, pageNum = 1) {
    const skips = pageSize * (pageNum - 1);
    return this.model.find().skip(skips).limit(pageSize);
  }

  async create(entity) {
    return this.model.create(entity);
  }

  async update(id, entity) {
    return this.model.findByIdAndUpdate(id, entity, { new: true });
  }

  async delete(id) {
    this.model.findByIdAndDelete(id);
    return true;
  }
}

module.exports = BaseRepository;
