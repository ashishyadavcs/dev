export const draghtml = id => {
    const element = document.getElementById(id);
    const drag = e => {
        const { offsetX, offsetY, clientX, clientY } = e;
        element.style = `
         top:${clientY}px;
         left:${clientX}px
         `;
    };

    const closeDrag = e => {
        document.onmousemove = null;
    };
    document.onmousemove = e => drag(e);
    document.onmouseup = closeDrag;
};
