import Script from "next/script";

const Settings = () => {
  return (
    <>
      <Script
        strategy="lazyOnload"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3446097307175125"
        crossOrigin="anonymous"
      ></Script>
    </>
  );
};

export default Settings;
