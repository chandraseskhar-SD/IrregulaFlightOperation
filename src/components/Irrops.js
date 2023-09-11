import React from "react";
import { Box, Grid, IconButton, Skeleton, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import header from "../Assets/header .png";

const MAX_WIDTH = "425px";
const TOOLBAR_HEIGHT = "50px";
const CHATUI_HEIGHT = `calc(100vh - ${TOOLBAR_HEIGHT})`;

const Irrops = () => {
  return (
    <Box
      sx={{
        maxWidth: MAX_WIDTH,
        marginInline: "auto",
        height: "100%",
        background:
          "linear-gradient(180deg, rgba(99, 56, 131, 0.11) 0%, rgba(99, 56, 131, 0.09) 100%), linear-gradient(0deg, #FFFFFF, #FFFFFF)",
      }}
    >
      <Toolbar />
      <VerboseView />
      
    </Box>
  );
};
export default Irrops;

const Toolbar = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#633883",
        height: TOOLBAR_HEIGHT,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "white",
        px: "20px",
        gap: "10px",
        boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
      }}
    >
      <ArrowBackIcon />
      <Typography sx={{ fontWeight: 500, color: "white" }}>Aira</Typography>
    </Box>
  );
};

const VerboseView = () => {
  return (
    <Box sx={{ overflowY: "scroll", width: "auto" }}>
      <Box
        sx={{
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          margin: "10px",
          // overflowY:"scroll"
        }}
      >
        <Box
          sx={{
            display: "flex",
            boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
            backgroundColor:"white",
            width: "350px",
            // height: "auto",
            // overflowY: "scroll",
            // overflow: "auto",
            flexDirection: "column",

          }}
        >
          <Box>
            <Typography variant="p" component="p">
              Input:
            </Typography>
          </Box>
          <Box
            style={{
              boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
              margin: "10px",
            }}
          >
            <Typography variant="p">
              Hey I cannot afford to wait that long! Is there any possibility of
              arranging an earlier flight? I would greatly appreciate that.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
            width: "350px",
            margin: "10px",
            height: "auto",
            // overflowY: "scroll",
            flexDirection: "column",
            backgroundColor:"white",
          }}
        >
          <Box>
            <Typography variant="p" component="p">
              LLM Intent:
            </Typography>
          </Box>
          <Box sx={{ display: "grid", flexDirection: "column" }}>
            <Box
              sx={{
                boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
                // height: "80px",
                width: "300px",
                margin: "10px",
              }}
            >
              Observation:
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
                // height: "80px",
                width: "300px",
                margin: "10px",
                overflow: "auto",
              }}
            >
              Thought:
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
                // height: "80px",
                width: "300px",
                margin: "10px",
                overflow: "auto",
              }}
            >
              Action:
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
            width: "350px",
            margin: "10px",
            height: "auto",
            // overflowY: "scroll",
            flexDirection: "column",
            backgroundColor:"white",
          }}
        >
          <Box>
            <Typography variant="p" component="p">
              Response Builder:
            </Typography>
          </Box>
          <Box sx={{ display: "grid", flexDirection: "column" }}>
            <Box
              sx={{
                boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
                // height: "80px",
                width: "300px",
                margin: "10px",
                overflow: "auto",
              }}
            >
              Observation:
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
                // height: "80px",
                width: "300px",
                margin: "10px",
                overflow: "auto",
              }}
            >
              Thought:
            </Box>
            <Box
              sx={{
                boxShadow: "0 0 3px 0px rgba(0, 0, 0, 0.3)",
                // height: "80px",
                width: "300px",
                margin: "10px",
                overflow: "auto",
              }}
            >
              Action:
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
