package org.carolinafintechhub.moviehub.repository;

import org.carolinafintechhub.moviehub.model.Discussion;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DiscussionRepository extends CrudRepository<Discussion,Long> {

    List<Discussion> findAll();

}
