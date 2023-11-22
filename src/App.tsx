import { Box, Typography } from "@mui/material";

import Header from "./components/Header";
import sus from "./assets/bg.webp";

const App = () => {
  return (
    <Box
      id="appBg"
      m={"1rem"}
      display={"flex"}
      height={"80rem"}
      width={"100%"}
      flexDirection={"column"}
      sx={{
        backgroundImage: `url(${sus})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Header />

      <Box mt={"15rem"} ml={"40rem"} display={"flex"} flexDirection={"column"}>
        <Box
          sx={{
            width: "10rem",
            height: "1px",
            backgroundColor: "white",
          }}
        ></Box>

        <Typography
          mt={"4rem"}
          color={"white"}
          fontSize={"72px"}
          fontWeight={600}
          lineHeight={"80px"}
        >
          Hello brother!
        </Typography>
        <Typography
          mt={"1rem"}
          color={"#02FFA3"}
          fontSize={"72px"}
          fontWeight={600}
          lineHeight={"80px"}
        >
          How does it look?
        </Typography>
      </Box>
    </Box>
  );
};

export default App;
