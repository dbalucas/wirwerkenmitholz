import React, { useState } from "react";
import { Grid, TextField, Button } from "@mui/material";

// const Kontakt = () => {
//   return <div className="kontakt">Hello World</div> 
//   };
// export default Kontakt;


const defaultValues = {
  name: "test",
  sendermail: "mail@mail.mail",
  message: "test mail",
};

const Kontakt = () => {
  const [formValues, setFormValues] = useState(defaultValues);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formValues);
  };

  return (
    <form class="Form" onSubmit={handleSubmit}>
      <Grid class="Grid-Form" backgroundColor="red" container alignItems="center" justify="center" directions="column">
        <Grid item>
          <TextField id="name-input" name="name" label="Name" type="text" value={formValues.name} onChange={handleInputChange}/>
        </Grid>
        <Grid item>
          <TextField id="sendermail-input" name="sendermail" label="Mail" type="text" value={formValues.sendermail} onChange={handleInputChange}/>
        </Grid>
        <Grid item>
          <TextField id="message-input" name="message" label="Message" type="text" values={formValues.message} onChange={handleInputChange}/>
        </Grid>
          <Button variant="contained" color="primary" type="submit">
            Senden
          </Button>      
        </Grid>
    </form>
  );
};

export default Kontakt;