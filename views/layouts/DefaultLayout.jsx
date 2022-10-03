const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Sweet Water</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                <nav className="menu-bar">
                    <div className="group">
                        <a className="item title">Sweet Water</a>
                    </div>
                    <div className="group">
                        <a className="item">Home</a>
                        <a className="item">Shop</a>
                    </div>
                </nav>
                
                        


                    {this.props.children}
                    
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;