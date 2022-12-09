var d=Object.defineProperty;var i=(t,o)=>d(t,"name",{value:o,configurable:!0});import{r as a,a as c,j as e}from"./jsx-runtime.931debec.js";const r=i(({onVote:t,reviewVote:o})=>{let[C,s]=a.exports.useState(o);const l=i(n=>{t(C,n),C==n?s(0):s(n)},"onVoteClick");return c("div",{className:"voting",children:[e("div",{className:"upvote",onClick:()=>l(1),children:C==1?e("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M0.999298 11.9812H4.9993V18.9813C4.9993 19.2465 5.10466 19.5008 5.29219 19.6884C5.47973 19.8759 5.73408 19.9813 5.9993 19.9813H11.9993C12.2645 19.9813 12.5189 19.8759 12.7064 19.6884C12.8939 19.5008 12.9993 19.2465 12.9993 18.9813V11.9812H16.9993C17.1876 11.9809 17.3719 11.9275 17.5312 11.8272C17.6905 11.7268 17.8182 11.5836 17.8998 11.4139C17.9814 11.2442 18.0134 11.0549 17.9923 10.8679C17.9711 10.6808 17.8977 10.5035 17.7803 10.3562L9.7803 0.35625C9.3993 -0.11875 8.5993 -0.11875 8.2183 0.35625L0.218298 10.3562C0.100937 10.5035 0.027469 10.6808 0.00633031 10.8679C-0.0148084 11.0549 0.0172391 11.2442 0.0987929 11.4139C0.180347 11.5836 0.3081 11.7268 0.467386 11.8272C0.626672 11.9275 0.811032 11.9809 0.999298 11.9812V11.9812Z",fill:"#9CAF88"})}):e("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M5.4993 11.9812V11.4812H4.9993L1.00015 11.4813C1 11.4813 0.999852 11.4812 0.999704 11.4812C0.905632 11.481 0.813524 11.4543 0.733927 11.4041C0.654204 11.3539 0.590264 11.2822 0.549446 11.1973C0.508628 11.1123 0.492589 11.0176 0.503169 10.924C0.51374 10.8304 0.550462 10.7418 0.609121 10.6681C0.609167 10.6681 0.609213 10.668 0.609259 10.6679L8.60833 0.669098C8.60835 0.669071 8.60838 0.669043 8.6084 0.669016C8.78926 0.443661 9.20934 0.443661 9.3902 0.669016C9.39022 0.669043 9.39024 0.669071 9.39026 0.669098L17.3893 10.6679C17.4481 10.7416 17.4848 10.8304 17.4954 10.924C17.506 11.0176 17.49 11.1123 17.4492 11.1973C17.4083 11.2822 17.3444 11.3539 17.2647 11.4041C17.1851 11.4543 17.093 11.481 16.9989 11.4812C16.9987 11.4812 16.9986 11.4813 16.9984 11.4813L12.9993 11.4812H12.4993V11.9812V18.9813C12.4993 19.1139 12.4466 19.241 12.3529 19.3348C12.2591 19.4286 12.1319 19.4813 11.9993 19.4813H5.9993C5.86669 19.4813 5.73951 19.4286 5.64574 19.3348C5.55198 19.241 5.4993 19.1139 5.4993 18.9813V11.9812Z",stroke:"#9A937D"})})}),e("div",{className:"downvote",onClick:()=>l(-1),children:C==-1?e("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M17.9003 8.566C17.8185 8.3965 17.6906 8.25348 17.5312 8.15337C17.3719 8.05326 17.1875 8.0001 16.9993 8H12.9993V1C12.9993 0.734784 12.8939 0.48043 12.7064 0.292893C12.5189 0.105357 12.2645 0 11.9993 0H5.9993C5.73408 0 5.47973 0.105357 5.29219 0.292893C5.10466 0.48043 4.9993 0.734784 4.9993 1V8H0.999298C0.811032 8.00032 0.626672 8.05373 0.467386 8.15409C0.3081 8.25445 0.180347 8.3977 0.0987929 8.56738C0.0172391 8.73707 -0.0148084 8.92631 0.00633031 9.11339C0.027469 9.30047 0.100937 9.47779 0.218298 9.625L8.2183 19.625C8.31198 19.7422 8.43082 19.8367 8.56601 19.9017C8.70121 19.9667 8.84929 20.0005 8.9993 20.0005C9.1493 20.0005 9.29739 19.9667 9.43258 19.9017C9.56778 19.8367 9.68662 19.7422 9.7803 19.625L17.7803 9.625C18.0203 9.324 18.0663 8.913 17.9003 8.566Z",fill:"#9CAF88"})}):e("svg",{width:"18",height:"20",viewBox:"0 0 18 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M12.4993 8V8.5H12.9993H16.999C17.0932 8.50005 17.1855 8.52666 17.2653 8.57676C17.3447 8.62668 17.4086 8.6979 17.4495 8.78231C17.5329 8.95709 17.5093 9.16285 17.3894 9.31329L9.38986 19.3127L9.3898 19.3127C9.34296 19.3713 9.28354 19.4186 9.21594 19.4511C9.14834 19.4836 9.0743 19.5005 8.9993 19.5005C8.9243 19.5005 8.85026 19.4836 8.78266 19.4511C8.71506 19.4186 8.65564 19.3713 8.6088 19.3127L8.60873 19.3127L0.609259 9.31331C0.609213 9.31325 0.609167 9.3132 0.609121 9.31314C0.550462 9.23949 0.51374 9.15081 0.503169 9.05725C0.492589 8.96362 0.508628 8.8689 0.549446 8.78397C0.590264 8.69905 0.654204 8.62735 0.733927 8.57712C0.813524 8.52697 0.905632 8.50024 0.999704 8.5C0.999852 8.5 1 8.5 1.00015 8.5L4.9993 8.5H5.4993V8V1C5.4993 0.867392 5.55198 0.740215 5.64574 0.646447C5.73951 0.552678 5.86669 0.5 5.9993 0.5H11.9993C12.1319 0.5 12.2591 0.552678 12.3529 0.646447C12.4466 0.740215 12.4993 0.867392 12.4993 1V8Z",stroke:"#9A937D"})})})]})},"Vote");try{r.displayName="Vote",r.__docgenInfo={description:"",displayName:"Vote",props:{onVote:{defaultValue:null,description:"",name:"onVote",required:!0,type:{name:"(oldVote: number, voteClick: number) => void"}},reviewVote:{defaultValue:null,description:"",name:"reviewVote",required:!0,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/component/vote/Vote.tsx#Vote"]={docgenInfo:r.__docgenInfo,name:"Vote",path:"src/component/vote/Vote.tsx#Vote"})}catch{}export{r as V};
//# sourceMappingURL=Vote.3479e2b4.js.map