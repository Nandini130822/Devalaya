import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Affiliatecards = ({ howtoreach }) => {
  const styles = {
    card: {
      position: 'relative',
      maxWidth: 320,
      margin: "20px",
    },
    mediaContainer: {
      height: 200,
      position: 'relative',
      overflow: 'hidden',
    },
    media: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark filter
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: '48px',
      textAlign: 'center',
    },
  };

  return (
    <div className="affiliate_card">
      <Card style={styles.card} sx={{  boxShadow: 3}}>
        <div style={styles.mediaContainer}>
          <CardMedia
            component="img"
            image={howtoreach.images}
            title={howtoreach.title}
            style={styles.media}
          />
          <div style={styles.overlay}>
            {howtoreach.title}
          </div>
        </div>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {howtoreach.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Book</Button>
          <Button size="small">Get more details</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Affiliatecards;
