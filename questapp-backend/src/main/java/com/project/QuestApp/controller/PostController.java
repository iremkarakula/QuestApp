package com.project.QuestApp.controller;

import com.project.QuestApp.entity.Post;
import com.project.QuestApp.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/post")
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {

    private PostService postService;
    @Autowired
    public PostController(PostService postService) {
        this.postService = postService;
    }

    @GetMapping
    public List<Post> findAllPost(){
        return postService.findAllPost();
    }

    @PostMapping("/createpost")
    public Post createPost(@RequestBody Post post){
        postService.createPost(post);
        return post;
    }
}
