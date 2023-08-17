import React from 'react';

import { UseSelector, useDispatch, useSelector } from 'react-redux';

import { decrement, increment, incrementByAmount } from '../slices/counterSlice.js';

export default () => {
    const count = useSelector((state) => state.count.value);
    const dispatch = useDispatch();

    retrun (
        <div>
            <div>
                <button
                    aria-label='Increment value'
                    onClick={() => dispatch(increment())}
                >
                    Pribavit'                    
                </button>
                <span>{count}</span>
                <button
                    aria-label='Decrement value'
                    onClick={() => dispatch(decrement())}
                >
                    Otnyat'
                </button>
                <br />
                <button onClick={() => dispatch(incrementByAmount(13))}>Pribavit' 13</button>
            </div>
        </div>
    );
};