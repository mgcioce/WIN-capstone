package org.carolinafintechhub.moviehub.service;

import org.carolinafintechhub.moviehub.model.Discussion;
import org.carolinafintechhub.moviehub.repository.DiscussionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DiscussionService {

    @Autowired
    private DiscussionRepository discussionRepository;

    public List<Discussion> getAllDiscussions() {
        return discussionRepository.findAll();
    }

}
