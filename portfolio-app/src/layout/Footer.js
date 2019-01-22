import React, { Component } from 'react';
import './Footer.css';
import 'react-bulma-components/dist/react-bulma-components.min.css';
import { Footer as BulmaFooter, Card, Heading, Media, Image, Content} from 'react-bulma-components';

class Footer extends Component {
    render() {
        const contacts = this.props.contacts.map((contact) => {
            return (
                <div className='Footer-item'>
                    <Card>
                        <Card.Content style={{width: '300px'}}>
                            <Media>
                                <Media.Item renderAs='figure' position='left'>
                                    <Image renderAs='p' src={contact.img} />
                                </Media.Item>
                                <Media.Item>
                                    <Heading size={6}>{contact.name}</Heading>
                                    <Heading subtitle size={6}>{contact.detail}</Heading>
                                </Media.Item>
                            </Media>
                        </Card.Content>
                    </Card>
                </div>
            );
        });

        return (
            <div className="Footer">
                <div></div>
                <BulmaFooter>
                    {contacts}
                </BulmaFooter>
                <div></div>
            </div>
        );
    }
}

export default Footer