import PropTypes from "prop-types";
import { Avatar, Box, Button } from "@mui/material";
import { useRouter } from "next/router";

const Header = ({ src, title, children }) => {
  const router = useRouter();

  return (
    <header>
      <Button
        startIcon={<Avatar alt="logo" src={src} />}
        sx={{
          fontSize: "1.1rem",
          color: "black",
        }}
        onClick={() => router.push('/')}
      >
        {title}
      </Button>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        {children}
      </Box>
    </header>
  );
};

Header.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default Header;
