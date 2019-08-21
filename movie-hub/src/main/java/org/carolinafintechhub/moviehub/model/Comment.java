package org.carolinafintechhub.moviehub.model;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String text;
    private LocalDateTime timestamp;
    @ManyToOne
    @JoinColumn(nullable = true, name = "discussion_id",referencedColumnName = "id")
    private Discussion discussion;

    public Comment(String title, String text, LocalDateTime timestamp, Discussion discussion) {
        this.title = title;
        this.text = text;
        this.timestamp = timestamp;
        this.discussion = discussion;
    }
}
