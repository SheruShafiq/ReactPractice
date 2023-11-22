import { Box, Button } from "@mui/material";

import Image from "./Image";
import NavMenu from "./NavMenu";
import sus from "../assets/bippy.png";

const Header = () => {
  return (
    <Box
      height={"6rem"}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-evenly"}
    >
      <Image src={sus} />
      <NavMenu />
      <Button
        variant="contained"
        size="large"
        sx={{
          height: "2rem",
          alignSelf: "center",
          color: "black",
          fontWeight: "bold",
          backgroundColor: "#02FFA3",
          textTransform: "none",
        }}
      >
        Let's Talk
      </Button>
    </Box>
  );
};

export default Header;
