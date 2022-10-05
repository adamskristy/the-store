const React = require('react')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html>
                <head>
                    <title>Sweet Water | Bath & Spa</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com"/>
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital@0;1&display=swap" rel="stylesheet"/> 
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>

                <nav id='head-nav'>
                   
                   <a href="/products"><img src="https://i.ibb.co/zm1jqhK/Luxury-Logo-Name-and-Surname-Golden-Organics-Pink.png" height='250px'/></a>
                    
                    <div className='head-links'>
                        <a href="/products/"><img src="https://i.ibb.co/wdY54HD/Home-link.png" height='200px'/></a>
                        <a href="/products/new"><img src="https://i.ibb.co/k9cKnjb/New-link.png" height='200px'/></a>
                    </div>

                </nav>   
                <div className='flex-container'>
                
                        


                    {this.props.children}
                    </div>  
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout;