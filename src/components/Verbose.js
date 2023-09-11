import { Box, Typography } from "@mui/material";

const MAX_WIDTH = "425px";
const TOOLBAR_HEIGHT = "50px";
const CHATUI_HEIGHT = `calc(100vh - ${TOOLBAR_HEIGHT})`;

const data = {
  type: "thought-process",
  inputQuery:
    "Hey I cannot afford to wait that long! Is there any possibility of arranging an earlier flight? I would greatly appreciate that.",
  intents: [
    {
      name: "LLM Intent",
      observation:
        "Customer disagrees with the option. So I need to find an alternate flight for an earlier date.",
      thought: "I need to ask for the preferred travel date.",
      action:
        "Pass control to Response Builder to frame sentence to customer asking for preferred travel date."
    },
    {
      name: "Response Builder LLM",
      observation:
        "Lörem ipsum ände antiprens kan jisde i astrogisk. Norsk karaokesebiktig presk.",
      thought:
        "Lörem ipsum ände antiprens kan jisde i astrogisk. Norsk karaokesebiktig",
      action:
        "Lörem ipsum ände antiprens kan jisde i astrogisk. Norsk karaokesebiktig presk."
    }
  ]
};

export default function Verbose() {
  return (
    <Box
      style={{ height: CHATUI_HEIGHT }}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        width:MAX_WIDTH
      }}
    >
      {/* Messages */}
      <Box
        sx={{
          flexGrow: 1,
          height: "100%",
          px: "20px",
          pt: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            width: "8px"
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#633883",
            borderRadius: "10px"
          }
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            color: "black",
            borderRadius: "4px",
            p: "10px"
          }}
        >
          <Typography
            sx={{ fontWeight: 500, fontSize: "16px", marginBottom: "10px" }}
          >
            Input
          </Typography>
          <Typography sx={{ fontWeight: 400, fontSize: "15px" }}>
            {data.inputQuery}
          </Typography>
        </Box>
        {data.intents.map((item, index) => (
          <Box
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "4px",
              p: "10px"
            }}
          >
            <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
              {item.name}
            </Typography>
            <Box
              border={1}
              borderColor="#D9D9D9"
              borderRadius="4px"
              p={2}
              mb={2}
              mt={2}
            >
              <Typography
                sx={{ fontWeight: 400, fontSize: "15px", marginBottom: "2px" }}
              >
                Observation:
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                {item.observation}
              </Typography>
            </Box>
            <Box
              border={1}
              borderColor="#D9D9D9"
              borderRadius="4px"
              p={2}
              mb={2}
            >
              <Typography
                sx={{ fontWeight: 400, fontSize: "15px", marginBottom: "2px" }}
              >
                Thought:
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                {item.thought}
              </Typography>
            </Box>
            <Box
              border={1}
              borderColor="#D9D9D9"
              borderRadius="4px"
              p={2}
              mb={2}
            >
              <Typography
                sx={{ fontWeight: 400, fontSize: "15px", marginBottom: "2px" }}
              >
                Action:
              </Typography>
              <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
                {item.action}
              </Typography>
            </Box>
          </Box>
          
        ))}
        
      </Box>
      {/* <Box sx={{flexGrow:2, display:"flex"}}>heloo</Box> */}
      
    </Box>
  );
}