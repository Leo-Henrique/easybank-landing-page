import React from "react";

const useToggle = (elementRef, callbackStart, callbackEnd) => {
    const [visibility, setVisibility] = React.useState(false);
    const [open, setOpen] = React.useState(null);
    const [close, setClose] = React.useState(null);

    React.useEffect(() => {
        const { current: element } = elementRef;
        const offTransition = (transitionStart, transitionEnd, delay) => {
            const attr = "data-transition";
            const { milliseconds } = {
                property: getComputedStyle(element).transitionDuration,
                get seconds() {
                    return +this.property.slice(0, -1);
                },
                get milliseconds() {
                    return this.seconds * 1000;
                },
            };
            const time = delay ? milliseconds + delay : milliseconds;

            if (!element.hasAttribute(attr)) {
                element.setAttribute(attr, "");
                transitionStart();
				if (callbackStart) callbackStart();

                setTimeout(() => {
                    transitionEnd();
					if (callbackStart) callbackEnd();
                    element.removeAttribute(attr);
                }, time);
            }
        };
        const closeFunc = () => {
            const transitionStart = () => {
                element.classList.remove("--displayed");
                document.removeEventListener("click", clickOutside);
            };
            const transitionEnd = () => {
                setVisibility(false);
                element.classList.remove("--display");
            };

            offTransition(transitionStart, transitionEnd);
        };
        const openFunc = () => {
            const delay = 20;
            const transitionStart = () => {
                element.classList.add("--display");
                setTimeout(() => element.classList.add("--displayed"), delay);
            };
            const transitionEnd = () => {
                document.addEventListener("click", clickOutside);
                setVisibility(true);
            };

            offTransition(transitionStart, transitionEnd, delay);
        };
        const clickOutside = ({ target }) => {
            const { current: element } = elementRef;
            const children = element.querySelectorAll("*");
            const allElements = [element, ...children];

            if (!allElements.includes(target)) closeFunc();
        };

        setOpen(() => openFunc);
        setClose(() => closeFunc);
    }, []);

    return {
        visibility,
        open,
        close,
    };
};

export default useToggle;
