import React from "react";
import PropTypes from "prop-types";
import {Helmet} from "react-helmet";

import Header from "./Header";
import {Box} from "@material-ui/core";

const Layout = ({children, pageName}) => {
  let className = "";

  if (pageName) {
    className = `${className} page-${pageName}`;
  }

  return (
    <>
      <Helmet bodyAttributes={{class: className}}>
        <title>VotrCrwd</title>
      </Helmet>
      <div>
        <Header/>
        <Box
          width={"60%"}
          justifyContent="center"
          alignItems="center"
          className={"App"}
        >
          {children}
        </Box>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  pageName: PropTypes.string,
};

export default Layout;
