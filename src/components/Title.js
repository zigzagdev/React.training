import React from 'react';

function Title(props) {
    console.log('title')
    return (
        <div>
            use Callback hooks
        </div>
    );
}

export default React.memo(Title);