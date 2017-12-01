// Created by iWeb 3.0.4 local-build-20120524

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-5,5,10,314),url:'Home_files/stroke.png'},{rect:new IWRect(-5,-5,10,10),url:'Home_files/stroke_1.png'},{rect:new IWRect(5,-5,233,10),url:'Home_files/stroke_2.png'},{rect:new IWRect(238,-5,10,10),url:'Home_files/stroke_3.png'},{rect:new IWRect(238,5,10,314),url:'Home_files/stroke_4.png'},{rect:new IWRect(238,319,10,10),url:'Home_files/stroke_5.png'},{rect:new IWRect(5,319,233,10),url:'Home_files/stroke_6.png'},{rect:new IWRect(-5,319,10,10),url:'Home_files/stroke_7.png'}],new IWSize(243,324))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Home_files/HomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
