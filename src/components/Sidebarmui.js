import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

function ResponsiveDrawer() {

  const navigate = useNavigate();
  const handleClick = (text)=>{

    text === "New"? navigate('/installation'): navigate('/installations')

  }
  return(
          <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              {["New", "View Installations"].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton
                    onClick={() => handleClick(text)}
                  >
                    <ListItemIcon>
                      {index % 2 === 0 ? (
                        <AddCircleOutlineOutlinedIcon />
                      ) : (
                        <PreviewOutlinedIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
  )
};

export default ResponsiveDrawer;
