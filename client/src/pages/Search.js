import { Component } from "react";
import { Link } from "react-router-dom";

const style = {
    itemImage: {
        objectFit: "cover"
    },
    itemTitle: {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
    itemCard: {
        textDecoration: "none",
        color: "inherit",
    }
}

class Search extends Component {
    state = {
        products: [],
        search: "",
        page: 0,
        perPage: 8,
        loading: false,
    }

    getDataProduct = () => {
        this.setState({loading: true, products: []})
        fetch(`https://dummyjson.com/products/search?q=${this.state.search}&limit=${this.state.perPage}&skip=${this.state.page*this.state.perPage}`)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    products: [...data.products], 
                    loading: false
                })
            })
    }

    componentDidMount() {
        this.getDataProduct()
    }

    previous = e => {
        e.preventDefault()
        let page = this.state.page -  1
        if (page < 1) {
            return
        }
        this.setState({page})
        this.getDataProduct()
    }
    
    next = e => {
        e.preventDefault()
        this.setState({page: this.state.page + 1})
        this.getDataProduct()
    }

    renderItem = item => {
        return (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
                <Link className="card mb-4" to={`/detail/${item.id}`} style={style.itemCard}>
                    <img 
                        src={item.thumbnail} 
                        style={style.itemImage} 
                        className="card-img-top" 
                        alt="..." 
                        height="200"/>
                    <div className="card-body">
                        <h5 className="card-title" style={style.itemTitle}>{item.title}</h5>
                        <p className="card-text">$ {item.price}</p>
                    </div>
                </Link>
            </div>
        )
    }

    render() {
        return (
            <div className="container">
                <div className="input-group mb-3 mt-4">
                    <input 
                        type="text" 
                        value={this.state.search}
                        onChange={e => this.setState({search: e.target.value})}
                        className="form-control" 
                        placeholder="Search..." aria-describedby="button-addon1"/>
                    <button 
                        onClick={this.getDataProduct}
                        className="btn btn-outline-secondary" 
                        type="button" 
                        id="button-addon1">Search</button>
                </div>

                <div className="row">
                    {this.state.products.map(this.renderItem)}
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <button onClick={this.previous} className={`btn btn-info`} disabled={this.state.loading}>&lsaquo; PREV</button>
                    </div>

                    <div className="col">
                        <button onClick={this.next} className="btn btn-info float-end" disabled={this.state.loading}>NEXT &rsaquo;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Search