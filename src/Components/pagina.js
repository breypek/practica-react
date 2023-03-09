import { useState, useEffect } from 'react';
import Noticias from "./noticias";
import Loading from "./loading";
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';




function Pagina(props){

    const [nombrePais, setNombrePais] = useState('');
    const [noticas, setNoticias] = useState([]);
    const [validacionCampo, setValidacion] = useState(false);
    const [loading, setloading] = useState(false);



    useEffect(() => {

      if(validacionCampo){

          setloading(true)

          fetch(`https://localhost:7067/api/v1/newsApi/listaNoticias?pais=${nombrePais}`)
          .then((response) =>  response.json())
          .then((datos) => {  
              console.log(datos)
            if(datos.data){

                setNoticias(datos.data);

            }else{

                setNoticias([]);
            }
              
              setValidacion(false)
              setloading(false)
          });
        }
    }, [validacionCampo]);




     function handlePullNews(e) {

            if(nombrePais==""){
                setValidacion(false)
                return;
            }

            setValidacion(true)
      }



 


    return (
        <div className="">

           <div>
                <TextField id="outlined-basic" 
                onChange={e => setNombrePais(e.target.value)}
                label="Outlined" variant="outlined" 
                />
                <Button disabled={loading} variant="contained" onClick={handlePullNews}>
                    Buscar
                </Button>
           </div>

           <Loading  loading={loading} />

          
            <Grid container spacing={2}>
            { noticas.map(noticia => (                
                <Grid item xs={3}>
                       <Item>
                          <Noticias
                            image={noticia.image}
                            title={noticia.title}
                            description={noticia.description}
                          />     
                       </Item>
                </Grid>   
                ))}
            </Grid>
        </div>
    )
   
   }


   export default Pagina;


  