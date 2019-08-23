package org.carolinafintechhub.moviehub.service;

import org.carolinafintechhub.moviehub.model.Comment;
import org.carolinafintechhub.moviehub.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class CommentService {

    @Autowired // creates connection to the repository
            CommentRepository commentRepository;



    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    public void deleteCommentById(long id){
        commentRepository.deleteCommentById(id);
    }

    public void save(Comment comment){
        commentRepository.save(comment);
    }

    public Comment findCommentById(long id) {
        return commentRepository.findCommentById(id);
    }

    public Comment editCommentById (long id) {
       return commentRepository.editCommentById(id);
    }

}

