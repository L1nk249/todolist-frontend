
'use client'
import {Box,TextField,Button,Grid} from '@mui/material';
import { useState } from 'react';


export default function Home(){
    const [todos,setTodos]=useState([])
    const [todo,setTodo]=useState('')

const handleAdd=()=>{
    setTodos((prev)=>[... prev,todo])
    setTodo ("")
}
const handleDelete=(index)=>{
setTodos((prev)=>prev.filter((_,i)=>i!==index))
}


 return  (  <>
 <Box>
 <Grid container spacing={2}>
 <Grid item xs={6}>

   <TextField id="outlined-basic" label="TODO" variant="outlined"
   fullWidth
   value={todo}
   onChange={(e)=>setTodo(e.target.value)}/>

   </Grid>
   <Grid item xs={6}
   >

<Button variant="contained"
fullWidth
sx={{height:'100%',}}
onClick={handleAdd}

>Ajouter un ToDo</Button>
</Grid>
<Grid item xs={12}>
<ul>
   {todos.map((todo,index)=>(<li key={index}>{todo}
   < Button onClick={()=>handleDelete(index)}
   >Supprimer
  </Button>
   </li>))} 
</ul>

</Grid>
 </Grid>
 </Box>
</>
);
}
