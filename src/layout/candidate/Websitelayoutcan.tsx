import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Headercan from '../../components/candidate/Headercan'

import '../../js/jobdata.js'
type Props = {}

const Websitelayoutcan = (props: Props) => {
    return (
        <div>
            <div>
                <Headercan />
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