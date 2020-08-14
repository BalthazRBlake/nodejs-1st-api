const BaseRepository = require('./base.repository');

let _idea = null;

class IdeaRepository extends BaseRepository {
  constructor({ Idea }) {
    super(Idea);
    _idea = Idea;
  }

  async getUserIdeas(author) {
    // eslint-disable-next-line no-return-await
    return await _idea.find({ author });
  }
}

module.exports = IdeaRepository;
