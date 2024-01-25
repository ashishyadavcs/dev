import {media} from 'config/device';
import React, {useEffect} from 'react'
import styled from 'styled-components';

const Translate = () => {
    useEffect(() => {
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
          }
          googleTranslateElementInit()
    }, [])
    
  return (
    <PageStyle>
 <div id="google_translate_element"></div>

<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
    
    </PageStyle>
  )
}

export default Translate
const PageStyle=styled.div`
#google_translate_element{
    position: fixed;
    bottom:0;
    right:0;
    background: #fff;
    padding:5px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.4);
    select{
        font-size:16px;
        outline: none;
    }
  
}
`