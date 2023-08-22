import { Component } from "react";
import './PaginaPrincipal.css'
import Posts from '../Posts/Posts'
import FormularioPublicar from '../FormularioPublicar/FormularioPublicar'


class PaginaPrincipal extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('http://localhost:3001/posts')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({ posts: data });
            })
            .catch(error => {
                console.error('Error al obtener los posts:', error);
            });
    }

    render(){
        const publicarPost = (post) => {
            fetch('http://localhost:3001/publicarPost', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(post),
            })
        }

        return(
            <div className="pagina-principal">
                <Posts posts={this.state.posts}/>
                <FormularioPublicar
                publicarPost={publicarPost} />
            </div>
        )
    }
}

export default PaginaPrincipal