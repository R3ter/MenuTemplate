import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogContent,
  Slide,
  IconButton,
} from "@mui/material";
import { Category, MenuItem } from "../Types/Types";
import CloseIcon from "@mui/icons-material/Close";
import { TransitionProps } from "@mui/material/transitions";
import { keyframes } from "@emotion/react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export default function Items({
  menuData,
  activeTab,
}: {
  menuData: Category[];
  activeTab: number;
}) {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const handleClickOpen = (item: MenuItem) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {menuData.map((category, index) => (
        <TabPanel value={activeTab} index={index} key={category.id}>
          <Typography variant="h4" gutterBottom>
            {category.title}
          </Typography>
          <Box>
            {[...category.items].map((item) => (
              <Card
                key={item.id}
                sx={{ width: "100%", marginBottom: 2 }}
                onClick={() => handleClickOpen(item)}
              >
                <CardMedia component="img" image={item.image} alt={item.title} />
                <CardContent>
                  <Typography variant="h6">{item.title}</Typography>
                  <Typography color="textSecondary">{item.desc}</Typography>
                  <Typography color="primary">₪{item.price}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </TabPanel>
      ))}

      {selectedItem && (
        <Dialog
          open={Boolean(selectedItem)}
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          PaperProps={{
            sx: {
              minWidth: "80vw",
              borderRadius: 4,
              transformOrigin: "bottom center",
              animation: `${scaleUp} 0.4s ease`,
            },
          }}
        >
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent>
            <CardMedia component="img" image={selectedItem.image} alt={selectedItem.title} />
            <Typography variant="h5" gutterBottom>
              {selectedItem.title}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              {selectedItem.desc}
            </Typography>
            <Typography color="primary">₪{selectedItem.price}</Typography>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => (
  <div role="tabpanel" id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
    {value === index && <Box padding={1}>{children}</Box>}
  </div>
);

// Define the scale-up animation with keyframes
const scaleUp = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  60% {
    transform: scale(1.02);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

// Slide Transition Component
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
