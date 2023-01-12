import { Button, ListItem, Stack } from "@mui/material";

const Page = () => {
  return (
    <div className="container">
      <Button sx={{ my: 2 }} variant="contained">
        Add to Cart
      </Button>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <ListItem>Item 1</ListItem>
      </Stack>
    </div>
  );
};

export default Page;
