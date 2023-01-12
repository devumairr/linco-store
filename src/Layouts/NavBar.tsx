import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    Button,
    Box,
    IconButton,
    Stack,
    Typography,
    ListItemButton,
    ListItemText,
    List,
    Divider,
    ListItem,
    AppBar,
    Toolbar,
    Drawer,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { ShoppingCart } from '@mui/icons-material'
import PersonIcon from '@mui/icons-material/Person'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import SearchBar from '../components/searchBar/SearchBar'
import CustomButton from '../components/button/Button'
import { NAVITEMS } from '../utils/NavItems'
import Logo from '../components/logo/Logo'

const drawerWidth = 240
export default function NavBar(): ReactNode {
    const navigate = useNavigate()
    const [drawerOpen, setDrawerOpen] = useState(false)

    const handleDrawerToggle = (): void => {
        setDrawerOpen(!drawerOpen)
    }

    const drawer = (
        <Box py={2} onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Logo medium />
            <Divider />
            <List>
                {NAVITEMS.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Typography color="info">{item}</Typography>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <CustomButton size="small" variant="contained">
                Request for Quote
            </CustomButton>
        </Box>
    )

    return (
        <>
            <Stack
                py={1}
                gap={{ xs: 1, sm: 0 }}
                direction={{ xs: 'column', md: 'row' }}
                alignItems="center"
                justifyContent="space-between"
                sx={{
                    width: { xs: '90%', lg: '85%' },
                    margin: '0 auto',
                }}
            >
                <Typography variant="h3">
                    Talk to an Expert - 866-306-9566
                </Typography>
                <Stack direction="row">
                    <SearchBar />
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <IconButton onClick={() => navigate('/cart')}>
                        <ShoppingCart />
                    </IconButton>
                </Stack>
            </Stack>
            <AppBar component="nav">
                <Box
                    sx={{
                        width: { xs: '100%', lg: '85%' },
                        margin: '0 auto',
                    }}
                >
                    <Toolbar>
                        <IconButton
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Stack
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'block' },
                            }}
                        >
                            <Logo large display="block" />
                        </Stack>

                        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                            {NAVITEMS.map((item) => (
                                <CustomButton
                                    endIcon={
                                        item !== 'Shop' && (
                                            <KeyboardArrowDownIcon />
                                        )
                                    }
                                    key={item}
                                    variant="text"
                                    color="info"
                                >
                                    {item}
                                </CustomButton>
                            ))}
                            <CustomButton size="large" variant="contained">
                                Request for Quote
                            </CustomButton>
                        </Box>
                    </Toolbar>
                </Box>
            </AppBar>
            <Box component="nav">
                <Drawer
                    variant="temporary"
                    open={drawerOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                        '& .MuiDrawer-paper': {
                            boxSizing: 'border-box',
                            width: drawerWidth,
                            paddingTop: '4px',
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar />
        </>
    )
}
