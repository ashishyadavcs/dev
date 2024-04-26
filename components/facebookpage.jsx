import Script from "next/script";
import React from "react";

const Facebookpage = () => {
    const pageid = "frontendzonedotcom";
    return (
        <>
            <div id="fb-root"></div>
            <Script
                strategy="lazyOnload"
                async
                crossOrigin="anonymous"
                src="https://connect.facebook.net/hi_IN/sdk.js#xfbml=1&version=v17.0"
                nonce="sQBDsVNh"
            ></Script>
            <div
                class="fb-page"
                data-href="https://www.facebook.com/frontendzonedotcom"
                data-tabs="timeline"
                data-width=""
                data-height=""
                data-small-header="false"
                data-adapt-container-width="false"
                data-hide-cover="false"
                data-show-facepile="false"
            >
                <blockquote
                    cite="https://www.facebook.com/frontendzonedotcom"
                    class="fb-xfbml-parse-ignore"
                >
                    <a href="https://www.facebook.com/frontendzonedotcom">Frontendzone</a>
                </blockquote>
            </div>
        </>
    );
};

export default Facebookpage;
