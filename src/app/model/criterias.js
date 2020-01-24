export default ( criteria ) => {
    if(typeof criteria !== 'object') throw new Error('arguments not object');
    
    const attributes = {...criteria};

    Object.keys( attributes ).map( ( key ) => {
        attributes[ key ] = '';
    } );

    return Object.seal( attributes );
};
