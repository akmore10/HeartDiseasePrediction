import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './header'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';


export default function DiseaseFormField() {
  
  const sendData =  async(e)=>{
    e.preventDefault();

    const data = {
      age,gender,cp,trestBps,cholestrol,fbs,restEcg,thalach,Exang,oldPeak,slope,ca,thal
    };
  
    const response = await axios.post("http://localhost:5000/resource",data);
    console.log(response);
  }

  const [age,setAge] = useState(0);
  const [gender,setGender] = useState(0);
  const [cp ,setCp] = useState(0);
  const [trestBps,setTrestBps] = useState(0);
  const [cholestrol , setChol] = useState(0);
  const [fbs , setFbs] = useState(0);
  const [restEcg,setEcg] = useState(0);
  const [thalach ,setThalach] = useState(0);
  const [Exang,setExang] = useState(0);
  const [oldPeak,setOldPeak] = useState(0);
  const [slope , setSlope] = useState(0);
  const [ca , setCa] = useState(0);
  const [thal ,setThal] = useState(0);


  return (
        <Grid containner spacing={2} sx = {{
          marginTop: "30px",
          paddingLeft :"500px",
          paddingRight : "500px"
        }}>
            <Grid item xs={12}>
              <Header/>
            </Grid>
            <Grid item xs={12} sx = {{marginTop : "70px"}}>
              <TextField fullWidth label="Age" id= "age" onChange={(e)=>{setAge(e.value)}}></TextField>
            </Grid>
           
            <Grid item xs={12}  sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Gender" id = "gender"onChange={(e)=>{
                const gender = e.value == "Male" ? 1 : 0;
                setGender(gender);
              }}></TextField>
            </Grid>
            
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "CP" id = "cp" onChange={(e)=>{setCp(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Trestbps" id = "trestbps" onChange={(e)=>{setTrestBps(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Cholestrol" id ="chol" onChange = {(e)=>{setChol(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Fbs" id ="fbs" onChange={(e)=>{setFbs(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "RestEcg" id ="ecg" onChange={(e)=>{setEcg(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Thalach" id = "thalach" onChange={(e)=>{setThalach(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Exang" id = "exang" onChange={(e)=>{setExang(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "oldpeak" id = "oldpeak" onChange={(e)=>{setOldPeak(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Slope" id="slope" onChange={(e) =>{setSlope(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "ca" id = "ca" onChange={(e)=>{setCa(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Thal" id = "thal" onChange={(e)=>{setThal(e.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <Button fullWidth  variant = "contained" onClick={sendData}>Submit</Button>
            </Grid>

      </Grid>
    
  );
}

