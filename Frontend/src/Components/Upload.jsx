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
  Select
} from "@mui/material";
import TitleIcon from "@mui/icons-material/Title";
import DescriptionIcon from "@mui/icons-material/Description";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import VisibilityIcon from '@mui/icons-material/Visibility';

import React from "react";

function Upload() {
  return (
    <div>
      <Container maxWidth="sm">
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
            <Box display={'flex'} alignContent={'center'} justifyContent={'center'}>
              <input type="file" accept="video/" id="video-upload" style={{display:'none'}} onChange={null}/>
              <label htmlFor="video-upload" >
                <Button variant="contained" component='span' color="secondary" startIcon={<CloudUploadIcon />} >Upload Video</Button>
              </label>
            </Box>

            <FormControl >
              <InputLabel>Visibility</InputLabel>
              <Select
              label="Visibility"
              slotProps={{
                input: {
                  startAdornment:(
                    <InputAdornment>
                      <VisibilityIcon />
                    </InputAdornment>
                  )
                }
              }}
              >
                
              </Select>
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </div>
  );
}

export default Upload;
