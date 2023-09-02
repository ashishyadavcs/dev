import Script from "next/script";
import React from "react";

const Facebookpage = () => {
    const pageid="frontendzonedotcom"
    return (
        <>
            <div id="fb-root"></div>
            <Script
                strategy="lazyOnload"
                async
                defer
                crossorigin="anonymous"
                src="https://connect.facebook.net/hi_IN/sdk.js#xfbml=1&version=v17.0"
                nonce="sQBDsVNh"
            ></Script>
            <div
                class="fb-page"
                data-href={`https://www.facebook.com/${pageid}`}
                data-tabs="timeline"
                data-width="100%"
                data-height=""
                data-small-header="false"
                data-adapt-container-width="false"
                data-hide-cover="false"
                data-show-facepile="false"
            >
                <blockquote cite={`https://www.facebook.com/${pageid}`} class="fb-xfbml-parse-ignore">
                    <a href={`https://www.facebook.com/${pageid}`}>Facebook</a>
                </blockquote>
            </div>
        </>
    );
};

export default Facebookpage;
