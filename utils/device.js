export const ismobile = () => {
    if(typeof navigator=='undefined') return
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
    )
        ? true
        : false;
};
