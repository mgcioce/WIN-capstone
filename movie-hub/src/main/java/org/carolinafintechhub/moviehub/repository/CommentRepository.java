package org.carolinafintechhub.moviehub.repository;

import org.carolinafintechhub.moviehub.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends CrudRepository<Comment, Long> {

    List<Comment> findAll();

    Comment deleteCommentById(long id);

    Comment save(long id);

    Comment findCommentById(long id);

}
