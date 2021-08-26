package com.realnet.comm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.realnet.comm.entity.Post;

@Repository
public interface PostRepository extends JpaRepository<Post, Long> {
}
