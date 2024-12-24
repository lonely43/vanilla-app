export const scssData = {
   main: {
      path: "src/assets/styles/main.scss",
      data: 
`@use 'base';

*{
   padding: 0;
   margin: 0;

   box-sizing: border-box;

   line-height: 1.25;

   font-style: normal;
   font-weight: normal;
   color: black;
   font-family: 'Graphik LCG', 'sans-serif';

   scroll-behavior: smooth;
}

@media screen and (max-width: 420px) {
   html{
      font-size: 0.8em;
   }
}
@media screen and (max-width: 300px) {
   html{
      word-break: break-all;
   }
}`
   },
   base: {
      path: "src/assets/styles/_base.scss",
      data: 
`body {
   min-height: 100vh;
   //color: var(--color-text);
   //background: var(--color-background);
   font-size: 16px;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
}`
   },
   index: {
      path: "src/assets/styles/index/index.scss",
      data: 
`// global styles
@use '../main' 

// other imports`
   }
 }