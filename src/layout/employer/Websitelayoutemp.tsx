import React from 'react'
import { Outlet } from 'react-router-dom'
import Headercan from '../../components/candidate/Headercan'
import Headeremp from '../../components/employer/Headeremp'
import Footer from '../../components/Footer'

type Props = {}

const Websitelayoutemp = (props: Props) => {
    return (
        <div>
            <main>
                <div>
                    <Headeremp />
                </div>
                <main>
                    <Outlet />
                </main>
                <div>
                    <Footer />
                </div>
            </main>
        </div>
    )
}

export default Websitelayoutemp