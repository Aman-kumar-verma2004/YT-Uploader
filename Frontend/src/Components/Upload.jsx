import {
  Container,
  Paper,
  Typography,
  Box,
  TextField,
  InputAdornment,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import VisibilityIcon from "@mui/icons-material/Visibility";
import PublishIcon from "@mui/icons-material/Publish";
import toast from "react-hot-toast"
import axios from "axios"
import React from "react";
import { useState } from "react";
import { useAuth } from "../Helper/AuthContext";

function Upload() {
  const { token } = useAuth();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [visibility, setVisibility] = useState("");
  const [videoFile, setVideoFile] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false)

  function fileBoxChange(event) {
    setVideoFile(event.target.files[0]);
  }

  function changeValue(event) {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "title") {
      setTitle(value);
    } else if (name === "desc") {
      setDesc(value);
    } else if (name === "visibility") {
      setVisibility(value);
    } else {
    }
  }

  async function formSubmitted() {
    try{
      setLoading(true)
      console.log(videoFile);
    const videoUploadUrl = "http://localhost:8081/api/v1/uploadVideo";
    const formData = new FormData();
    formData.append("title", title);
    formData.append("desc", desc);
    formData.append("visibility", visibility);
    formData.append("videoFile", videoFile);

    const response = await axios.post(videoUploadUrl, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });
    setMessage("Uploaded Successfully");
    toast.success("Uploaded Success")
    }catch(error){
      console.log(error);
      toast.error("Uploading error")
    }finally{
      setLoading(false)
    }
  }

  return (
    <div>
      <Container maxWidth="sm">
        {message && <Alert sx={{
          width:'100%',
          marginTop:5
        }}>{message}</Alert>}
        <Paper
          elevation={10}
          sx={{
            padding: 4,
            marginTop: 5,
            borderRadius: 10,
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            fontWeight={"bold"}
            align="center"
          >
            Upload Here
          </Typography>
          <Typography align="center">
            Please Upload your video file in MP4 format
          </Typography>

          <Box display={"flex"} flexDirection={"column"} marginTop={5} gap={5}>
            <TextField
              onChange={changeValue}
              name="title"
              label={"Video Title"}
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <TitleIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              onChange={changeValue}
              name="desc"
              label={"Video Description"}
              variant="outlined"
              fullWidth
              multiline
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <DescriptionIcon color="primary" />
                  </InputAdornment>
                ),
              }}
            />
            <Box
              display={"flex"}
              alignContent={"center"}
              justifyContent={"space-between"}
              flexDirection={"row"}
            >
              <input
                type="file"
                accept="video/"
                id="video-upload"
                style={{ display: "none" }}
                onChange={fileBoxChange}
              />
              <label htmlFor="video-upload">
                <Button
                
                  variant="contained"
                  component="span"
                  color="secondary"
                  startIcon={<CloudUploadIcon />}
                >
                  Select Video
                </Button>
                <Typography>{videoFile.name}</Typography>
              </label>
            </Box>

            <FormControl>
              <InputLabel>Visibility</InputLabel>
              <Select
                onChange={changeValue}
                name="visibility"
                label="Visibility"
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment>
                        <VisibilityIcon />
                      </InputAdornment>
                    ),
                  },
                }}
              >
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
              </Select>
            </FormControl>
            <Button
            loading={loading}
            loadingPosition="start"
            disabled={loading}
              variant="contained"
              startIcon={<PublishIcon />}
              onClick={formSubmitted}
            >
              {loading ? "Uploading" : "Upload"}
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default Upload;
