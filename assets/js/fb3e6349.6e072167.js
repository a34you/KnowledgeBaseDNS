"use strict";(self.webpackChunkadguard_dns_knowledge_base=self.webpackChunkadguard_dns_knowledge_base||[]).push([[45],{4137:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),k=s(n),c=r,m=k["".concat(p,".").concat(c)]||k[c]||u[c]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3841:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var a=n(3117),r=n(102),i=(n(7294),n(4137)),o=["components"],l={title:"API",sidebar_position:2},p="AdGuard DNS API",s={unversionedId:"private-dns/api",id:"private-dns/api",title:"API",description:"AdGuard DNS provides a REST API you can use to integrate your apps with it.",source:"@site/docs/private-dns/api.md",sourceDirName:"private-dns",slug:"/private-dns/api",permalink:"/KnowledgeBaseDNS/private-dns/api",draft:!1,editUrl:"https://github.com/AdguardTeam/KnowledgeBaseDNS/edit/master/docs/private-dns/api.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"API",sidebar_position:2},sidebar:"sidebar",previous:{title:"Overview",permalink:"/KnowledgeBaseDNS/private-dns/overview"},next:{title:"Private AdGuard DNS beta test",permalink:"/KnowledgeBaseDNS/miscellaneous/beta-testing"}},d={},u=[{value:"Authentication",id:"authentication",level:2},{value:"Generate Access token",id:"generate-access-token",level:3},{value:"Example request",id:"example-request",level:4},{value:"Example response",id:"example-response",level:4},{value:"Generate Access Token from Refresh Token",id:"generate-access-token-from-refresh-token",level:3},{value:"Example request",id:"example-request-1",level:4},{value:"Example response",id:"example-response-1",level:4},{value:"Revoking a Refresh Token",id:"revoking-a-refresh-token",level:3},{value:"Request Example",id:"request-example",level:4},{value:"Accessing API",id:"accessing-api",level:3},{value:"API",id:"api",level:2},{value:"OpenAPI spec",id:"openapi-spec",level:3},{value:"Feedback",id:"feedback",level:2}],k={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"adguard-dns-api"},"AdGuard DNS API"),(0,i.kt)("p",null,"AdGuard DNS provides a REST API you can use to integrate your apps with it."),(0,i.kt)("h2",{id:"authentication"},"Authentication"),(0,i.kt)("h3",{id:"generate-access-token"},"Generate Access token"),(0,i.kt)("p",null,"Make a POST request for the following URL with the given params to generate\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),":"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("td",{parentName:"tr",align:null},"Description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"username")),(0,i.kt)("td",{parentName:"tr",align:null},"Account email")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"password")),(0,i.kt)("td",{parentName:"tr",align:null},"Account password")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"mfa_token"),(0,i.kt)("td",{parentName:"tr",align:null},"Two-Factor authentication token (if enabled in account settings)")))),(0,i.kt)("p",null,"In the response, you will get both ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token")," will expire after some specified seconds (represented by\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"expires_in")," param in the response). You can regenerate a new ",(0,i.kt)("inlineCode",{parentName:"p"},"access_token"),"\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," (Refer: ",(0,i.kt)("inlineCode",{parentName:"p"},"Generate Access Token from Refresh Token"),").")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token")," is permanent. To revoke a ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh_token"),", refer: ",(0,i.kt)("inlineCode",{parentName:"p"},"Revoking a Refresh Token"),"."))),(0,i.kt)("h4",{id:"example-request"},"Example request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'username=user%40adguard.com' \\\n    -d 'password=********' \\\n    -d 'mfa_token=727810'\n")),(0,i.kt)("h4",{id:"example-response"},"Example response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "jTFho_aymtN20pZR5RRSQAzd81I",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2620978\n}\n')),(0,i.kt)("h3",{id:"generate-access-token-from-refresh-token"},"Generate Access Token from Refresh Token"),(0,i.kt)("p",null,"Access tokens have limited validity. Once it expires, your app will have to use\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh token")," to request for a new ",(0,i.kt)("inlineCode",{parentName:"p"},"access token"),"."),(0,i.kt)("p",null,"Make the following POST request with the given params to get a new access token:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/oauth_token")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("td",{parentName:"tr",align:null},"Description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"refresh_token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"REFRESH TOKEN")," using which a new access token has to be generated.")))),(0,i.kt)("h4",{id:"example-request-1"},"Example request"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.io/oapi/v1/oauth_token' -i -X POST \\\n    -H 'Content-Type: application/x-www-form-urlencoded' \\\n    -d 'refresh_token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,i.kt)("h4",{id:"example-response-1"},"Example response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "access_token": "xQnT7GYT6Ag--3oY_EcOOdXe-I0",\n  "token_type": "bearer",\n  "refresh_token": "H3SW6YFJ-tOPe0FQCM1Jd6VnMiA",\n  "expires_in": 2627999\n}\n')),(0,i.kt)("h3",{id:"revoking-a-refresh-token"},"Revoking a Refresh Token"),(0,i.kt)("p",null,"To revoke a refresh token, make the following POST request with the given params:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"https://api.adguard-dns.io/oapi/v1/revoke_token")),(0,i.kt)("h4",{id:"request-example"},"Request Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ curl 'https://api.adguard-dns.com/oapi/v1/revoke_token' -i -X POST \\\n    -d 'token=H3SW6YFJ-tOPe0FQCM1Jd6VnMiA'\n")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null}),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("td",{parentName:"tr",align:null},"Description")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"refresh_token")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"REFRESH TOKEN")," which is to be revoked")))),(0,i.kt)("h3",{id:"accessing-api"},"Accessing API"),(0,i.kt)("p",null,"Once the access and the refresh tokens are generated, API calls can be made by\npassing the access token in the header."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Header name should be ",(0,i.kt)("inlineCode",{parentName:"li"},"Authorization")),(0,i.kt)("li",{parentName:"ul"},"Header value should be ",(0,i.kt)("inlineCode",{parentName:"li"},"Bearer {access_token}"))),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"openapi-spec"},"OpenAPI spec"),(0,i.kt)("p",null,"OpenAPI specification is available at ",(0,i.kt)("a",{parentName:"p",href:"https://api.adguard-dns.io/static/swagger/openapi.json"},"https://api.adguard-dns.io/static/swagger/openapi.json"),"."),(0,i.kt)("p",null,"You can use different tools to view the list of available API methods. For\ninstance, you can open this file in ",(0,i.kt)("a",{parentName:"p",href:"https://editor.swagger.io/"},"https://editor.swagger.io/"),"."),(0,i.kt)("h2",{id:"feedback"},"Feedback"),(0,i.kt)("p",null,"If you would like this API to be extended with new methods, please email us to\n",(0,i.kt)("inlineCode",{parentName:"p"},"devteam@adguard.com")," and let us know what you would like to be added."))}c.isMDXComponent=!0}}]);