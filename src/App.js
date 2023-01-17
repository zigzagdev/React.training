import React, {Component, useState} from 'react'
import './App.css'
import Greet from './components/Greet'
import Welcome from "./components/Welcome";
import {Link} from "@material-ui/core";
import Son from "./components/Son";
import * as constants from "constants";


function App(){
    return(
        <div className="App">
            <Greet name="oo"/>
            <Son name="kkk"/>
            <Son name="kkkh"/>
            {/*<Welcome/>*/}
            <Link> Fuck you </Link>
        </div>
    )
}

export default App;

//古くなったプロジェクトにおいてのgit clone をする際は、package.jsonのverをremoteからインストールを行い
//yarn install or npm installを行う。