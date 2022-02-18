import React from "react";
import { useGlobalContext } from "./context";
import Navbar from "./Navbar";
import CartContainer from "./CartContainer";
import CircularStatic from "./Loading";


function Main() {
    const { loading } = useGlobalContext()

    if (loading) {
        return <>
            <div>
                <CircularStatic />
            </div>
        </>
    }

    return <>
        <main>
            <Navbar />
            <CartContainer />
        </main>
    </>
}

export default Main;