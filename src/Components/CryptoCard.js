import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import classes from "./Styles/CryptoCard.module.css";
import { Box, Tooltip } from "@mui/material";

function CryptoCard({ data, CurrencyData }) {
  return (
    <Card className={classes.card}>
      <Box>
        <CardMedia
          component="img"
          height="260"
          image="https://media.istockphoto.com/vectors/blockchain-bitcoin-icon-symbol-vector-vector-id882085928?k=20&m=882085928&s=612x612&w=0&h=KjVJuPadqOEQhviae5GqYPsIqMhXZDd0PcQ6390xQkU="
          alt="green iguana"
        />
      </Box>
      <Box>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {data.base}
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {data.currency} ({CurrencyData.name})
          </Typography>
          <Typography gutterBottom variant="h6" component="div">
            {parseFloat(data.amount).toFixed(2)}
          </Typography>
        </CardContent>
        <a href="https://en.wikipedia.org/wiki/Bitcoin" target="_blank">
          <Tooltip title="About Bitcoin" arrow>
            <Button variant="outlined">Learn More BTC</Button>
          </Tooltip>
        </a>
        <a href={`https://en.wikipedia.org/wiki/${CurrencyData.name} currency`} target="_blank">
          <Tooltip title={`${data.currency} : ${CurrencyData.name}`} arrow>
            <Button variant="outlined">Learn More Currency</Button>
          </Tooltip>
        </a>
      </Box>
    </Card>
  );
}

export default CryptoCard;
