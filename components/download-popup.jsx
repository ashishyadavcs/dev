import { memo, useEffect, useState } from "react";
const DownloadPopup = ({ styles, src, handler }) => {
    const [width, setwidth] = useState(20);
    useEffect(() => {
        const int = setInterval(() => {
            if (width <= 100) {
                setwidth(prev => prev + 1);
            }
        }, 100);
    }, []);

    return (
        <div className={styles.download}>
            <b>Generating image to download</b>
            {width < 100 ? (
                <div className={styles.bar} style={{ width: `${width}%` }}>
                    <span>{width}%</span>
                </div>
            ) : (
                <>
                    <a download href={src} onClick={e => handler(false)}>
                        Download Now
                    </a>
                    <a className={styles.cancel} onClick={e => handler(false)}>
                        cancel
                    </a>
                </>
            )}
        </div>
    );
};

export default memo(DownloadPopup);
