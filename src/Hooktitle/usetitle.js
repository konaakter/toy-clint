import React, { useEffect } from 'react';

const usetitle = title => {
    useEffect(() => {
        document.title = `ToyHome | ${title} `;
    }, [title])
};

export default usetitle;