import { Box, styled, Typography, Link } from "@mui/material";
import { Email } from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Banner = styled(Box)`
  background-image: url(https://www.ashokleyland.com/backend/in/wp-content/uploads/sites/2/2021/02/Contact-us_topbanner_cropped.jpg);
  width: 100%;
  height: 50vh;
  background-position: left 0px top -100px;
  background-size: cover;
`;

const Wrapper = styled(Box)`
  padding: 20px;
  & > h3,
  & > h5 {
    margin-top: 50px;
  }
`;

const Text = styled(Typography)`
  color: #878787;
`;

const Contact = () => {
  return (
    <Box>
      <Banner />
      <Wrapper>
        <Typography variant="h3">Getting in touch is easy!</Typography>
        <Text variant="h5">
          Reach out to me on
          <Link
            href="https://www.linkedin.com/in/dev-suraj/"
            color="inherit"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          or send me an Email
          <Link
            href="mailto:surajybtg@gmial.com?Subject=This is a subject"
            target="_blank"
            color="inherit"
          >
            <Email />
          </Link>
          .
        </Text>
      </Wrapper>
    </Box>
  );
};

export default Contact;
