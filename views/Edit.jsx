const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class Edit extends React.Component {
    render() {

        const { products } = this.props;

        return (
            <DefaultLayout>
                
                    <h1>Edit Product</h1>


                    <form action={`/products/${products._id}?_method=PUT`} method="POST">
                        <fieldset>
                            <p>
                                <label htmlFor="name">Product Name:</label>
                                <input type='text' id='name' name='name' defaultValue={products.name} size='40' />
                            </p>

                            <p>                           
                                <label htmlFor="image">Product Image:</label>
                                <input type='text' id='image' name='image' defaultValue={products.image} size='40' />
                            </p>
                            <p>
                                <label htmlFor="price">Price:</label>
                                <input type='number' step='0.01' id='price' name='price'  defaultValue={products.price} size='40'/>
                            </p>
                            <p>
                                <label htmlFor="descr">Product Description:</label>
                                <textarea id='descr' name='descr' defaultValue={products.descr} rows='5' cols='40'></textarea>
                            </p>
                            <p>
                                <label htmlFor="qty">Quantity:</label>
                                <input type='number' id='qty' name='qty' min= '0' max= '99'  defaultValue={products.qty} size='40'/>
                            </p>
                           

                            <input className='btn'  type="submit" value="Edit Product"/>

                        </fieldset>
                    </form>

                    <nav>
                        <a className='back' href ={`/products/${products._id}`}>Back</a>
                    </nav>
                
            </DefaultLayout>
        )
    }
}

module.exports = Edit;