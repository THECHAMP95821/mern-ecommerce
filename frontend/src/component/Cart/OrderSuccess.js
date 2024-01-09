import React from "react";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import "./orderSuccess.css";
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div className="orderSuccess">
      <CheckCircleOutlineIcon />

      <Typography>Your Order has been Placed successfully </Typography>
      <Link to="/orders">View Orders</Link>
    </div>
  );
};

export default OrderSuccess;