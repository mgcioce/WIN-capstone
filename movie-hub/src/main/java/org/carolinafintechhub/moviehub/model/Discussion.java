package org.carolinafintechhub.moviehub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@AllArgsConstructor
@RequiredArgsConstructor
@Data
public class Discussion {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String title;
    private String prompt;
    private LocalDateTime creationDate;
    @OneToMany(mappedBy = "discussion",targetEntity = Comment.class)
    List<Comment> comments;

}

