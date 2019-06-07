import * as React from 'react';
import * as ReactDom from 'react-dom';

import { App } from "./components/App";

const app = document.getElementById('app');

ReactDom.render(<App title="React and TS"/>, app)