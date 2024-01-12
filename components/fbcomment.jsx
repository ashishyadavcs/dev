import Script from "next/script";
import { memo } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
const Fbcomment = ({title}) => {
  const router = useRouter();
  return (
    <StyledFB>
    <h2 className="mt-4">{title}</h2>
      <div
        className="fb-like mt-2"
        data-href="https://developers.facebook.com/docs/plugins/"
        data-width="100%"
        data-layout="button_count"
        data-action="like"
        data-size="large"
        data-share="true"
      ></div>
      <div id="fb-root"></div>
      <Script
        strategy="lazyOnload"
        crossOrigin="anonymous"
        src="https://connect.facebook.net/hi_IN/sdk.js#xfbml=1&version=v6.0&appId=589042788608871&autoLogAppEvents=1"
      ></Script>
      <div
        className="fb-comments"
        data-href={`https://frontendzone.com${router.asPath}`}
        data-width="100%"
        data-numposts="15"
      ></div>
    </StyledFB>
  );
};

export default memo(Fbcomment);
const StyledFB=styled.div`
h2{line-height:1.5}
:not(:has(iframe)) h2{display:none}
`
