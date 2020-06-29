export const dotenv                 =   require("dotenv");
export const envpath                =   process.env;
export const SLASH                  =   '/';

export const IMAGEPATH              =   envpath.REACT_APP_APIHOSTURL+envpath.REACT_APP_IMAGEPATH;

export const bannerAPI              =   envpath.REACT_APP_APIHOSTURL+envpath.REACT_APP_BANNERAPI;
export const popularAPI             =   envpath.REACT_APP_APIHOSTURL+envpath.REACT_APP_POPULARIMG;
export const blockbusterAPI         =   envpath.REACT_APP_APIHOSTURL+envpath.REACT_APP_BLOCKBUSTERIMG;
