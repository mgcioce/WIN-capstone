package org.carolinafintechhub.moviehub.controller;

import org.carolinafintechhub.moviehub.model.Discussion;
import org.carolinafintechhub.moviehub.service.DiscussionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

public class DiscussionController {


    @Autowired
    private DiscussionService discussionService;

    @PostMapping(value = "/")
    public String home(Model model) { //creates model
        List<Discussion> discussions; //creates emply list called notes
        discussions = discussionService.findAll(); //finds all discussions in repository
        model.addAttribute("discussionBoard", discussions);  //all discussions now called discussionboard
        return "home";
    }

}
