import React from 'react';

export const Login = ({isLoginStage, setLogin}) => {

    return (
        <div>
            {!isLoginStage
                ? <button onClick={() => setLogin(true)}>Login</button>
                : <div>You is login</div>
            }
        </div>
    )
}
