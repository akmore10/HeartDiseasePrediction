import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './header'
import { Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function DiseaseFormField() {
  
  const sendData =  async (e)=>{
    e.preventDefault();
    const data = {
      age,gender,cp,trestBps,cholestrol,fbs,restEcg,thalach,Exang,oldPeak,slope,ca,thal
    };

    console.log(data);
    const response = await axios.post("http://localhost:5000/resource",data);
    setResponse(response.data)
    setOpen(true);
  }

  const [response ,setResponse] = useState([])
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
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
          
        }}>
            <Grid item xs={12}>
              <Header/>
            </Grid>
            <Grid item xs={12} sx = {{marginTop : "70px"}}>
              <TextField fullWidth label="Age" id= "age" onChange={(e)=>setAge(e.target.value)}></TextField>
            </Grid>
            <Grid item xs={12}  sx ={{marginTop : "20px" , alignItems:"center"}}>
              <TextField  fullWidth label = "Gender" id = "gender"onChange={(e)=>{
                const gender = e.target.value === "Male" ? 1 : 0;
                setGender(gender);
              }}></TextField>
            </Grid>
            
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "CP" id = "cp" onChange={(e)=>{setCp(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Trestbps" id = "trestbps" onChange={(e)=>{setTrestBps(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Cholestrol" id ="chol" onChange = {(e)=>{setChol(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Fbs" id ="fbs" onChange={(e)=>{setFbs(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "RestEcg" id ="ecg" onChange={(e)=>{setEcg(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Thalach" id = "thalach" onChange={(e)=>{setThalach(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Exang" id = "exang" onChange={(e)=>{setExang(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "oldpeak" id = "oldpeak" onChange={(e)=>{setOldPeak(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Slope" id="slope" onChange={(e) =>{setSlope(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "ca" id = "ca" onChange={(e)=>{setCa(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <TextField fullWidth label = "Thal" id = "thal" onChange={(e)=>{setThal(e.target.value)}}></TextField>
            </Grid>
            <Grid item xs={12}sx ={{marginTop : "20px"}}>
              <Button fullWidth  variant = "contained" onClick={sendData}>Submit</Button>
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                      Results
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Logistic Regression  : {response["LogisticRegression"] === 1 ?"Yes" : "No"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Random Forest : {response["RandomForset"] === 1 ? "Yes" : "No"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Decision Tree : {response["DecisionTree"] === 1 ? "Yes" :"No"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Gaussian Naive Bayes : {response["GaussianNaiveBayes"] === 1 ?"Yes" : "No"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        SVM : {response["SVM"] === 1 ? "Yes" : "No"}
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        KNN : {response["KNN"] === 1 ?"Yes" : "No"}
                    </Typography>
                  </Box>
                </Modal>
            </Grid>

      </Grid>
    
  );
}

