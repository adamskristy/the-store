const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {
    render() {

        const { products } = this.props

        return (
            <DefaultLayout title ="Product Details">
                
                    <h1>{`${products.name}`}</h1>
                        <p>{products.descr}</p>
                        <p>{products.price}</p>
                        <h4><p>{products.inStock ? "Not in Stock " : "Currently In Stock  " }</p></h4>

                    <div id="show-btns">
                        
                        <form action ={`/products/${products._id}/edit`} >
                            <input type="submit" value="Edit" />
                        </form>
                            
                
                        <form action ={`/products/${products._id}?_method=DELETE`} method="POST">
                            <input type="submit" value="Delete Product" />
                        </form>

                    <nav>
                        <a href ='/products'>Back</a>
                    </nav>
               </div> 
            </DefaultLayout>
        )
    }
}

module.exports = Show;