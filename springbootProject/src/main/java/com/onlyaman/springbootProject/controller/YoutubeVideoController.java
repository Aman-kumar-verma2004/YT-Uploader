package com.onlyaman.springbootProject.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.onlyaman.springbootProject.service.YoutubeVideoUpload;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/uploadVideo")
@CrossOrigin(origins = "http://localhost:5173")  // Ensure CORS is set properly
public class YoutubeVideoController {

    private final YoutubeVideoUpload youTubeVideoUpload;

    public YoutubeVideoController(YoutubeVideoUpload youTubeVideoUpload) {
        this.youTubeVideoUpload = youTubeVideoUpload;
    }

    @PostMapping
    public ResponseEntity<String> uploadVideo(
            @RequestParam("title") String title,
            @RequestParam("desc") String desc,
            @RequestParam("visibility") String visibility,
            @RequestParam("videoFile") MultipartFile videoFile,
            @RequestHeader("Authorization") String accessToken
    ) {
        try {
            // Call the upload method and get the video URL
            String response = youTubeVideoUpload.uploadVideo(title, desc, visibility, videoFile, accessToken.replace("Bearer ", ""));
            return ResponseEntity.ok(response);  // Send the URL back as the response
        } catch (IOException e) {
            return ResponseEntity.status(500).body("Failed to upload video: " + e.getMessage());
        }
    }
}
