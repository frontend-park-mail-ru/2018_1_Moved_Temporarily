"use strict";

import Widget from "../widget.js";

class Button extends Widget
{
    /**
     *
     * @param element - element to become a button
     */
    constructor(element)
    {
        super(null, "", "", element);
    }
}

export default Button;