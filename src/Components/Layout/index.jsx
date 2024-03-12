/* children es un props que se usa mas adelante en return */
const Layout = ({children}) => {
    return(
        <div className="flex flex-col items-center mt-20">
            {children}
        </div>
    )
}

export default Layout
