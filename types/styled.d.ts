import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        colors:{
            background:string;
            color:string;
            gray:string;
            primary:string;
            secondary:string;
            tertiary:string;
            quatenary:string;
        },
        fonts:{
            family:{
                heading:string;
                regular:string;
            }
        }
    }
}