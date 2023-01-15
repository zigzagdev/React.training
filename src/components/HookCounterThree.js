import React, {useMemo, useState} from "react";

const Counter = () => {
    const [name, setName] = useState({ firstName: '', lastName: '', nickName: ''});
    console.log(name)
    return(
        <div>
            <form>
                <input
                    type="text"
                    value={name.firstName}
                    onChange={e => setName({...name, firstName: e.target.value})}
                />
                <input
                    type="email"
                    value={name.lastName}
                    onChange={e => setName({...name, lastName: e.target.value})}
                />
                <input
                    type="text"
                    value={name.nickName}
                    onChange={e => setName({...name, nickName: e.target.value})}
                />
                <h1>{JSON.stringify(name)}</h1>
            </form>
        </div>
    )
}

export default Counter;