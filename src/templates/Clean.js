
import Container from '@material-ui/core/Container'
import {
    makeStyles
} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    Container: {
      padding: '15px 0'
    }
  }))

const Clean = ({ Component }) => {
    const classes = useStyles();
    return(
        <>
            <Container className={classes.Container}>
                <Component/>
            </Container>
        </>
    )
}

export default Clean