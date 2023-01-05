import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import BasicModal from '../Modal/BasicModal';
import ShareIcon from '@mui/icons-material/Share';
import { Box } from '@mui/system';
export default function MediaCard(props) {
    const data=props.item;
  return (
    <>

    <Card sx={{ maxWidth: 345 ,mx:2,my:3}}>
      <CardMedia
        
      />
      <CardContent>
        <Box>
        <iframe
      width="345"
      height="200"
      src={`https://www.youtube.com/embed/${data.id.videoId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
 
        </Box>
        <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px'}}>
        {(data.snippet.title).substring(0,25)}.....
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {(data.snippet.description).substring(0,100)}
        </Typography>
      </CardContent>
      <CardActions>
       <BasicModal id={data.id} />
        <Button size="small"><ShareIcon/></Button>
      </CardActions>
      

    </Card>
    
    </>
  );
}