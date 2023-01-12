import { Grid, Typography } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'

const Intro = (): ReactNode => {
    return (
        <Grid py={5} container bgcolor="#242F3C">
            <Grid xs={1} />
            <Grid xs={10} textAlign="center">
                <Typography variant="h6" color={theme.palette.success.main}>
                    LINCO
                    <br />
                    provides industrial casters in a range of sizes, options,
                    and safety features. Our casters are available from a
                    variety of brand names to assure you that we can provide the
                    matching replacement caster wheels with the proper size and
                    fit for any of your repair needs. With approximately eight
                    hundred caster wheels coming from 6 different brands, you
                    will easily find the part you are looking for. Our
                    industrial casters come in the most common and uncommon
                    sizes including sizes 3”, 3-1/2”, 4”, and 5”. Locking and
                    non-locking casters are also available for convenience and
                    safety purposes to insure your equipment stays in the
                    specified space. We offer two versions of locking wheel;
                    either top locking or total lock to accommodate your
                    specific preference or need.
                </Typography>
            </Grid>
            <Grid xs={1} />
        </Grid>
    )
}

export default Intro
