import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Box } from "@mui/material";
import GET_CLIENT_MENU from "../gql/GET_CLIENT_MENU";
import { Category } from "../Types/Types";
import Categories from "../components/Categories";
import Items from "../components/Items";
import SearchBar from "../components/SearchBar";

const MenuComponent = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { data } = useQuery(GET_CLIENT_MENU, {
    variables: {
      shopId: "65f69d6facd51ca7e8beff90",
    },
  });
  const menuData: Category[] = data?.getClientMenu;
  console.log(menuData);
  if (!menuData) return null;

  const handleTabChange = (newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Box padding={3}>
      <SearchBar />
      <Categories
        activeTab={activeTab}
        handleTabChange={(_: React.SyntheticEvent, newValue: number) => {
          handleTabChange(newValue);
        }}
        menuData={menuData}
      />
      <Items activeTab={activeTab} menuData={menuData} />
    </Box>
  );
};

export default MenuComponent;
