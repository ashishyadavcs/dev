export const draghtml = id => {
    const element = document.getElementById(id);
    const drag = e => {
        const { offsetX, offsetY, clientX, clientY } = e;
        console.log(clientX, clientY);
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
