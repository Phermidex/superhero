import { useContext } from 'react';
import { isNil } from 'lodash';


import http from './http';
import AppContext from '../context/AppContext';

function Access() {

    const AppContextData = useContext(AppContext);

    const getAccess = async () => {
        const Request = await http().get('https://superheroapi.com/api/2951528371814120/1');
        AppContextData.access = !isNil(Request.data) ? true : false;
    }
    

    getAccess();

}

export { Access };