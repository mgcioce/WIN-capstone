package org.carolinafintechhub.moviehub.repository;

import org.carolinafintechhub.moviehub.model.Discussion;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DiscussionRepository extends CrudRepository<Discussion, Long> {

    List<Discussion> findAll();
   Discussion deleteDiscById(long id);
   Discussion findDiscById(long id);

}
