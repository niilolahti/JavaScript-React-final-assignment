import React from 'react';

import { Link } from 'react-router-dom';

import Kulukortti from '../Kulukortti/Kulukortti';
import Content from '../Content/Content';

import { FloatingButton } from '../buttons';

function Items(props) {

    let rows = props.data.map(tankkausmerkinta => {
        return(
            <Kulukortti data={tankkausmerkinta} key={tankkausmerkinta.id} />
        );
    }
);

    return(
        <Content> 
            {rows}
            <Link to="/add"><FloatingButton primary>+</FloatingButton></Link>
        </Content>
    );
}

export default Items;