import React from 'react';
import Loadable from 'react-loadable';

import CircularProgress from '@mui/material/CircularProgress';
import { useTheme } from '@mui/material/styles';

export const loadable = (loaders) => {
    return Loadable({
        loader: loaders.loader,
        delay: loaders.delay || 100,
        timeout: loaders.timeout || 10000,
        loading: Loading,
    });
};

export default loadable;

const Load = (props) => {
    const theme = useTheme();

    return <div style={{
        width: '100%',
        height: '50rem',
        textAlign: 'center',
        position: 'relative',
        lineHeight: '50rem',
        zIndex: 100,
    }}>
        {
            props.tips ?
                <span
                    style={{
                        color: theme.palette.text.secondary,
                        fontSize: '1.2rem',
                        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
                        fontWeight: 300,
                    }}
                >
                    {props.tips}
                </span> :
                <CircularProgress />
        }
    </div>
}

const Loading = (props) => {
    if (props.error) {
        return <Load tips='request error, please retry.' />
    }
    else if (props.timedOut) {
        return <Load tips='request timeout, please retry.' />
    }
    else if (props.pastDelay) {
        return <Load />
    }
    else {
        return (
            <></>
        )
    }
}