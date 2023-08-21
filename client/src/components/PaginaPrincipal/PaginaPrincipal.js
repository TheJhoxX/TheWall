import { Component } from "react";
import './PaginaPrincipal.css'
import Posts from '../Posts/Posts'
import FormularioPublicar from '../FormularioPublicar/FormularioPublicar'


class PaginaPrincipal extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        fetch('/posts')
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
            console.log('SE HA INSERTADO EL POST: ' + post)
            var newPosts = this.state.posts.concat(post)
            this.setState({posts: newPosts})
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