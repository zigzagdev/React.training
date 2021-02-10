import React, { PureComponent } from 'react'

export class PureComp extends PureComponent{
    render() {
     return(
      <div>
        <PureComp/>
      </div>
     )
    }
}

export default PureComp ;