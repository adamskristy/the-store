const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Show extends React.Component {
    render() {

        const { products } = this.props;
        

        return (
            <DefaultLayout title ="">
                <div className='show-box'>
                    <h1>{`${products.name}`}</h1>
                        <img src={products.image} height='200px' />
                        <p>Description: {products.descr}</p>
                        <p>${products.price}</p>
                        <p>Qty: {products.qty}</p>
                        <p>{products.qty > 0 ? " In Stock" : "Out of Stock " }</p> 

                <form action={`/products/${products._id}?_method=PATCH`} method="POST">
                        {products.qty > 0 ? <button>Buy</button> : null }
                </form>

                </div>
                    <div className='btn-box'>
                        
                        <form action ={`/products/${products._id}/edit`} >
                            <input className='btn'  type="submit" value="Edit" />
                        </form>
                            
                
                        <form action ={`/products/${products._id}?_method=DELETE`} method="POST">
                            <input className='btn'  type="submit" value="Delete Product" />
                        </form>


                    <nav>
                        <a className='back' href ='/products/'>Back</a>
                    </nav>
               </div> 
            </DefaultLayout>
        )
    }
}

module.exports = Show;