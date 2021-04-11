import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
*{
	box-sizing: border-box;
}

body {
  line-height: 1;
  font-family: Source Sans Pro, sans-serif;
  
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
button{
	border:none;
	background: none;
	outline: none;
	cursor: pointer;
}
.btn{
	display: inline-block;
	text-decoration: none;
	border-radius: 10px;
	padding: 20px 30px;
	font-size: 15px;
	line-height: 20px;
	background-color: #000;
	color: #FFE81F;
	transition: 0.2s;
	&:hover{
		background-color: rgba(0,0,0, .95);
	}
	&:active{
		transform: scale(0.95)
	}
}
.btn-favorite {
    transition: 0.2s;
    svg {
      path {
        fill: rgb(255, 232, 31, 0.4);
        transition: 0.4s;
      }
    }
    &.fill {
      svg {
        path {
          fill: #ffe81f;
        }
      }
    }
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default GlobalStyle;
