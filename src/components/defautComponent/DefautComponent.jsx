import React from 'react'
import HeaderComponent from '../headerComponent/HeaderComponent'

const DefautComponent = ({ children }) => {
    return (
        <div>
            <HeaderComponent />
            {children}
        </div>
    )
}

export default DefautComponent