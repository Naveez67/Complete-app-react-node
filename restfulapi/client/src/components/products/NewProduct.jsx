import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "./../../services/ProductsService";
const NewProduct = (props) => {
  const [name, setName] = React.useState("");
  const [fee, setFee] = React.useState(0);
  const [courseid, setCourseid] = React.useState("");
  const [duration, setDuration] = React.useState("");

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add New Course</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="Course Name"
          fullWidth
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="Course ID"
          fullWidth
          value={courseid}
          onChange={(e) => {
            setCourseid(e.target.value);
          }}
        />
        <TextField
          label="Course duration"
          fullWidth
          value={duration}
          onChange={(e) => {
            setDuration(e.target.value);
          }}
        />
        <TextField
          label="Fee"
          fullWidth
          value={fee}
          onChange={(e) => {
            setFee(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}>  </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("clicked");
            productService
              .addProduct({ name,fee ,courseid,duration })
              .then((data) => {
                console.log("inside");
                console.log(data);
                props.history.push("/products");
              })
              .catch((err) => {
                
                console.log(err);
              });
              console.log("outside");
          }}
        >
          Add New
        </Button>
        
      </Grid>
      
    </Grid>
  );
};

export default NewProduct;
