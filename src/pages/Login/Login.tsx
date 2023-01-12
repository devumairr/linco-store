import {
    Box,
    Checkbox,
    FormControlLabel,
    Grid,
    TextField,
    Typography,
    Theme,
} from '@mui/material'
import { Helmet } from 'react-helmet-async'
import { LoadingButton } from '@mui/lab'
import { useState } from 'react'

const Login = (): ReactNode => {
    const [email, setEmail] = useState<string>('')

    return (
        <>
            <Helmet>
                <title>REACT STARTER</title>
            </Helmet>
            <Grid
                container
                component="main"
                alignItems="center"
                justifyItems="center"
                justifyContent="center"
                textAlign="center"
                sx={{
                    height: '100vh',
                    p: (theme: Theme) => theme.spacing(2),
                }}
            >
                <Grid item xs={12} sm={6} md={5} lg={3}>
                    <Typography component="h1" variant="h5">
                        Sign in - WELCOME TO STARTER KIT REACT x TYPESCRIPT x
                        MUI
                    </Typography>
                    <Box
                        component="form"
                        onSubmit={() => {
                            console.log('on submit called')
                        }}
                        noValidate
                        sx={{ mt: 1 }}
                    >
                        <TextField
                            error={false}
                            helperText="this is helper text"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            // error={!!formik.errors.password}
                            // helperText={formik.errors.password}
                            margin="normal"
                            required
                            fullWidth
                            onChange={(event) => {
                                console.log('password ==> ', event.target.value)
                            }}
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <Box textAlign="start">
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value="remember"
                                        color="primary"
                                    />
                                }
                                label="Remember me"
                            />
                        </Box>
                        <LoadingButton
                            loadingPosition="end"
                            type="submit"
                            size="large"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            // loading={formik.isSubmitting}
                            // disabled={formik.isSubmitting}
                            fullWidth
                        >
                            Submit
                        </LoadingButton>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default Login
