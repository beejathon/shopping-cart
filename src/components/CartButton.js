import React from "react";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const CartButton = ({itemTotal}) => {
  return (
    <div style={{ display: "block", padding: 30 }}>
      <Badge color="secondary" badgeContent={itemTotal}>
        <ShoppingCartIcon />{" "}
      </Badge>
    </div>
);
}