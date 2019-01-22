import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './Layout.css';

class Layout extends React.Component {
    render() {
        const contacts = [
            {
                'img': '',
                'name': 'Call',
                'detail': '089-458-3085',
            },
            {
                'img': '',
                'name': 'Email',
                'detail': 'thanakrit.p39@gmail.com',
            },
            {
                'img': '',
                'name': 'Github',
                'detail': 'BankyKmitl',
            },
            {
                'img': '',
                'name': 'Facebook',
                'detail': 'www.fb.com/thanakrit.pintana',
            },
        ]

        return (
            <div className='Layout'>
                <Header name="Thanakrit Pintana" job="Web Developer"/>
                <Content />
                <Footer contacts={contacts}/>
            </div>
        );
    }
}

export default Layout