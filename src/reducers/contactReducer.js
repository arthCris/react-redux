import { GET_CONTACTS } from '../actions/types';

const initialState = {
    contacts: [
        {
            id: 1,
            name: 'Arth Cris Yuson',
            email: 'arth@email.com',
            phone: '09503961593'
        }
    ]
};

export default function(state = initialState, action){
    switch (action.type){
        case GET_CONTACTS:
            return {
                ...state
            };
        default:
            return state;
    }

}