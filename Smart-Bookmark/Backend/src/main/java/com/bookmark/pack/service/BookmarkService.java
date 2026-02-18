package com.bookmark.pack.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bookmark.pack.entity.Bookmark;
import com.bookmark.pack.repository.BookMarkRespository;

import lombok.RequiredArgsConstructor;

@Service
public class BookmarkService {
	
	@Autowired
    private BookMarkRespository repo;

    public List<Bookmark> getAllBms() {
        return repo.findAll();
    }

    public Bookmark addBm(Bookmark b) {
        return repo.save(b);
    }

    public Bookmark updateBm(Long id, Bookmark updated) {
        Bookmark b = repo.findById(id).orElseThrow();
        b.setTitle(updated.getTitle());
        b.setUrl(updated.getUrl());
        return repo.save(b);
    }

    public void deleteBm(Long id) {
        repo.deleteById(id);
    }

}
