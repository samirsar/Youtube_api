import React,{useState,useEffect} from 'react'
import MediaCard from '../Card/MediaCard';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import BasicModal from '../Modal/BasicModal';
import { Grid } from '@mui/material';
import Spinner from '../Spinner/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

function Data(props) {
       const [result, setresult] = useState([]);
       const [query, setquery] = useState('kaun tujhe');
      
       const [len, setlen] = useState(0)
       const [dataisloaded, setdataisloaded] = useState(0);
       const [nextpage, setnextpage] = useState('')
      //  const key='AIzaSyARhGrOUrv8A5aAdhSFa3AESFcHMTt2bS0';
      const [key, setkey] = useState('AIzaSyARhGrOUrv8A5aAdhSFa3AESFcHMTt2bS0');
        ;
       
      //  pageToken=CAoQAA
      //nextPageToken
      
       useEffect(() => {
        
        setquery(props.item);
        const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${query}&pageToken=${nextpage}`;
        const fetchData = async () => {
            try {
              setresult([]);
              const response = await fetch(url);
              const json = await response.json();
              setlen(json.items.length)
              setresult(json.items);
              setdataisloaded(1);
              setnextpage(json.nextPageToken);
              console.log("next page toke",json.nextPageToken)
            
            } catch (error) {
                 let foo=alert("Previous authentication key has been complete it's today quata: Please Provide your authentication key")
                 
            }
          };
      
          fetchData();
        
       }, [props.item!=query])

       const fetchmoredata=async()=>{
        console.log("fetching data")
        setdataisloaded(0);
        setTimeout(async () => {
          
          const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${key}&q=${query}&pageToken=${nextpage}`;
          
          try {
            const response = await fetch(url);
            const json = await response.json();
            let total_len=json.items.length+(result.length)
            console.log(total_len,"ye update total hai")
  
            setlen(total_len)
            setresult(result.concat(json.items));
            setnextpage(json.nextPageToken);
            setdataisloaded(1);
          
          } catch (error) {
            console.log("error", error);
          }
        }, 2000);
        
       }
       
  return (
    <div>
        <Box my={2}>
    
       <Button variant="contained">All</Button>
        </Box>
        <InfiniteScroll
            dataLength={len}
            next={()=>{fetchmoredata()}}
            style={{ display: 'flex', flexDirection: 'column-reverse' }} 
            hasMore={true}
            loader={dataisloaded==0?<Spinner/>:null}
          >
        <Grid container style={{display:'flex',flexDirection:'row'}}>
                 {
                   
                   
                   (result)&&(result).map((elem,key)=>{
                     return(
                       <>
                       
                    <MediaCard key={key} item={elem} />
                      </>
                       
                    
                
            )
        })
    }
    </Grid>
        </InfiniteScroll>
       
        
        
    </div>
  )
}

export default Data
