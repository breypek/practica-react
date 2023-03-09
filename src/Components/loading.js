import CircularProgress from '@mui/material/CircularProgress';

function Loading({loading}){


    if(!loading){
        return null
    }

    return(
        <div>
        <CircularProgress color="success" />
        </div>
    )

}


export default Loading;