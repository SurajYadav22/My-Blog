import { styled, Box, Typography } from "@mui/material";

const Image = styled(Box)`
  width: 100%;
  background: url(https://png.pngtree.com/background/20210709/original/pngtree-laptop-color-brush-coffee-cartoon-background-on-wooden-table-picture-image_945916.jpg)
    center/55% repeat-x #000;
  height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg
const Heading = styled(Typography)`
  font-size: 50px;
  color: #ffffff;

  font-family: BaskervilleFull;
  line-height: 1;
`;

const SubHeading = styled(Typography)`
  font-size: 20px;
  background: #ffffff;
`;

const Banner = () => {
  return (
    <Image>
      <Heading>WELCOME TO MY BLOG</Heading>
      <SubHeading>Let's read</SubHeading>
    </Image>
  );
};

export default Banner;
