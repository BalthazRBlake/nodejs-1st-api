const BaseService = require("./base.service");
let _ideaRepository = null;

class IdeaService extends BaseService {
  constructor({ IdeaRepository }) {
    super(IdeaRepository);
    _ideaRepository = IdeaRepository;
  }

  async getUserIdeas(author) {
    if (!author) {
      const error = new Error();
      error.status = 400,
      error.message = "userId must be provided";
      throw error;
    }

    return await _ideaRepository.getUserIdeas(author);
  }

  async upVoteIdea(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400,
      error.message = "ideaId must be provided";
      throw error;
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404,
      error.message = "idea not found";
      throw error;
    }

    idea.upVotes.push(true);

    return await _ideaRepository.update(ideaId, { upVotes: idea.upVotes });
  }

  async downVoteIdea(ideaId) {
    if (!ideaId) {
      const error = new Error();
      error.status = 400,
      error.message = "ideaId must be provided";
      throw error;
    }

    const idea = await _ideaRepository.get(ideaId);

    if (!idea) {
      const error = new Error();
      error.status = 404,
      error.message = "idea not found";
      throw error;
    }

    idea.downVotes.push(true);

    return await _ideaRepository.update(ideaId, { downVotes: idea.downVotes });
  }
}

module.exports = IdeaService;