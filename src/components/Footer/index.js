import React from "react";
import { FooterDiv, FBIcon, YelpIcon, MapIcon, Footnote } from './footerStyles';
import { IconContext } from "react-icons";


const Footer = () => {

  return (
    <FooterDiv>
        <a href="https://www.facebook.com/corpbravollc/" target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ color: "#fff", size: '42'}}>
              <FBIcon />
          </IconContext.Provider>
        </a>
        <a href="https://www.yelp.com/biz/hwy-2-fusion-diner-monroe" target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ color: "#fff", size: '42'}}>
              <YelpIcon />
          </IconContext.Provider>
        </a>
        <a href="https://maps.apple.com/?address=19721%20US-2,%20Monroe,%20WA%20%2098272,%20United%20States&auid=2495863864162765299&ll=47.858758,-121.966088&lsp=9902&q=HWY%202%20Fusion%20Diner&_ext=CjIKBQgEEOIBCgQIBRADCgQIBhAUCgQIChAACgQIUhABCgQIVRAPCgQIWRACCgUIpAEQARImKRasJ5pY7UdAMfDeYA5Cfl7AOZSBTfZ+7kdAQZbq87JmfV7AUAM%3D" target="_blank" rel="noopener noreferrer">
          <IconContext.Provider value={{ color: "#fff", size: '42'}}>
              <MapIcon />
          </IconContext.Provider>
        </a>
        <Footnote>
          It's all about delicious breakfast and lunch food with a flare of mexican food!
Stop by and enjoy!
          </Footnote>
    </FooterDiv>

  );
}

export default Footer;