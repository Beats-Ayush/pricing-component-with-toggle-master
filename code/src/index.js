import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import configurePricingStore from "./../src/store/pricing-store";

configurePricingStore();

ReactDOM.render(<App />, document.getElementById("root"));
