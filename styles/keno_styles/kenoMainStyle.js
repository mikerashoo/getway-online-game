// styles/kenoMainStyle.js

const kenoMainStyle = `
  root {
    display: block;
  }

  body {
    background-color: #000000;
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
    font-family: 'Lora';
  }

  @font-face {
    font-family: 'Lora';
    src: url('./lora-bold-webfont.eot');
    src: url('./lora-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('./lora-bold-webfont.woff2') format('woff2'),
         url('./lora-bold-webfont.woff') format('woff'),
         url('./lora-bold-webfont.ttf') format('truetype'),
         url('./lora-bold-webfont.svg#lora-bold') format('svg');
    font-weight: normal;
    font-style: normal;
  }
`;

export default kenoMainStyle;
