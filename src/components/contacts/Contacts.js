import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Contact from './Contact';

import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';

export class Contacts extends Component {

    componentDidMount(){
        this.props.getContacts(); 
    }

    render() {
        const { contacts } = this.props;

        return (
            <React.Fragment>
                {contacts.map(contact=>(
                    <Contact key={contact.id} contact={contact}/>
                ))}
            </React.Fragment>
        )
    }
}

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    getContacts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    contacts: state.contact.contacts
});


export default connect(mapStateToProps, {getContacts})(Contacts);
