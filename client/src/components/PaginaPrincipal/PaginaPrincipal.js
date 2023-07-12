import { Component } from "react";
import './PaginaPrincipal.css'
import Posts from '../Posts/Posts'
import FormularioPublicar from '../FormularioPublicar/FormularioPublicar'



class PaginaPrincipal extends Component {
    state = {
        posts:  [
            { autor: 'Pepe', tema: 'experiencias', contenido: 'ayer me tire a una madurita jas iauhudsiuahi sdaisuhd iahsdi uadi uhaidshi aisudh iuahsidhu iauhsdi uhaisuhdi uahsdi uahsid iaushd  aisduhaisud hiauhsd iaudhiau hsidaushdi ausdhi uhasiduh aiushd iausdi hu aisdhuaisduh iausdhi auhsdi ausdh iauhds iaus asdfa sdfasdfa asdf asdf asdf asd asdf asdf asdf asdf iagdig asidughi zidg zdgiuhi idufgh idgfi uzdg izdufghi zuhgiz gzidhfg idughi zuhg izdughz idgfhu' },
            { autor: 'Manolete', tema: 'experiencias', contenido: 'Ayer fui de cariñosonas' },
            { autor: 'Felipe', tema: 'puterios', contenido: 'Ayer fui de cariñosonas' }
        ]
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