package org.carolinafintechhub.moviehub.Controller;

import org.carolinafintechhub.moviehub.Service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class CommentController {

    @Autowired
    private CommentService commentService;

    @GetMapping(value= "/")


}
