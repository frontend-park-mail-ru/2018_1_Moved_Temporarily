/**
 * Form module - provides methods for easy form creation
 * (registration, login, etc)
 * @module Form
 */
;
(function() {
    const widget = document.Widget;
    const input = document.Input;

    class form extends widget {
        constructor(parent = document.body, className = "") {
            super(parent, "form", className);
        }

        createInput(containerClass = "centerContainer", inputType = "text", inputClass = "", inputValue = "",
        labelClass = "", labelText = "", errorClass = "", errorMsg = "") {
            return new input(this.element, containerClass,  inputType, inputClass, inputValue, labelClass, labelText,
            errorClass, errorMsg);
        }

        createSubmit(containerClass = "centerContainer", submitClass = "", submitText = "", submitHandler = null) {
            let submit = new input(this.element, containerClass, "button", submitClass, submitText, "", "", "", "");
            submit.input.element.value = submitText;
            if(submitHandler !== null && submitHandler !== undefined) {
                submit.element.addEventListener("click", submitHandler);
            }
            return submit;
        }

        appendNewLine() {
            let node = document.createElement("div");
            node.className = "newLine";
            this.element.appendChild(node);
        }

        createFormError(errorTag = "div", errorClass = "formError", errorText = "") {
            let eMessage = new widget(this.element, errorTag, errorClass);
            eMessage.text = errorText;

            return eMessage;
        }
    }

    document.Form = form;
})();
