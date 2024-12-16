import './globals.css';   
import { ReactNode } from 'react';  
import about from './about-us/page'
import contact from './page'
import home from './page'

export const metadata = {  
    title: 'Al Kazim Model School',  
    description: 'A place where young minds blossom',  
};  

export default function RootLayout({ children }: { children: ReactNode }) {  
    return (  
        <html lang="en">  
            <body>  
                
                {children}  
            </body>  
        </html>  
    );  
}