// Items.tsx

import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Category, MenuItem } from "../Types/Types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box padding={1}>{children}</Box>}
    </div>
  );
};

export default function Items({
  menuData,
  activeTab,
}: {
  menuData: Category[];
  activeTab: number;
}) {
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<MenuItem | null>(null);

  const handleClickOpen = (item: MenuItem) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  

  // Define the motion component
  const MotionDialog = motion(Dialog);

  const dialogVariants = {
    initial: {
      opacity: 0,
      y: "100vh",
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 30,
      },
    },
    exit: {
      opacity: 0,
      y: "100vh",
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      {menuData.map((category, index) => (
        <TabPanel value={activeTab} index={index} key={category.id}>
          <Typography variant="h4" gutterBottom>
            {category.title}
          </Typography>
          <Box>
            {category.items.map((item) => (
              <Card
                key={item.id}
                sx={{ width: "100%", marginBottom: 2, cursor: "pointer" }}
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

      {/* Animated Dialog */}
      <MotionDialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        PaperProps={{
          style: { borderRadius: 20, overflow: "hidden" },
          component: motion.div,
          variants: dialogVariants,
          initial: "initial",
          animate: "animate",
          exit: "exit",
        }}
        BackdropProps={{
          style: {
            backdropFilter: "blur(5px)",
          },
          // Use framer-motion for backdrop if needed
        }}
      >
        {selectedItem && (
          <>
            <DialogTitle sx={{ m: 0, p: 2 }}>
              {selectedItem.title}
              <IconButton
                aria-label="close"
                onClick={handleClose}
                sx={{
                  position: "absolute",
                  right: 8,
                  top: 8,
                }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent dividers>
              <Typography>{selectedItem.desc}</Typography>
              <Typography variant="h6" sx={{ mt: 2 }}>
                ₪{selectedItem.price}
              </Typography>
              {/* Add more item details as needed */}
            </DialogContent>
          </>
        )}
      </MotionDialog>
    </>
  );
}
