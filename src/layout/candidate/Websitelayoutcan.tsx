import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/candidate/Headercan'


type Props = {}

const Websitelayoutcan = (props: Props) => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <main>
                <Outlet />
            </main>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Websitelayoutcan