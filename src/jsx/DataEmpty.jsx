import React from 'react';

function DataEmpty({name='name isnt filled', desc='description isnt filled'}) {
    return (
        <div className='dataEmpty'>
            <img src="https://i.gifer.com/4g2d.gif" alt="" />
            <h3>{name}</h3>
            <h5>{desc}</h5>
        </div>
    );
}

export default DataEmpty;