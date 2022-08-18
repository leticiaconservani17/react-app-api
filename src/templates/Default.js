import Header from "../partials/Header/Header"


import Container from '@material-ui/core/Container'
import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    Container: {
      padding: '15px 0'
    }
  }))

const Default = ({ children }) => {
    const classes = useStyles();
    return(
        <>
            <Header/>
            <Container className={classes.Container}>
                {children}
            </Container>
        </>
    )
}

export default Default