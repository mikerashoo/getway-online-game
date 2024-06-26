// styles/main-styles.js

const dogRaceMainStyles = `
  root { 
    display: block;
  }

  body {
    background-color: #000;
    background-repeat: repeat-x;
    background-position: top;   
  }

  *,
  *:before,
  *:after {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
    
  input,
  input:before,
  input:after {
    -webkit-user-select: initial;
    -khtml-user-select: initial;
    -moz-user-select: initial;
    -ms-user-select: initial;
    user-select: initial;
  }

  ::selection {
    background: transparent;
    color: inherit;
  }

  ::-moz-selection {
    background: transparent;
    color: inherit;
  }

  #canvas {
    position: fixed; 
  }

  canvas {
    image-rendering: optimizeSpeed;
    image-rendering: -o-crisp-edges;
    image-rendering: -webkit-optimize-contrast;
    -ms-interpolation-mode: nearest-neighbor;
    -ms-touch-action: none;
  }

  .ani_hack {
    -webkit-perspective: 1000;
    -webkit-backface-visibility: hidden;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    outline: none;
    -webkit-tap-highlight-color: transparent;
  }

  /* Fonts */
  .check-fonts {
    position: fixed;
    opacity: 0;
  }

  .check-font-1 {
    font-family: 'impactregular';
  }

  .check-font-2 {
    font-family: 'Digital-7';
  }

  .check-font-3 {
    font-family: 'InfiniteJustice';
  }

  @font-face {
    font-family: 'impactregular';
    src: url('impact-webfont.eot');
    src: url('impact-webfont.eot?#iefix') format('embedded-opentype'),
         url('impact-webfont.woff2') format('woff2'),
         url('impact-webfont.woff') format('woff'),
         url('impact-webfont.ttf') format('truetype'),
         url('impact-webfont.svg#impactregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Digital-7';
    src: url('Digital-7.eot?') format('eot'), 
         url('Digital-7.woff') format('woff'), 
         url('Digital-7.ttf')  format('truetype'),
         url('Digital-7.svg#Digital-7') format('svg');
  }

  @font-face {
    font-family: 'InfiniteJustice';
    src: url('InfiniteJustice.eot?#iefix') format('embedded-opentype'),
         url('InfiniteJustice.woff') format('woff'),
         url('InfiniteJustice.ttf')  format('truetype'),
         url('InfiniteJustice.svg#InfiniteJustice') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;

export default dogRaceMainStyles;
