package org.carolinafintechhub.moviehub.controller;

import org.carolinafintechhub.moviehub.model.Discussion;
import org.carolinafintechhub.moviehub.service.DiscussionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping(value = "/discussion")
@RestController
public class DiscussionController {

    @Autowired
    private DiscussionService discussionService;

    @RequestMapping(value = "/all", method = RequestMethod.GET)
    @ResponseBody
    public List<Discussion> getDiscussionAll() {
        return discussionService.getAllDiscussions();
    }
}
