import { Avatar, Box, ListItem, ListItemAvatar, Tab, Tabs, Typography } from "@mui/material";
import { Category } from "../Types/Types";

export default function Categories({
  menuData,
  activeTab,
  handleTabChange,
}: {
  menuData: Category[];
  activeTab: number;
  handleTabChange: (_: React.SyntheticEvent, newValue: number) => void;
}) {
  return (
    <Tabs value={activeTab} onChange={handleTabChange} variant="scrollable" scrollButtons="auto">
      {menuData.map((category) => (
        <Tab
          key={category.id}
          sx={{ padding: 0 }}
          label={
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <ListItemAvatar sx={{ alignSelf: "center" }}>
                <Avatar
                  sx={{
                    border: "white 1px solid",
                    width: 150,
                    height: 106,
                    borderRadius: 1,
                    pointerEvents: "none",
                  }}
                  alt={"image"}
                  src={category.image}
                />
                <Box
                  sx={{
                    alignSelf: "center",
                    textAlign: "center",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: 150,
                    height: 106,
                    backgroundColor: "black",
                    background: "linear-gradient(0deg, rgba(19,61,89,1) 0%, rgba(19,61,89,0) 60%)",
                    opacity: 1,
                    borderRadius: 1,
                    color: "white",
                  }}
                />
                <Typography
                  sx={{ color: "white" }}
                  alignSelf={"start"}
                  position={"absolute"}
                  paddingRight={1}
                  bottom={7}
                  margin={0.3}
                  color={"white"}
                >
                  {category.title}
                </Typography>
              </ListItemAvatar>
            </ListItem>
          }
        />
      ))}
    </Tabs>
  );
}
