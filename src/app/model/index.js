import data from '../../data/cars.json';
import Criterias from './criterias';

const items = Object.freeze( data );
const criterias = Criterias( items );

const getAllItems = () => items;

const getItemsByCriteria = ( criteria ) => items.map( ( e ) => e[ criteria ] );

const findItems = () => {
    console.log( criterias );
};

export default {
    criterias,
    findItems,
    getAllItems,
    getItemsByCriteria
};
