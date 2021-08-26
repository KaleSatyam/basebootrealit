package com.realnet.comm.controller;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.realnet.comm.entity.Post;
import com.realnet.comm.repository.PostRepository;
import com.realnet.exceptions.ResourceNotFoundException;

@RestController
@RequestMapping(value = "/api", produces = MediaType.APPLICATION_JSON_VALUE)
public class PostController {

	@Autowired
	private PostRepository postRepository;

	@GetMapping("/posts")
	public Page<Post> getAllPosts(Pageable pageable) {
		return postRepository.findAll(pageable);
	}

	@PostMapping("/posts")
	public Post createPost(@Valid @RequestBody Post post) {
		return postRepository.save(post);
	}

	@PutMapping("/posts/{postId}")
	public Post updatePost(@PathVariable Long postId, @Valid @RequestBody Post postRequest) {
		return postRepository.findById(postId).map(post -> {
			post.setTitle(postRequest.getTitle());
			post.setDescription(postRequest.getDescription());
			post.setContent(postRequest.getContent());
			post.setComments(postRequest.getComments());
			return postRepository.save(post);
		}).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
	}

	@DeleteMapping("/posts/{postId}")
	public ResponseEntity<?> deletePost(@PathVariable Long postId) {
		return postRepository.findById(postId).map(post -> {
			postRepository.delete(post);
			return ResponseEntity.ok().build();
		}).orElseThrow(() -> new ResourceNotFoundException("PostId " + postId + " not found"));
	}
}