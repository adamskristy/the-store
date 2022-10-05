const React = require('react');
const DefaultLayout = require('./layouts/DefaultLayout')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
        
                    <h1>Create New Product</h1>
                    <form action="/products" method="POST">
                        <fieldset>
                            <p>
                                <label htmlFor="name">Product Name:</label>
                                <input type='text' id='name' name='name' size='40' required/>
                            </p>

                            <p>                           
                                <label htmlFor="image">Product Image:</label>
                                <input type='text' id='image' name='image' size='40' required/>
                            </p>
                            <p>
                                <label htmlFor="price">Price:</label>
                                <input type='number' step='0.01' id='price' name='price' placeholder='0.00'size='40' required />
                            </p>
                            <p>
                                <label htmlFor="descr">Product Description:</label>
                                <textarea id='descr' name='descr' rows='5' cols='40'required ></textarea>
                            </p>
                            <p>
                                <label htmlFor="qty">Quantity:</label>
                                <input type='number' id='qty' name='qty' min= '0' max= '99' placeholder='0'size='40'required />
                            </p>

                            {/* <p>
                                <label htmlFor="inStock">In Stock:</label>
                                <input type='checkbox' id='inStock' name='inStock' />
                            </p> */}

                            <input className='btn' type="submit" value="Submit Product"/>
                        </fieldset>
                    </form>
                    <nav>
                        <a className='back'href ='/products'>Back</a>
                    </nav>
            
            </DefaultLayout>
        )
    }
}

module.exports = New;