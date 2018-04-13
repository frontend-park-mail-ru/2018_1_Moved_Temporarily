"use strict";

import Widget from "../Widget.js";

class Button extends Widget
{
    /**
     *
     * @param element - element to become a Button
     */
    constructor(element)
    {
        super(null, "", "", element);
    }
}

export default Button;
