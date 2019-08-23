package org.carolinafintechhub.moviehub.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@RequiredArgsConstructor
@Data//getters, setters, toString, RequiredArgs Constructor
public class Comment {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY) // these two annotations auto generate id numbers for each comment; only unique values can be created
        private Long id;

        private String name;
        private String title;
        private String prompt;
        private LocalDateTime creationDate;

        @ManyToOne
        @JoinColumn(nullable = true, name = "discussion_id", referencedColumnName = "id")
        private Discussion discussion;

}




