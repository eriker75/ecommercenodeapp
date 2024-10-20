import React, { useState } from "react";
import {
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  ExpandLess,
  ExpandMore,
  Menu as MenuIcon,
  MenuOpen as MenuOpenIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

interface SubMenuItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
}

interface MenuItem {
  icon: React.ReactNode;
  text: string;
  link?: string;
  subItems?: SubMenuItem[];
}

interface SidebarProps {
  menuItems: MenuItem[];
  isExpanded: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  menuItems,
  isExpanded,
  onToggle,
}) => {
  const [openItems, setOpenItems] = useState<{ [key: string]: boolean }>({});

  const handleItemClick = (text: string) => {
    setOpenItems((prev) => ({ ...prev, [text]: !prev[text] }));
  };

  const renderListItem = (item: MenuItem | SubMenuItem, depth: number = 0) => {
    console.log(depth);
    return (
      <Tooltip
        title={item.text}
        placement="right"
        disableHoverListener={isExpanded}
      >
        <ListItemButton
          onClick={() =>
            "subItems" in item ? handleItemClick(item.text) : null
          }
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          {isExpanded && (
            <>
              <ListItemText primary={item.text} />
              {"subItems" in item &&
                item.subItems &&
                item.subItems.length > 0 &&
                (openItems[item.text] ? <ExpandLess /> : <ExpandMore />)}
            </>
          )}
        </ListItemButton>
      </Tooltip>
    );
  };

  return (
    <div>
      <div
        className="flex items-center justify-between px-3 py-2"
        style={{ height: "52px" }}
      >
        <IconButton onClick={onToggle}>
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
      <List
        sx={{
          width: isExpanded ? 240 : 65,
          transition: "width 0.3s",
          overflowX: "hidden",
          bgcolor: "background.paper",
        }}
      >
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            {item.subItems ? (
              renderListItem(item)
            ) : (
              <Link to={item.link || "#"} style={{ color: "#212121" }}>
                {renderListItem(item)}
              </Link>
            )}
            {item.subItems && (
              <Collapse in={openItems[item.text]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding style={{backgroundColor: "#ddd"}}>
                  {item.subItems.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.link || "#"}
                      style={{ color: "#212121" }}
                    >
                      {renderListItem(subItem, 1)}
                    </Link>
                  ))}
                </List>
              </Collapse>
            )}
          </React.Fragment>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
