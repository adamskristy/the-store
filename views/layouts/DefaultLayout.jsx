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
                    
                
                        <div className="container">

                            <div id="header">
                                <nav className="menu-bar">
                                    <div className="group">
                                        <a className="item title">Sweet Water</a>
                                    </div>
                                <div className="group">
                                    <a className="item">Home</a>
                                    <a className="item">About</a>
                                </div>
                                </nav>
                            </div>
                            <div id="main-content">main-content</div>
                            <div id="footer">footer</div>
            
                        


                    {this.props.children}
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;