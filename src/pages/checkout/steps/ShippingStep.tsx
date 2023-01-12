import React from 'react'
import { Typography, Stack, Checkbox, Grid } from '@mui/material'
import { theme } from '../../../theme'
import InputWithLabel from '../../../components/inputWithLabel/InputWithLabel'
import SelectWithLabel from '../../../components/selectWithLabel/SelectWithLabel'
import CustomButton from '../../../components/button/Button'

export default function ShippingStep(): ReactNode {
    return (
        <Grid container spacing={2}>
            <Grid pt={2} pl={2} xs={12}>
                <Stack gap={1}>
                    <SelectWithLabel label="Shipping Address" />
                </Stack>
            </Grid>
            <Grid pt={2} pl={2} xs={12}>
                <Stack gap={1}>
                    <SelectWithLabel label="Country" />
                </Stack>
            </Grid>
            <Grid pt={2} pl={2} xs={6}>
                <Stack gap={1}>
                    <InputWithLabel label="First Name" />
                </Stack>
            </Grid>
            <Grid pt={2} xs={6}>
                <Stack pl={1} gap={1}>
                    <InputWithLabel label="Last Name" />
                </Stack>
            </Grid>
            <Grid pt={2} pl={2} xs={12}>
                <Stack gap={1}>
                    <InputWithLabel label="Address" />
                </Stack>
            </Grid>
            <Grid pt={2} pl={2} xs={12}>
                <InputWithLabel label="Apartment/Suite/Building" />
            </Grid>
            <Grid pt={2} pl={2} xs={12}>
                <InputWithLabel label="Company Name" />
            </Grid>
            <Grid pt={2} pl={2} xs={6}>
                <Stack gap={1}>
                    <InputWithLabel label="City" />
                </Stack>
            </Grid>
            <Grid pt={2} xs={6}>
                <Stack pl={1} gap={1}>
                    <InputWithLabel label="State/Province" />
                </Stack>
            </Grid>
            <Grid pl={2} pt={2} xs={6}>
                <InputWithLabel label=" Postal Code" />
            </Grid>
            <Grid pl={1} pt={2} xs={6}>
                <InputWithLabel label="Phone Number" />
            </Grid>
            <Grid pl={2} pt={2} xs={12} display="flex" gap={1}>
                <Checkbox defaultChecked />
                <Typography
                    variant="h6"
                    color={theme.palette.neutral[100]}
                    fontWeight="bold"
                >
                    Save this Address in my address book.
                </Typography>
            </Grid>
            <Grid pl={2} pt={2} xs={12} display="flex" gap={1}>
                <Checkbox defaultChecked />
                <Typography
                    variant="h6"
                    color={theme.palette.neutral[100]}
                    fontWeight="bold"
                >
                    My Billing address is the same as my shipping address
                </Typography>
            </Grid>
            <Grid pt={2} pl={2} xs={12}>
                <InputWithLabel label="Shipping Method" />
            </Grid>
            <Grid pt={2} pl={2} xs={12}>
                <InputWithLabel label="Order Comments" />
            </Grid>
            {/* <Grid pt={2}  textAlign="end">
                <CustomButton size="large" variant="contained">
                    Continue
                </CustomButton>
            </Grid> */}
        </Grid>
    )
}
