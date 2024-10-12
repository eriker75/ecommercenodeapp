import React, { useState } from 'react';
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Typography,
  IconButton,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  StarBorder,
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon,
  MoveToInbox as InboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
} from "@mui/icons-material";
import HeaderMenu from "./components/HeaderMenu";

const App: React.FC = () => {
  const height = 52;
  const expandedWidth = 240;
  const collapsedWidth = 65;
  const [isExpanded, setIsExpanded] = useState(true);
  const [open, setOpen] = useState(true);

  const handleSidebarToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="h-screen">
      <div style={{ height: `${height}px` }} className="flex items-center py-2">
        <div className="flex items-center justify-between px-3" style={{ width: `${isExpanded ? expandedWidth : collapsedWidth}px`, transition: 'width 0.3s' }}>
          <IconButton onClick={handleSidebarToggle}>
            {isExpanded ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
          {isExpanded && (
            <div className="flex items-center">
              <img src="https://mui.com/static/logo.png" alt="logo" width={32} />
              <Typography variant="h6" component="h1" className="ml-2">
                MuiDashboard
              </Typography>
            </div>
          )}
        </div>
        <div className="flex items-center flex-1 w-full">
          <HeaderMenu />
        </div>
      </div>
      <div className="flex" style={{ height: `calc(100vh - ${height}px)` }}>
        <List
          sx={{
            width: isExpanded ? expandedWidth : collapsedWidth,
            transition: 'width 0.3s',
            overflowX: 'hidden',
            bgcolor: "background.paper"
          }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Sent mail" />}
          </ListItemButton>
          <ListItemButton>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Drafts" />}
          </ListItemButton>
          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            {isExpanded && <ListItemText primary="Inbox" />}
            {isExpanded && (open ? <ExpandLess /> : <ExpandMore />)}
          </ListItemButton>
          {isExpanded && (
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
              </List>
            </Collapse>
          )}
        </List>
        <div className="bg-slate-400 text-center items-center justify-center flex flex-1">
          Content
        </div>
      </div>
    </div>
  );
};

export default App;