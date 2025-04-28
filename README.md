YT Uploader

YT Uploader is a Spring Boot-based application that allows users to upload videos directly to YouTube using YouTube's Data API. The application provides an interface for users to input video details such as title, description, visibility, and the video file itself. Once the video is uploaded, the application communicates with YouTube's servers to upload the content, and returns a success message if the upload is successful.

 Features

- Video Upload: Allows users to upload videos to YouTube with specified metadata such as title, description, and visibility.
- OAuth 2.0 Authentication: Utilizes OAuth tokens for authentication and authorization to upload videos to YouTube on behalf of the user.
- Multipart File Upload: Supports uploading large video files with HTTP requests.
- CORS Support: CORS (Cross-Origin Resource Sharing) is enabled to support requests from different origins (like frontend applications running on different ports).

 Technologies Used

- Spring Boot: Backend framework for building the web application.
- YouTube API: Utilized for video uploading functionality.
- Maven: Dependency management and build automation tool.
- Java 17+: Java version used for the backend logic.
- CORS: Enabled to support frontend requests.

 API Endpoint

 `POST /api/v1/uploadVideo`

- Request Parameters:
  - `title` (String): The title of the video.
  - `desc` (String): The description of the video.
  - `visibility` (String): Visibility of the video (public, private, or unlisted).
  - `videoFile` (MultipartFile): The video file to be uploaded.
  - `Authorization` (String): The OAuth 2.0 Bearer token for authenticating the user.

- Response:
  - 200 OK: Returns a success message once the video is uploaded successfully.
  - 400 Bad Request: If the upload fails due to incorrect parameters.
  - 500 Internal Server Error: If an internal server error occurs during the upload process.

 Setup and Installation

1. Clone this repository:
   
   git clone https://github.com/Aman-kumar-verma2004/YT-Uploader.git
   

2. Navigate to the project directory:
   
   cd YT-Uploader
   

3. Ensure you have Java 17+ and Maven installed.

4. Build the project:
   
   mvn clean install
   

5. Run the application:
  
   mvn spring-boot:run
  

6. The application will be available at `http://localhost:8081`.

 Contributing

Feel free to fork this repository and submit issues and pull requests. If you have any suggestions for improvement, please open an issue or create a pull request.

 License

This project is open-source and available under the MIT License.



Feel free to adapt it further based on your requirements! 
Made with Love by RANGER (aka AMAN KUMAR VERMA).
