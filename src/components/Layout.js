import {Container, TableContainer} from "@mui/material";
import Header from "./Header"; 
import Footer from "./Footer";
import Link from "next/link";

export default function Layout({children}) {
    return (
        // Since you only can return a single container 
        // this technique helps to return a single element
        // with its children. This approach doesn't render 
        // this element so it keeps our code cleaner.
        <> 
            <Header title="Juan Carlos">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/admin">Admin</Link>
            </Header>
            <Container fixed>
                <main>{children}</main>
            </Container>
            <Footer/>
        </>
    );
}