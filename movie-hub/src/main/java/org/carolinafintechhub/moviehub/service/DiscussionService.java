package org.carolinafintechhub.moviehub.service;

import org.carolinafintechhub.moviehub.model.Discussion;
import org.carolinafintechhub.moviehub.repository.DiscussionRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class DiscussionService {
    @Autowired // creates connection to the repository
    DiscussionRepository discussionRepository;



    public List<Discussion> findAll() {
        return discussionRepository.findAll();
    }

    public void deleteDiscById(long id){
        discussionRepository.deleteDiscById(id);
    }

    public void save(Discussion discussion){
        discussionRepository.save(discussion);
    }

    public Discussion findDiscById(long id) {
        return discussionRepository.findDiscById(id);
    }
}

