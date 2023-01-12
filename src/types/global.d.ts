/* eslint-disable prettier/prettier */
import { Theme as MuiTheme } from '@mui/material/styles'

declare global {
    type ReactNode =
        | React.ReactElement<unknown>
        | FunctionComponent<unknown>
        | React.ComponentClass<unknown>
        | null

    interface IBase extends Record<string, unkonwn> {
        id: string
    }

    interface IUser extends Record<string, unknown> {
        id: string
        name: string
        email: string
        role: string
        createdAt: string
    }
}

declare module '@mui/material/styles/createPalette' {
    type colorNumber = {
        [number]: string
    }
    export interface TypeBackground {
        light?: string
        grey?: string
        lightGrey?: string
        white?: string
    }
    export interface TypeText {
        success?: string
    }
    export interface PaletteOptions {
        neutral: PaletteColor | colorNumber
    }
    export interface Palette {
        neutral: PaletteColor | colorNumber
    }
}

declare module '@emotion/react' {
    export interface Theme extends MuiTheme {}
}
