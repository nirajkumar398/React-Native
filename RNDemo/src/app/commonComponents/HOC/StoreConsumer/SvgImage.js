import * as React from 'react';
import PropTypes from 'prop-types'
import { SvgCssUri } from 'react-native-svg';

export const SvgImage = (props) => {
    const {url , style} = props
    const Img = url
    return (
        <>
        {typeof url === 'function' ? 
            <Img style={style}/> 
            : 
            <SvgCssUri
                height={style.height}
                width={style.width}
                style={style}
                uri = {url}/>
        }
        </>
    );
};
