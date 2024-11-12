import { Box, TextField, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <Box style={{ display: "flex", alignItems: "center" }}>
      <TextField label="Search" variant="outlined" fullWidth sx={{ marginRight: 1 }} />
      <IconButton color="primary">
        <SearchIcon />
      </IconButton>
    </Box>
  );
}
