const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Sweet Water | Bath & Spa</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet"/> 
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>

                <nav id='head-nav'>
                   
                   <a href="/products"><img src="https://i.ibb.co/mSkGrL4/sweetwaterlogo.png" height='200px'/></a>
                    <div className='head-links'>
                        <a href="/products/"><img src="https://i.ibb.co/8zL9zTM/Home-link.png" height='150px'/></a>
                        <a href="/products/new"><img src="https://i.ibb.co/qySpnCp/New-link-1.png"  height='150px'/></a>

                    </div>

                </nav>   
                <div className='flex-container'>
                
                        


                    {this.props.children}
                    </div>
                    <footer></footer>
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;