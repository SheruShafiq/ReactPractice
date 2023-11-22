import { Box } from "@mui/material";

export type ImageProps = {
  src: string;
};

const Image = ({ src }: ImageProps) => {
  return (
    <Box
      component="img"
      mt={"1rem"}
      sx={{
        maxHeight: 100,
        maxWidth: 100,
      }}
      alt="The house from the offer."
      src={src}
    />
  );
};

export default Image;
