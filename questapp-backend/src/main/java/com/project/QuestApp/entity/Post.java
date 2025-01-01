package com.project.QuestApp.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="post", schema="questapp")
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name="title")
    @Size(max=60)
    private String title;

    @Column(name="text")
    @Size(max=250)
    private String text;



    public @Size(max = 60) String getTitle() {
        return title;
    }

    public void setTitle(@Size(max = 60) String title) {
        this.title = title;
    }

    public @Size(max = 250) String getText() {
        return text;
    }

    public void setText(@Size(max = 250) String text) {
        this.text = text;
    }
}
