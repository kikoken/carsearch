export default ( _list ) => {
    const attributes = {..._list[ 0 ]};

    Object.keys( attributes ).map( ( key ) => {
        attributes[ key ] = '';
    } );

    return Object.seal( attributes );
};
