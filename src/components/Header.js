import {AppBar, Button, Toolbar} from "@material-ui/core";
import React from "react";

export default function Header() {
  return (
    <AppBar color="white" position="static">
      <Toolbar>
        <Button color="secondary" href="/">Home</Button>
        <Button color="secondary" href="/about">About</Button>
        <Button color="secondary" href="/find">Find</Button>
        <Button color="secondary" href="/register">Register</Button>
      </Toolbar>
    </AppBar>
  )
}