package com.bookmark.pack.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.bookmark.pack.entity.Bookmark;

public interface BookMarkRespository extends JpaRepository<Bookmark, Long>{

}
