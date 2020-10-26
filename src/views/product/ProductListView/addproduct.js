import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import { DropzoneArea } from 'material-ui-dropzone';
import Checkbox from '@material-ui/core/Checkbox';
import "./products.css"

function Addproduct() {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Dialog size="large" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add the details of the product</DialogTitle>
                <DialogContent>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            className="inputfeilds"
                            item
                            md={8}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                placeholder="Name of the Product "
                                helperText="Name of the Product "
                                color="secondary"
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid
                            item
                            md={3}
                            xs={12}
                        >
                            <TextField
                                type="number"
                                style={{ margin: 10 }}
                                placeholder="Ammount in stock"
                                helperText="Ammount in stock"
                                fullWidth
                                color="secondary"
                                required
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                helperText="Product Descripition"
                                multiline
                                color="secondary"
                                rows={4}
                                placeholder="write a berif description of the product "

                            />

                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                helperText="Item tags "
                                multiline
                                color="secondary"
                                rows={4}
                                placeholder="item to appeer while searched for ...."
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                // onChange={handleChange}
                                style={{ margin: 10 }}
                                placeholder="item price"
                                helperText="Price in Birr "
                                fullWidth
                                color="secondary"
                                required
                                type="number"
                            >
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                // onChange={handleChange}
                                style={{ margin: 10 }}
                                placeholder="Discounted price"
                                helperText="Discount Price in Birr"
                                fullWidth
                                color="secondary"
                                type="number"
                            >
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                // onChange={handleChange}
                                style={{ margin: 10 }}
                                placeholder="unit Weight "
                                helperText="Unit Weight  "
                                fullWidth
                                color="secondary"
                                required
                                type="number"
                            >
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                helperText="Item Category "
                                fullWidth
                                select
                                color="secondary"
                                required
                                // onChange={handleChange}
                                SelectProps={{ native: true }}

                            >
                                <option>category one </option>
                                <option>another category </option>
                            </TextField>
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            <TextField
                                style={{ margin: 10 }}
                                helperText="Size variants "
                                multiline
                                color="secondary"
                                rows={3}
                                placeholder=" Enter size variants separeted by a comma "
                            />
                        </Grid>
                        <Grid
                            item
                            md={6}
                            xs={12}
                        >
                            {/* yeah i know the check box is not it 
              please get the color selector component from the shemsu 
              i couldnt */}

                            <Checkbox
                                variant="outlined"
                                defaultChecked
                                color="secondary"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <Checkbox
                                variant="outlined"
                                defaultChecked
                                color="#4287f5"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                            <Checkbox
                                variant="outlined"
                                defaultChecked
                                color="#222222"
                                inputProps={{ 'aria-label': 'secondary checkbox' }}
                            />
                        </Grid>
                        <Grid
                            item
                            md={12}
                            xs={12}
                        >
                            <DropzoneArea
                                acceptedFiles={['image/*']}
                                dropzoneText={"Add images "}
                                filesLimit="5"
                                style={{ margin: 10 }}
                                onChange={(files) => console.log('Files:', files)}
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions className="box">
                    <Button onClick={handleClose} color="secondary">
                        Cancel
          </Button>
                    <Button onClick={handleClose} variant="contained" color="secondary" className="box">
                        Add Product
          </Button>
                </DialogActions>
            </Dialog>

            <Button color="secondary" variant="contained" onClick={handleClickOpen} >
                Add Product
        </Button>
        </div>
    )



}

export default Addproduct;