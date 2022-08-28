import { Box, Link, List, ListItem, ListItemIcon } from "@mui/material";
import DiamondIcon from "components/Icons/DiamondIcon";
import HomeIcon from "components/Icons/HomeIcon";
import JoystickIcon from "components/Icons/JoystickIcon";
import PersonIcon from "components/Icons/PersonIcon";
import { centerFlex } from "utils/sxUtils";
import { MenuItemEntryPropsType } from "./MenuItemEntry";

export const LeftMenuItems: MenuItemEntryPropsType[] = [
  {
    icon: HomeIcon,
    url: "/",
    active: true,
  },
  {
    icon: PersonIcon,
    url: "https://google.com",
  },
  {
    icon: JoystickIcon,
    url: "https://google.com",
  },
  {
    icon: DiamondIcon,
    url: "https://google.com",
  },
];

export type AppLeftMenuPropsType = {};

const AppLeftMenu: React.VFC<AppLeftMenuPropsType> = () => {
  // *************** RENDER *************** //
  return (
    <Box>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {LeftMenuItems.map((item, index: number) => {
          return (
            <ListItem
              key={index}
              button
              component={Link}
              href={item.url}
              disabled={item.active}
              target="_blank"
              rel="noopener"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid transparent",
                width: "60px",
                height: "60px",
                maxWidth: "100%",
                borderRadius: "6px",
                background: item.active
                  ? `linear-gradient(123.49deg, rgba(176, 72, 253, 0.15) 8.63%, rgba(98, 22, 210, 0.15) 25.73%, rgba(62, 78, 204, 0.15) 42.83%, rgba(62, 117, 213, 0.15) 62.96%)`
                  : undefined,
                ...(item.active
                  ? {
                      border: "1px solid",
                      borderImageSlice: 1,
                      borderImageSource:
                        "linear-gradient(123.49deg, #B048FD 8.63%, #6216D2 25.73%, #3E4ECC 42.83%, #3E75D5 62.96%)",
                      borderRadius: "6px",
                    }
                  : {}),
                "&.Mui-disabled": {
                  opacity: 1,
                },
              }}
            >
              <ListItemIcon sx={{ fontSize: "24px", ...centerFlex }}>
                <item.icon fontSize="inherit" />
              </ListItemIcon>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};

export default AppLeftMenu;
