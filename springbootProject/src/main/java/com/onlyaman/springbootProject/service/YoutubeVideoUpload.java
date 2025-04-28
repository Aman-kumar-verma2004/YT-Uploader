package com.onlyaman.springbootProject.service;

import com.google.api.client.http.*;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.JsonFactory;
import com.google.api.client.json.jackson2.JacksonFactory;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class YoutubeVideoUpload {

    private static final String UPLOAD_URL = "https://www.googleapis.com/upload/youtube/v3/videos?uploadType=resumable&part=snippet,status";
    private static final JsonFactory JSON_FACTORY = JacksonFactory.getDefaultInstance();
    private static final HttpTransport HTTP_TRANSPORT = new NetHttpTransport();

    public String uploadVideo(String title, String desc, String visibility, MultipartFile videoFile, String accessToken) throws IOException {
        // Create request factory
        HttpRequestFactory requestFactory = HTTP_TRANSPORT.createRequestFactory();

        // Metadata for the video
        String metadata = "{\n" +
                "  \"snippet\": {\n" +
                "    \"title\": \"" + title + "\",\n" +
                "    \"description\": \"" + desc + "\",\n" +
                "    \"tags\": [\"Learn With Aman\", \"Technology\", \"Java Backend\"],\n" +
                "    \"categoryId\": 22\n" +
                "  },\n" +
                "  \"status\": {\n" +
                "    \"privacyStatus\": \"" + visibility + "\",\n" +
                "    \"embeddable\": true,\n" +
                "    \"license\": \"youtube\"\n" +
                "  }\n" +
                "}";

        // Step 1: Send metadata to initiate video upload
        HttpRequest request = requestFactory.buildPostRequest(
                new GenericUrl(UPLOAD_URL),
                ByteArrayContent.fromString("application/json", metadata)
        );
        request.getHeaders().setAuthorization("Bearer " + accessToken);
        request.getHeaders().setContentType("application/json");

        // Execute the request to get the video upload URL
        HttpResponse response = request.execute();
        String videoUploadUrl = response.getHeaders().getLocation();

        // Step 2: Upload video content
        HttpRequest httpRequest = requestFactory.buildPostRequest(
                new GenericUrl(videoUploadUrl),
                new InputStreamContent("video/*", videoFile.getInputStream())
        );
        HttpResponse httpResponse = httpRequest.execute();

        // Assuming the upload was successful, extract video ID
        String videoId = httpResponse.parseAsString(); // Modify this to extract video ID

        // Generate the URL of the uploaded video
        String videoUrl = "https://www.youtube.com/watch?v=" + videoId;

        return "Upload Successful! Video URL: " + videoUrl;
    }
}
