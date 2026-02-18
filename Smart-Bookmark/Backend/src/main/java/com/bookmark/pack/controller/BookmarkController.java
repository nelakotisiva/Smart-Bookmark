package com.bookmark.pack.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bookmark.pack.entity.Bookmark;
import com.bookmark.pack.service.BookmarkService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/bookmarks")
@CrossOrigin(origins = "http://localhost:3000")
public class BookmarkController {
	@Autowired
    private BookmarkService service;

    @GetMapping
    public List<Bookmark> getAllBookmarks() {
        return service.getAllBms();
    }

    @PostMapping
    public Bookmark addBookmark(@RequestBody Bookmark b) {
        return service.addBm(b);
    }

    @PutMapping("/{id}")
    public Bookmark updateBookmark(@PathVariable Long id, @RequestBody Bookmark b) {
        return service.updateBm(id, b);
    }

    @DeleteMapping("/{id}")
    public void deleteBookmark(@PathVariable Long id) {
        service.deleteBm(id);
    }
}
