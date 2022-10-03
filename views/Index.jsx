const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Index extends React.Component {
    render() {

        const { products } = this.props;

        return (
            <DefaultLayout title="Sweet Water - All Products">
                
                    <h1>All Products</h1>
                    <ul>
                        {products.map((products)=> {
                            return (
                                <li key = {products._id}>
                                    <a href={`/products/${products._id}`}> {products.name}</a> 
                                </li>
                            )
                        })}
                    </ul>
                    
                    <nav>
                        <a href="/products/new">Create New Product</a>
                    </nav>
                
            </DefaultLayout>
        )
    }
}

module.exports = Index;