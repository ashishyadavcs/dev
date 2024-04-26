export const numberonly = event => {
    if (!/[0-9]/.test(event.key)) event.target.value = "";
};
export const lettersonly = event => {
    if (!/[a-z]/i.test(event.key)) event.target.value = "";
};
export const inputfiledata = value => {
    const myFile = new File();
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(myFile);
    return dataTransfer.files;
};
