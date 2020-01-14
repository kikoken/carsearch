import model from '../model';

// selects elements
const marca = document.getElementById( 'smarca' );

const makeSearchBar = ( model ) => {
    // created brans elements
    const brands = model.getItemsByCriteria('marca');
    const options = brands.map(brand => (`<option value="${brand}">${brand}</option>`) );
    marca.innerHTML = options.join('\n');

    return {
        'load': () => console.log( 'Cargado searchbar' )
    };
};

export default makeSearchBar( model );
