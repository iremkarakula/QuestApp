package com.project.QuestApp.service;

import com.project.QuestApp.entity.Post;

import java.util.List;

public interface PostService {

    Post createPost(Post post);

    List<Post> findAllPost();
}
