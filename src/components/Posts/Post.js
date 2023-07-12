import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Badge,
    Button,
    Collapse,
    Form,
    FormGroup,
    InputGroup, 
    InputGroupText, 
    Input
} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Posts.css'
import { useState } from 'react';


function Post (args) {
    const { elemento } = args
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <Card
            body
            className='post'
            color="dark"
            inverse
            style={{
            minWidth: '18rem'
            }}>
            <CardBody>
                <CardTitle tag="h5" className='autor-post'>
                    {elemento.autor}
                </CardTitle>
                <CardSubtitle
                className="tema-post"
                tag="h6"
                >
                    {elemento.tema}
                </CardSubtitle>
                <div className='contenido-post'>
                    <img
                    className='imagen-perfil'
                    alt="Sample"
                    src="/logo192.png"
                    />
                    <CardText className='texto-post'>
                    {elemento.contenido}
                </CardText>
                </div>
                <Badge
                color="primary"
                pill
                onClick={toggle}
                className='boton-toggle'
                >
                    Responder
                </Badge>
                <Collapse isOpen={isOpen} {...args}>
                    <Card className='card'>
                    <Form className='formulario'>
                        <FormGroup>
                            <InputGroup>
                                <Input 
                                rows={3} 
                                type='textarea' 
                                style={{backgroundColor: 'rgba(35, 42, 44, 0.5)', border: 'none'}} 
                                id='tema-post'/>
                            </InputGroup>
                        </FormGroup>
                        <Badge
                        pill
                        className='boton-publicar-respuesta'
                        >
                            Publicar respuesta
                        </Badge>
                    </Form>
                    </Card>
                </Collapse>
            </CardBody>
            </Card>
    )
}

export default Post