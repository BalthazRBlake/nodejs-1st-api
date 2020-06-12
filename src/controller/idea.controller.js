const { response } = require("express");

let _ideaService = null;

class IdeaController {
  constructor({ IdeaService }) {
    _ideaService = IdeaService;
  }

  async get(request, response) {
    const { ideaId } = request.params;
    const idea = await _ideaService.get(ideaId);
    return response.send(idea);
  }

  async getAll(request, response) {
    const ideas = await _ideaService.getAll();
    return response.send(ideas);
  }

  async create(request, response) {
    const { body } = request.params;
    const createdIdea = await _ideaService.create(body);
    return response.status(201).send(createdIdea);
  }

  async update(request, response) {
    const { body } = request;
    const { ideaId } = request.params;
    const updatedIdea = _ideaService.update(ideaId, body);
    return response.send(updatedIdea);
  }

  async delete(request, response) {
    const { ideaId } = request.params;
    const deletedIdea = await _ideaService.delete(ideaId);
    return deletedIdea;
  }

  async getUserIdeas(request, response) {
    const { userId } = request.params;
    const ideas = await _ideaService.getUserIdeas(userId);
    return response.send(ideas);
  }

  async upVoteIdea(request, response) {
    const { ideaId } = request.params;
    const upVotedIdea = await _ideaService.upVoteIdea(ideaId);
    return response.send(upVotedIdea);
  }

  async downVoteIdea(request, response) {
    const { ideaId } = request.params;
    const downVotedIdea = await _ideaService.downVoteIdea(ideaId);
    return response.send(downVotedIdea);
  }
}

module.exports = IdeaController;