import { Box } from "@mui/material";
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
    </Box>
  );
};

export default App;
