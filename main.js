// const express = require('express');

// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => res.send('Index'));

// app.listen(PORT, () => console.log(`Start at port: ${PORT}`));

import React from "react";
import ReactDOM from "react-dom";
import { App } from "./app/app";

ReactDOM.render(<App />, document.getElementById("app"));
