import { Box, Button } from "@mui/material";

const NavMenu = () => {
  return (
    <Box display={"flex"} justifyContent={"space-around"} width={"50rem"}>
      <Button
        sx={{
          fontWeight: "bold",
          color: "white",
          textTransform: "none",
        }}
        variant="text"
      >
        Services
      </Button>
      <Button
        sx={{ fontWeight: "bold", color: "white", textTransform: "none" }}
        variant="text"
      >
        Expertise
      </Button>
      <Button
        sx={{ fontWeight: "bold", color: "white", textTransform: "none" }}
        variant="text"
      >
        Projects
      </Button>
      <Button
        sx={{ fontWeight: "bold", color: "white", textTransform: "none" }}
        variant="text"
      >
        Careers
      </Button>
      <Button
        sx={{ fontWeight: "bold", color: "white", textTransform: "none" }}
        variant="text"
      >
        About us
      </Button>
      <Button
        sx={{ fontWeight: "bold", color: "white", textTransform: "none" }}
        variant="text"
      >
        Blog
      </Button>
      <Button
        sx={{ fontWeight: "bold", color: "white", textTransform: "none" }}
        variant="text"
      >
        Contact
      </Button>
    </Box>
  );
};

export default NavMenu;
