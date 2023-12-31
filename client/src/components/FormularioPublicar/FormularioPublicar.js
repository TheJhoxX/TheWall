import { useRef } from "react";
import  {
    Form, 
    Input, 
    FormGroup,
    Card,
    CardBody,
    CardTitle,
    Badge,
    InputGroupText,
    InputGroup
} from 'reactstrap'
import './FormularioPublicar.css'

const styles = {
    labelInput: {
        backgroundColor: 'rgb(35, 42, 44)', 
        color: '#fff',
        borderTop: 'none',
        borderLeft: 'none',
        borderBottom: 'none',
        fontWeight: 'bold'
    },
    input: {
        backgroundColor: '#373E40', 
        color: '#fff',
        border: 'none',
    }
}

function FormularioPublicar(args){
    const { publicarPost} = args
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);  

    const handlerClick = () => {
        const tema = inputRef1.current.value
        const contenido = inputRef2.current.value
        const post = {idUsuario: 1, tema: tema, contenido: contenido}
        publicarPost(post)
    }

    return (
        <div className="contenedor-formulario-publicar">
            <Card
            body
            color="dark"
            inverse
            style={{minWidth: '40%'}}
            className="formulario-publicar">
            <CardBody>
                <CardTitle tag="h5" className='autor-post'>
                Publica un post
                </CardTitle>
                <Form style={{margin: '1rem'}}>
                    <FormGroup>
                        <InputGroup>
                            <InputGroupText
                            style={styles.labelInput}
                            >
                                Tema:
                            </InputGroupText>
                            <Input style={styles.input} id='tema-post' innerRef={inputRef1}/>
                        </InputGroup>
                    </FormGroup>
                    <FormGroup >
                        <InputGroup>
                            <InputGroupText 
                            style={styles.labelInput}
                            >Contenido:</InputGroupText>
                            <Input style={styles.input} type="textarea" rows={3} id='contenido-post' innerRef={inputRef2}/>
                        </InputGroup>
                    </FormGroup>
                    <Badge
                    pill
                    className='boton-publicar-post'
                    onClick={handlerClick}
                    >
                        Publicar respuesta
                    </Badge>
                </Form>
            </CardBody>
            </Card>
        </div>
    )
}

export default FormularioPublicar