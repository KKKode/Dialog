import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core'
import { TextField } from '@material-ui/core'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const DialogMenu = () => {
    const paperStyle = { padding: '0 15px 40px 15px', width: 250, }
    const btnStyle = { marginTop: 10 }    
    const initialValues = {
        name: '',
        Symbol:'',
        description: '',
        url:''       
    }
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(3, "It's too short").required("Required"),
        description: Yup.string().min(20, "It's too short").required("Required")      
    })
    const onSubmit = (values, props) => {

        alert(JSON.stringify(values), null, 2)
        props.resetForm()
    }
    return (
        <Grid>
            <Paper elevation={0} style={paperStyle}>
                <Grid align='center'>
                    
                </Grid>
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props) => (
                        <Form noValidate>

                            <input type="file" name="Picture"/>
                
                            
                            <Typography variant='caption'> <b>Display name</b>(required)</Typography>
                            <Field as={TextField} name='name' label='Enter token name' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='name' />} required />

                            
                    <Typography variant='caption'> <b>Symbol</b>(required)</Typography>
                             <Field as={TextField} name='symbol' label='Enter token symbol' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='symbol' />} required />

                           
                            <Typography variant='caption'> <b>Description</b>(optional)</Typography>
                                <Field as={TextField} name='description' label='Spread some words' fullWidth
                                error={props.errors.descriptione && props.touched.description}
                                helperText={<ErrorMessage name='description' />} required />

                           
                            <Typography variant='caption'> <b>Short url</b></Typography>
                                <Field as={TextField} name='url' label='fungy.com/' fullWidth
                                error={props.errors.name && props.touched.name}
                                helperText={<ErrorMessage name='url' />} required />                            

                            <Button type='submit' style={btnStyle} variant='contained'
                                color='primary'>Creat Collection</Button>
                        </Form>
                    )}
                </Formik>
            </Paper>
        </Grid>
    )
}

export default DialogMenu;