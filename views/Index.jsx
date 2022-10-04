const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Index extends React.Component {
    render() {

        const { products } = this.props;

        return (
            <DefaultLayout title="Sweet Water - All Products">
                <div id='site-title'>
                    <h1>All Products</h1>
                </div>
                    
                        <ul id='products-index' className='index-container'>
                            {products.map((products)=> {
                                return (
                                   
                                    <li key={products._id} className='products'>
                                        <img src={products.image} height='200px' />
                                        <p><a href={`/products/${products._id}`}>{products.name}</a> </p>
                                        <p>{products.inStock ? "In Stock" : "Out of Stock " }</p>
                                        <span>{products.price}</span> 
                                    </li>
                                    
                                )
                            })}
                        </ul>
                
            </DefaultLayout>
        )
    }
}

module.exports = Index;