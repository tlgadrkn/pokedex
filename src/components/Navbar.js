import React from "react";
import { Button } from "@material-ui/core";

const Navbar = () => {
  return (
    <div>
      <nav>
        <Button variant="outlined" color="primary">
          Get Random Pokemon
        </Button>
      </nav>
    </div>
  );
};

export default Navbar;
