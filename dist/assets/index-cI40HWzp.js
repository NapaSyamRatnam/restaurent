(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}})();const ts=[{id:"all",name:"All Dishes",icon:"fa-solid fa-utensils"},{id:"specials",name:"Chef's Specials",icon:"fa-solid fa-crown"},{id:"starters",name:"Starters & Apps",icon:"fa-solid fa-bowl-food"},{id:"mains",name:"Gourmet Mains",icon:"fa-solid fa-drumstick-bite"},{id:"pizzas",name:"Artisanal Pizzas",icon:"fa-solid fa-pizza-slice"},{id:"burgers",name:"Craft Burgers",icon:"fa-solid fa-burger"},{id:"desserts",name:"Decadent Desserts",icon:"fa-solid fa-ice-cream"},{id:"drinks",name:"Craft Beverages",icon:"fa-solid fa-wine-glass"}],Ci=[{id:"dish-1",name:"Artisanal Woodfired Neapolitan Pizza",category:"pizzas",price:18.99,rating:4.9,reviews:142,description:"Freshly baked wood-fired pizza with San Marzano tomatoes, buffalo mozzarella, fresh basil leaves, and cold-pressed extra virgin olive oil drizzle.",image:"./assets/woodfired-pizza.png",spicy:0,calories:"850 kcal",prepTime:"15-20 min",tags:["chefSpecial","veg"],inStock:!0},{id:"dish-2",name:"Truffle Wagyu Gourmet Burger",category:"burgers",price:21.5,rating:4.95,reviews:218,description:"Prime Wagyu beef patty with black truffle aioli, aged Swiss Gruyère, caramelized balsamic onions, and arugula on a toasted brioche bun.",image:"./assets/truffle-burger.png",spicy:1,calories:"920 kcal",prepTime:"12-15 min",tags:["chefSpecial"],inStock:!0},{id:"dish-3",name:"Crispy Calamari Fritti",category:"starters",price:14.25,rating:4.7,reviews:89,description:"Wild-caught calamari lightly dusted in seasoned flour, flash-fried until golden, served with house garlic lemon aioli and spicy marinara.",image:"https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&w=600&q=80",spicy:1,calories:"540 kcal",prepTime:"10 min",tags:[],inStock:!0},{id:"dish-4",name:"Grilled Atlantic Salmon Ribeye",category:"mains",price:26.8,rating:4.85,reviews:164,description:"Pan-seared Atlantic salmon fillet served over saffron risotto, tender asparagus spears, and a citrus lemon butter dill emulsion.",image:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80",spicy:0,calories:"680 kcal",prepTime:"20 min",tags:["gf","chefSpecial"],inStock:!0},{id:"dish-5",name:"Fiery Spicy Thai Basil Noodle Bowl",category:"mains",price:17.5,rating:4.6,reviews:112,description:"Wok-tossed rice noodles with red bell peppers, Thai bird chili, holy basil, garlic shoots, and grilled organic tofu or chicken.",image:"https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80",spicy:3,calories:"610 kcal",prepTime:"15 min",tags:["veg"],inStock:!0},{id:"dish-6",name:"Creamy Wild Mushroom Rigatoni",category:"mains",price:19,rating:4.75,reviews:95,description:"House-made rigatoni pasta tossed in a rich porcini mushroom cream sauce, white truffle oil, shaved Parmigiano-Reggiano, and thyme.",image:"https://images.unsplash.com/photo-1621996346565-e3d5d6281318?auto=format&fit=crop&w=600&q=80",spicy:0,calories:"740 kcal",prepTime:"15 min",tags:["veg"],inStock:!0},{id:"dish-7",name:"Molten Belgian Chocolate Lava Cake",category:"desserts",price:10.5,rating:4.9,reviews:178,description:"Warm dark Belgian chocolate cake with a rich liquid fudge center, served with Madagascan bourbon vanilla bean gelato.",image:"https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",spicy:0,calories:"520 kcal",prepTime:"12 min",tags:["veg"],inStock:!0},{id:"dish-8",name:"Smoked Smoked Old Fashioned Cocktail",category:"drinks",price:13,rating:4.8,reviews:65,description:"Bourbon infused with hickory smoke, Angostura bitters, maraschino cherry, and hand-carved ice sphere.",image:"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600&q=80",spicy:0,calories:"180 kcal",prepTime:"5 min",tags:[],inStock:!0}],ds=[{id:"loc-1",name:"GT Road Central (Flagship)",address:"Grand Trunk Road, Near VRC Centre, Nellore, Andhra Pradesh 524001",phone:"+91 861 234 8901",hours:"Daily: 11:00 AM - 11:00 PM",deliveryRadius:"8 km",avgDeliveryTime:"20-30 min",rating:4.9,mapLat:14.4426,mapLng:79.9865,features:["Valet Parking","Air Conditioned Dining","Full Bar & Mocktail Lounge","Private Family Section"]},{id:"loc-2",name:"Magunta Layout Bistro",address:"16/1124 Mini Bypass Road, Magunta Layout, Nellore, Andhra Pradesh 524003",phone:"+91 861 239 8765",hours:"Mon-Sat: 11:30 AM - 10:30 PM",deliveryRadius:"6 km",avgDeliveryTime:"25-35 min",rating:4.8,mapLat:14.435,mapLng:79.978,features:["Rooftop Seating","Weekend Special Buffet","Craft Beverage Counter"]},{id:"loc-3",name:"Pogathota Plaza",address:"Opposite Children's Park, Pogathota, Nellore, Andhra Pradesh 524001",phone:"+91 861 230 4567",hours:"Daily: 10:00 AM - 11:30 PM",deliveryRadius:"7 km",avgDeliveryTime:"15-25 min",rating:4.95,mapLat:14.448,mapLng:79.989,features:["Garden Dining","Family Dining Tables","Spicy Nellore Specials & Fusion Menu"]}],Pi={name:"syam",email:"syam@gmail.com",phone:"+91 98480 12345",rewardPoints:480,loyaltyTier:"Gold Gourmet",addresses:[{id:"addr-1",label:"Home",street:"Door No. 24-2-154, Dargamitta",city:"Nellore, Andhra Pradesh",zip:"524003",isDefault:!0},{id:"addr-2",label:"Work / Tech Hub",street:"Plot 45, Auto Nagar Industrial Area",city:"Nellore, Andhra Pradesh",zip:"524004",isDefault:!1}],paymentMethods:[{id:"pay-1",type:"card",title:"Visa Credit Card",cardNumber:"•••• •••• •••• 4892",expiry:"09/29",isPrimary:!0},{id:"pay-2",type:"upi",title:"UPI ID (PhonePe / GPay)",upiId:"syam@ybl",isPrimary:!1}]},$i=Symbol.for("@supabase/supabase-js.traceContextExtractor");function Oi(){return globalThis[$i]}function Pt(t,e){var s={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(s[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(s[i[r]]=t[i[r]]);return s}function xi(t,e,s,i){function r(n){return n instanceof s?n:new s(function(a){a(n)})}return new(s||(s=Promise))(function(n,a){function o(d){try{c(i.next(d))}catch(h){a(h)}}function l(d){try{c(i.throw(d))}catch(h){a(h)}}function c(d){d.done?n(d.value):r(d.value).then(o,l)}c((i=i.apply(t,e||[])).next())})}const Li=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class ss extends Error{constructor(e,s="FunctionsError",i){super(e),this.name=s,this.context=i}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class Di extends ss{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class us extends ss{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class hs extends ss{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var qt;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(qt||(qt={}));class Bi{constructor(e,{headers:s={},customFetch:i,region:r=qt.Any}={}){this.url=e,this.headers=s,this.region=r,this.fetch=Li(i)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return xi(this,arguments,void 0,function*(s,i={}){var r,n;let a,o,l;try{const{headers:c,method:d,body:h,signal:u,timeout:m}=i;let p={},{region:g}=i;g||(g=this.region);const b=new URL(`${this.url}/${s}`);g&&g!=="any"&&(p["x-region"]=g,b.searchParams.set("forceFunctionRegion",g));let v;const S=!!c&&Object.keys(c).some(G=>G.toLowerCase()==="content-type");h&&!S?typeof Blob<"u"&&h instanceof Blob||h instanceof ArrayBuffer?(p["Content-Type"]="application/octet-stream",v=h):typeof h=="string"?(p["Content-Type"]="text/plain",v=h):typeof FormData<"u"&&h instanceof FormData?v=h:(p["Content-Type"]="application/json",v=JSON.stringify(h)):h&&typeof h!="string"&&!(typeof Blob<"u"&&h instanceof Blob)&&!(h instanceof ArrayBuffer)&&!(typeof FormData<"u"&&h instanceof FormData)?v=JSON.stringify(h):v=h;let w=u;m&&(o=new AbortController,a=setTimeout(()=>o.abort(),m),u?(w=o.signal,l=()=>o.abort(),u.addEventListener("abort",l)):w=o.signal);const A=yield this.fetch(b.toString(),{method:d||"POST",headers:Object.assign(Object.assign(Object.assign({},p),this.headers),c),body:v,signal:w}).catch(G=>{throw new Di(G)}),x=A.headers.get("x-relay-error");if(x&&x==="true")throw new us(A);if(!A.ok)throw new hs(A);let I=((r=A.headers.get("Content-Type"))!==null&&r!==void 0?r:"text/plain").split(";")[0].trim().toLowerCase(),$;return I==="application/json"?$=yield A.json():I==="application/octet-stream"||I==="application/pdf"?$=yield A.blob():I==="text/event-stream"?$=A:I==="multipart/form-data"?$=yield A.formData():$=yield A.text(),{data:$,error:null,response:A}}catch(c){return{data:null,error:c,response:c instanceof hs||c instanceof us?c.context:void 0}}finally{a&&clearTimeout(a),l&&((n=i.signal)===null||n===void 0||n.removeEventListener("abort",l))}})}}const Xs=3,fs=t=>Math.min(1e3*2**t,3e4),Ni=[520,503],Qs=["GET","HEAD","OPTIONS"];var Lt=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function Ve(t){"@babel/helpers - typeof";return Ve=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ve(t)}function Ui(t,e){if(Ve(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(Ve(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ji(t){var e=Ui(t,"string");return Ve(e)=="symbol"?e:e+""}function Mi(t,e,s){return(e=ji(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function ms(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),s.push.apply(s,i)}return s}function Ie(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?ms(Object(s),!0).forEach(function(i){Mi(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):ms(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}function ps(t,e){return new Promise(s=>{if(e!=null&&e.aborted){s();return}const i=setTimeout(()=>{e==null||e.removeEventListener("abort",r),s()},t);function r(){clearTimeout(i),s()}e==null||e.addEventListener("abort",r)})}function qi(t,e,s,i){return!(!i||s>=Xs||!Qs.includes(t)||!Ni.includes(e))}var Fi=class{constructor(t){var e,s,i,r,n;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(s=t.isMaybeSingle)!==null&&s!==void 0?s:!1,this.shouldStripNulls=(i=t.shouldStripNulls)!==null&&i!==void 0?i:!1,this.urlLengthLimit=(r=t.urlLengthLimit)!==null&&r!==void 0?r:8e3,this.retryEnabled=(n=t.retry)!==null&&n!==void 0?n:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var s=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const i=this.fetch;let n=(async()=>{let a=0;for(;;){const c={};s.headers.forEach((h,u)=>{c[u]=h}),a>0&&(c["X-Retry-Count"]=String(a));let d;try{d=await i(s.url.toString(),{method:s.method,headers:c,body:JSON.stringify(s.body,(h,u)=>typeof u=="bigint"?u.toString():u),signal:s.signal})}catch(h){if((h==null?void 0:h.name)==="AbortError"||(h==null?void 0:h.code)==="ABORT_ERR"||!Qs.includes(s.method))throw h;if(s.retryEnabled&&a<Xs){const u=fs(a);a++,await ps(u,s.signal);continue}throw h}if(qi(s.method,d.status,a,s.retryEnabled)){var o,l;const h=(o=(l=d.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,u=h!==null?Math.max(0,parseInt(h,10)||0)*1e3:fs(a);await d.text(),a++,await ps(u,s.signal);continue}return await s.processResponse(d)}})();return this.shouldThrowOnError||(n=n.catch(a=>{var o;let l="",c="",d="";const h=a==null?void 0:a.cause;if(h){var u,m,p,g;const S=(u=h==null?void 0:h.message)!==null&&u!==void 0?u:"",w=(m=h==null?void 0:h.code)!==null&&m!==void 0?m:"";l=`${(p=a==null?void 0:a.name)!==null&&p!==void 0?p:"FetchError"}: ${a==null?void 0:a.message}`,l+=`

Caused by: ${(g=h==null?void 0:h.name)!==null&&g!==void 0?g:"Error"}: ${S}`,w&&(l+=` (${w})`),h!=null&&h.stack&&(l+=`
${h.stack}`)}else{var b;l=(b=a==null?void 0:a.stack)!==null&&b!==void 0?b:""}const v=this.url.toString().length;return(a==null?void 0:a.name)==="AbortError"||(a==null?void 0:a.code)==="ABORT_ERR"?(d="",c="Request was aborted (timeout or manual cancellation)",v>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${v} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):((h==null?void 0:h.name)==="HeadersOverflowError"||(h==null?void 0:h.code)==="UND_ERR_HEADERS_OVERFLOW")&&(d="",c="HTTP headers exceeded server limits (typically 16KB)",v>this.urlLengthLimit&&(c+=`. Your request URL is ${v} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a==null?void 0:a.name)!==null&&o!==void 0?o:"FetchError"}: ${a==null?void 0:a.message}`,details:l,hint:c,code:d},data:null,count:null,status:0,statusText:""}})),n.then(t,e)}async processResponse(t){var e=this;let s=null,i=null,r=null,n=t.status,a=t.statusText;if(t.ok){var o,l;if(e.method!=="HEAD"){var c;const m=await t.text();if(m!=="")if(e.headers.get("Accept")==="text/csv")i=m;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))i=m;else try{i=JSON.parse(m)}catch{if(s={message:m},i=null,e.shouldThrowOnError)throw new Lt({message:m,details:"",hint:"",code:""})}}const h=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),u=(l=t.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");if(h&&u&&u.length>1&&(r=parseInt(u[1])),e.isMaybeSingle&&Array.isArray(i))if(i.length>1){if(s={code:"PGRST116",details:`Results contain ${i.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},i=null,r=null,n=406,a="Not Acceptable",e.shouldThrowOnError){var d;throw new Lt(Ie(Ie({},s),{},{hint:(d=s.hint)!==null&&d!==void 0?d:""}))}}else i.length===1?i=i[0]:i=null}else{const h=await t.text();try{s=JSON.parse(h),Array.isArray(s)&&t.status===404&&(i=[],s=null,n=200,a="OK")}catch{t.status===404&&h===""?(n=204,a="No Content"):s={message:h}}if(s&&e.shouldThrowOnError)throw new Lt(s)}return{success:s===null,error:s,data:i,count:r,status:n,statusText:a}}returns(){return this}overrideTypes(){return this}},zi=class extends Fi{throwOnError(){return super.throwOnError()}select(t){let e=!1;const s=(t??"*").split("").map(i=>/\s/.test(i)&&!e?"":(i==='"'&&(e=!e),i)).join("");return this.url.searchParams.set("select",s),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:s,foreignTable:i,referencedTable:r=i}={}){const n=r?`${r}.order`:"order",a=this.url.searchParams.get(n);return this.url.searchParams.set(n,`${a?`${a},`:""}${t}.${e?"asc":"desc"}${s===void 0?"":s?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:s=e}={}){const i=typeof s>"u"?"limit":`${s}.limit`;return this.url.searchParams.set(i,`${t}`),this}range(t,e,{foreignTable:s,referencedTable:i=s}={}){const r=typeof i>"u"?"offset":`${i}.offset`,n=typeof i>"u"?"limit":`${i}.limit`;return this.url.searchParams.set(r,`${t}`),this.url.searchParams.set(n,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:s=!1,buffers:i=!1,wal:r=!1,format:n="text"}={}){var a;const o=[t?"analyze":null,e?"verbose":null,s?"settings":null,i?"buffers":null,r?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${n}; for="${l}"; options=${o};`),n==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const gs=new RegExp("[,()]");var Te=class extends zi{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const s=Array.from(new Set(e)).map(i=>typeof i=="string"&&gs.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`in.(${s})`),this}notIn(t,e){const s=Array.from(new Set(e)).map(i=>typeof i=="string"&&gs.test(i)?`"${i}"`:`${i}`).join(",");return this.url.searchParams.append(t,`not.in.(${s})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:s,type:i}={}){let r="";i==="plain"?r="pl":i==="phrase"?r="ph":i==="websearch"&&(r="w");const n=s===void 0?"":`(${s})`;return this.url.searchParams.append(t,`${r}fts${n}.${e}`),this}match(t){return Object.entries(t).filter(([e,s])=>s!==void 0).forEach(([e,s])=>{this.url.searchParams.append(e,`eq.${s}`)}),this}not(t,e,s){return this.url.searchParams.append(t,`not.${e}.${s}`),this}or(t,{foreignTable:e,referencedTable:s=e}={}){const i=s?`${s}.or`:"or";return this.url.searchParams.append(i,`(${t})`),this}filter(t,e,s){return this.url.searchParams.append(t,`${e}.${s}`),this}},Hi=class{constructor(t,{headers:e={},schema:s,fetch:i,urlLengthLimit:r=8e3,retry:n}){this.url=t,this.headers=new Headers(e),this.schema=s,this.fetch=i,this.urlLengthLimit=r,this.retry=n}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:s=!1,count:i}=e??{},r=s?"HEAD":"GET";let n=!1;const a=(t??"*").split("").map(c=>/\s/.test(c)&&!n?"":(c==='"'&&(n=!n),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),i&&l.append("Prefer",`count=${i}`),new Te({method:r,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:s=!0}={}){var i;const r="POST",{url:n,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),s||a.append("Prefer","missing=default"),Array.isArray(t)){const o=t.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);n.searchParams.set("columns",l.join(","))}}return new Te({method:r,url:n,headers:a,schema:this.schema,body:t,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:s=!1,count:i,defaultToNull:r=!0}={}){var n;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${s?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),i&&l.append("Prefer",`count=${i}`),r||l.append("Prefer","missing=default"),Array.isArray(t)){const c=t.reduce((d,h)=>d.concat(Object.keys(h)),[]);if(c.length>0){const d=[...new Set(c)].map(h=>`"${h}"`);o.searchParams.set("columns",d.join(","))}}return new Te({method:a,url:o,headers:l,schema:this.schema,body:t,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var s;const i="PATCH",{url:r,headers:n}=this.cloneRequestState();return e&&n.append("Prefer",`count=${e}`),new Te({method:i,url:r,headers:n,schema:this.schema,body:t,fetch:(s=this.fetch)!==null&&s!==void 0?s:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const s="DELETE",{url:i,headers:r}=this.cloneRequestState();return t&&r.append("Prefer",`count=${t}`),new Te({method:s,url:i,headers:r,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}},Vi=class Zs{constructor(e,{headers:s={},schema:i,fetch:r,timeout:n,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(s),this.schemaName=i,this.urlLengthLimit=a;const l=r??globalThis.fetch;n!==void 0&&n>0?this.fetch=(c,d)=>{const h=new AbortController,u=setTimeout(()=>h.abort(),n),m=d==null?void 0:d.signal;if(m){if(m.aborted)return clearTimeout(u),l(c,d);const p=()=>{clearTimeout(u),h.abort()};return m.addEventListener("abort",p,{once:!0}),l(c,Ie(Ie({},d),{},{signal:h.signal})).finally(()=>{clearTimeout(u),m.removeEventListener("abort",p)})}return l(c,Ie(Ie({},d),{},{signal:h.signal})).finally(()=>clearTimeout(u))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new Hi(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Zs(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,s={},{head:i=!1,get:r=!1,count:n}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const d=m=>m!==null&&typeof m=="object"&&(!Array.isArray(m)||m.some(d)),h=i&&Object.values(s).some(d);h?(o="POST",c=s):i||r?(o=i?"HEAD":"GET",Object.entries(s).filter(([m,p])=>p!==void 0).map(([m,p])=>[m,Array.isArray(p)?`{${p.join(",")}}`:`${p}`]).forEach(([m,p])=>{l.searchParams.append(m,p)})):(o="POST",c=s);const u=new Headers(this.headers);return h?u.set("Prefer",n?`count=${n},return=minimal`:"return=minimal"):n&&u.set("Prefer",`count=${n}`),new Te({method:o,url:l,headers:u,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class Wi{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const s=globalThis;if(typeof globalThis<"u"&&typeof s.WebSocket<"u")return{type:"native",wsConstructor:s.WebSocket};const i=typeof global<"u"?global:void 0;if(i&&typeof i.WebSocket<"u")return{type:"native",wsConstructor:i.WebSocket};if(typeof globalThis<"u"&&typeof s.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&s.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const r=globalThis.process;if(r){const n=r.versions;if(n&&n.node)return{type:"unsupported",error:"Node.js detected but native WebSocket not found.",workaround:"Ensure you are running Node.js 22+ or provide a WebSocket implementation via the transport option."}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let s=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(s+=`

Suggested solution: ${e.workaround}`),new Error(s)}static isWebSocketSupported(){try{return this.detectEnvironment().type==="native"}catch{return!1}}}const Gi="2.112.0",Ki=`realtime-js/${Gi}`,Ji="1.0.0",ei="2.0.0",Yi=ei,Xi=1e4,Qi=100,he={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},ti={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Ft={connecting:"connecting",closing:"closing",closed:"closed"};class Zi{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,s){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return s(this._binaryEncodeUserBroadcastPush(e));let i=[e.join_ref,e.ref,e.topic,e.event,e.payload];return s(JSON.stringify(i))}_binaryEncodeUserBroadcastPush(e){var s;return this._isArrayBuffer((s=e.payload)===null||s===void 0?void 0:s.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var s,i;const r=(i=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&i!==void 0?i:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,r)}_encodeJsonUserBroadcastPush(e){var s,i;const r=(i=(s=e.payload)===null||s===void 0?void 0:s.payload)!==null&&i!==void 0?i:{},a=new TextEncoder().encode(JSON.stringify(r)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,s,i){var r,n;const a=new TextEncoder,o=a.encode(e.topic),l=a.encode((r=e.ref)!==null&&r!==void 0?r:""),c=a.encode((n=e.join_ref)!==null&&n!==void 0?n:""),d=a.encode(e.payload.event),h=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},u=a.encode(Object.keys(h).length===0?"":JSON.stringify(h));if(c.length>255)throw new Error(`joinRef length ${c.length} exceeds maximum of 255`);if(l.length>255)throw new Error(`ref length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`topic length ${o.length} exceeds maximum of 255`);if(d.length>255)throw new Error(`userEvent length ${d.length} exceeds maximum of 255`);if(u.length>255)throw new Error(`metadata length ${u.length} exceeds maximum of 255`);const m=this.USER_BROADCAST_PUSH_META_LENGTH+c.length+l.length+o.length+d.length+u.length,p=new ArrayBuffer(this.HEADER_LENGTH+m),g=new DataView(p),b=new Uint8Array(p);let v=0;g.setUint8(v++,this.KINDS.userBroadcastPush),g.setUint8(v++,c.length),g.setUint8(v++,l.length),g.setUint8(v++,o.length),g.setUint8(v++,d.length),g.setUint8(v++,u.length),g.setUint8(v++,s),b.set(c,v),v+=c.length,b.set(l,v),v+=l.length,b.set(o,v),v+=o.length,b.set(d,v),v+=d.length,b.set(u,v),v+=u.length;var S=new Uint8Array(p.byteLength+i.byteLength);return S.set(new Uint8Array(p),0),S.set(new Uint8Array(i),p.byteLength),S.buffer}decode(e,s){if(this._isArrayBuffer(e)){let i=this._binaryDecode(e);return s(i)}if(typeof e=="string"){const i=JSON.parse(e),[r,n,a,o,l]=i;return s({join_ref:r,ref:n,topic:a,event:o,payload:l})}return s({})}_binaryDecode(e){const s=new DataView(e),i=s.getUint8(0),r=new TextDecoder;switch(i){case this.KINDS.userBroadcast:return this._decodeUserBroadcast(e,s,r)}}_decodeUserBroadcast(e,s,i){const r=s.getUint8(1),n=s.getUint8(2),a=s.getUint8(3),o=s.getUint8(4);let l=this.HEADER_LENGTH+4;const c=i.decode(e.slice(l,l+r));l=l+r;const d=i.decode(e.slice(l,l+n));l=l+n;const h=i.decode(e.slice(l,l+a));l=l+a;const u=e.slice(l,e.byteLength),m=o===this.JSON_ENCODING?JSON.parse(i.decode(u)):u,p={type:this.BROADCAST_EVENT,event:d,payload:m};return a>0&&(p.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:p}}_isArrayBuffer(e){var s;return e instanceof ArrayBuffer||((s=e==null?void 0:e.constructor)===null||s===void 0?void 0:s.name)==="ArrayBuffer"}_pick(e,s){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([i])=>s.includes(i)))}}var L;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(L||(L={}));const bs=(t,e,s={})=>{var i;const r=(i=s.skipTypes)!==null&&i!==void 0?i:[];return e?Object.keys(e).reduce((n,a)=>(n[a]=er(a,t,e,r),n),{}):{}},er=(t,e,s,i)=>{const r=e.find(o=>o.name===t),n=r==null?void 0:r.type,a=s[t];return n&&!i.includes(n)?si(n,a):zt(a)},si=(t,e)=>{if(t.charAt(0)==="_"){const s=t.slice(1,t.length);return rr(e,s)}switch(t){case L.bool:return tr(e);case L.float4:case L.float8:case L.int2:case L.int4:case L.int8:case L.numeric:case L.oid:return sr(e);case L.json:case L.jsonb:return ir(e);case L.timestamp:return nr(e);case L.abstime:case L.date:case L.daterange:case L.int4range:case L.int8range:case L.money:case L.reltime:case L.text:case L.time:case L.timestamptz:case L.timetz:case L.tsrange:case L.tstzrange:return zt(e);default:return zt(e)}},zt=t=>t,tr=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},sr=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},ir=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},rr=(t,e)=>{if(typeof t!="string")return t;const s=t.length-1,i=t[s];if(t[0]==="{"&&i==="}"){let n;const a=t.slice(1,s);try{n=JSON.parse("["+a+"]")}catch{n=a?a.split(","):[]}return n.map(o=>si(e,o))}return t},nr=t=>typeof t=="string"?t.replace(" ","T"):t,ii=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Pe=t=>typeof t=="function"?t:function(){return t},ar=typeof self<"u"?self:null,Re=typeof window<"u"?window:null,Z=ar||Re||globalThis,or="2.0.0",lr=1e4,cr=1e3,dr=100,ee={connecting:0,open:1,closing:2,closed:3},z={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},re={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Ht={longpoll:"longpoll",websocket:"websocket"},ur={complete:4},Vt="base64url.bearer.phx.",ct=class{constructor(t,e,s,i){this.channel=t,this.event=e,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=i,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:s}){this.recHooks.filter(i=>i.status===t).forEach(i=>i.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},ri=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},hr=class{constructor(t,e,s){this.state=z.closed,this.topic=t,this.params=Pe(e||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new ct(this,re.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new ri(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=z.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(i=>i.send()),this.pushBuffer=[]}),this.joinPush.receive("error",i=>{this.state=z.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=z.closed,this.socket.remove(this)}),this.onError(i=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,i),this.isJoining()&&this.joinPush.reset(),this.state=z.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new ct(this,re.leave,Pe({}),this.timeout).send(),this.state=z.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(re.reply,(i,r)=>{this.trigger(this.replyEventName(r),i)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=z.closed,this.bindings=[]}onClose(t){this.on(re.close,t)}onError(t){return this.on(re.error,e=>t(e))}on(t,e){let s=this.bindingRef++;return this.bindings.push({event:t,ref:s,callback:e}),s}off(t,e){this.bindings=this.bindings.filter(s=>!(s.event===t&&(typeof e>"u"||e===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,s=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let i=new ct(this,t,function(){return e},s);return this.canPush()?i.send():(i.startTimeout(),this.pushBuffer.push(i)),i}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=z.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(re.close,"leave")},s=new ct(this,re.leave,Pe({}),t);return s.receive("ok",()=>e()).receive("timeout",()=>e()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(t,e,s){return e}filterBindings(t,e,s){return!0}isMember(t,e,s,i){return this.topic!==t?!1:i&&i!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:s,joinRef:i}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=z.joining,this.joinPush.resend(t))}trigger(t,e,s,i){let r=this.onMessage(t,e,s,i);if(e&&!r)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let n=this.bindings.filter(a=>a.event===t&&this.filterBindings(a,e,s));for(let a=0;a<n.length;a++)n[a].callback(r,s,i||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===z.closed}isErrored(){return this.state===z.errored}isJoined(){return this.state===z.joined}isJoining(){return this.state===z.joining}isLeaving(){return this.state===z.leaving}},wt=class{static request(t,e,s,i,r,n,a){if(Z.XDomainRequest){let o=new Z.XDomainRequest;return this.xdomainRequest(o,t,e,i,r,n,a)}else if(Z.XMLHttpRequest){let o=new Z.XMLHttpRequest;return this.xhrRequest(o,t,e,s,i,r,n,a)}else{if(Z.fetch&&Z.AbortController)return this.fetchRequest(t,e,s,i,r,n,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,s,i,r,n,a){let o={method:t,headers:s,body:i},l=null;return r&&(l=new AbortController,setTimeout(()=>l.abort(),r),o.signal=l.signal),Z.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&n?n():a&&a(null)}),l}static xdomainRequest(t,e,s,i,r,n,a){return t.timeout=r,t.open(e,s),t.onload=()=>{let o=this.parseJSON(t.responseText);a&&a(o)},n&&(t.ontimeout=n),t.onprogress=()=>{},t.send(i),t}static xhrRequest(t,e,s,i,r,n,a,o){t.open(e,s,!0),t.timeout=n;for(let[l,c]of Object.entries(i))t.setRequestHeader(l,c);return t.onerror=()=>o&&o(null),t.onreadystatechange=()=>{if(t.readyState===ur.complete&&o){let l=this.parseJSON(t.responseText);o(l)}},a&&(t.ontimeout=a),t.send(r),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let s=[];for(var i in t){if(!Object.prototype.hasOwnProperty.call(t,i))continue;let r=e?`${e}[${i}]`:i,n=t[i];typeof n=="object"?s.push(this.serialize(n,r)):s.push(encodeURIComponent(r)+"="+encodeURIComponent(n))}return s.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let s=t.match(/\?/)?"&":"?";return`${t}${s}${this.serialize(e)}`}},fr=t=>{let e="",s=new Uint8Array(t),i=s.byteLength;for(let r=0;r<i;r++)e+=String.fromCharCode(s[r]);return btoa(e)},Se=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(Vt)&&(this.authToken=atob(e[1].slice(Vt.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=ee.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Ht.websocket),"$1/"+Ht.longpoll)}endpointURL(){return wt.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,s){this.close(t,e,s),this.readyState=ee.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===ee.open||this.readyState===ee.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:s,token:i,messages:r}=e;if(s===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=i}else s=0;switch(s){case 200:r.forEach(n=>{setTimeout(()=>this.onmessage({data:n}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=ee.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${s}`)}})}send(t){typeof t!="string"&&(t=fr(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t,e=0){this.awaitingBatchAck=!0;const s=e+dr,i=t.slice(e,s);this.ajax("POST",{"Content-Type":"application/x-ndjson"},i.join(`
`),()=>this.onerror("timeout"),r=>{!r||r.status!==200?(this.awaitingBatchAck=!1,this.onerror(r&&r.status),this.closeAndRetry(1011,"internal server error",!1)):s<t.length?this.batchSend(t,s):this.batchBuffer.length>0?(this.batchSend(this.batchBuffer),this.batchBuffer=[]):this.awaitingBatchAck=!1})}close(t,e,s){for(let r of this.reqs)r.abort();this.readyState=ee.closed;let i=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",i)):this.onclose(i)}ajax(t,e,s,i,r){let n,a=()=>{this.reqs.delete(n),i()};n=wt.request(t,this.endpointURL(),e,s,this.timeout,a,o=>{this.reqs.delete(n),this.isActive()&&r(o)}),this.reqs.add(n)}},mr=class Ne{constructor(e,s={}){let i=s.events||{state:"presence_state",diff:"presence_diff"};this.state=Object.create(null),this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(i.state,r=>{let{onJoin:n,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Ne.syncState(this.state,r,n,a),this.pendingDiffs.forEach(l=>{this.state=Ne.syncDiff(this.state,l,n,a)}),this.pendingDiffs=[],o()}),this.channel.on(i.diff,r=>{let{onJoin:n,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(r):(this.state=Ne.syncDiff(this.state,r,n,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Ne.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,s,i,r){let n=this.toNullProtoObj(this.clone(e));s=this.toNullProtoObj(s);let a=Object.create(null),o=Object.create(null);return this.map(n,(l,c)=>{s[l]||(o[l]=c)}),this.map(s,(l,c)=>{let d=n[l];if(d){let h=c.metas.map(g=>g.phx_ref),u=d.metas.map(g=>g.phx_ref),m=c.metas.filter(g=>u.indexOf(g.phx_ref)<0),p=d.metas.filter(g=>h.indexOf(g.phx_ref)<0);m.length>0&&(a[l]=c,a[l].metas=m),p.length>0&&(o[l]=this.clone(d),o[l].metas=p)}else a[l]=c}),this.syncDiff(n,{joins:a,leaves:o},i,r)}static syncDiff(e,s,i,r){e=this.toNullProtoObj(e);let{joins:n,leaves:a}=this.clone(s);return i||(i=function(){}),r||(r=function(){}),this.map(n,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let d=e[o].metas.map(u=>u.phx_ref),h=c.metas.filter(u=>d.indexOf(u.phx_ref)<0);e[o].metas.unshift(...h)}i(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let d=l.metas.map(h=>h.phx_ref);c.metas=c.metas.filter(h=>d.indexOf(h.phx_ref)<0),r(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,s){return s||(s=function(i,r){return r}),this.map(e,(i,r)=>s(i,r))}static map(e,s){return Object.getOwnPropertyNames(e).map(i=>s(i,e[i]))}static toNullProtoObj(e){if(Object.getPrototypeOf(e)===null)return e;let s=Object.create(null);return Object.getOwnPropertyNames(e).forEach(i=>{s[i]=e[i]}),s}static clone(e){return JSON.parse(JSON.stringify(e))}},dt={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let s=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(s))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[s,i,r,n,a]=JSON.parse(t);return e({join_ref:s,ref:i,topic:r,event:n,payload:a})}},binaryEncode(t){let{join_ref:e,ref:s,event:i,topic:r,payload:n}=t,a=new TextEncoder,o=a.encode(e),l=a.encode(s),c=a.encode(r),d=a.encode(i);this.assertFieldSize(o.byteLength,"join_ref"),this.assertFieldSize(l.byteLength,"ref"),this.assertFieldSize(c.byteLength,"topic"),this.assertFieldSize(d.byteLength,"event");let h=this.META_LENGTH+o.byteLength+l.byteLength+c.byteLength+d.byteLength,u=new ArrayBuffer(this.HEADER_LENGTH+h),m=new Uint8Array(u),p=new DataView(u),g=0;p.setUint8(g++,this.KINDS.push),p.setUint8(g++,o.byteLength),p.setUint8(g++,l.byteLength),p.setUint8(g++,c.byteLength),p.setUint8(g++,d.byteLength),m.set(o,g),g+=o.byteLength,m.set(l,g),g+=l.byteLength,m.set(c,g),g+=c.byteLength,m.set(d,g),g+=d.byteLength;var b=new Uint8Array(u.byteLength+n.byteLength);return b.set(m,0),b.set(new Uint8Array(n),u.byteLength),b.buffer},assertFieldSize(t,e){if(t>255)throw new Error(`unable to convert ${e} to binary: must be less than or equal to 255 bytes, but is ${t} bytes`)},binaryDecode(t){let e=new DataView(t),s=e.getUint8(0),i=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(t,e,i);case this.KINDS.reply:return this.decodeReply(t,e,i);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,i)}},decodePush(t,e,s){let i=e.getUint8(1),r=e.getUint8(2),n=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=s.decode(t.slice(a,a+i));a=a+i;let l=s.decode(t.slice(a,a+r));a=a+r;let c=s.decode(t.slice(a,a+n));a=a+n;let d=t.slice(a,t.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:d}},decodeReply(t,e,s){let i=e.getUint8(1),r=e.getUint8(2),n=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=s.decode(t.slice(o,o+i));o=o+i;let c=s.decode(t.slice(o,o+r));o=o+r;let d=s.decode(t.slice(o,o+n));o=o+n;let h=s.decode(t.slice(o,o+a));o=o+a;let u=t.slice(o,t.byteLength),m={status:h,response:u};return{join_ref:l,ref:c,topic:d,event:re.reply,payload:m}},decodeBroadcast(t,e,s){let i=e.getUint8(1),r=e.getUint8(2),n=this.HEADER_LENGTH+2,a=s.decode(t.slice(n,n+i));n=n+i;let o=s.decode(t.slice(n,n+r));n=n+r;let l=t.slice(n,t.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},pr=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||lr,this.transport=e.transport||Z.WebSocket||Se,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let s=null;try{s=Z&&Z.sessionStorage}catch{}this.sessionStore=e.sessionStorage||s,this.establishedConnections=0,this.defaultEncoder=dt.encode.bind(dt),this.defaultDecoder=dt.decode.bind(dt),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==Se?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let i=null;Re&&Re.addEventListener&&(Re.addEventListener("pagehide",r=>{this.conn&&(this.disconnect(),i=this.connectClock)}),Re.addEventListener("pageshow",r=>{i===this.connectClock&&(i=null,this.connect())}),Re.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=r=>e.rejoinAfterMs?e.rejoinAfterMs(r):[1e3,2e3,5e3][r-1]||1e4,this.reconnectAfterMs=r=>e.reconnectAfterMs?e.reconnectAfterMs(r):[10,50,100,150,200,250,500,1e3,2e3][r-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(r,n,a)=>{console.log(`${r}: ${n}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Pe(e.params||{}),this.endPoint=`${t}/${Ht.websocket}`,this.vsn=e.vsn||or,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new ri(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken&&Pe(e.authToken)}getLongPollTransport(){return Se}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=wt.appendParams(wt.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,s){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,s)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Pe(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==Se?this.connectWithFallback(Se,this.longPollFallbackMs):this.transportConnect())}log(t,e,s){this.logger&&this.logger(t,e,s)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let i=this.onMessage(r=>{r.ref===e&&(this.off([i]),t(Date.now()-s))});return!0}transportName(t){switch(t){case Se:return"LongPoll";default:return t.name}}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${Vt}${btoa(this.authToken()).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let s=!1,i=!0,r,n,a=this.transportName(t),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([r,n]),i=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),n=this.onError(l=>{this.log("transport","error",l),i&&!s&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(s=!0,!i){let l=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),cr,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,s){if(!this.conn)return t&&t();const i=this.conn;this.waitForBufferDone(i,()=>{e?i.close(e,s||""):i.close(),this.waitForSocketClosed(i,()=>{this.conn===i&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,s=1){if(s===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,s+1)},150*s)}waitForSocketClosed(t,e,s=1){if(s===5||t.readyState===ee.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,s+1)},150*s)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,s=this.establishedConnections;this.triggerStateCallbacks("error",t,e,s),(e===this.transport||s>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(re.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case ee.connecting:return"connecting";case ee.open:return"open";case ee.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([s])=>t.indexOf(s)===-1)}channel(t,e={}){let s=new hr(t,e,this);return this.channels.push(s),s}push(t){if(this.hasLogger()){let{topic:e,event:s,payload:i,ref:r,join_ref:n}=t;this.log("push",`${e} ${s} (${n}, ${r})`,i)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:s,event:i,payload:r,ref:n,join_ref:a}=e;if(n&&n===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(r.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${r.status||""} ${s} ${i} ${n&&"("+n+")"||""}`.trim(),r);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(s,i,r,a)&&l.trigger(i,r,n,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([s,i])=>{try{i(...e)}catch(r){this.log("error",`error in ${t} callback`,r)}})}catch(s){this.log("error",`error triggering ${t} callbacks`,s)}}leaveOpenTopic(t){let e=this.channels.find(s=>s.topic===t&&(s.isJoined()||s.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class qe{constructor(e,s){const i=br(s);this.presence=new mr(e.getChannel(),i),this.presence.onJoin((r,n,a)=>{const o=qe.onJoinPayload(r,n,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((r,n,a)=>{const o=qe.onLeavePayload(r,n,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return qe.transformState(this.presence.state)}static transformState(e){return e=gr(e),Object.getOwnPropertyNames(e).reduce((s,i)=>{const r=e[i];return s[i]=bt(r),s},{})}static onJoinPayload(e,s,i){const r=ys(s),n=bt(i);return{event:"join",key:e,currentPresences:r,newPresences:n}}static onLeavePayload(e,s,i){const r=ys(s),n=bt(i);return{event:"leave",key:e,currentPresences:r,leftPresences:n}}}function bt(t){return t.metas.map(e=>{const s=Object.getOwnPropertyDescriptors(e),i=Object.defineProperties({},s);return i.presence_ref=i.phx_ref,delete i.phx_ref,delete i.phx_ref_prev,i})}function gr(t){return JSON.parse(JSON.stringify(t))}function br(t){return(t==null?void 0:t.events)&&{events:t.events}}function ys(t){return t!=null&&t.metas?bt(t):[]}var vs;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(vs||(vs={}));class yr{get state(){return this.presenceAdapter.state}constructor(e,s){this.channel=e,this.presenceAdapter=new qe(this.channel.channelAdapter,s)}}function vr(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const s=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${s}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class wr{constructor(e,s,i){const r=_r(i);this.channel=e.getSocket().channel(s,r),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,s){return this.channel.on(e,s)}off(e,s){this.channel.off(e,s)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,s,i){let r;try{r=this.channel.push(e,s,i)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Qi){const n=this.channel.pushBuffer.shift();n.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${n.event}`,n.payload())}return r}updateJoinPayload(e){const s=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},s),e)}canPush(){return this.socket.isConnected()&&this.state===he.joined}isJoined(){return this.state===he.joined}isJoining(){return this.state===he.joining}isClosed(){return this.state===he.closed}isLeaving(){return this.state===he.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function _r(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}const Sr=/[,()"\\]/,Er=t=>Sr.test(t)||t!==t.trim(),kr=t=>`"${t.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}"`,ws=t=>{const e=t===null?"null":String(t);return Er(e)?kr(e):e},Ar=t=>t===null?"null":String(t),Tr=(t,e)=>{if(t==="in"){const s=Array.isArray(e)?e:[e];if(s.length===0)throw new Error("Realtime `in` filter requires at least one value.");return`in.(${Array.from(new Set(s)).map(r=>ws(r)).join(",")})`}return t==="is"?`is.${Ar(e)}`:`${t}.${ws(e)}`};class Rr{constructor(){this.filters=[]}add(e,s,i,r=!1){const n=r?"not.":"";return this.filters.push(`${e}=${n}${Tr(s,i)}`),this}eq(e,s){return this.add(e,"eq",s)}neq(e,s){return this.add(e,"neq",s)}gt(e,s){return this.add(e,"gt",s)}gte(e,s){return this.add(e,"gte",s)}lt(e,s){return this.add(e,"lt",s)}lte(e,s){return this.add(e,"lte",s)}in(e,s){return this.add(e,"in",s)}like(e,s){return this.add(e,"like",s)}ilike(e,s){return this.add(e,"ilike",s)}match(e,s){return this.add(e,"match",s)}imatch(e,s){return this.add(e,"imatch",s)}is(e,s){return this.add(e,"is",s)}isDistinct(e,s){return this.add(e,"isdistinct",s)}not(e,s,i){return this.add(e,s,i,!0)}build(){return this.filters.join(",")}toString(){return this.build()}}var _s;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(_s||(_s={}));var Ce;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(Ce||(Ce={}));var ne;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(ne||(ne={}));class Fe{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,s={config:{}},i){var r,n;if(this.topic=e,this.params=s,this.socket=i,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},s.config),this.channelAdapter=new wr(this.socket.socketAdapter,e,this.params),this.presence=new yr(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=ii(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((n=(r=this.params.config)===null||r===void 0?void 0:r.broadcast)===null||n===void 0)&&n.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,s=this.timeout){var i,r,n;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(r=(i=this.bindings.postgres_changes)===null||i===void 0?void 0:i.map(m=>m.filter))!==null&&r!==void 0?r:[],d=!!this.bindings[Ce.PRESENCE]&&this.bindings[Ce.PRESENCE].length>0||((n=this.params.config.presence)===null||n===void 0?void 0:n.enabled)===!0,h={},u={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:d}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(m=>{e==null||e(ne.CHANNEL_ERROR,vr(m))}),this._onClose(()=>e==null?void 0:e(ne.CLOSED)),this.updateJoinPayload(Object.assign({config:u},h)),this._updateFilterMessage(),this.channelAdapter.subscribe(s).receive("ok",async({postgres_changes:m})=>{if(this.socket._isManualToken()||this.socket.setAuth(),m===void 0){e==null||e(ne.SUBSCRIBED);return}this._updatePostgresBindings(m,e)}).receive("error",m=>{this.state=he.errored;const p=Object.values(m).join(", ")||"error";e==null||e(ne.CHANNEL_ERROR,new Error(p,{cause:m}))}).receive("timeout",()=>{e==null||e(ne.TIMED_OUT)})}return this}_updatePostgresBindings(e,s){var i;const r=this.bindings.postgres_changes,n=(i=r==null?void 0:r.length)!==null&&i!==void 0?i:0,a=[];for(let o=0;o<n;o++){const l=r[o],{filter:{event:c,schema:d,table:h,filter:u}}=l,m=e&&e[o];if(m&&m.event===c&&Fe.isFilterValueEqual(m.schema,d)&&Fe.isFilterValueEqual(m.table,h)&&Fe.isFilterValueEqual(m.filter,u))a.push(Object.assign(Object.assign({},l),{id:m.id}));else{this.unsubscribe(),this.state=he.errored,s==null||s(ne.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=he.errored&&s&&s(ne.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,s={}){return await this.send({type:"presence",event:"track",payload:e},s)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,s,i){const r=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),n=e===Ce.PRESENCE||e===Ce.POSTGRES_CHANGES;if(r&&n)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,s,i)}async httpSend(e,s,i={}){var r;if(s==null)return Promise.reject(new Error("Payload is required for httpSend()"));const n=s instanceof ArrayBuffer||ArrayBuffer.isView(s),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":n?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:n?s:JSON.stringify(s)},c=await this._fetchWithTimeout(o.toString(),l,(r=i.timeout)!==null&&r!==void 0?r:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let d=c.statusText;try{const h=await c.json();d=h.error||h.message||d}catch{}return Promise.reject(new Error(d))}async send(e,s={}){var i,r;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:n,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:n,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(i=s.timeout)!==null&&i!==void 0?i:this.timeout);return await((r=c.body)===null||r===void 0?void 0:r.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(n=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,s.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&n("ok"),c.receive("ok",()=>n("ok")),c.receive("error",()=>n("error")),c.receive("timeout",()=>n("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(s=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>s("ok")).receive("timeout",()=>s("timed out")).receive("error",()=>s("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,s,i){const r=new AbortController,n=setTimeout(()=>r.abort(),i),a=await this.socket.fetch(e,Object.assign(Object.assign({},s),{signal:r.signal}));return clearTimeout(n),a}_on(e,s,i){const r=e.toLocaleLowerCase(),n=s==null?void 0:s.filter;(n instanceof Rr||typeof n=="object"&&n!==null&&typeof n.build=="function")&&(s=Object.assign(Object.assign({},s),{filter:n.build()}));const a=this.channelAdapter.on(e,i),o={type:r,filter:s,callback:i,ref:a};return this.bindings[r]?this.bindings[r].push(o):this.bindings[r]=[o],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,s,i)=>{var r,n,a,o,l,c,d;const h=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(h,i))return!1;const u=(r=this.bindings[h])===null||r===void 0?void 0:r.find(m=>m.ref===e.ref);if(!u)return!0;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in u){const m=u.id,p=(n=u.filter)===null||n===void 0?void 0:n.event;return m&&((a=s.ids)===null||a===void 0?void 0:a.includes(m))&&(p==="*"||(p==null?void 0:p.toLocaleLowerCase())===((o=s.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const m=(c=(l=u==null?void 0:u.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return m==="*"||m===((d=s==null?void 0:s.event)===null||d===void 0?void 0:d.toLocaleLowerCase())}else return u.type.toLocaleLowerCase()===h})}_notThisChannelEvent(e,s){const{close:i,error:r,leave:n,join:a}=ti;return s&&[i,r,n,a].includes(e)&&s!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,s,i)=>{if(typeof s=="object"&&"ids"in s){const r=s.data,{schema:n,table:a,commit_timestamp:o,type:l,errors:c}=r;return Object.assign(Object.assign({},{schema:n,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(r))}return s})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const s in e.bindings)for(const i of e.bindings[s])this._on(i.type,i.filter,i.callback)}static isFilterValueEqual(e,s){return(e??void 0)===(s??void 0)}_getPayloadRecords(e){const s={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(s.new=bs(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(s.old=bs(e.columns,e.old_record)),s}}class Ir{constructor(e,s){this.socket=new pr(e,s)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,s,i,r=1e4){return new Promise(n=>{setTimeout(()=>n("timeout"),r),this.socket.disconnect(()=>{e(),n("ok")},s,i)})}push(e){this.socket.push(e)}log(e,s,i){this.socket.log(e,s,i)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Ft.connecting}isDisconnecting(){return this.socket.connectionState()==Ft.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const Ss={HEARTBEAT_INTERVAL:25e3},Cr=[1e3,2e3,5e3,1e4],Pr=1e4;function $r(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var s;return(s=Array.from(t.keys())[e])!==null&&s!==void 0?s:null},removeItem(e){t.delete(e)},setItem(e,s){t.set(e,String(s))}}}function Or(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return $r()}const xr=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Lr{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,s){var i;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new Zi,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=n=>n?(...a)=>n(...a):(...a)=>fetch(...a),!(!((i=s==null?void 0:s.params)===null||i===void 0)&&i.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=s.params.apikey;const r=this._initializeOptions(s);this.socketAdapter=new Ir(e,r),this.httpEndpoint=ii(e),this.fetch=this._resolveFetch(s==null?void 0:s.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const s=e.message;throw new Error(`WebSocket not available: ${s}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,s){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,s)}getChannels(){return this.channels}async removeChannel(e){const s=await e.unsubscribe();return s==="ok"&&e.teardown(),s}async removeAllChannels(){const e=this.channels.map(async i=>{const r=await i.unsubscribe();return i.teardown(),r}),s=await Promise.all(e);return await this.disconnect(),s}log(e,s,i){this.socketAdapter.log(e,s,i)}connectionState(){return this.socketAdapter.connectionState()||Ft.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,s={config:{}}){const i=`realtime:${e}`,r=this.getChannels().find(n=>n.topic===i);if(r)return r;{const n=new Fe(`realtime:${e}`,s,this);return this._cancelPendingDisconnect(),this.channels.push(n),n}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(s=>s.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let s,i=!1;if(e)s=e,i=!0;else if(this.accessToken)try{s=await this.accessToken()}catch(r){this.log("error","Error fetching access token from callback",r),s=this.accessTokenValue}else s=this.accessTokenValue;i?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=s&&(this.accessTokenValue=s,this.channels.forEach(r=>{const n={access_token:s,version:Ki};s&&r.updateJoinPayload(n),r.joinedOnce&&r.channelAdapter.isJoined()&&r.channelAdapter.push(ti.access_token,{access_token:s})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(s=>{this.log("error",`Error setting auth in ${e}`,s)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(s=>{this.log("error","error waiting for auth on connect",s)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(s,i)=>{s!=="disconnected"&&(s=="sent"&&this._setAuthSafely(),e&&e(s,i))}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=s=>{this.log("worker","worker error",s.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=s=>{s.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let s;if(e)s=e;else{const i=new Blob([xr],{type:"application/javascript"});s=URL.createObjectURL(i)}return s}_initializeOptions(e){var s,i,r,n,a,o,l,c,d,h,u,m;this.worker=(s=e==null?void 0:e.worker)!==null&&s!==void 0?s:!1,this.accessToken=(i=e==null?void 0:e.accessToken)!==null&&i!==void 0?i:null;const p={};p.timeout=(r=e==null?void 0:e.timeout)!==null&&r!==void 0?r:Xi,p.heartbeatIntervalMs=(n=e==null?void 0:e.heartbeatIntervalMs)!==null&&n!==void 0?n:Ss.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e==null?void 0:e.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e==null?void 0:e.heartbeatIntervalMs)!==null&&o!==void 0?o:Ss.HEARTBEAT_INTERVAL),p.transport=(l=e==null?void 0:e.transport)!==null&&l!==void 0?l:Wi.getWebSocketConstructor(),p.params=e==null?void 0:e.params,p.logger=e==null?void 0:e.logger,p.heartbeatCallback=this._wrapHeartbeatCallback(e==null?void 0:e.heartbeatCallback),p.sessionStorage=(c=e==null?void 0:e.sessionStorage)!==null&&c!==void 0?c:Or(),p.reconnectAfterMs=(d=e==null?void 0:e.reconnectAfterMs)!==null&&d!==void 0?d:S=>Cr[S-1]||Pr;let g,b;const v=(h=e==null?void 0:e.vsn)!==null&&h!==void 0?h:Yi;switch(v){case Ji:g=(S,w)=>w(JSON.stringify(S)),b=(S,w)=>w(JSON.parse(S));break;case ei:g=this.serializer.encode.bind(this.serializer),b=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${p.vsn}`)}if(p.vsn=v,p.encode=(u=e==null?void 0:e.encode)!==null&&u!==void 0?u:g,p.decode=(m=e==null?void 0:e.decode)!==null&&m!==void 0?m:b,p.beforeReconnect=this._reconnectAuth.bind(this),(e!=null&&e.logLevel||e!=null&&e.log_level)&&(this.logLevel=e.logLevel||e.log_level,p.params=Object.assign(Object.assign({},p.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e==null?void 0:e.workerUrl,p.autoSendHeartbeat=!this.worker}return p}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var We=class extends Error{constructor(t,e){var s;super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&((s=e.icebergType)==null?void 0:s.includes("CommitState"))===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function Dr(t,e,s){const i=new URL(e,t);if(s)for(const[r,n]of Object.entries(s))n!==void 0&&i.searchParams.set(r,n);return i.toString()}async function Br(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function Nr(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:s,path:i,query:r,body:n,headers:a}){const o=Dr(t.baseUrl,i,r),l=await Br(t.auth),c=await e(o,{method:s,headers:{...n?{"Content-Type":"application/json"}:{},...l,...a},body:n?JSON.stringify(n):void 0}),d=await c.text(),h=(c.headers.get("content-type")||"").includes("application/json"),u=h&&d?JSON.parse(d):d;if(!c.ok){const m=h?u:void 0,p=m==null?void 0:m.error;throw new We((p==null?void 0:p.message)??`Request failed with status ${c.status}`,{status:c.status,icebergType:p==null?void 0:p.type,icebergCode:p==null?void 0:p.code,details:m})}return{status:c.status,headers:c.headers,data:u}}}}function ut(t){return t.join("")}var Ur=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:ut(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(i=>({namespace:i}))}async createNamespace(t,e){const s={namespace:t.namespace,properties:e==null?void 0:e.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:s})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ut(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ut(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ut(t.namespace)}`}),!0}catch(e){if(e instanceof We&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(s){if(s instanceof We&&s.status===409)return;throw s}}};function Ee(t){return t.join("")}var jr=class{constructor(t,e="",s){this.client=t,this.prefix=e,this.accessDelegation=s}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ee(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const s={};return this.accessDelegation&&(s["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Ee(t.namespace)}/tables`,body:e,headers:s})).data.metadata}async updateTable(t,e){const s=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${Ee(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":s.data["metadata-location"],metadata:s.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Ee(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String((e==null?void 0:e.purge)??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ee(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Ee(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(s){if(s instanceof We&&s.status===404)return!1;throw s}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(s){if(s instanceof We&&s.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw s}}},Mr=class{constructor(t){var i;let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const s=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=Nr({baseUrl:s,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=(i=t.accessDelegation)==null?void 0:i.join(","),this.namespaceOps=new Ur(this.client,e),this.tableOps=new jr(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function Ge(t){"@babel/helpers - typeof";return Ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ge(t)}function qr(t,e){if(Ge(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(Ge(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Fr(t){var e=qr(t,"string");return Ge(e)=="symbol"?e:e+""}function zr(t,e,s){return(e=Fr(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function Es(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),s.push.apply(s,i)}return s}function T(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?Es(Object(s),!0).forEach(function(i){zr(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):Es(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}var $t=class extends Error{constructor(t,e="storage",s,i){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=s,this.statusCode=i}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function Ot(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var Wt=class extends $t{constructor(t,e,s,i="storage",r){super(t,i,e,s),this.name=i==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=s,this.code=r}toJSON(){return T(T({},super.toJSON()),{},{code:this.code})}},ni=class extends $t{constructor(t,e,s="storage"){super(t,s),this.name=s==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function _t(t,e,s){const i=T({},t),r=e.toLowerCase();for(const n of Object.keys(i))n.toLowerCase()===r&&delete i[n];return i[r]=s,i}function Hr(t){const e={};for(const[s,i]of Object.entries(t))e[s.toLowerCase()]=i;return e}const Vr=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Wr=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},Gt=t=>{if(Array.isArray(t))return t.map(s=>Gt(s));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([s,i])=>{const r=s.replace(/([-_][a-z])/gi,n=>n.toUpperCase().replace(/[-_]/g,""));e[r]=Gt(i)}),e},Gr=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),ai=t=>t.split("/").map(encodeURIComponent).join("/"),ks=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const s=e.error;if(typeof s.message=="string")return s.message}}return JSON.stringify(t)},Kr=async(t,e,s,i)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const r=t;let n=parseInt(String(r.status),10);Number.isFinite(n)||(n=500),r.json().then(a=>{const o=(a==null?void 0:a.statusCode)||(a==null?void 0:a.code)||n+"";e(new Wt(ks(a),n,o,i,a==null?void 0:a.code))}).catch(()=>{const a=n+"";e(new Wt(r.statusText||`HTTP ${n} error`,n,a,i))})}else e(new ni(ks(t),t,i))},Jr=(t,e,s,i)=>{const r={method:t,headers:(e==null?void 0:e.headers)||{}};if(t==="GET"||t==="HEAD"||!i)return T(T({},r),s);if(Wr(i)){var n;const a=(e==null?void 0:e.headers)||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);r.headers=_t(a,"Content-Type",(n=o)!==null&&n!==void 0?n:"application/json"),r.body=JSON.stringify(i)}else r.body=i;return e!=null&&e.duplex&&(r.duplex=e.duplex),T(T({},r),s)};async function Be(t,e,s,i,r,n,a){return new Promise((o,l)=>{t(s,Jr(e,i,r,n)).then(c=>{if(!c.ok)throw c;if(i!=null&&i.noResolveJson)return c;if(a==="vectors"){const d=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!d||!d.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>Kr(c,l,i,a))})}function oi(t="storage"){return{get:async(e,s,i,r)=>Be(e,"GET",s,i,r,void 0,t),post:async(e,s,i,r,n)=>Be(e,"POST",s,r,n,i,t),put:async(e,s,i,r,n)=>Be(e,"PUT",s,r,n,i,t),head:async(e,s,i,r)=>Be(e,"HEAD",s,T(T({},i),{},{noResolveJson:!0}),r,void 0,t),remove:async(e,s,i,r,n)=>Be(e,"DELETE",s,r,n,i,t)}}const Yr=oi("storage"),{get:Ke,post:X,put:Kt,head:Xr,remove:Je}=Yr,V=oi("vectors");var Le=class{constructor(t,e={},s,i="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=Hr(e),this.fetch=Vr(s),this.namespace=i}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=_t(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(s){if(e.shouldThrowOnError)throw s;if(Ot(s))return{data:null,error:s};throw s}}};let li;li=Symbol.toStringTag;var Qr=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[li]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Ot(e))return{data:null,error:e};throw e}}};let ci;ci=Symbol.toStringTag;var Zr=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[ci]="BlobDownloadBuilder",this.promise=null}asStream(){return new Qr(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(Ot(e))return{data:null,error:e};throw e}}};const Dt={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},As={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var en=class extends Le{constructor(t,e={},s,i){super(t,e,i,"storage"),this.bucketId=s}async uploadOrUpdate(t,e,s,i){var r=this;return r.handleOperation(async()=>{let n;const a=T(T({},As),i);let o=T(T({},r.headers),t==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&s instanceof Blob?(n=new FormData,n.append("cacheControl",a.cacheControl),l&&n.append("metadata",r.encodeMetadata(l)),n.append("",s)):typeof FormData<"u"&&s instanceof FormData?(n=s,n.has("cacheControl")||n.append("cacheControl",a.cacheControl),l&&!n.has("metadata")&&n.append("metadata",r.encodeMetadata(l))):(n=s,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=r.toBase64(r.encodeMetadata(l))),(typeof ReadableStream<"u"&&n instanceof ReadableStream||n&&typeof n=="object"&&"pipe"in n&&typeof n.pipe=="function")&&!a.duplex&&(a.duplex="half")),i!=null&&i.headers)for(const[u,m]of Object.entries(i.headers))o=_t(o,u,m);const c=r._removeEmptyFolders(e),d=r._getFinalPath(c),h=await(t=="PUT"?Kt:X)(r.fetch,`${r.url}/object/${d}`,n,T({headers:o},a!=null&&a.duplex?{duplex:a.duplex}:{}));return{path:c,id:h.Id,fullPath:h.Key}})}async upload(t,e,s){return this.uploadOrUpdate("POST",t,e,s)}async uploadToSignedUrl(t,e,s,i){var r=this;const n=r._removeEmptyFolders(t),a=r._getFinalPath(n),o=new URL(r.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),r.handleOperation(async()=>{let l;const c=T(T({},As),i);let d=T(T({},r.headers),{"x-upsert":String(c.upsert)});const h=c.metadata;if(typeof Blob<"u"&&s instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),h&&l.append("metadata",r.encodeMetadata(h)),l.append("",s)):typeof FormData<"u"&&s instanceof FormData?(l=s,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),h&&!l.has("metadata")&&l.append("metadata",r.encodeMetadata(h))):(l=s,d["cache-control"]=`max-age=${c.cacheControl}`,d["content-type"]=c.contentType,h&&(d["x-metadata"]=r.toBase64(r.encodeMetadata(h))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),i!=null&&i.headers)for(const[u,m]of Object.entries(i.headers))d=_t(d,u,m);return{path:n,fullPath:(await Kt(r.fetch,o.toString(),l,T({headers:d},c!=null&&c.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var s=this;return s.handleOperation(async()=>{let i=s._getFinalPath(t);const r=T({},s.headers);e!=null&&e.upsert&&(r["x-upsert"]="true");const n=await X(s.fetch,`${s.url}/object/upload/sign/${i}`,{},{headers:r}),a=new URL(s.url+n.url),o=a.searchParams.get("token");if(!o)throw new $t("No token returned by API");return{signedUrl:a.toString(),path:t,token:o}})}async update(t,e,s){return this.uploadOrUpdate("PUT",t,e,s)}async move(t,e,s){var i=this;return i.handleOperation(async()=>await X(i.fetch,`${i.url}/object/move`,{bucketId:i.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:i.headers}))}async copy(t,e,s){var i=this;return i.handleOperation(async()=>({path:(await X(i.fetch,`${i.url}/object/copy`,{bucketId:i.bucketId,sourceKey:t,destinationKey:e,destinationBucket:s==null?void 0:s.destinationBucket},{headers:i.headers})).Key}))}async createSignedUrl(t,e,s){var i=this;return i.handleOperation(async()=>{let r=i._getFinalPath(t);const n=typeof(s==null?void 0:s.transform)=="object"&&s.transform!==null&&Object.keys(s.transform).length>0;let a=await X(i.fetch,`${i.url}/object/sign/${r}`,T({expiresIn:e},n?{transform:s.transform}:{}),{headers:i.headers});const o=new URLSearchParams;s!=null&&s.download&&o.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&o.set("cacheNonce",String(s.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${i.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(t,e,s){var i=this;return i.handleOperation(async()=>{const r=await X(i.fetch,`${i.url}/object/sign/${i.bucketId}`,{expiresIn:e,paths:t},{headers:i.headers}),n=new URLSearchParams;s!=null&&s.download&&n.set("download",s.download===!0?"":s.download),(s==null?void 0:s.cacheNonce)!=null&&n.set("cacheNonce",String(s.cacheNonce));const a=n.toString();return r.map(o=>T(T({},o),{},{signedUrl:o.signedURL?encodeURI(`${i.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(t,e,s){const i=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",r=new URLSearchParams;e!=null&&e.transform&&this.applyTransformOptsToQuery(r,e.transform),(e==null?void 0:e.cacheNonce)!=null&&r.set("cacheNonce",String(e.cacheNonce));const n=r.toString(),a=this._getFinalPath(t),o=()=>Ke(this.fetch,`${this.url}/${i}/${a}${n?`?${n}`:""}`,{headers:this.headers,noResolveJson:!0},s);return new Zr(o,this.shouldThrowOnError)}async info(t){var e=this;const s=e._getFinalPath(t);return e.handleOperation(async()=>Gt(await Ke(e.fetch,`${e.url}/object/info/${s}`,{headers:e.headers})))}async exists(t){var e=this;const s=e._getFinalPath(t);try{return await Xr(e.fetch,`${e.url}/object/${s}`,{headers:e.headers}),{data:!0,error:null}}catch(r){if(e.shouldThrowOnError)throw r;if(Ot(r)){var i;const n=r instanceof Wt?r.status:r instanceof ni?(i=r.originalError)===null||i===void 0?void 0:i.status:void 0;if(n!==void 0&&[400,404].includes(n))return{data:!1,error:r}}throw r}}getPublicUrl(t,e){const s=this._getFinalPath(t),i=new URLSearchParams;e!=null&&e.download&&i.set("download",e.download===!0?"":e.download),e!=null&&e.transform&&this.applyTransformOptsToQuery(i,e.transform),(e==null?void 0:e.cacheNonce)!=null&&i.set("cacheNonce",String(e.cacheNonce));const r=i.toString(),n=typeof(e==null?void 0:e.transform)=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${n}/public/${s}`)+(r?`?${r}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await Je(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async purgeCache(t,e,s){var i=this;return i.handleOperation(async()=>{const r=ai(i._getFinalPath(t)),n=new URLSearchParams;e!=null&&e.transformations&&n.set("transformations","true");const a=n.toString();return await Je(i.fetch,`${i.url}/cdn/${r}${a?`?${a}`:""}`,{},{headers:i.headers},s)})}async list(t,e,s){var i=this;return i.handleOperation(async()=>{const r=e!=null&&e.sortBy?T(T({},Dt.sortBy),e.sortBy):Dt.sortBy,n=T(T(T({},Dt),e),{},{sortBy:r,prefix:t||""});return await X(i.fetch,`${i.url}/object/list/${i.bucketId}`,n,{headers:i.headers},s)})}async listV2(t,e){var s=this;return s.handleOperation(async()=>{const i=T({},t);return await X(s.fetch,`${s.url}/object/list-v2/${s.bucketId}`,i,{headers:s.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const tn="2.112.0",it={"X-Client-Info":`storage-js/${tn}`};var sn=class extends Le{constructor(t,e={},s,i){const r=new URL(t);i!=null&&i.useNewHostname&&/supabase\.(co|in|red)$/.test(r.hostname)&&!r.hostname.includes("storage.supabase.")&&(r.hostname=r.hostname.replace("supabase.","storage.supabase."));const n=r.href.replace(/\/$/,""),a=T(T({},it),e);super(n,a,s,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=e.listBucketOptionsToQueryString(t);return await Ke(e.fetch,`${e.url}/bucket${s}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Ke(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var s=this;return s.handleOperation(async()=>await X(s.fetch,`${s.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async updateBucket(t,e){var s=this;return s.handleOperation(async()=>await Kt(s.fetch,`${s.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:s.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await X(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Je(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}async purgeBucketCache(t,e,s){var i=this;return i.handleOperation(async()=>{const r=new URLSearchParams;e!=null&&e.transformations&&r.set("transformations","true");const n=r.toString();return await Je(i.fetch,`${i.url}/cdn/${ai(t)}${n?`?${n}`:""}`,{},{headers:i.headers},s)})}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},rn=class extends Le{constructor(t,e={},s){const i=t.replace(/\/$/,""),r=T(T({},it),e);super(i,r,s,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await X(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const s=new URLSearchParams;(t==null?void 0:t.limit)!==void 0&&s.set("limit",t.limit.toString()),(t==null?void 0:t.offset)!==void 0&&s.set("offset",t.offset.toString()),t!=null&&t.sortColumn&&s.set("sortColumn",t.sortColumn),t!=null&&t.sortOrder&&s.set("sortOrder",t.sortOrder),t!=null&&t.search&&s.set("search",t.search);const i=s.toString(),r=i?`${e.url}/bucket?${i}`:`${e.url}/bucket`;return await Ke(e.fetch,r,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Je(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!Gr(t))throw new $t("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const s=new Mr({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),i=this.shouldThrowOnError;return new Proxy(s,{get(r,n){const a=r[n];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(r,o),error:null}}catch(l){if(i)throw l;return{data:null,error:l}}}}})}},nn=class extends Le{constructor(t,e={},s){const i=t.replace(/\/$/,""),r=T(T({},it),{},{"Content-Type":"application/json"},e);super(i,r,s,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var s=this;return s.handleOperation(async()=>await V.post(s.fetch,`${s.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var s=this;return s.handleOperation(async()=>await V.post(s.fetch,`${s.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:s.headers})||{})}},an=class extends Le{constructor(t,e={},s){const i=t.replace(/\/$/,""),r=T(T({},it),{},{"Content-Type":"application/json"},e);super(i,r,s,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},on=class extends Le{constructor(t,e={},s){const i=t.replace(/\/$/,""),r=T(T({},it),{},{"Content-Type":"application/json"},e);super(i,r,s,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await V.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},ln=class extends on{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new cn(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,s=this;return e().call(s,t)}async getBucket(t){var e=()=>super.getBucket,s=this;return e().call(s,t)}async listBuckets(t={}){var e=()=>super.listBuckets,s=this;return e().call(s,t)}async deleteBucket(t){var e=()=>super.deleteBucket,s=this;return e().call(s,t)}},cn=class extends nn{constructor(t,e,s,i){super(t,e,i),this.vectorBucketName=s}async createIndex(t){var e=()=>super.createIndex,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,s=this;return e().call(s,s.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,s=this;return e().call(s,s.vectorBucketName,t)}index(t){return new dn(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},dn=class extends an{constructor(t,e,s,i,r){super(t,e,r),this.vectorBucketName=s,this.indexName=i}async putVectors(t){var e=()=>super.putVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async getVectors(t){var e=()=>super.getVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,s=this;return e().call(s,T(T({},t),{},{vectorBucketName:s.vectorBucketName,indexName:s.indexName}))}},un=class extends sn{constructor(t,e={},s,i){super(t,e,s,i)}from(t){return new en(this.url,this.headers,t,this.fetch)}get vectors(){return new ln(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new rn(this.url+"/iceberg",this.headers,this.fetch)}};const di="2.112.0",ae=30*1e3,Ue=3,Bt=Ue*ae,hn=2*ae,fn="http://localhost:9999",mn="supabase.auth.token",pn={"X-Client-Info":`gotrue-js/${di}`},Jt="X-Supabase-Api-Version",ui={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},gn=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,ye="sb_flow_id",bn=5,yn=10*60*1e3;class Ye extends Error{constructor(e,s,i){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=s,this.code=i}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function _(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class vn extends Ye{constructor(e,s,i){super(e,s,i),this.name="AuthApiError",this.status=s,this.code=i}}function Ts(t){return _(t)&&t.name==="AuthApiError"}class Q extends Ye{constructor(e,s){super(e),this.name="AuthUnknownError",this.originalError=s}}class te extends Ye{constructor(e,s,i,r){super(e,i,r),this.name=s,this.status=i}}class U extends te{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function ht(t){return _(t)&&t.name==="AuthSessionMissingError"}class ke extends te{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class ft extends te{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class mt extends te{constructor(e,s=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function wn(t){return _(t)&&t.name==="AuthImplicitGrantRedirectError"}class Rs extends te{constructor(e,s=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=s}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class _n extends te{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Yt extends te{constructor(e,s){super(e,"AuthRetryableFetchError",s,void 0)}}function pt(t){return _(t)&&t.name==="AuthRetryableFetchError"}class Is extends te{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function Sn(t){return _(t)&&t.name==="AuthRefreshDiscardedError"}class Cs extends te{constructor(e,s,i){super(e,"AuthWeakPasswordError",s,"weak_password"),this.reasons=i}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class St extends te{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const Et="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),Ps=` 	
\r=`.split(""),En=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<Ps.length;e+=1)t[Ps[e].charCodeAt(0)]=-2;for(let e=0;e<Et.length;e+=1)t[Et[e].charCodeAt(0)]=e;return t})();function $s(t,e,s){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;s(Et[i]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const i=e.queue>>e.queuedBits-6&63;s(Et[i]),e.queuedBits-=6}}function hi(t,e,s){const i=En[t];if(i>-1)for(e.queue=e.queue<<6|i,e.queuedBits+=6;e.queuedBits>=8;)s(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(i===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function Os(t){const e=[],s=a=>{e.push(String.fromCodePoint(a))},i={utf8seq:0,codepoint:0},r={queue:0,queuedBits:0},n=a=>{Tn(a,i,s)};for(let a=0;a<t.length;a+=1)hi(t.charCodeAt(a),r,n);return e.join("")}function kn(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function An(t,e){for(let s=0;s<t.length;s+=1){let i=t.charCodeAt(s);if(i>55295&&i<=56319){const r=(i-55296)*1024&65535;i=(t.charCodeAt(s+1)-56320&65535|r)+65536,s+=1}kn(i,e)}}function Tn(t,e,s){if(e.utf8seq===0){if(t<=127){s(t);return}for(let i=1;i<6;i+=1)if(!(t>>7-i&1)){e.utf8seq=i;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&s(e.codepoint)}}function $e(t){const e=[],s={queue:0,queuedBits:0},i=r=>{e.push(r)};for(let r=0;r<t.length;r+=1)hi(t.charCodeAt(r),s,i);return new Uint8Array(e)}function Rn(t){const e=[];return An(t,s=>e.push(s)),new Uint8Array(e)}function ve(t){const e=[],s={queue:0,queuedBits:0},i=r=>{e.push(r)};return t.forEach(r=>$s(r,s,i)),$s(null,s,i),e.join("")}function In(t){return Math.round(Date.now()/1e3)+t}function Cn(){return Symbol("auth-callback")}const j=()=>typeof window<"u"&&typeof document<"u",pe={tested:!1,writable:!1},fi=()=>{if(!j())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(pe.tested)return pe.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),pe.tested=!0,pe.writable=!0}catch{pe.tested=!0,pe.writable=!1}return pe.writable};function xs(t){const e={},s=new URL(t);if(s.hash&&s.hash[0]==="#")try{new URLSearchParams(s.hash.substring(1)).forEach((r,n)=>{e[n]=r})}catch{}return s.searchParams.forEach((i,r)=>{e[r]=i}),e}const mi=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Pn=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",le=async(t,e,s)=>{await t.setItem(e,JSON.stringify(s))},M=async(t,e)=>{const s=await t.getItem(e);if(!s)return null;try{return JSON.parse(s)}catch{return null}},H=async(t,e)=>{await t.removeItem(e)};class xt{constructor(){this.promise=new xt.promiseConstructor((e,s)=>{this.resolve=e,this.reject=s})}}xt.promiseConstructor=Promise;function gt(t){const e=t.split(".");if(e.length!==3)throw new St("Invalid JWT structure");for(let i=0;i<e.length;i++)if(!gn.test(e[i]))throw new St("JWT not in base64url format");return{header:JSON.parse(Os(e[0])),payload:JSON.parse(Os(e[1])),signature:$e(e[2]),raw:{header:e[0],payload:e[1]}}}async function $n(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function On(t,e){return new Promise((i,r)=>{(async()=>{for(let n=0;n<1/0;n++)try{const a=await t(n);if(!e(n,null,a)){i(a);return}}catch(a){if(!e(n,a)){r(a);return}}})()})}function pi(t){return("0"+t.toString(16)).substr(-2)}function xn(){const e=new Uint32Array(56);if(typeof crypto>"u"){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",i=s.length;let r="";for(let n=0;n<56;n++)r+=s.charAt(Math.floor(Math.random()*i));return r}return crypto.getRandomValues(e),Array.from(e,pi).join("")}async function Ln(t){const s=new TextEncoder().encode(t),i=await crypto.subtle.digest("SHA-256",s),r=new Uint8Array(i);return Array.from(r).map(n=>String.fromCharCode(n)).join("")}async function Dn(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const s=await Ln(t);return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}const Bn=/^[a-zA-Z0-9_-]{8,64}$/;function yt(t){return typeof t=="string"&&Bn.test(t)?t:null}function Nn(){if(typeof crypto<"u"&&typeof crypto.getRandomValues=="function"){const e=new Uint8Array(16);return crypto.getRandomValues(e),Array.from(e,pi).join("")}let t="";for(let e=0;e<32;e++)t+=Math.floor(Math.random()*16).toString(16);return t}const xe=(t,e)=>`${t}-flow-${e}-code-verifier`,Xe=t=>`${t}-flows-code-verifier`;async function is(t,e){const s=await M(t,Xe(e));return Array.isArray(s)?s.filter(i=>yt(i)!==null):[]}async function Un(t,e,s,i,r){await le(t,xe(e,s),i);const n=(await is(t,e)).filter(a=>a!==s);for(n.push(s);n.length>bn;){const a=n.shift();await H(t,xe(e,a)),r==null||r(a)}await le(t,Xe(e),n),await le(t,`${e}-code-verifier`,i)}async function jn(t,e,s){if(s){const r=await M(t,xe(e,s));return{verifier:typeof r=="string"?r:null,flowId:s}}const i=await M(t,`${e}-code-verifier`);return{verifier:typeof i=="string"?i:null,flowId:null}}async function J(t,e,s){const i=`${e}-code-verifier`;if(!s){await H(t,i);return}const r=xe(e,s),n=await M(t,r);await H(t,r);const a=await is(t,e),o=a.filter(l=>l!==s);o.length!==a.length&&(o.length>0?await le(t,Xe(e),o):await H(t,Xe(e))),n!=null&&n===await M(t,i)&&await H(t,i)}async function Mn(t,e){const s=await is(t,e);for(const i of s)await H(t,xe(e,i));await H(t,Xe(e)),await H(t,`${e}-code-verifier`)}function qn(t,e){const s=t.indexOf("#");let i=s===-1?t:t.slice(0,s);const r=s===-1?"":t.slice(s),n=i.indexOf("?");if(n!==-1){const o=i.slice(0,n),l=i.slice(n+1).split("&").filter(c=>c!==""&&c!==ye&&!c.startsWith(`${ye}=`));i=l.length>0?`${o}?${l.join("&")}`:o}const a=i.includes("?")?"&":"?";return`${i}${a}${ye}=${encodeURIComponent(e)}${r}`}async function Fn(t,e,s=!1,i){const r=xn();let n=r;s&&(n+="/recovery");const a=Nn();await Un(t,e,a,n,i);const o=await Dn(r);return[o,r===o?"plain":"s256",a]}const zn=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function Hn(t){const e=t.headers.get(Jt);if(!e||!e.match(zn))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function Vn(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function Wn(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const Gn=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;function ie(t){if(!Gn.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function Y(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function Nt(){const t={};return new Proxy(t,{get:(e,s)=>{if(s==="__isUserNotAvailableProxy")return!0;if(typeof s=="symbol"){const i=s.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${s}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,s)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${s}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Kn(t,e){return new Proxy(t,{get:(s,i,r)=>{if(i==="__isInsecureUserWarningProxy")return!0;if(typeof i=="symbol"){const n=i.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)"||n==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(s,i,r)}return!e.value&&typeof i=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(s,i,r)}})}function Ls(t){return JSON.parse(JSON.stringify(t))}const be=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},Jn=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function Ds(t){var e;if(!Pn(t))throw new Yt(be(t),0);if(Jn.includes(t.status))throw new Yt(be(t),t.status);let s;try{s=await t.json()}catch(n){throw new Q(be(n),n)}let i;const r=Hn(t);if(r&&r.getTime()>=ui["2024-01-01"].timestamp&&typeof s=="object"&&s&&typeof s.code=="string"?i=s.code:typeof s=="object"&&s&&typeof s.error_code=="string"&&(i=s.error_code),i){if(i==="weak_password")throw new Cs(be(s),t.status,((e=s.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(i==="session_not_found")throw new U}else if(typeof s=="object"&&s&&typeof s.weak_password=="object"&&s.weak_password&&Array.isArray(s.weak_password.reasons)&&s.weak_password.reasons.length&&s.weak_password.reasons.reduce((n,a)=>n&&typeof a=="string",!0))throw new Cs(be(s),t.status,s.weak_password.reasons);throw new vn(be(s),t.status||500,i)}const Yn=(t,e,s,i)=>{const r={method:t,headers:(e==null?void 0:e.headers)||{}};return t==="GET"?r:(r.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e==null?void 0:e.headers),r.body=JSON.stringify(i),Object.assign(Object.assign({},r),s))};async function E(t,e,s,i){var r;const n=Object.assign({},i==null?void 0:i.headers);n[Jt]||(n[Jt]=ui["2024-01-01"].name),i!=null&&i.jwt&&(n.Authorization=`Bearer ${i.jwt}`);const a=(r=i==null?void 0:i.query)!==null&&r!==void 0?r:{};i!=null&&i.redirectTo&&(a.redirect_to=i.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await Xn(t,e,s+o,{headers:n,noResolveJson:i==null?void 0:i.noResolveJson},{},i==null?void 0:i.body);return i!=null&&i.xform?i==null?void 0:i.xform(l):{data:Object.assign({},l),error:null}}async function Xn(t,e,s,i,r,n){const a=Yn(e,i,r,n);let o;try{o=await t(s,Object.assign({},a))}catch(l){throw new Yt(be(l),0)}if(o.ok||await Ds(o),i!=null&&i.noResolveJson)return o;try{return await o.json()}catch(l){await Ds(l)}}function K(t){var e;let s=null;ea(t)&&(s=Object.assign({},t),t.expires_at||(s.expires_at=In(t.expires_in)));const i=(e=t.user)!==null&&e!==void 0?e:typeof(t==null?void 0:t.id)=="string"?t:null;return{data:{session:s,user:i},error:null}}function Bs(t){const e=K(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((s,i)=>s&&typeof i=="string",!0)&&(e.data.weak_password=t.weak_password),e}function fe(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function Qn(t){return{data:t,error:null}}function Zn(t){const{action_link:e,email_otp:s,hashed_token:i,redirect_to:r,verification_type:n}=t,a=Pt(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:s,hashed_token:i,redirect_to:r,verification_type:n},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function Ns(t){return t}function ea(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const Ut=["global","local","others"];class ta{constructor({url:e="",headers:s={},fetch:i,experimental:r}){this.url=e,this.headers=s,this.fetch=mi(i),this.experimental=r??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,s=Ut[0]){if(Ut.indexOf(s)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${Ut.join(", ")}`);try{return await E(this.fetch,"POST",`${this.url}/logout?scope=${s}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(i){if(_(i))return{data:null,error:i};throw i}}async inviteUserByEmail(e,s={}){try{return await E(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:s.data},headers:this.headers,redirectTo:s.redirectTo,xform:fe})}catch(i){if(_(i))return{data:{user:null},error:i};throw i}}async generateLink(e){try{const{options:s}=e,i=Pt(e,["options"]),r=Object.assign(Object.assign({},i),s);return"newEmail"in i&&(r.new_email=i==null?void 0:i.newEmail,delete r.newEmail),await E(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:r,headers:this.headers,xform:Zn,redirectTo:s==null?void 0:s.redirectTo})}catch(s){if(_(s))return{data:{properties:null,user:null},error:s};throw s}}async createUser(e){try{return await E(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:fe})}catch(s){if(_(s))return{data:{user:null},error:s};throw s}}async listUsers(e){var s,i,r,n,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},d=await E(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:"",per_page:(n=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:""},xform:Ns});if(d.error)throw d.error;const h=await d.json(),u=(a=d.headers.get("x-total-count"))!==null&&a!==void 0?a:0,m=(l=(o=d.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return m.length>0&&(m.forEach(p=>{const g=parseInt(p.split(";")[0].split("=")[1].substring(0,1)),b=JSON.parse(p.split(";")[1].split("=")[1]);c[`${b}Page`]=g}),c.total=parseInt(u)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(_(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){ie(e);try{return await E(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:fe})}catch(s){if(_(s))return{data:{user:null},error:s};throw s}}async updateUserById(e,s){ie(e);try{return await E(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:s,headers:this.headers,xform:fe})}catch(i){if(_(i))return{data:{user:null},error:i};throw i}}async deleteUser(e,s=!1){ie(e);try{return await E(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:s},xform:fe})}catch(i){if(_(i))return{data:{user:null},error:i};throw i}}async _listFactors(e){ie(e.userId);try{const{data:s,error:i}=await E(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:r=>({data:{factors:r},error:null})});return{data:s,error:i}}catch(s){if(_(s))return{data:null,error:s};throw s}}async _deleteFactor(e){ie(e.userId),ie(e.id);try{return{data:await E(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(s){if(_(s))return{data:null,error:s};throw s}}async _listOAuthClients(e){var s,i,r,n,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},d=await E(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(i=(s=e==null?void 0:e.page)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:"",per_page:(n=(r=e==null?void 0:e.perPage)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:""},xform:Ns});if(d.error)throw d.error;const h=await d.json(),u=(a=d.headers.get("x-total-count"))!==null&&a!==void 0?a:0,m=(l=(o=d.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return m.length>0&&(m.forEach(p=>{const g=parseInt(p.split(";")[0].split("=")[1].substring(0,1)),b=JSON.parse(p.split(";")[1].split("=")[1]);c[`${b}Page`]=g}),c.total=parseInt(u)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(_(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await E(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(_(s))return{data:null,error:s};throw s}}async _getOAuthClient(e){try{return await E(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(_(s))return{data:null,error:s};throw s}}async _updateOAuthClient(e,s){try{return await E(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:s,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(_(i))return{data:null,error:i};throw i}}async _deleteOAuthClient(e){try{return await E(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(_(s))return{data:null,error:s};throw s}}async _regenerateOAuthClientSecret(e){try{return await E(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(_(s))return{data:null,error:s};throw s}}async _listCustomProviders(e){try{const s={};return e!=null&&e.type&&(s.type=e.type),await E(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:s,xform:i=>{var r;return{data:{providers:(r=i==null?void 0:i.providers)!==null&&r!==void 0?r:[]},error:null}}})}catch(s){if(_(s))return{data:{providers:[]},error:s};throw s}}async _createCustomProvider(e){try{return await E(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(_(s))return{data:null,error:s};throw s}}async _getCustomProvider(e){try{return await E(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(_(s))return{data:null,error:s};throw s}}async _updateCustomProvider(e,s){try{return await E(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:s,headers:this.headers,xform:i=>({data:i,error:null})})}catch(i){if(_(i))return{data:null,error:i};throw i}}async _deleteCustomProvider(e){try{return await E(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(_(s))return{data:null,error:s};throw s}}async _adminListPasskeys(e){Y(this.experimental),ie(e.userId);try{return await E(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:s=>({data:s,error:null})})}catch(s){if(_(s))return{data:null,error:s};throw s}}async _adminDeletePasskey(e){Y(this.experimental),ie(e.userId),ie(e.passkeyId);try{return await E(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(s){if(_(s))return{data:null,error:s};throw s}}}function Us(t={}){return{getItem:e=>t[e]||null,setItem:(e,s)=>{t[e]=s},removeItem:e=>{delete t[e]}}}globalThis&&fi()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class sa extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function ia(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function gi(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function ra(t){return parseInt(t,16)}function na(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,i=>i.toString(16).padStart(2,"0")).join("")}function aa(t){var e;const{chainId:s,domain:i,expirationTime:r,issuedAt:n=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:d,uri:h,version:u}=t;{if(!Number.isInteger(s))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${s}`);if(!i)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(u!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${u}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const m=gi(t.address),p=d?`${d}://${i}`:i,g=t.statement?`${t.statement}
`:"",b=`${p} wants you to sign in with your Ethereum account:
${m}

${g}`;let v=`URI: ${h}
Version: ${u}
Chain ID: ${s}${a?`
Nonce: ${a}`:""}
Issued At: ${n.toISOString()}`;if(r&&(v+=`
Expiration Time: ${r.toISOString()}`),o&&(v+=`
Not Before: ${o.toISOString()}`),l&&(v+=`
Request ID: ${l}`),c){let S=`
Resources:`;for(const w of c){if(!w||typeof w!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${w}`);S+=`
- ${w}`}v+=S}return`${b}
${v}`}class B extends Error{constructor({message:e,code:s,cause:i,name:r}){var n;super(e,{cause:i}),this.__isWebAuthnError=!0,this.name=(n=r??(i instanceof Error?i.name:void 0))!==null&&n!==void 0?n:"Unknown Error",this.code=s}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class kt extends B{constructor(e,s){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:s,message:e}),this.name="WebAuthnUnknownError",this.originalError=s}}function oa({error:t,options:e}){var s,i,r;const{publicKey:n}=e;if(!n)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new B({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((s=n.authenticatorSelection)===null||s===void 0?void 0:s.requireResidentKey)===!0)return new B({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((i=n.authenticatorSelection)===null||i===void 0?void 0:i.userVerification)==="required")return new B({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((r=n.authenticatorSelection)===null||r===void 0?void 0:r.userVerification)==="required")return new B({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new B({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new B({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return n.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new B({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new B({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const a=window.location.hostname;if(bi(a)){if(n.rp.id!==a)return new B({message:`The RP ID "${n.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new B({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(n.user.id.byteLength<1||n.user.id.byteLength>64)return new B({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new B({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new B({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function la({error:t,options:e}){const{publicKey:s}=e;if(!s)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new B({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new B({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const i=window.location.hostname;if(bi(i)){if(s.rpId!==i)return new B({message:`The RP ID "${s.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new B({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new B({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new B({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class ca{createNewAbortSignal(){if(this.controller){const s=new Error("Cancelling existing WebAuthn API call for new one");s.name="AbortError",this.controller.abort(s)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const Xt=new ca;function js(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:s,excludeCredentials:i}=t,r=Pt(t,["challenge","user","excludeCredentials"]),n=$e(e).buffer,a=Object.assign(Object.assign({},s),{id:$e(s.id).buffer}),o=Object.assign(Object.assign({},r),{challenge:n,user:a});if(i&&i.length>0){o.excludeCredentials=new Array(i.length);for(let l=0;l<i.length;l++){const c=i[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:$e(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function Ms(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:s}=t,i=Pt(t,["challenge","allowCredentials"]),r=$e(e).buffer,n=Object.assign(Object.assign({},i),{challenge:r});if(s&&s.length>0){n.allowCredentials=new Array(s.length);for(let a=0;a<s.length;a++){const o=s[a];n.allowCredentials[a]=Object.assign(Object.assign({},o),{id:$e(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return n}function qs(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t;return{id:t.id,rawId:t.id,response:{attestationObject:ve(new Uint8Array(t.response.attestationObject)),clientDataJSON:ve(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Fs(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const s=t,i=t.getClientExtensionResults(),r=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:ve(new Uint8Array(r.authenticatorData)),clientDataJSON:ve(new Uint8Array(r.clientDataJSON)),signature:ve(new Uint8Array(r.signature)),userHandle:r.userHandle?ve(new Uint8Array(r.userHandle)):void 0},type:"public-key",clientExtensionResults:i,authenticatorAttachment:(e=s.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function bi(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function At(){var t,e;return!!(j()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator==null?void 0:navigator.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator==null?void 0:navigator.credentials)===null||e===void 0?void 0:e.get)=="function")}async function yi(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new kt("Browser returned unexpected credential type",e)}:{data:null,error:new kt("Empty credential response",e)}}catch(e){return{data:null,error:oa({error:e,options:t})}}}async function vi(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new kt("Browser returned unexpected credential type",e)}:{data:null,error:new kt("Empty credential response",e)}}catch(e){return{data:null,error:la({error:e,options:t})}}}const da={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},ua={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function Tt(...t){const e=r=>r!==null&&typeof r=="object"&&!Array.isArray(r),s=r=>r instanceof ArrayBuffer||ArrayBuffer.isView(r),i={};for(const r of t)if(r)for(const n in r){const a=r[n];if(a!==void 0)if(Array.isArray(a))i[n]=a;else if(s(a))i[n]=a;else if(e(a)){const o=i[n];e(o)?i[n]=Tt(o,a):i[n]=Tt(a)}else i[n]=a}return i}function ha(t,e){return Tt(da,t,e||{})}function fa(t,e){return Tt(ua,t,e||{})}class ma{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:s,friendlyName:i,signal:r},n){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:s});if(!o)return{data:null,error:l};const c=r??Xt.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:d}=o.webauthn.credential_options.publicKey;if(!d.name){const h=i;if(h)d.name=`${d.id}:${h}`;else{const m=(await this.client.getUser()).data.user,p=((a=m==null?void 0:m.user_metadata)===null||a===void 0?void 0:a.name)||(m==null?void 0:m.email)||(m==null?void 0:m.id)||"User";d.name=`${d.id}:${p}`}}d.displayName||(d.displayName=d.name)}switch(o.webauthn.type){case"create":{const d=ha(o.webauthn.credential_options.publicKey,n==null?void 0:n.create),{data:h,error:u}=await yi({publicKey:d,signal:c});return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:u}}case"request":{const d=fa(o.webauthn.credential_options.publicKey,n==null?void 0:n.request),{data:h,error:u}=await vi(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:d,signal:c}));return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:u}}}}catch(o){return _(o)?{data:null,error:o}:{data:null,error:new Q("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:s,webauthn:i}){return this.client.mfa.verify({factorId:s,challengeId:e,webauthn:i})}async _authenticate({factorId:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},n){if(!s)return{data:null,error:new Ye("rpId is required for WebAuthn authentication")};try{if(!At())return{data:null,error:new Q("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:s,rpOrigins:i},signal:r},{request:n});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:s,rpOrigins:i,credential_response:l.credential_response}})}catch(a){return _(a)?{data:null,error:a}:{data:null,error:new Q("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:s=typeof window<"u"?window.location.hostname:void 0,rpOrigins:i=typeof window<"u"?[window.location.origin]:void 0,signal:r}={}},n){if(!s)return{data:null,error:new Ye("rpId is required for WebAuthn registration")};try{if(!At())return{data:null,error:new Q("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(d=>{var h;return(h=d.data)===null||h===void 0?void 0:h.all.find(u=>u.factor_type==="webauthn"&&u.friendly_name===e&&u.status!=="unverified")}).then(d=>d?this.client.mfa.unenroll({factorId:d==null?void 0:d.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:s,rpOrigins:i},signal:r},{create:n});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:s,rpOrigins:i,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return _(a)?{data:null,error:a}:{data:null,error:new Q("Unexpected error in register",a)}}}}ia();const pa={url:fn,storageKey:mn,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:pn,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},Ae={};class Qe{get jwks(){var e,s;return(s=(e=Ae[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&s!==void 0?s:{keys:[]}}set jwks(e){Ae[this.storageKey]=Object.assign(Object.assign({},Ae[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,s;return(s=(e=Ae[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&s!==void 0?s:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){Ae[this.storageKey]=Object.assign(Object.assign({},Ae[this.storageKey]),{cachedAt:e})}constructor(e){var s,i,r;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this._pendingInitNotifications=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const n=Object.assign(Object.assign({},pa),e);if(this.storageKey=n.storageKey,this.instanceID=(s=Qe.nextInstanceID[this.storageKey])!==null&&s!==void 0?s:0,Qe.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!n.debug,typeof n.debug=="function"&&(this.logger=n.debug),this.instanceID>0&&j()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=n.persistSession,this.autoRefreshToken=n.autoRefreshToken,this.experimental=(i=n.experimental)!==null&&i!==void 0?i:{},this.admin=new ta({url:n.url,headers:n.headers,fetch:n.fetch,experimental:this.experimental}),this.url=n.url,this.headers=n.headers,this.fetch=mi(n.fetch),this.detectSessionInUrl=n.detectSessionInUrl,this.flowType=n.flowType,this.hasCustomAuthorizationHeader=n.hasCustomAuthorizationHeader,this.throwOnError=n.throwOnError,this.lockAcquireTimeout=n.lockAcquireTimeout,n.lock!=null&&(this.lock=n.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new ma(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(n.storage?this.storage=n.storage:fi()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Us(this.memoryStorage)),n.userStorage&&(this.userStorage=n.userStorage)):(this.memoryStorage={},this.storage=Us(this.memoryStorage)),j()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(r=this.broadcastChannel)===null||r===void 0||r.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}n.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${di}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){var e;if(this.initializePromise)return await this.initializePromise;this._pendingInitNotifications=[],this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())();const s=await this.initializePromise,i=(e=this._pendingInitNotifications)!==null&&e!==void 0?e:[];this._pendingInitNotifications=null;for(const r of i)await this._notifyAllSubscribers(r.event,r.session,r.broadcast);return s}async _initialize(){var e;try{let s={},i="none";if(j()&&(s=xs(window.location.href),this._isImplicitGrantCallback(s)?i="implicit":await this._isPKCECallback(s)&&(i="pkce")),j()&&this.detectSessionInUrl&&i!=="none"){const{data:r,error:n}=await this._getSessionFromURL(s,i);if(n){if(this._debug("#_initialize()","error detecting session from URL",n),wn(n)){const l=(e=n.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:n}}return{error:n}}const{session:a,redirectType:o}=r;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(s){return _(s)?this._returnResult({error:s}):this._returnResult({error:new Q("Unexpected error during initialization",s)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var s,i,r;try{const n=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(i=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.data)!==null&&i!==void 0?i:{},gotrue_meta_security:{captcha_token:(r=e==null?void 0:e.options)===null||r===void 0?void 0:r.captchaToken}},xform:K}),{data:a,error:o}=n;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(n){if(_(n))return this._returnResult({data:{user:null,session:null},error:n});throw n}}async signUp(e){var s,i,r;let n=null;try{let a;if("email"in e){const{email:h,password:u,options:m}=e;let p=null,g=null;this.flowType==="pkce"&&([p,g,n]=await this._getCodeChallengeAndMethod()),a=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(m==null?void 0:m.emailRedirectTo,n),body:{email:h,password:u,data:(s=m==null?void 0:m.data)!==null&&s!==void 0?s:{},gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken},code_challenge:p,code_challenge_method:g},xform:K})}else if("phone"in e){const{phone:h,password:u,options:m}=e;a=await E(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:h,password:u,data:(i=m==null?void 0:m.data)!==null&&i!==void 0?i:{},channel:(r=m==null?void 0:m.channel)!==null&&r!==void 0?r:"sms",gotrue_meta_security:{captcha_token:m==null?void 0:m.captchaToken}},xform:K})}else throw new ft("You must provide either an email or phone number and a password");const{data:o,error:l}=a;if(l||!o)return await J(this.storage,this.storageKey,n),this._returnResult({data:{user:null,session:null},error:l});const c=o.session,d=o.user;return o.session&&(await this._saveSession(o.session),await this._notifyAllSubscribers("SIGNED_IN",c)),this._returnResult({data:{user:d,session:c},error:null})}catch(a){if(await J(this.storage,this.storageKey,n),_(a))return this._returnResult({data:{user:null,session:null},error:a});throw a}}async signInWithPassword(e){try{let s;if("email"in e){const{email:n,password:a,options:o}=e;s=await E(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:n,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Bs})}else if("phone"in e){const{phone:n,password:a,options:o}=e;s=await E(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:n,password:a,gotrue_meta_security:{captcha_token:o==null?void 0:o.captchaToken}},xform:Bs})}else throw new ft("You must provide either an email or phone number and a password");const{data:i,error:r}=s;if(r)return this._returnResult({data:{user:null,session:null},error:r});if(!i||!i.session||!i.user){const n=new ke;return this._returnResult({data:{user:null,session:null},error:n})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers("SIGNED_IN",i.session)),this._returnResult({data:Object.assign({user:i.user,session:i.session},i.weak_password?{weakPassword:i.weak_password}:null),error:r})}catch(s){if(_(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOAuth(e){var s,i,r,n;return await this._handleProviderSignIn(e.provider,{redirectTo:(s=e.options)===null||s===void 0?void 0:s.redirectTo,scopes:(i=e.options)===null||i===void 0?void 0:i.scopes,queryParams:(r=e.options)===null||r===void 0?void 0:r.queryParams,skipBrowserRedirect:(n=e.options)===null||n===void 0?void 0:n.skipBrowserRedirect})}async exchangeCodeForSession(e,s){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e,s)):this._exchangeCodeForSession(e,s)}async signInWithWeb3(e){const{chain:s}=e;switch(s){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${s}"`)}}async signInWithEthereum(e){var s,i,r,n,a,o,l,c,d,h,u;let m,p;if("message"in e)m=e.message,p=e.signature;else{const{chain:g,wallet:b,statement:v,options:S}=e;let w;if(j())if(typeof b=="object")w=b;else{const F=window;if("ethereum"in F&&typeof F.ethereum=="object"&&"request"in F.ethereum&&typeof F.ethereum.request=="function")w=F.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof b!="object"||!(S!=null&&S.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");w=b}const A=new URL((s=S==null?void 0:S.url)!==null&&s!==void 0?s:window.location.href),x=await w.request({method:"eth_requestAccounts"}).then(F=>F).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!x||x.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const I=gi(x[0]);let $=(i=S==null?void 0:S.signInWithEthereum)===null||i===void 0?void 0:i.chainId;if(!$){const F=await w.request({method:"eth_chainId"});$=ra(F)}const G={domain:A.host,address:I,statement:v,uri:A.href,version:"1",chainId:$,nonce:(r=S==null?void 0:S.signInWithEthereum)===null||r===void 0?void 0:r.nonce,issuedAt:(a=(n=S==null?void 0:S.signInWithEthereum)===null||n===void 0?void 0:n.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=S==null?void 0:S.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=S==null?void 0:S.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=S==null?void 0:S.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(d=S==null?void 0:S.signInWithEthereum)===null||d===void 0?void 0:d.resources};m=aa(G),p=await w.request({method:"personal_sign",params:[na(m),I]})}try{const{data:g,error:b}=await E(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:m,signature:p},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(u=e.options)===null||u===void 0?void 0:u.captchaToken}}:null),xform:K});if(b)throw b;if(!g||!g.session||!g.user){const v=new ke;return this._returnResult({data:{user:null,session:null},error:v})}return g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("SIGNED_IN",g.session)),this._returnResult({data:Object.assign({},g),error:b})}catch(g){if(_(g))return this._returnResult({data:{user:null,session:null},error:g});throw g}}async signInWithSolana(e){var s,i,r,n,a,o,l,c,d,h,u,m;let p,g;if("message"in e)p=e.message,g=e.signature;else{const{chain:b,wallet:v,statement:S,options:w}=e;let A;if(j())if(typeof v=="object")A=v;else{const I=window;if("solana"in I&&typeof I.solana=="object"&&("signIn"in I.solana&&typeof I.solana.signIn=="function"||"signMessage"in I.solana&&typeof I.solana.signMessage=="function"))A=I.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof v!="object"||!(w!=null&&w.url))throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");A=v}const x=new URL((s=w==null?void 0:w.url)!==null&&s!==void 0?s:window.location.href);if("signIn"in A&&A.signIn){const I=await A.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},w==null?void 0:w.signInWithSolana),{version:"1",domain:x.host,uri:x.href}),S?{statement:S}:null));let $;if(Array.isArray(I)&&I[0]&&typeof I[0]=="object")$=I[0];else if(I&&typeof I=="object"&&"signedMessage"in I&&"signature"in I)$=I;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in $&&"signature"in $&&(typeof $.signedMessage=="string"||$.signedMessage instanceof Uint8Array)&&$.signature instanceof Uint8Array)p=typeof $.signedMessage=="string"?$.signedMessage:new TextDecoder().decode($.signedMessage),g=$.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in A)||typeof A.signMessage!="function"||!("publicKey"in A)||typeof A!="object"||!A.publicKey||!("toBase58"in A.publicKey)||typeof A.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");p=[`${x.host} wants you to sign in with your Solana account:`,A.publicKey.toBase58(),...S?["",S,""]:[""],"Version: 1",`URI: ${x.href}`,`Issued At: ${(r=(i=w==null?void 0:w.signInWithSolana)===null||i===void 0?void 0:i.issuedAt)!==null&&r!==void 0?r:new Date().toISOString()}`,...!((n=w==null?void 0:w.signInWithSolana)===null||n===void 0)&&n.notBefore?[`Not Before: ${w.signInWithSolana.notBefore}`]:[],...!((a=w==null?void 0:w.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${w.signInWithSolana.expirationTime}`]:[],...!((o=w==null?void 0:w.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${w.signInWithSolana.chainId}`]:[],...!((l=w==null?void 0:w.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${w.signInWithSolana.nonce}`]:[],...!((c=w==null?void 0:w.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${w.signInWithSolana.requestId}`]:[],...!((h=(d=w==null?void 0:w.signInWithSolana)===null||d===void 0?void 0:d.resources)===null||h===void 0)&&h.length?["Resources",...w.signInWithSolana.resources.map($=>`- ${$}`)]:[]].join(`
`);const I=await A.signMessage(new TextEncoder().encode(p),"utf8");if(!I||!(I instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");g=I}}try{const{data:b,error:v}=await E(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:p,signature:ve(g)},!((u=e.options)===null||u===void 0)&&u.captchaToken?{gotrue_meta_security:{captcha_token:(m=e.options)===null||m===void 0?void 0:m.captchaToken}}:null),xform:K});if(v)throw v;if(!b||!b.session||!b.user){const S=new ke;return this._returnResult({data:{user:null,session:null},error:S})}return b.session&&(await this._saveSession(b.session),await this._notifyAllSubscribers("SIGNED_IN",b.session)),this._returnResult({data:Object.assign({},b),error:v})}catch(b){if(_(b))return this._returnResult({data:{user:null,session:null},error:b});throw b}}async _exchangeCodeForSession(e,s){const i=(s==null?void 0:s.flowId)!=null,r=i?yt(s==null?void 0:s.flowId):j()?yt(xs(window.location.href)[ye]):null;i&&!r&&this._debug("#_exchangeCodeForSession()","provided flowId is not a valid flow id",s==null?void 0:s.flowId);const{verifier:n,flowId:a}=i&&!r?{verifier:null,flowId:null}:await jn(this.storage,this.storageKey,r),[o,l]=(n??"").split("/");try{if(!o&&this.flowType==="pkce")throw new _n;const{data:c,error:d}=await E(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:o},xform:K});if(await J(this.storage,this.storageKey,a),d)throw d;if(!c||!c.session||!c.user){const h=new ke;return this._returnResult({data:{user:null,session:null,redirectType:null},error:h})}return c.session&&(await this._saveSession(c.session),await this._notifyAllSubscribers(l==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",c.session)),this._returnResult({data:Object.assign(Object.assign({},c),{redirectType:l??null}),error:d})}catch(c){if(await J(this.storage,this.storageKey,a),_(c))return this._returnResult({data:{user:null,session:null,redirectType:null},error:c});throw c}}async signInWithIdToken(e){try{const{options:s,provider:i,token:r,access_token:n,nonce:a}=e,o=await E(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:i,id_token:r,access_token:n,nonce:a,gotrue_meta_security:{captcha_token:s==null?void 0:s.captchaToken}},xform:K}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const d=new ke;return this._returnResult({data:{user:null,session:null},error:d})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(s){if(_(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithOtp(e){var s,i,r,n,a;let o=null;try{if("email"in e){const{email:l,options:c}=e;let d=null,h=null;this.flowType==="pkce"&&([d,h,o]=await this._getCodeChallengeAndMethod());const{error:u}=await E(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:l,data:(s=c==null?void 0:c.data)!==null&&s!==void 0?s:{},create_user:(i=c==null?void 0:c.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},code_challenge:d,code_challenge_method:h},redirectTo:this._maybeAppendFlowIdToRedirect(c==null?void 0:c.emailRedirectTo,o)});return this._returnResult({data:{user:null,session:null},error:u})}if("phone"in e){const{phone:l,options:c}=e,{data:d,error:h}=await E(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:l,data:(r=c==null?void 0:c.data)!==null&&r!==void 0?r:{},create_user:(n=c==null?void 0:c.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:c==null?void 0:c.captchaToken},channel:(a=c==null?void 0:c.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:d==null?void 0:d.message_id},error:h})}throw new ft("You must provide either an email or phone number.")}catch(l){if(await J(this.storage,this.storageKey,o),_(l))return this._returnResult({data:{user:null,session:null},error:l});throw l}}async verifyOtp(e){var s,i;try{let r,n;"options"in e&&(r=(s=e.options)===null||s===void 0?void 0:s.redirectTo,n=(i=e.options)===null||i===void 0?void 0:i.captchaToken);const{data:a,error:o}=await E(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:n}}),redirectTo:r,xform:K});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l!=null&&l.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(r){if(_(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithSSO(e){var s,i,r,n;let a=null;try{let o=null,l=null;this.flowType==="pkce"&&([o,l,a]=await this._getCodeChallengeAndMethod());const c=await E(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:this._maybeAppendFlowIdToRedirect((s=e.options)===null||s===void 0?void 0:s.redirectTo,a)}),!((i=e==null?void 0:e.options)===null||i===void 0)&&i.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:Qn});return!((r=c.data)===null||r===void 0)&&r.url&&j()&&!(!((n=e.options)===null||n===void 0)&&n.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await J(this.storage,this.storageKey,a),_(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:s},error:i}=e;if(i)throw i;if(!s)throw new U;const{error:r}=await E(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:s.access_token});return this._returnResult({data:{user:null,session:null},error:r})})}catch(e){if(_(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){let s=null;try{const i=`${this.url}/resend`;if("email"in e){const{email:r,type:n,options:a}=e;let o=null,l=null;this.flowType==="pkce"&&([o,l,s]=await this._getCodeChallengeAndMethod());const{error:c}=await E(this.fetch,"POST",i,{headers:this.headers,body:{email:r,type:n,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken},code_challenge:o,code_challenge_method:l},redirectTo:this._maybeAppendFlowIdToRedirect(a==null?void 0:a.emailRedirectTo,s)});return c&&await J(this.storage,this.storageKey,s),this._returnResult({data:{user:null,session:null},error:c})}else if("phone"in e){const{phone:r,type:n,options:a}=e,{data:o,error:l}=await E(this.fetch,"POST",i,{headers:this.headers,body:{phone:r,type:n,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:o==null?void 0:o.message_id},error:l})}throw new ft("You must provide either an email or phone number and a type")}catch(i){if(await J(this.storage,this.storageKey,s),_(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,s){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const i=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),r=(async()=>(await i,await s()))();return this.pendingInLock.push((async()=>{try{await r}catch{}})()),r}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const i=s();for(this.pendingInLock.push((async()=>{try{await i}catch{}})()),await i;this.pendingInLock.length;){const r=[...this.pendingInLock];await Promise.all(r),this.pendingInLock.splice(0,r.length)}return await i}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const s=await this.__loadSession();return await e(s)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const s=await M(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",s),s!==null&&(this._isValidSession(s)?e=s:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const i=e.expires_at?e.expires_at*1e3-Date.now()<Bt:!1;if(this._debug("#__loadSession()",`session has${i?"":" not"} expired`,"expires_at",e.expires_at),!i){if(this.userStorage){const a=await M(this.userStorage,this.storageKey+"-user");a!=null&&a.user?e.user=a.user:e.user=Nt()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=Kn(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:r,error:n}=await this._callRefreshToken(e.refresh_token);if(n){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await M(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:n})}return this._returnResult({data:{session:r},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let s;return this.lock!=null?s=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):s=await this._getUser(),s.data.user&&(this.suppressGetSessionWarning=!0),s}async _getUser(e){try{return e?await E(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:fe}):await this._useSession(async s=>{var i,r,n;const{data:a,error:o}=s;if(o)throw o;return!(!((i=a.session)===null||i===void 0)&&i.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new U}:await E(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(n=(r=a.session)===null||r===void 0?void 0:r.access_token)!==null&&n!==void 0?n:void 0,xform:fe})})}catch(s){if(_(s))return ht(s)&&await this._removeSession(),this._returnResult({data:{user:null},error:s});throw s}}async updateUser(e,s={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,s)):await this._updateUser(e,s)}async _updateUser(e,s={}){let i=null;try{return await this._useSession(async r=>{const{data:n,error:a}=r;if(a)throw a;if(!n.session)throw new U;const o=n.session;let l=null,c=null;this.flowType==="pkce"&&e.email!=null&&([l,c,i]=await this._getCodeChallengeAndMethod());const{data:d,error:h}=await E(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(s==null?void 0:s.emailRedirectTo,i),body:Object.assign(Object.assign({},e),{code_challenge:l,code_challenge_method:c}),jwt:o.access_token,xform:fe});if(h)throw h;return o.user=d.user,await this._saveSession(o),await this._notifyAllSubscribers("USER_UPDATED",o),this._returnResult({data:{user:o.user},error:null})})}catch(r){if(await J(this.storage,this.storageKey,i),_(r))return this._returnResult({data:{user:null},error:r});throw r}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new U;const s=Date.now()/1e3;let i=s,r=!0,n=null;const{payload:a}=gt(e.access_token);if(a.exp&&(i=a.exp,r=i<=s),r){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};n=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});n={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:i-s,expires_at:i},await this._saveSession(n),await this._notifyAllSubscribers("SIGNED_IN",n)}return this._returnResult({data:{user:n.user,session:n},error:null})}catch(s){if(_(s))return this._returnResult({data:{session:null,user:null},error:s});throw s}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async s=>{var i;if(!e){const{data:a,error:o}=s;if(o)throw o;e=(i=a.session)!==null&&i!==void 0?i:void 0}if(!(e!=null&&e.refresh_token))throw new U;const{data:r,error:n}=await this._callRefreshToken(e.refresh_token);return n?this._returnResult({data:{user:null,session:null},error:n}):r?this._returnResult({data:{user:r.user,session:r},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(s){if(_(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async _getSessionFromURL(e,s){var i;try{if(!j())throw new mt("No browser detected.");if(e.error||e.error_description||e.error_code)throw new mt(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(s){case"implicit":if(this.flowType==="pkce")throw new Rs("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new mt("Not a valid implicit grant flow url.");break;default:}if(s==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new Rs("No code detected.");const{data:w,error:A}=await this._exchangeCodeForSession(e.code,{flowId:e[ye]});if(A)throw A;const x=new URL(window.location.href);return x.searchParams.delete("code"),x.searchParams.delete(ye),window.history.replaceState(window.history.state,"",x.toString()),{data:{session:w.session,redirectType:(i=w.redirectType)!==null&&i!==void 0?i:null},error:null}}const{provider_token:r,provider_refresh_token:n,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:d}=e;if(!a||!l||!o||!d)throw new mt("No session defined in URL");const h=Math.round(Date.now()/1e3),u=parseInt(l);let m=h+u;c&&(m=parseInt(c));const p=m-h;p*1e3<=ae&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${p}s, should have been closer to ${u}s`);const g=m-u;h-g>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",g,m,h):h-g<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",g,m,h);const{data:b,error:v}=await this._getUser(a);if(v)throw v;const S={provider_token:r,provider_refresh_token:n,access_token:a,expires_in:u,expires_at:m,refresh_token:o,token_type:d,user:b.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:S,redirectType:e.type},error:null})}catch(r){if(_(r))return this._returnResult({data:{session:null,redirectType:null},error:r});throw r}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){if(!e.code)return!1;const s=yt(e[ye]);return s&&await M(this.storage,xe(this.storageKey,s))?!0:!!await M(this.storage,`${this.storageKey}-code-verifier`)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async s=>{var i;const r=async()=>{await this._removeSession()},{data:n,error:a}=s;if(a&&!ht(a))return this._returnResult({error:a});const o=(i=n.session)===null||i===void 0?void 0:i.access_token;if(o){const{error:l}=await this.admin.signOut(o,e);if(l&&!(Ts(l)&&(l.status===404||l.status===401||l.status===403)||ht(l)))return e!=="others"&&await r(),this._returnResult({error:l})}return e!=="others"&&await r(),this._returnResult({error:null})})}onAuthStateChange(e){const s=Cn(),i={id:s,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",s),this.stateChangeEmitters.delete(s)}};return this._debug("#onAuthStateChange()","registered callback with id",s),this.stateChangeEmitters.set(s,i),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(s)}):await this._emitInitialSession(s)))(),{data:{subscription:i}}}async _emitInitialSession(e){return await this._useSession(async s=>{var i,r;try{const{data:{session:n},error:a}=s;if(a)throw a;await((i=this.stateChangeEmitters.get(e))===null||i===void 0?void 0:i.callback("INITIAL_SESSION",n)),this._debug("INITIAL_SESSION","callback id",e,"session",n)}catch(n){await((r=this.stateChangeEmitters.get(e))===null||r===void 0?void 0:r.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",n),ht(n)||pt(n)||Ts(n)&&(n.code==="refresh_token_not_found"||n.code==="refresh_token_already_used"||n.code==="session_expired")?console.warn(n):console.error(n)}})}async resetPasswordForEmail(e,s={}){let i=null,r=null,n=null;this.flowType==="pkce"&&([i,r,n]=await this._getCodeChallengeAndMethod(!0));try{return await E(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:i,code_challenge_method:r,gotrue_meta_security:{captcha_token:s.captchaToken}},headers:this.headers,redirectTo:this._maybeAppendFlowIdToRedirect(s.redirectTo,n)})}catch(a){if(await J(this.storage,this.storageKey,n),_(a))return this._returnResult({data:null,error:a});throw a}}async getUserIdentities(){var e;try{const{data:s,error:i}=await this.getUser();if(i)throw i;return this._returnResult({data:{identities:(e=s.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var s;let i=null;try{const{data:r,error:n}=await this._useSession(async a=>{var o,l,c,d,h;const{data:u,error:m}=a;if(m)throw m;const{url:p,flowId:g}=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(o=e.options)===null||o===void 0?void 0:o.redirectTo,scopes:(l=e.options)===null||l===void 0?void 0:l.scopes,queryParams:(c=e.options)===null||c===void 0?void 0:c.queryParams,skipBrowserRedirect:!0});return i=g,await E(this.fetch,"GET",p,{headers:this.headers,jwt:(h=(d=u.session)===null||d===void 0?void 0:d.access_token)!==null&&h!==void 0?h:void 0})});if(n)throw n;return j()&&!(!((s=e.options)===null||s===void 0)&&s.skipBrowserRedirect)&&window.location.assign(r==null?void 0:r.url),this._returnResult({data:{provider:e.provider,url:r==null?void 0:r.url,flowId:i},error:null})}catch(r){if(_(r))return this._returnResult({data:{provider:e.provider,url:null,flowId:i},error:r});throw r}}async linkIdentityIdToken(e){return await this._useSession(async s=>{var i;try{const{error:r,data:{session:n}}=s;if(r)throw r;const{options:a,provider:o,token:l,access_token:c,nonce:d}=e,h=await E(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(i=n==null?void 0:n.access_token)!==null&&i!==void 0?i:void 0,body:{provider:o,id_token:l,access_token:c,nonce:d,link_identity:!0,gotrue_meta_security:{captcha_token:a==null?void 0:a.captchaToken}},xform:K}),{data:u,error:m}=h;return m?this._returnResult({data:{user:null,session:null},error:m}):!u||!u.session||!u.user?this._returnResult({data:{user:null,session:null},error:new ke}):(u.session&&(await this._saveSession(u.session),await this._notifyAllSubscribers("USER_UPDATED",u.session)),this._returnResult({data:u,error:m}))}catch(r){if(await J(this.storage,this.storageKey,null),_(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}})}async unlinkIdentity(e){try{return await this._useSession(async s=>{var i,r;const{data:n,error:a}=s;if(a)throw a;return await E(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(r=(i=n.session)===null||i===void 0?void 0:i.access_token)!==null&&r!==void 0?r:void 0})})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async _refreshAccessToken(e){const s="#_refreshAccessToken()";this._debug(s,"begin");try{const i=Date.now();return await On(async r=>(r>0&&await $n(200*Math.pow(2,r-1)),this._debug(s,"refreshing attempt",r),await E(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:K})),(r,n)=>{const a=200*Math.pow(2,r);return n&&pt(n)&&Date.now()+a-i<ae})}catch(i){if(this._debug(s,"error",i),_(i))return this._returnResult({data:{session:null,user:null},error:i});throw i}finally{this._debug(s,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,s){const{url:i,flowId:r}=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:s.redirectTo,scopes:s.scopes,queryParams:s.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",s,"url",i),j()&&!s.skipBrowserRedirect&&window.location.assign(i),{data:{provider:e,url:i,flowId:r},error:null}}async _recoverAndRefresh(){var e,s;const i="#_recoverAndRefresh()";this._debug(i,"begin");try{const r=await M(this.storage,this.storageKey);if(r&&this.userStorage){let a=await M(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:r.user},await le(this.userStorage,this.storageKey+"-user",a)),r.user=(e=a==null?void 0:a.user)!==null&&e!==void 0?e:Nt()}else if(r&&!r.user&&!r.user){const a=await M(this.storage,this.storageKey+"-user");a&&(a!=null&&a.user)?(r.user=a.user,await H(this.storage,this.storageKey+"-user"),await le(this.storage,this.storageKey,r)):r.user=Nt()}if(this._debug(i,"session from storage",r),!this._isValidSession(r)){this._debug(i,"session is not valid"),r!==null&&await this._removeSession();return}const n=((s=r.expires_at)!==null&&s!==void 0?s:1/0)*1e3-Date.now()<Bt;if(this._debug(i,`session has${n?"":" not"} expired with margin of ${Bt}s`),n){if(this.autoRefreshToken&&r.refresh_token){const{error:a}=await this._callRefreshToken(r.refresh_token);a&&(Sn(a)?this._debug(i,"refresh discarded by commit guard",a):this._debug(i,"refresh failed",a))}}else if(r.user&&r.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(r.access_token);!o&&(a!=null&&a.user)?(r.user=a.user,await this._saveSession(r),await this._notifyAllSubscribers("SIGNED_IN",r)):this._debug(i,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(i,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",r)}catch(r){this._debug(i,"error",r),pt(r)?console.warn(r):console.error(r);return}finally{this._debug(i,"end")}}async _callRefreshToken(e){var s,i;if(!e)throw new U;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const r="#_callRefreshToken()";this._debug(r,"begin");try{this.refreshingDeferred=new xt;const n=await M(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new U;const l=await M(this.storage,this.storageKey);if(n!==null&&(l===null||l.refresh_token!==n.refresh_token)){this._debug(r,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const u={data:null,error:new Is};return this.refreshingDeferred.resolve(u),u}const d=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==d){this._debug(r,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await H(this.storage,this.storageKey),this.userStorage&&await H(this.userStorage,this.storageKey+"-user");const u={data:null,error:new Is};return this.refreshingDeferred.resolve(u),u}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const h={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(h),h}catch(n){if(this._debug(r,"error",n),_(n)){const a={data:null,error:n};if(!pt(n)){const o=await M(this.storage,this.storageKey);!!(o!=null&&o.expires_at&&o.expires_at*1e3>Date.now())?this._debug(r,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+hn},(s=this.refreshingDeferred)===null||s===void 0||s.resolve(a),a}throw(i=this.refreshingDeferred)===null||i===void 0||i.reject(n),n}finally{this.refreshingDeferred=null,this._debug(r,"end")}}async _notifyAllSubscribers(e,s,i=!0){if(this._pendingInitNotifications!==null&&i){this._pendingInitNotifications.push({event:e,session:s,broadcast:i});return}const r=`#_notifyAllSubscribers(${e})`;this._debug(r,"begin",s,`broadcast = ${i}`);try{this.broadcastChannel&&i&&this.broadcastChannel.postMessage({event:e,session:s});const n=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,s)}catch(l){n.push(l)}});if(await Promise.all(a),n.length>0){for(let o=0;o<n.length;o+=1)console.error(n[o]);throw n[0]}}finally{this._debug(r,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0;const s=Object.assign({},e),i=s.user&&s.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!i&&s.user&&await le(this.userStorage,this.storageKey+"-user",{user:s.user});const r=Object.assign({},s);delete r.user;const n=Ls(r);await le(this.storage,this.storageKey,n)}else{const r=Ls(s);await le(this.storage,this.storageKey,r)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await H(this.storage,this.storageKey),await Mn(this.storage,this.storageKey),await H(this.storage,this.storageKey+"-user"),this.userStorage&&await H(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&j()&&(window!=null&&window.removeEventListener)&&window.removeEventListener("visibilitychange",e)}catch(s){console.error("removing visibilitychange callback failed",s)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),ae);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const s=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=s,s&&typeof s=="object"&&typeof s.unref=="function"?s.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(s)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const s=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,s&&clearTimeout(s)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async s=>{const{data:{session:i}}=s;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/ae);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${ae}ms, refresh threshold is ${Ue} ticks`),r<=Ue&&await this._callRefreshToken(i.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof sa)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async s=>{const{data:{session:i}}=s;if(!i||!i.refresh_token||!i.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const r=Math.floor((i.expires_at*1e3-e)/ae);this._debug("#_autoRefreshTokenTick()",`access token expires in ${r} ticks, a tick lasts ${ae}ms, refresh threshold is ${Ue} ticks`),r<=Ue&&await this._callRefreshToken(i.refresh_token)})}catch(s){console.error("Auto refresh tick failed with error. This is likely a transient error.",s)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!j()||!(window!=null&&window.addEventListener))return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window==null||window.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const s=`#_onVisibilityChanged(${e})`;if(this._debug(s,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(s,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(s,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,s,i){let r=i==null?void 0:i.redirectTo,n=null,a=null,o=null;this.flowType==="pkce"&&([n,a,o]=await this._getCodeChallengeAndMethod(),r=this._maybeAppendFlowIdToRedirect(r,o));const l=[`provider=${encodeURIComponent(s)}`];if(r&&l.push(`redirect_to=${encodeURIComponent(r)}`),i!=null&&i.scopes&&l.push(`scopes=${encodeURIComponent(i.scopes)}`),n!=null&&a!=null){const c=new URLSearchParams({code_challenge:`${encodeURIComponent(n)}`,code_challenge_method:`${encodeURIComponent(a)}`});l.push(c.toString())}if(i!=null&&i.queryParams){const c=new URLSearchParams(i.queryParams);l.push(c.toString())}return i!=null&&i.skipBrowserRedirect&&l.push(`skip_http_redirect=${i.skipBrowserRedirect}`),{url:`${e}?${l.join("&")}`,flowId:o}}_maybeAppendFlowIdToRedirect(e,s){return!e||!s||!this.experimental.appendPkceFlowIdToRedirects?e??void 0:qn(e,s)}async _getCodeChallengeAndMethod(e=!1){return Fn(this.storage,this.storageKey,e,s=>this._debug("#_getCodeChallengeAndMethod()","evicted oldest pending PKCE verifier slot",s))}async _unenroll(e){try{return await this._useSession(async s=>{var i;const{data:r,error:n}=s;return n?this._returnResult({data:null,error:n}):await E(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(i=r==null?void 0:r.session)===null||i===void 0?void 0:i.access_token})})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async _enroll(e){try{return await this._useSession(async s=>{var i,r;const{data:n,error:a}=s;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await E(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(i=n==null?void 0:n.session)===null||i===void 0?void 0:i.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((r=l==null?void 0:l.totp)===null||r===void 0)&&r.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async _verify(e){const s=async()=>{try{return await this._useSession(async i=>{var r;const{data:n,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?qs(e.webauthn.credential_response):Fs(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await E(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(i){if(_(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challenge(e){const s=async()=>{try{return await this._useSession(async i=>{var r;const{data:n,error:a}=i;if(a)return this._returnResult({data:null,error:a});const o=await E(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(r=n==null?void 0:n.session)===null||r===void 0?void 0:r.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:js(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:Ms(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(i){if(_(i))return this._returnResult({data:null,error:i});throw i}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,s):s()}async _challengeAndVerify(e){const{data:s,error:i}=await this._challenge({factorId:e.factorId});return i?this._returnResult({data:null,error:i}):await this._verify({factorId:e.factorId,challengeId:s.id,code:e.code})}async _listFactors(){var e;const{data:{user:s},error:i}=await this.getUser();if(i)return{data:null,error:i};const r={all:[],phone:[],totp:[],webauthn:[]};for(const n of(e=s==null?void 0:s.factors)!==null&&e!==void 0?e:[])r.all.push(n),n.status==="verified"&&r[n.factor_type].push(n);return{data:r,error:null}}async _getAuthenticatorAssuranceLevel(e){var s,i,r,n;if(e)try{const{payload:m}=gt(e);let p=null;m.aal&&(p=m.aal);let g=p;const{data:{user:b},error:v}=await this.getUser(e);if(v)return this._returnResult({data:null,error:v});((i=(s=b==null?void 0:b.factors)===null||s===void 0?void 0:s.filter(A=>A.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(g="aal2");const w=m.amr||[];return{data:{currentLevel:p,nextLevel:g,currentAuthenticationMethods:w},error:null}}catch(m){if(_(m))return this._returnResult({data:null,error:m});throw m}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=gt(a.access_token);let c=null;l.aal&&(c=l.aal);let d=c;((n=(r=a.user.factors)===null||r===void 0?void 0:r.filter(m=>m.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(d="aal2");const u=l.amr||[];return{data:{currentLevel:c,nextLevel:d,currentAuthenticationMethods:u},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;return r?this._returnResult({data:null,error:r}):i?await E(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:i.access_token,xform:n=>({data:n,error:null})}):this._returnResult({data:null,error:new U})})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async _approveAuthorization(e,s){try{return await this._useSession(async i=>{const{data:{session:r},error:n}=i;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new U});const a=await E(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&j()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(_(i))return this._returnResult({data:null,error:i});throw i}}async _denyAuthorization(e,s){try{return await this._useSession(async i=>{const{data:{session:r},error:n}=i;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new U});const a=await E(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:r.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&j()&&!(s!=null&&s.skipBrowserRedirect)&&window.location.assign(a.data.redirect_url),a})}catch(i){if(_(i))return this._returnResult({data:null,error:i});throw i}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:s},error:i}=e;return i?this._returnResult({data:null,error:i}):s?await E(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:s.access_token,xform:r=>({data:r,error:null})}):this._returnResult({data:null,error:new U})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;return r?this._returnResult({data:null,error:r}):i?(await E(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:i.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new U})})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async fetchJwk(e,s={keys:[]}){let i=s.keys.find(o=>o.kid===e);if(i)return i;const r=Date.now();if(i=this.jwks.keys.find(o=>o.kid===e),i&&this.jwks_cached_at+yn>r)return i;const{data:n,error:a}=await E(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!n.keys||n.keys.length===0||(this.jwks=n,this.jwks_cached_at=r,i=n.keys.find(o=>o.kid===e),!i)?null:i}async getClaims(e,s={}){try{let i=e;if(!i){const{data:m,error:p}=await this.getSession();if(p||!m.session)return this._returnResult({data:null,error:p});i=m.session.access_token}const{header:r,payload:n,signature:a,raw:{header:o,payload:l}}=gt(i);if(!(s!=null&&s.allowExpired))try{Vn(n.exp)}catch(m){throw new St(m instanceof Error?m.message:"JWT validation failed")}const c=!r.alg||r.alg.startsWith("HS")||!r.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(r.kid,s!=null&&s.keys?{keys:s.keys}:s==null?void 0:s.jwks);if(!c){const{error:m}=await this.getUser(i);if(m)throw m;return{data:{claims:n,header:r,signature:a},error:null}}const d=Wn(r.alg),h=await crypto.subtle.importKey("jwk",c,d,!0,["verify"]);if(!await crypto.subtle.verify(d,h,a,Rn(`${o}.${l}`)))throw new St("Invalid JWT signature");return{data:{claims:n,header:r,signature:a},error:null}}catch(i){if(_(i))return this._returnResult({data:null,error:i});throw i}}async signInWithPasskey(e){var s,i,r;Y(this.experimental);try{if(!At())return this._returnResult({data:null,error:new Q("Browser does not support WebAuthn",null)});const{data:n,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}});if(a||!n)return this._returnResult({data:null,error:a});const o=Ms(n.options),l=(r=(i=e==null?void 0:e.options)===null||i===void 0?void 0:i.signal)!==null&&r!==void 0?r:Xt.createNewAbortSignal(),{data:c,error:d}=await vi({publicKey:o,signal:l});if(d||!c)return this._returnResult({data:null,error:d??new Q("WebAuthn ceremony failed",null)});const h=Fs(c);return this._verifyPasskeyAuthentication({challengeId:n.challenge_id,credential:h})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async registerPasskey(e){var s,i;Y(this.experimental);try{if(!At())return this._returnResult({data:null,error:new Q("Browser does not support WebAuthn",null)});const{data:r,error:n}=await this._startPasskeyRegistration();if(n||!r)return this._returnResult({data:null,error:n});const a=js(r.options),o=(i=(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.signal)!==null&&i!==void 0?i:Xt.createNewAbortSignal(),{data:l,error:c}=await yi({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new Q("WebAuthn ceremony failed",null)});const d=qs(l);return this._verifyPasskeyRegistration({challengeId:r.challenge_id,credential:d})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyRegistration(){Y(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!s)return this._returnResult({data:null,error:new U});const{data:r,error:n}=await E(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:s.access_token,body:{}});return n?this._returnResult({data:null,error:n}):this._returnResult({data:r,error:null})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){Y(this.experimental);try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new U});const{data:n,error:a}=await E(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:i.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:n,error:null})})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async _startPasskeyAuthentication(e){var s;Y(this.experimental);try{const{data:i,error:r}=await E(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(s=e==null?void 0:e.options)===null||s===void 0?void 0:s.captchaToken}}});return r?this._returnResult({data:null,error:r}):this._returnResult({data:i,error:null})}catch(i){if(_(i))return this._returnResult({data:null,error:i});throw i}}async _verifyPasskeyAuthentication(e){Y(this.experimental);try{const{data:s,error:i}=await E(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:K});return i?this._returnResult({data:null,error:i}):(s.session&&(await this._saveSession(s.session),await this._notifyAllSubscribers("SIGNED_IN",s.session)),this._returnResult({data:s,error:null}))}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async _listPasskeys(){Y(this.experimental);try{return await this._useSession(async e=>{const{data:{session:s},error:i}=e;if(i)return this._returnResult({data:null,error:i});if(!s)return this._returnResult({data:null,error:new U});const{data:r,error:n}=await E(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:s.access_token,xform:a=>({data:a,error:null})});return n?this._returnResult({data:null,error:n}):this._returnResult({data:r,error:null})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){Y(this.experimental);try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new U});const{data:n,error:a}=await E(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:n,error:null})})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async _deletePasskey(e){Y(this.experimental);try{return await this._useSession(async s=>{const{data:{session:i},error:r}=s;if(r)return this._returnResult({data:null,error:r});if(!i)return this._returnResult({data:null,error:new U});const{error:n}=await E(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:i.access_token,noResolveJson:!0});return n?this._returnResult({data:null,error:n}):this._returnResult({data:null,error:null})})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}}Qe.nextInstanceID={};const ga=Qe,ba="2.112.0";let je="",Rt;if(typeof Deno<"u"){var jt;je="deno",Rt=(jt=Deno.version)===null||jt===void 0?void 0:jt.deno}else if(typeof document<"u")je="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")je="react-native";else{var Mt;je="node";const t=globalThis.process;Rt=t==null||(Mt=t.version)===null||Mt===void 0?void 0:Mt.replace(/^v/,"")}const wi=[`runtime=${je}`];Rt&&wi.push(`runtime-version=${Rt}`);const ya={"X-Client-Info":`supabase-js/${ba}; ${wi.join("; ")}`},va={headers:ya},wa={schema:"public"},_a={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Sa={},Ea={enabled:!1,respectSamplingDecision:!0};function ka(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[s,i,r,n]=e;if(s.length!==2||i.length!==32||r.length!==16||n.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(s)||!a.test(i)||!a.test(r)||!a.test(n)||i==="00000000000000000000000000000000"||r==="0000000000000000"?null:{version:s,traceId:i,parentId:r,traceFlags:n,isSampled:(parseInt(n,16)&1)===1}}function Aa(t,e){if(!t||!e||e.length===0)return!1;let s;if(t instanceof URL)s=t;else try{s=new URL(t)}catch{return!1}for(const i of e)try{if(typeof i=="string"){if(Ta(s.hostname,i))return!0}else if(i instanceof RegExp){if(i.test(s.hostname))return!0}else if(typeof i=="function"&&i(s))return!0}catch{continue}return!1}function Ta(t,e){if(e===t)return!0;if(e.startsWith("*.")){const s=e.slice(2);if(t.endsWith(s)&&(t===s||t.endsWith("."+s)))return!0}return!1}function Ra(t){const e=[];try{const s=new URL(t);e.push(s.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function Ze(t){"@babel/helpers - typeof";return Ze=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ze(t)}function Ia(t,e){if(Ze(t)!="object"||!t)return t;var s=t[Symbol.toPrimitive];if(s!==void 0){var i=s.call(t,e);if(Ze(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Ca(t){var e=Ia(t,"string");return Ze(e)=="symbol"?e:e+""}function Pa(t,e,s){return(e=Ca(e))in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}function zs(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),s.push.apply(s,i)}return s}function D(t){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?zs(Object(s),!0).forEach(function(i){Pa(t,i,s[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):zs(Object(s)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(s,i))})}return t}const $a=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Oa=()=>Headers,_i=t=>t.startsWith("sb_publishable_")||t.startsWith("sb_secret_"),xa="sb_temp_",Hs=new Set,La=t=>{var e,s;if(!t.startsWith("sb_")||_i(t)||t.startsWith(xa))return;const i=(e=(s=t.match(/^sb_[a-zA-Z0-9]+_/))===null||s===void 0?void 0:s[0])!==null&&e!==void 0?e:"unknown";Hs.has(i)||(Hs.add(i),console.warn("@supabase/supabase-js: Unrecognized Supabase API key format. The client will proceed and send this key as-is; if you see authentication errors you may need to upgrade @supabase/supabase-js to a version that recognizes this key type."))},Vs=(t,e,s,i,r,n)=>{const a=$a(i),o=Oa(),l=(r==null?void 0:r.enabled)===!0,c=(r==null?void 0:r.respectSamplingDecision)!==!1,d=l?Ra(e):null,h=!(n!=null&&n.omitApiKeyAsBearer&&_i(t));return async(u,m)=>{const p=await s();let g=new o(m==null?void 0:m.headers);if(g.has("apikey")||g.set("apikey",t),!g.has("Authorization")){const b=p??(h?t:null);b&&g.set("Authorization",`Bearer ${b}`)}if(d){const b=Da(u,d,c);b&&(b.traceparent&&!g.has("traceparent")&&g.set("traceparent",b.traceparent),b.tracestate&&!g.has("tracestate")&&g.set("tracestate",b.tracestate),b.baggage&&!g.has("baggage")&&g.set("baggage",b.baggage))}return a(u,D(D({},m),{},{headers:g}))}};let Ws=!1;function Da(t,e,s){const i=Oi();if(!i)return Ws||(Ws=!0,console.warn("@supabase/supabase-js: tracePropagation is enabled but the tracing runtime is not loaded, so trace headers will not be attached. Add `import '@supabase/supabase-js/tracing'` at your application entry point (requires the OpenTelemetry API package to be installed). The CDN/UMD build does not support trace propagation.")),null;if(!Aa(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const r=i();if(!r||!r.traceparent)return null;if(s){const n=ka(r.traceparent);if(n&&!n.isSampled)return null}return r}function Gs(t){return typeof t=="boolean"?{enabled:t}:t}function Ba(t){return t.endsWith("/")?t:t+"/"}function Na(t,e){var s,i,r,n,a,o;const{db:l,auth:c,realtime:d,global:h}=t,{db:u,auth:m,realtime:p,global:g}=e,b=Gs(t.tracePropagation),v=Gs(e.tracePropagation),S={db:D(D({},u),l),auth:D(D({},m),c),realtime:D(D({},p),d),storage:{},global:D(D(D({},g),h),{},{headers:D(D({},(s=g==null?void 0:g.headers)!==null&&s!==void 0?s:{}),(i=h==null?void 0:h.headers)!==null&&i!==void 0?i:{})}),tracePropagation:{enabled:(r=(n=b==null?void 0:b.enabled)!==null&&n!==void 0?n:v==null?void 0:v.enabled)!==null&&r!==void 0?r:!1,respectSamplingDecision:(a=(o=b==null?void 0:b.respectSamplingDecision)!==null&&o!==void 0?o:v==null?void 0:v.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return t.accessToken?S.accessToken=t.accessToken:delete S.accessToken,S}function Ua(t){const e=t==null?void 0:t.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(Ba(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var ja=class extends ga{constructor(t){super(t)}},Ma=class{constructor(t,e,s){var i,r;this.supabaseUrl=t,this.supabaseKey=e;const n=Ua(t);if(!e)throw new Error("supabaseKey is required.");La(e),this.realtimeUrl=new URL("realtime/v1",n),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",n),this.storageUrl=new URL("storage/v1",n),this.functionsUrl=new URL("functions/v1",n);const a=`sb-${n.hostname.split(".")[0]}-auth-token`,o={db:wa,realtime:Sa,auth:D(D({},_a),{},{storageKey:a}),global:va,tracePropagation:Ea},l=Na(s??{},o);if(this.settings=l,this.storageKey=(i=l.auth.storageKey)!==null&&i!==void 0?i:"",this.headers=(r=l.global.headers)!==null&&r!==void 0?r:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(d,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=Vs(e,t,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation),this.functionsFetch=Vs(e,t,this._getSessionToken.bind(this),l.global.fetch,l.tracePropagation,{omitApiKeyAsBearer:!0}),this.realtime=this._initRealtimeClient(D({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(d=>this.realtime.setAuth(d)).catch(d=>console.warn("Failed to set initial Realtime auth token:",d)),this.rest=new Vi(new URL("rest/v1",n).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit,retry:l.db.retry}),this.storage=new un(this.storageUrl.href,this.headers,this.fetch,s==null?void 0:s.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new Bi(this.functionsUrl.href,{headers:this.headers,customFetch:this.functionsFetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},s={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,s)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getSessionToken(){var t=this,e,s;if(t.accessToken)return await t.accessToken();const{data:i}=await t.auth.getSession();return(e=(s=i.session)===null||s===void 0?void 0:s.access_token)!==null&&e!==void 0?e:null}async _getAccessToken(){var t=this,e;return(e=await t._getSessionToken())!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:i,userStorage:r,storageKey:n,flowType:a,lock:o,debug:l,throwOnError:c,experimental:d,lockAcquireTimeout:h,skipAutoInitialize:u},m,p){const g={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new ja({url:this.authUrl.href,headers:D(D({},g),m),storageKey:n,autoRefreshToken:t,persistSession:e,detectSessionInUrl:s,storage:i,userStorage:r,flowType:a,lock:o,debug:l,throwOnError:c,experimental:d,fetch:p,lockAcquireTimeout:h,skipAutoInitialize:u,hasCustomAuthorizationHeader:Object.keys(this.headers).some(b=>b.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new Lr(this.realtimeUrl.href,D(D({},t),{},{params:D(D({},{apikey:this.supabaseKey}),t==null?void 0:t.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e==null?void 0:e.access_token)})}_handleTokenChanged(t,e,s){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN"||t==="INITIAL_SESSION")&&this.changedAccessToken!==s?(this.changedAccessToken=s,this.realtime.setAuth(s)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const Si=(t,e,s)=>new Ma(t,e,s);function qa(){if(typeof window<"u"||globalThis.Deno!==void 0)return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const s=e.match(/^v(\d+)\./);return s?parseInt(s[1],10)<=20:!1}qa()&&console.warn("⚠️  Node.js 20 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 22 or later. For more information, visit: https://github.com/orgs/supabase/discussions/45715");const Oe={};let et=localStorage.getItem("sb_supabase_url")||(Oe==null?void 0:Oe.VITE_SUPABASE_URL)||"",tt=localStorage.getItem("sb_supabase_key")||(Oe==null?void 0:Oe.VITE_SUPABASE_ANON_KEY)||"",k=null;if(et&&tt)try{k=Si(et,tt)}catch(t){console.warn("Supabase initialization failed:",t)}function O(){return!!k}function Ei(){return{url:et,key:tt}}function It(t,e){const s=t.trim(),i=e.trim();return s&&i?(localStorage.setItem("sb_supabase_url",s),localStorage.setItem("sb_supabase_key",i),et=s,tt=i,k=Si(s,i),!0):(localStorage.removeItem("sb_supabase_url"),localStorage.removeItem("sb_supabase_key"),et="",tt="",k=null,!1)}async function ki(t,e,s,i="customer"){if(!k)return{error:"Supabase client not configured"};const{data:r,error:n}=await k.auth.signUp({email:t,password:e,options:{data:{name:s,role:i}}});if(n)return{error:n.message};const a=r.user;return a&&await k.from("profiles").upsert({id:a.id,name:s,email:t,role:i}),{data:a}}async function Fa(){var t,e;if(!k)return null;try{const{data:{user:s},error:i}=await k.auth.getUser();if(i||!s)return null;const{data:r}=await k.from("profiles").select("*").eq("id",s.id).single(),n=s.email.toLowerCase()==="syamratnam123@gmail.com"||s.email.includes("admin"),a=(r==null?void 0:r.role)||((t=s.user_metadata)==null?void 0:t.role)||(n?"admin":"customer"),o=(r==null?void 0:r.name)||((e=s.user_metadata)==null?void 0:e.name)||(n?"Syam Ratnam (Admin Manager)":s.email.split("@")[0]);return{id:s.id,email:s.email,name:o,role:a}}catch(s){return console.warn("Error getting Supabase current user:",s),null}}async function za(t,e,s="user"){var c,d,h;if(!k)return{error:"Supabase client not configured"};const i=t.trim().toLowerCase(),r=i==="syamratnam123@gmail.com"||i.includes("admin")||s==="admin",n="Syam Ratnam (Admin Manager)";let{data:a,error:o}=await k.auth.signInWithPassword({email:i,password:e});if(o){const u=r?n:i.split("@")[0],m=await ki(i,e,u,r?"admin":"customer");if(m.data){const p=await k.auth.signInWithPassword({email:i,password:e});(c=p.data)!=null&&c.user?(a=p.data,o=null):m.data&&(a={user:m.data},o=null)}}if(o&&i==="syamratnam123@gmail.com"&&e==="Syam@1234"){try{await k.from("profiles").upsert({name:n,email:i,role:"admin",updated_at:new Date().toISOString()},{onConflict:"email"})}catch(u){console.warn("Profile upsert notice:",u)}return{user:{id:"admin-syam",email:i,name:n,role:"admin"}}}if(o)return{error:o.message};const l=a.user;if(l){const{data:u}=await k.from("profiles").select("*").eq("id",l.id).single(),m=r?"admin":(u==null?void 0:u.role)||((d=l.user_metadata)==null?void 0:d.role)||"customer",p=(u==null?void 0:u.name)||((h=l.user_metadata)==null?void 0:h.name)||(r?n:i.split("@")[0]);return await k.from("profiles").upsert({id:l.id,name:p,email:l.email,role:m,updated_at:new Date().toISOString()}),{user:{id:l.id,email:l.email,name:p,role:m}}}return{error:"Sign in failed"}}async function Ha(t={}){if(!k)return{error:"Supabase client not configured"};try{const{data:{user:e}}=await k.auth.getUser(),s=t.email||"syamratnam123@gmail.com",i=t.name||"Syam Ratnam (Admin Manager)",r=t.phone||"+91 98480 12345",a={name:i,email:s,phone:r,role:"admin",updated_at:new Date().toISOString()};e&&(a.id=e.id);const{data:o,error:l}=await k.from("profiles").upsert(a).select();return l?(console.error("Error updating admin manager profile in Supabase:",l),{error:l.message}):{success:!0,data:o[0]}}catch(e){return{error:e.message}}}async function Va(){k&&await k.auth.signOut()}async function Wa(t){if(!k)return{error:"Supabase client not configured"};const{data:e,error:s}=await k.auth.resetPasswordForEmail(t,{redirectTo:window.location.origin});return s?s.message.toLowerCase().includes("rate limit")||s.message.toLowerCase().includes("limit exceeded")?{error:"Supabase email rate limit exceeded. Too many reset emails sent recently from Supabase. You can log in directly using your password (e.g. Syam@1234 for syamratnam123@gmail.com) or wait a few minutes before trying again."}:{error:s.message}:{success:!0,message:"Password reset link sent to "+t}}async function Ga(t){if(!k)return{error:"Supabase client not configured"};const e=t.startsWith("+")?t:`+91${t.replace(/\D/g,"")}`,{data:s,error:i}=await k.auth.signInWithOtp({phone:e});return i?{error:i.message}:{success:!0,phone:e}}async function Ka(t,e,s="user"){if(!k)return{error:"Supabase client not configured"};const i=t.startsWith("+")?t:`+91${t.replace(/\D/g,"")}`,{data:r,error:n}=await k.auth.verifyOtp({phone:i,token:e,type:"sms"});if(n)return{error:n.message};const a=r.user;if(a){const o=s==="admin"?"admin":"customer",l=`User (${i.slice(-4)})`;return await k.from("profiles").upsert({id:a.id,phone:i,name:l,role:o,updated_at:new Date().toISOString()}),{user:{id:a.id,phone:i,name:l,role:o}}}return{error:"Phone verification failed"}}async function Ja(){if(!k)return null;const{data:t,error:e}=await k.from("dishes").select("*").order("created_at",{ascending:!1});return e?(console.error("Error fetching dishes from Supabase:",e),null):t.map(s=>({...s,prepTime:s.prep_time,inStock:s.in_stock}))}async function vt(t){if(!k)return null;const e={id:t.id,name:t.name,category:t.category,price:t.price,description:t.description,prep_time:t.prepTime||t.prep_time||"15 min",calories:t.calories||"500 kcal",image:t.image,rating:t.rating||4.8,reviews:t.reviews||1,tags:t.tags||[],in_stock:t.inStock??t.in_stock??!0},{data:s,error:i}=await k.from("dishes").upsert(e).select();return i?(console.error("Error saving dish to Supabase:",i),{error:i.message}):{data:s[0]}}async function Ya(t){if(!k)return null;const{error:e}=await k.from("dishes").delete().eq("id",t);return e?{error:e.message}:{success:!0}}async function Xa(){if(!k)return null;const{data:t,error:e}=await k.from("locations").select("*").order("created_at",{ascending:!0});return e?(console.error("Error fetching locations from Supabase:",e),null):t.map(s=>({...s,deliveryRadius:s.delivery_radius,avgDeliveryTime:s.avg_delivery_time}))}async function Qt(t){if(!k)return null;const e={id:t.id,name:t.name,address:t.address,phone:t.phone,hours:t.hours||"10:30 AM - 11:00 PM",delivery_radius:t.deliveryRadius||t.delivery_radius||"7 km",avg_delivery_time:t.avgDeliveryTime||t.avg_delivery_time||"20-30 min",rating:t.rating||4.9,features:t.features||[]},{data:s,error:i}=await k.from("locations").upsert(e).select();return i?{error:i.message}:{data:s[0]}}async function Qa(t){if(!k)return null;const{error:e}=await k.from("locations").delete().eq("id",t);return e?{error:e.message}:{success:!0}}async function Za(){if(!k)return null;const{data:t,error:e}=await k.from("orders").select("*").order("date",{ascending:!1});return e?null:t.map(s=>({...s,customerName:s.customer_name,deliveryAddress:s.delivery_address,grandTotal:s.grand_total}))}async function Ai(t){if(!k)return null;const e={id:t.id,customer_name:t.customerName||"Syam",phone:t.phone||"+91 9876543210",delivery_address:t.deliveryAddress||"GT Road, Nellore",items:t.items,subtotal:t.subtotal||200,tax:t.tax||16,grand_total:t.grandTotal||250,status:t.status||"placed",date:t.date||new Date().toISOString()},{data:s,error:i}=await k.from("orders").insert(e).select();return i?{error:i.message}:{data:s[0]}}async function eo(t,e){if(!k)return null;const{error:s}=await k.from("orders").update({status:e}).eq("id",t);return s?{error:s.message}:{success:!0}}async function to(){if(!k)return null;const{data:t,error:e}=await k.from("reservations").select("*").order("created_at",{ascending:!1});return e?(console.error("Error fetching reservations from Supabase:",e),null):t.map(s=>({...s,customerName:s.customer_name,locationId:s.location_id,locationName:s.location_name,specialRequests:s.special_requests,createdAt:s.created_at}))}async function Ti(t){if(!k)return null;const e={id:t.id,customer_name:t.customerName,phone:t.phone,email:t.email||null,location_id:t.locationId||null,location_name:t.locationName,date:t.date,time:t.time,guests:t.guests,special_requests:t.specialRequests||"",status:t.status||"confirmed"},{data:s,error:i}=await k.from("reservations").insert(e).select();return i?(console.error("Error creating reservation in Supabase:",i),{error:i.message}):{data:s[0]}}async function so(t,e){if(!k)return null;const{error:s}=await k.from("reservations").update({status:e}).eq("id",t);return s?{error:s.message}:{success:!0}}async function io(t){if(!k)return null;const{error:e}=await k.from("reservations").delete().eq("id",t);return e?{error:e.message}:{success:!0}}async function ro(t=[],e=[],s=[],i=[]){if(!k)return{error:"Supabase client not configured"};let r=0,n=0,a=0,o=0;for(const l of t){const c=await vt(l);c!=null&&c.error||r++}for(const l of e){const c=await Qt(l);c!=null&&c.error||n++}for(const l of s){const c=await Ai(l);c!=null&&c.error||a++}for(const l of i){const c=await Ti(l);c!=null&&c.error||o++}return{success:!0,seededDishes:r,seededLocations:n,seededOrders:a,seededReservations:o}}async function no(t="syamratnam123@gmail.com",e="Syam@1234"){if(!k)return{error:"Supabase client not configured"};const s=t.trim().toLowerCase(),i="Syam Ratnam (Admin Manager)",r="admin",{data:n,error:a}=await k.auth.signUp({email:s,password:e,options:{data:{name:i,role:r}}}),{data:o,error:l}=await k.auth.signInWithPassword({email:s,password:e}),c=(o==null?void 0:o.user)||(n==null?void 0:n.user);if(c){const{error:d}=await k.from("profiles").upsert({id:c.id,name:i,email:s,role:r,updated_at:new Date().toISOString()});return d&&console.warn("Profile upsert notice:",d.message),{success:!0,message:`Admin Manager (${s}) registered & synced in Supabase Auth & DB!`,user:{id:c.id,email:s,name:i,role:r}}}return{error:(l==null?void 0:l.message)||(a==null?void 0:a.message)||"Failed to sync Admin Manager in Supabase"}}class ao{constructor(){this.listeners=[],this.init()}init(){this.activeView="landing",this.theme=localStorage.getItem("sb_theme")||"dark";const e=localStorage.getItem("sb_user");this.currentUser=e?JSON.parse(e):null;const s=localStorage.getItem("sb_wishlist");this.wishlist=s?JSON.parse(s):[];const i=localStorage.getItem("sb_cart");this.cart=i?JSON.parse(i):[];const r=localStorage.getItem("sb_dishes");this.dishes=r?JSON.parse(r):Ci;const n=localStorage.getItem("sb_profile");this.profile=n?JSON.parse(n):Pi,(!this.profile.name||this.profile.name==="Alex Vance"||this.profile.name==="Syam")&&(this.profile.name="syam",this.profile.email="syam@gmail.com",this.saveProfile());const a=localStorage.getItem("sb_orders");this.orders=a?JSON.parse(a):[];const o=localStorage.getItem("sb_reservations");this.reservations=o?JSON.parse(o):[];const l=localStorage.getItem("sb_locations");this.locations=l?JSON.parse(l):ds,this.selectedLocation=this.locations[0]||ds[0],this.appliedCoupon={code:"WELCOME20",discountPercent:20},this.searchQuery="",this.selectedCategory="all",this.dietaryFilter="all",this.sortBy="popular",this.syncWithSupabase()}async syncWithSupabase(){if(O())try{const e=await Fa();e&&(this.currentUser=e,localStorage.setItem("sb_user",JSON.stringify(this.currentUser)),this.notify("AUTH_CHANGED",this.currentUser));const s=await Ja();s&&s.length>0&&(this.dishes=s,this.saveDishes(),this.notify("STOCK_UPDATED",this.dishes));const i=await Xa();i&&i.length>0&&(this.locations=i,this.selectedLocation=this.locations[0],this.saveLocations(),this.notify("LOCATIONS_UPDATED",this.locations));const r=await Za();r&&r.length>0&&(this.orders=r,localStorage.setItem("sb_orders",JSON.stringify(this.orders)),this.notify("ORDER_STATUS_UPDATED",this.orders));const n=await to();n&&n.length>0&&(this.reservations=n,this.saveReservations(),this.notify("RESERVATIONS_UPDATED",this.reservations))}catch(e){console.warn("Supabase sync error:",e)}}subscribe(e){return this.listeners.push(e),()=>{this.listeners=this.listeners.filter(s=>s!==e)}}notify(e,s){this.listeners.forEach(i=>i(e,s))}async login(e,s,i="user"){const r=e.trim().toLowerCase(),n=s.trim(),a=i==="admin"||r.includes("admin")||r==="syamratnam123@gmail.com",o=a?"admin":"user";if(!r||!n)return{success:!1,error:"Please enter both email and password"};if(O()){const l=await za(r,n,o);if(l.error)return console.warn("Supabase authentication failed:",l.error),{success:!1,error:l.error};if(l.user)return this.currentUser=l.user,localStorage.setItem("sb_user",JSON.stringify(this.currentUser)),this.notify("AUTH_CHANGED",this.currentUser),{success:!0,user:this.currentUser}}if(r==="syamratnam123@gmail.com"){if(n!=="Syam@1234")return{success:!1,error:"Invalid password for Admin Manager account syamratnam123@gmail.com. Password must be Syam@1234"}}else if(n.length<4)return{success:!1,error:"Password must be at least 4 characters long"};return this.currentUser={id:`usr-${Date.now()}`,name:a?"Syam Ratnam (Admin Manager)":r.split("@")[0]||"User",email:r,role:o},localStorage.setItem("sb_user",JSON.stringify(this.currentUser)),this.notify("AUTH_CHANGED",this.currentUser),{success:!0,user:this.currentUser}}async updateAdminManagerDetails(e={}){const s=e.name||"Syam Ratnam (Admin Manager)",i=e.email||"syamratnam123@gmail.com",r=e.phone||"+91 98480 12345";this.currentUser&&(this.currentUser.name=s,this.currentUser.email=i,this.currentUser.phone=r,this.currentUser.role="admin",localStorage.setItem("sb_user",JSON.stringify(this.currentUser)));let n=null;return O()&&(n=await Ha({name:s,email:i,phone:r})),this.notify("AUTH_CHANGED",this.currentUser),{success:!0,user:this.currentUser,supabaseResult:n}}async createOrSyncAdminManagerInSupabase(e="syamratnam123@gmail.com",s="Syam@1234"){if(!O())return{error:"Supabase DB is not connected. Please connect Supabase URL and key first."};const i=await no(e,s);return i.success&&i.user&&(this.currentUser=i.user,localStorage.setItem("sb_user",JSON.stringify(this.currentUser)),this.notify("AUTH_CHANGED",this.currentUser)),i}async logout(){O()&&await Va(),this.currentUser=null,localStorage.removeItem("sb_user"),this.notify("AUTH_CHANGED",null)}async register(e,s,i){const r=s.trim().toLowerCase(),n=e.trim();if(O()){const a=await ki(r,i,n,"customer");if(a.error)console.warn("Supabase registration error:",a.error);else if(a.data)return this.currentUser={id:a.data.id,name:n,email:r,role:"user"},this.profile.name=n,this.profile.email=r,this.saveProfile(),localStorage.setItem("sb_user",JSON.stringify(this.currentUser)),this.notify("AUTH_CHANGED",this.currentUser),{success:!0,user:this.currentUser}}return this.currentUser={id:`usr-${Date.now()}`,name:n,email:r,role:"user"},this.profile.name=n,this.profile.email=r,this.saveProfile(),localStorage.setItem("sb_user",JSON.stringify(this.currentUser)),this.notify("AUTH_CHANGED",this.currentUser),{success:!0,user:this.currentUser}}async requestPasswordReset(e){const s=e.trim().toLowerCase();if(O()){const i=await Wa(s);return i.error?{success:!1,error:i.error}:{success:!0,message:`Password reset instructions sent to ${s}`}}return{success:!0,message:`Demo password reset link generated for ${s}! Please check your email inbox.`}}async sendPhoneOTP(e){const s=e.trim();if(!s||s.length<10)return{success:!1,error:"Please enter a valid 10-digit mobile phone number"};if(O()){const i=await Ga(s);return i.error?{success:!1,error:i.error}:{success:!0,phone:i.phone,message:`Real SMS OTP code sent directly to ${i.phone}`}}return{success:!1,error:'Supabase DB is not connected. Click "Connect Supabase DB" at the top of the Login page to enter your Supabase URL & Key to send real SMS OTPs to your mobile.'}}async verifyPhoneOTP(e,s,i="user"){const r=e.trim(),n=s.trim();if(!n||n.length!==6)return{success:!1,error:"Please enter the 6-digit SMS verification code"};if(O()){const a=await Ka(r,n,i);if(a.error)return{success:!1,error:a.error};if(a.user)return this.currentUser=a.user,localStorage.setItem("sb_user",JSON.stringify(this.currentUser)),this.notify("AUTH_CHANGED",this.currentUser),{success:!0,user:this.currentUser}}return{success:!1,error:'Supabase DB is not connected. Click "Connect Supabase DB" at the top of the Login page to connect your database for real SMS verification.'}}isAdmin(){return!!(this.currentUser&&this.currentUser.role==="admin")}isLoggedIn(){return!!this.currentUser}setTheme(e){this.theme=e,localStorage.setItem("sb_theme",e),document.documentElement.setAttribute("data-theme",e),this.notify("THEME_CHANGED",e)}setView(e,s="user"){this.activeView=e,e==="login"&&(this.loginTab=s),window.scrollTo({top:0,behavior:"smooth"}),this.notify("VIEW_CHANGED",e)}toggleWishlist(e){this.wishlist.includes(e)?this.wishlist=this.wishlist.filter(s=>s!==e):this.wishlist.push(e),localStorage.setItem("sb_wishlist",JSON.stringify(this.wishlist)),this.notify("WISHLIST_UPDATED",this.wishlist)}isWishlisted(e){return this.wishlist.includes(e)}addToCart(e,s=1,i=""){const r=this.dishes.find(a=>a.id===e);if(!r)return;const n=this.cart.findIndex(a=>a.dishId===e&&a.options===i);n>-1?this.cart[n].qty+=s:this.cart.push({dishId:e,qty:s,options:i,price:r.price}),this.saveCart(),this.notify("CART_UPDATED",this.cart)}updateCartQty(e,s){s<=0?this.cart.splice(e,1):this.cart[e].qty=s,this.saveCart(),this.notify("CART_UPDATED",this.cart)}clearCart(){this.cart=[],this.saveCart(),this.notify("CART_UPDATED",this.cart)}saveCart(){localStorage.setItem("sb_cart",JSON.stringify(this.cart))}getCartTotal(){const e=this.cart.reduce((a,o)=>a+o.price*o.qty,0),s=this.appliedCoupon?e*(this.appliedCoupon.discountPercent/100):0,i=(e-s)*.08,r=e>0?3.5:0,n=Math.max(0,e-s+i+r);return{subtotal:e,discountAmount:s,tax:i,deliveryFee:r,grandTotal:n}}applyCoupon(e){const s=e.trim().toUpperCase();return s==="WELCOME20"?(this.appliedCoupon={code:"WELCOME20",discountPercent:20},this.notify("COUPON_APPLIED",this.appliedCoupon),{success:!0,message:"20% Discount Coupon Applied!"}):s==="SAVORY10"?(this.appliedCoupon={code:"SAVORY10",discountPercent:10},this.notify("COUPON_APPLIED",this.appliedCoupon),{success:!0,message:"10% Discount Coupon Applied!"}):{success:!1,message:"Invalid promo code. Try WELCOME20"}}async placeOrder(e){const s={id:`ORD-${Math.floor(1e3+Math.random()*9e3)}`,date:new Date().toISOString(),status:"placed",items:this.cart.map(i=>{const r=this.dishes.find(n=>n.id===i.dishId);return{dishId:i.dishId,name:r?r.name:"Gourmet Dish",qty:i.qty,price:i.price,opts:i.options}}),...e};return this.orders.unshift(s),localStorage.setItem("sb_orders",JSON.stringify(this.orders)),O()&&await Ai(s),this.clearCart(),this.notify("ORDER_PLACED",s),this.setView("orders"),s}async updateOrderStatus(e,s){const i=this.orders.find(r=>r.id===e);i&&(i.status=s,localStorage.setItem("sb_orders",JSON.stringify(this.orders)),O()&&await eo(e,s),this.notify("ORDER_STATUS_UPDATED",i))}async toggleDishStock(e){if(!this.isAdmin())return{success:!1,message:"Admin permissions required!"};const s=this.dishes.find(i=>i.id===e);return s?(s.inStock=!s.inStock,this.saveDishes(),O()&&await vt(s),this.notify("STOCK_UPDATED",s),{success:!0,dish:s}):{success:!1,message:"Dish not found"}}async addDish(e){if(!this.isAdmin())return{success:!1,message:"Admin permissions required!"};const s={id:`dish-${Date.now()}`,rating:4.8,reviews:1,inStock:!0,tags:[],...e};return this.dishes.unshift(s),this.saveDishes(),O()&&await vt(s),this.notify("STOCK_UPDATED",s),{success:!0,dish:s}}async updateDish(e,s){if(!this.isAdmin())return{success:!1,message:"Admin permissions required!"};const i=this.dishes.findIndex(r=>r.id===e);return i>-1?(this.dishes[i]={...this.dishes[i],...s},this.saveDishes(),O()&&await vt(this.dishes[i]),this.notify("STOCK_UPDATED",this.dishes[i]),{success:!0,dish:this.dishes[i]}):{success:!1,message:"Dish not found"}}async deleteDish(e){return this.isAdmin()?(this.dishes=this.dishes.filter(s=>s.id!==e),this.saveDishes(),O()&&await Ya(e),this.notify("STOCK_UPDATED",e),{success:!0}):{success:!1,message:"Admin permissions required!"}}saveDishes(){localStorage.setItem("sb_dishes",JSON.stringify(this.dishes))}async addLocation(e){if(!this.isAdmin())return{success:!1,message:"Admin permissions required!"};const s={id:`loc-${Date.now()}`,rating:4.8,mapLat:14.4426,mapLng:79.9865,features:[],...e};return this.locations.push(s),this.saveLocations(),O()&&await Qt(s),this.notify("LOCATIONS_UPDATED",s),{success:!0,location:s}}async updateLocation(e,s){if(!this.isAdmin())return{success:!1,message:"Admin permissions required!"};const i=this.locations.findIndex(r=>r.id===e);return i>-1?(this.locations[i]={...this.locations[i],...s},this.selectedLocation.id===e&&(this.selectedLocation=this.locations[i]),this.saveLocations(),O()&&await Qt(this.locations[i]),this.notify("LOCATIONS_UPDATED",this.locations[i]),{success:!0,location:this.locations[i]}):{success:!1,message:"Branch location not found"}}async deleteLocation(e){return this.isAdmin()?this.locations.length<=1?{success:!1,message:"Cannot delete the only branch location!"}:(this.locations=this.locations.filter(s=>s.id!==e),this.selectedLocation.id===e&&(this.selectedLocation=this.locations[0]),this.saveLocations(),O()&&await Qa(e),this.notify("LOCATIONS_UPDATED",e),{success:!0}):{success:!1,message:"Admin permissions required!"}}saveLocations(){localStorage.setItem("sb_locations",JSON.stringify(this.locations))}updateProfile(e){this.profile={...this.profile,...e},this.saveProfile(),this.notify("PROFILE_UPDATED",this.profile)}addAddress(e){this.profile.addresses||(this.profile.addresses=[]);const s={id:`addr-${Date.now()}`,...e};e.isDefault&&this.profile.addresses.forEach(i=>i.isDefault=!1),this.profile.addresses.push(s),this.saveProfile(),this.notify("PROFILE_UPDATED",this.profile)}updateAddress(e,s){if(!this.profile.addresses)return;const i=this.profile.addresses.findIndex(r=>r.id===e);i>-1&&(s.isDefault&&this.profile.addresses.forEach(r=>r.isDefault=!1),this.profile.addresses[i]={...this.profile.addresses[i],...s},this.saveProfile(),this.notify("PROFILE_UPDATED",this.profile))}deleteAddress(e){this.profile.addresses&&(this.profile.addresses=this.profile.addresses.filter(s=>s.id!==e),this.profile.addresses.length>0&&!this.profile.addresses.some(s=>s.isDefault)&&(this.profile.addresses[0].isDefault=!0),this.saveProfile(),this.notify("PROFILE_UPDATED",this.profile))}setDefaultAddress(e){this.profile.addresses&&(this.profile.addresses.forEach(s=>{s.isDefault=s.id===e}),this.saveProfile(),this.notify("PROFILE_UPDATED",this.profile))}addPaymentMethod(e){this.profile.paymentMethods||(this.profile.paymentMethods=[]);const s={id:`pay-${Date.now()}`,isPrimary:this.profile.paymentMethods.length===0,...e};e.isPrimary&&this.profile.paymentMethods.forEach(i=>i.isPrimary=!1),this.profile.paymentMethods.push(s),this.saveProfile(),this.notify("PROFILE_UPDATED",this.profile)}deletePaymentMethod(e){this.profile.paymentMethods&&(this.profile.paymentMethods=this.profile.paymentMethods.filter(s=>s.id!==e),this.profile.paymentMethods.length>0&&!this.profile.paymentMethods.some(s=>s.isPrimary)&&(this.profile.paymentMethods[0].isPrimary=!0),this.saveProfile(),this.notify("PROFILE_UPDATED",this.profile))}setDefaultPayment(e){this.profile.paymentMethods&&(this.profile.paymentMethods.forEach(s=>{s.isPrimary=s.id===e}),this.saveProfile(),this.notify("PROFILE_UPDATED",this.profile))}redeemRewardPoints(e){if(this.profile.rewardPoints>=e){this.profile.rewardPoints-=e;const s=(e/10).toFixed(2);return this.saveProfile(),this.notify("PROFILE_UPDATED",this.profile),{success:!0,discountCash:s}}return{success:!1,message:"Insufficient Reward Points!"}}saveProfile(){localStorage.setItem("sb_profile",JSON.stringify(this.profile))}async addReservation(e){var i,r,n,a;const s={id:`RES-${Math.floor(1e3+Math.random()*9e3)}`,customerName:e.customerName||((i=this.currentUser)==null?void 0:i.name)||"Guest",phone:e.phone||"+91 98480 12345",email:e.email||((r=this.currentUser)==null?void 0:r.email)||"",locationId:e.locationId||((n=this.selectedLocation)==null?void 0:n.id)||"loc-1",locationName:e.locationName||((a=this.selectedLocation)==null?void 0:a.name)||"GT Road Central",date:e.date||new Date().toISOString().split("T")[0],time:e.time||"19:00",guests:e.guests||"2 Guests",specialRequests:e.specialRequests||e.notes||"",status:"confirmed",createdAt:new Date().toISOString()};return this.reservations.unshift(s),this.saveReservations(),O()&&await Ti(s),this.notify("RESERVATIONS_UPDATED",s),this.setView("orders"),{success:!0,reservation:s}}async updateReservationStatus(e,s){const i=this.reservations.find(r=>r.id===e);return i?(i.status=s,this.saveReservations(),O()&&await so(e,s),this.notify("RESERVATIONS_UPDATED",i),{success:!0,reservation:i}):{success:!1,message:"Reservation not found"}}async deleteReservation(e){return this.reservations=this.reservations.filter(s=>s.id!==e),this.saveReservations(),O()&&await io(e),this.notify("RESERVATIONS_UPDATED",e),{success:!0}}saveReservations(){localStorage.setItem("sb_reservations",JSON.stringify(this.reservations))}}const f=new ao;function y(t,e="success",s=3e3){const i=document.getElementById("toast-container");if(!i)return;const r=document.createElement("div");r.className=`toast toast-${e}`;const n=e==="success"?"fa-solid fa-circle-check":e==="info"?"fa-solid fa-circle-info":"fa-solid fa-triangle-exclamation";r.innerHTML=`
    <i class="${n}"></i>
    <span class="toast-message">${t}</span>
  `,i.appendChild(r),setTimeout(()=>{r.style.opacity="0",r.style.transform="translateY(20px)",setTimeout(()=>{r.parentNode&&r.parentNode.removeChild(r)},300)},s)}function W({title:t,bodyHTML:e,footerHTML:s=""}){const i=document.getElementById("modal-container");if(!i)return;i.innerHTML=`
    <div class="modal-card">
      <div class="modal-header">
        <h3 class="modal-title">${t}</h3>
        <button class="modal-close" id="global-modal-close-btn" aria-label="Close Modal">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div class="modal-body">
        ${e}
      </div>
      ${s?`<div class="modal-footer">${s}</div>`:""}
    </div>
  `,i.classList.remove("hidden");const r=document.getElementById("global-modal-close-btn");r&&r.addEventListener("click",C),i.onclick=n=>{n.target===i&&C()}}function C(){const t=document.getElementById("modal-container");t&&(t.classList.add("hidden"),t.innerHTML="")}function we(t=null){var n,a,o;if(!f.isAdmin()){y("Admin permission required to manage items. Please log in as Admin.","info"),f.setView("login");return}const e=!!t,s=e?`Edit Menu Item: ${t.name}`:"Add New Menu Item",i=`
    <form id="admin-dish-form">
      <div class="form-group">
        <label class="form-label">Dish Name *</label>
        <input type="text" id="dish-name" class="form-input" required value="${e?t.name:""}" placeholder="e.g. Nellore Special Royyala Biryani">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Category *</label>
          <select id="dish-category" class="form-select">
            ${ts.filter(l=>l.id!=="all"&&l.id!=="specials").map(l=>`
              <option value="${l.id}" ${e&&t.category===l.id?"selected":""}>${l.name}</option>
            `).join("")}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Price (₹) *</label>
          <input type="number" step="0.01" id="dish-price" class="form-input" required value="${e?t.price:"250.00"}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Description *</label>
        <textarea id="dish-desc" class="form-input" rows="3" required placeholder="Describe the flavors, ingredients, and preparation...">${e?t.description:""}</textarea>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Preparation Time</label>
          <input type="text" id="dish-prep" class="form-input" value="${e?t.prepTime:"15-20 min"}">
        </div>

        <div class="form-group">
          <label class="form-label">Calories</label>
          <input type="text" id="dish-calories" class="form-input" value="${e?t.calories:"650 kcal"}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Image URL / Asset Path</label>
        <input type="text" id="dish-image" class="form-input" value="${e?t.image:"./assets/woodfired-pizza.png"}" placeholder="e.g. ./assets/woodfired-pizza.png or image URL">
      </div>

      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap; margin-top: 0.5rem; background: var(--bg-input); padding: 0.75rem; border-radius: var(--radius-md);">
        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-tag-special" ${e&&((n=t.tags)!=null&&n.includes("chefSpecial"))?"checked":""}> Chef's Special
        </label>

        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-tag-veg" ${e&&((a=t.tags)!=null&&a.includes("veg"))?"checked":""}> Vegetarian
        </label>

        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-tag-gf" ${e&&((o=t.tags)!=null&&o.includes("gf"))?"checked":""}> Gluten-Free
        </label>

        <label style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.88rem; cursor: pointer;">
          <input type="checkbox" id="dish-instock" ${!e||t.inStock?"checked":""}> In Stock
        </label>
      </div>
    </form>
  `;if(W({title:s,bodyHTML:i,footerHTML:`
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${e?`
        <button class="btn btn-outline" id="modal-delete-dish-btn" style="color: #ef4444; border-color: #ef4444;">
          <i class="fa-solid fa-trash"></i> Delete Dish
        </button>
      `:"<div></div>"}
      
      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-dish">Cancel</button>
        <button class="btn btn-primary" id="modal-save-dish">${e?"Save Changes":"Create Dish"}</button>
      </div>
    </div>
  `}),document.getElementById("modal-cancel-dish").onclick=C,e){const l=document.getElementById("modal-delete-dish-btn");l&&(l.onclick=()=>{confirm(`Are you sure you want to delete "${t.name}"?`)&&(f.deleteDish(t.id),C(),y(`Deleted ${t.name}`,"info"))})}document.getElementById("modal-save-dish").onclick=()=>{const l=document.getElementById("dish-name").value.trim(),c=document.getElementById("dish-category").value,d=parseFloat(document.getElementById("dish-price").value)||0,h=document.getElementById("dish-desc").value.trim(),u=document.getElementById("dish-prep").value.trim(),m=document.getElementById("dish-calories").value.trim(),p=document.getElementById("dish-image").value.trim(),g=[];document.getElementById("dish-tag-special").checked&&g.push("chefSpecial"),document.getElementById("dish-tag-veg").checked&&g.push("veg"),document.getElementById("dish-tag-gf").checked&&g.push("gf");const b=document.getElementById("dish-instock").checked;if(!l||!h||d<=0){y("Please fill in dish name, price and description","info");return}const v={name:l,category:c,price:d,description:h,prepTime:u,calories:m,image:p||"./assets/woodfired-pizza.png",tags:g,inStock:b};e?(f.updateDish(t.id,v),y(`Updated dish: ${l}`,"success")):(f.addDish(v),y(`Added new dish: ${l}`,"success")),C()}}function me(t=null){if(!f.isAdmin()){y("Admin permission required to manage locations. Please log in as Admin.","info"),f.setView("login");return}const e=!!t,s=e?`Edit Branch: ${t.name}`:"Add New Restaurant Branch",i=`
    <form id="admin-loc-form">
      <div class="form-group">
        <label class="form-label">Branch Name *</label>
        <input type="text" id="loc-name" class="form-input" required value="${e?t.name:""}" placeholder="e.g. Trunk Road Plaza, Nellore">
      </div>

      <div class="form-group">
        <label class="form-label">Full Address *</label>
        <input type="text" id="loc-address" class="form-input" required value="${e?t.address:""}" placeholder="e.g. Trunk Road, Near VRC Centre, Nellore, Andhra Pradesh 524001">
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="text" id="loc-phone" class="form-input" required value="${e?t.phone:"+91 861 234 5678"}">
        </div>

        <div class="form-group">
          <label class="form-label">Opening Hours</label>
          <input type="text" id="loc-hours" class="form-input" value="${e?t.hours:"Daily: 10:30 AM - 11:00 PM"}">
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Delivery Radius</label>
          <input type="text" id="loc-radius" class="form-input" value="${e?t.deliveryRadius:"7 km"}">
        </div>

        <div class="form-group">
          <label class="form-label">Avg Delivery Time</label>
          <input type="text" id="loc-time" class="form-input" value="${e?t.avgDeliveryTime:"20-30 min"}">
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Features / Amenities (comma separated)</label>
        <input type="text" id="loc-features" class="form-input" value="${e?t.features.join(", "):"AC Dining, Valet Parking, Family Section"}" placeholder="e.g. AC Dining, Rooftop, Parking">
      </div>
    </form>
  `;if(W({title:s,bodyHTML:i,footerHTML:`
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${e?`
        <button class="btn btn-outline" id="modal-delete-loc-btn" style="color: #ef4444; border-color: #ef4444;">
          <i class="fa-solid fa-trash"></i> Delete Branch
        </button>
      `:"<div></div>"}

      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-loc">Cancel</button>
        <button class="btn btn-primary" id="modal-save-loc">${e?"Save Branch":"Add Branch"}</button>
      </div>
    </div>
  `}),document.getElementById("modal-cancel-loc").onclick=C,e){const n=document.getElementById("modal-delete-loc-btn");n&&(n.onclick=()=>{if(confirm(`Are you sure you want to delete branch "${t.name}"?`)){const a=f.deleteLocation(t.id);a.success?(C(),y(`Deleted branch ${t.name}`,"info")):y(a.message,"info")}})}document.getElementById("modal-save-loc").onclick=()=>{const n=document.getElementById("loc-name").value.trim(),a=document.getElementById("loc-address").value.trim(),o=document.getElementById("loc-phone").value.trim(),l=document.getElementById("loc-hours").value.trim(),c=document.getElementById("loc-radius").value.trim(),d=document.getElementById("loc-time").value.trim(),h=document.getElementById("loc-features").value.trim(),u=h?h.split(",").map(p=>p.trim()).filter(Boolean):[];if(!n||!a||!o){y("Please fill in branch name, address and phone","info");return}const m={name:n,address:a,phone:o,hours:l,deliveryRadius:c,avgDeliveryTime:d,features:u};e?(f.updateLocation(t.id,m),y(`Updated branch: ${n}`,"success")):(f.addLocation(m),y(`Added branch: ${n}`,"success")),C()}}function Zt(t=null){if(!f.isAdmin()){y("Admin permission required. Please log in as Admin.","info"),f.setView("login");return}const e=!!t,s=e?`Manage Reservation: ${t.id}`:"Create New Table Reservation",i=`
    <form id="admin-reservation-form">
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Customer Name *</label>
          <input type="text" id="admin-res-name" class="form-input" required value="${e?t.customerName:""}" placeholder="Customer full name">
        </div>
        <div class="form-group">
          <label class="form-label">Phone Number *</label>
          <input type="tel" id="admin-res-phone" class="form-input" required value="${e?t.phone:""}" placeholder="+91 Mobile number">
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Restaurant Branch *</label>
          <select id="admin-res-branch" class="form-select">
            ${f.locations.map(n=>`
              <option value="${n.id}" ${e&&t.locationId===n.id?"selected":""}>${n.name}</option>
            `).join("")}
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Status *</label>
          <select id="admin-res-status" class="form-select">
            <option value="pending" ${e&&t.status==="pending"?"selected":""}>Pending</option>
            <option value="confirmed" ${!e||e&&t.status==="confirmed"?"selected":""}>Confirmed</option>
            <option value="completed" ${e&&t.status==="completed"?"selected":""}>Completed</option>
            <option value="cancelled" ${e&&t.status==="cancelled"?"selected":""}>Cancelled</option>
          </select>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
        <div class="form-group">
          <label class="form-label">Date *</label>
          <input type="date" id="admin-res-date" class="form-input" required value="${e?t.date:new Date().toISOString().split("T")[0]}">
        </div>

        <div class="form-group">
          <label class="form-label">Time *</label>
          <select id="admin-res-time" class="form-select">
            <option value="18:00" ${e&&t.time==="18:00"?"selected":""}>6:00 PM</option>
            <option value="19:00" ${!e||e&&t.time==="19:00"?"selected":""}>7:00 PM</option>
            <option value="20:00" ${e&&t.time==="20:00"?"selected":""}>8:00 PM</option>
            <option value="21:00" ${e&&t.time==="21:00"?"selected":""}>9:00 PM</option>
          </select>
        </div>

        <div class="form-group">
          <label class="form-label">Guests *</label>
          <select id="admin-res-guests" class="form-select">
            <option value="2 Guests" ${e&&t.guests==="2 Guests"?"selected":""}>2 Guests</option>
            <option value="4 Guests" ${!e||e&&t.guests==="4 Guests"?"selected":""}>4 Guests</option>
            <option value="6 Guests" ${e&&t.guests==="6 Guests"?"selected":""}>6 Guests</option>
            <option value="8+ Guests" ${e&&t.guests==="8+ Guests"?"selected":""}>8+ Guests</option>
          </select>
        </div>
      </div>

      <div class="form-group">
        <label class="form-label">Special Requests (Optional)</label>
        <input type="text" id="admin-res-notes" class="form-input" value="${e&&t.specialRequests||""}" placeholder="Window table, birthday, allergy notes...">
      </div>
    </form>
  `;if(W({title:s,bodyHTML:i,footerHTML:`
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${e?`
        <button class="btn btn-outline" id="modal-delete-res-btn" style="color: #ef4444; border-color: #ef4444;">
          <i class="fa-solid fa-trash"></i> Cancel Reservation
        </button>
      `:"<div></div>"}

      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-res">Close</button>
        <button class="btn btn-primary" id="modal-save-res">${e?"Update Reservation":"Create Reservation"}</button>
      </div>
    </div>
  `}),document.getElementById("modal-cancel-res").onclick=C,e){const n=document.getElementById("modal-delete-res-btn");n&&(n.onclick=async()=>{confirm(`Cancel reservation for ${t.customerName}?`)&&(await f.deleteReservation(t.id),C(),y(`Cancelled reservation ${t.id}`,"info"))})}document.getElementById("modal-save-res").onclick=async()=>{const n=document.getElementById("admin-res-name").value.trim(),a=document.getElementById("admin-res-phone").value.trim(),o=document.getElementById("admin-res-branch").value,l=f.locations.find(p=>p.id===o)||f.locations[0],c=document.getElementById("admin-res-status").value,d=document.getElementById("admin-res-date").value,h=document.getElementById("admin-res-time").value,u=document.getElementById("admin-res-guests").value,m=document.getElementById("admin-res-notes").value.trim();if(!n||!a){y("Please enter customer name and phone number","info");return}e?(t.customerName=n,t.phone=a,t.locationId=l.id,t.locationName=l.name,t.date=d,t.time=h,t.guests=u,t.specialRequests=m,await f.updateReservationStatus(t.id,c),y(`Updated reservation for ${n}`,"success")):(await f.addReservation({customerName:n,phone:a,locationId:l.id,locationName:l.name,date:d,time:h,guests:u,specialRequests:m,status:c}),y(`Created table reservation for ${n}`,"success")),C()}}function ge(){const t=document.getElementById("main-header");if(!t)return;const e=f.cart.reduce((m,p)=>m+p.qty,0),s=f.wishlist.length,i=f.activeView,r=f.currentUser,n=f.isAdmin();t.innerHTML=`
    <div class="nav-container">
      <a href="#" class="brand-logo" id="nav-brand-btn">
        <div class="brand-icon-wrapper">
          <i class="fa-solid fa-utensils"></i>
        </div>
        <span>SAVORY BITES <span class="brand-accent">BISTRO</span></span>
      </a>

      <nav class="nav-links" id="main-nav-links">
        <button class="nav-link ${i==="landing"?"active":""}" data-nav="landing">
          <i class="fa-solid fa-house"></i> Home
        </button>
        <button class="nav-link ${i==="menu"?"active":""}" data-nav="menu">
          <i class="fa-solid fa-book-open"></i> Menu
        </button>
        <button class="nav-link ${i==="location"?"active":""}" data-nav="location">
          <i class="fa-solid fa-location-dot"></i> Locations
        </button>
        ${f.isLoggedIn()?`
          <button class="nav-link ${i==="wishlist"?"active":""}" data-nav="wishlist">
            <i class="fa-solid fa-heart"></i> Wishlist
            ${s>0?`<span class="badge-counter">${s}</span>`:""}
          </button>
          <button class="nav-link ${i==="orders"?"active":""}" data-nav="orders">
            <i class="fa-solid fa-clock-rotate-left"></i> Track Orders
          </button>
        `:""}
        <button class="nav-link nav-admin-link ${i==="admin"?"active":""}" data-nav="admin" title="Admin Portal">
          <i class="fa-solid fa-user-shield"></i> ${n?"Admin Page":"Admin Portal"}
        </button>
      </nav>

      <div class="nav-actions">
        <button class="btn-icon" id="theme-toggle-btn" title="Toggle Theme">
          <i class="fa-solid ${f.theme==="dark"?"fa-sun":"fa-moon"}"></i>
        </button>

        <button class="btn btn-primary" id="open-cart-btn">
          <i class="fa-solid fa-basket-shopping"></i>
          <span class="nav-cart-text">Cart</span>
          ${e>0?`<span class="badge-counter">${e}</span>`:""}
        </button>

        <!-- User Authentication & Profile Pill -->
        ${r?`
          <button class="nav-user-pill ${i==="login"?"active":""}" id="nav-user-btn">
            <span class="user-role-badge ${r.role}">${r.role.toUpperCase()}</span>
            <span class="nav-user-name">${r.name}</span>
          </button>
        `:`
          <button class="btn btn-secondary btn-sm ${i==="login"?"active":""}" id="nav-login-btn">
            <i class="fa-solid fa-right-to-bracket"></i> Login
          </button>
        `}

        <button class="btn-icon mobile-menu-toggle-btn" id="mobile-menu-toggle-btn" title="Toggle Mobile Navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>
    </div>
  `;const a=document.getElementById("main-nav-links");document.querySelectorAll("[data-nav]").forEach(m=>{m.onclick=p=>{p.preventDefault(),a&&a.classList.remove("nav-links-mobile-open");const g=m.getAttribute("data-nav");(g==="wishlist"||g==="orders")&&!f.isLoggedIn()?(y(`Please log in to access your ${g==="wishlist"?"Wishlist":"Order Tracking"}.`,"info"),f.setView("login")):g==="admin"&&!f.isAdmin()?(y("Admin permission required. Please log in as Admin.","info"),f.setView("login","admin")):f.setView(g)}});const o=document.getElementById("mobile-menu-toggle-btn");o&&a&&(o.onclick=()=>{a.classList.toggle("nav-links-mobile-open")});const l=document.getElementById("nav-brand-btn");l&&(l.onclick=m=>{m.preventDefault(),a&&a.classList.remove("nav-links-mobile-open"),f.setView("landing")});const c=document.getElementById("theme-toggle-btn");c&&(c.onclick=()=>{f.setTheme(f.theme==="dark"?"light":"dark")});const d=document.getElementById("open-cart-btn");d&&(d.onclick=()=>{const m=document.getElementById("cart-drawer");m&&m.classList.remove("hidden")});const h=document.getElementById("nav-user-btn");h&&(h.onclick=()=>f.setView("login"));const u=document.getElementById("nav-login-btn");u&&(u.onclick=()=>f.setView("login"))}function st(t){if(!t)return;const e=f.dishes.filter(c=>c.tags&&c.tags.includes("chefSpecial")).slice(0,3),s=e.length>0?e:f.dishes.slice(0,3),i=f.locations.slice(0,3),r=c=>f.isWishlisted(c);t.innerHTML=`
    <!-- Landing Hero Section -->
    <section class="landing-hero">
      <div class="landing-hero-overlay"></div>
      <div class="landing-hero-content">
        <span class="landing-badge">
          <i class="fa-solid fa-sparkles"></i> Welcoming Gourmet Lovers
        </span>
        <h1 class="landing-title">
          Artisanal Culinary Magic <br> Delivered <span class="landing-highlight">Hot & Fresh</span>
        </h1>
        <p class="landing-subtitle">
          Experience handcrafted dishes prepared by world-class chefs, local organic ingredients, 
          and lightning-fast delivery to your doorstep.
        </p>

        <div class="landing-cta-group">
          <button class="btn btn-primary btn-lg" id="landing-menu-btn">
            <i class="fa-solid fa-utensils"></i> Explore Full Menu
          </button>
          <button class="btn btn-secondary btn-lg" id="landing-locations-btn">
            <i class="fa-solid fa-location-dot"></i> Book a Table
          </button>
        </div>

        <div class="landing-stats-row">
          <div class="stat-item">
            <span class="stat-number">4.9 ★</span>
            <span class="stat-label">10,000+ Reviews</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">20 Min</span>
            <span class="stat-label">Avg. Express Delivery</span>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <span class="stat-number">100%</span>
            <span class="stat-label">Farm Fresh Organic</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Value Propositions / Highlights -->
    <section class="landing-features-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fa-solid fa-award"></i> WHY CHOOSE SAVORY BITES</span>
          <h2 class="section-title">Crafted With Passion & Excellence</h2>
          <p class="section-subtitle">We believe food is an art form. Here is why thousands choose us daily.</p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-leaf"></i>
            </div>
            <h3>Farm-to-Table Fresh</h3>
            <p>Sourced daily from local organic farms. Zero preservatives, maximum flavor, and authentic taste.</p>
          </div>

          <div class="feature-card highlight-card">
            <div class="feature-icon">
              <i class="fa-solid fa-fire-burner"></i>
            </div>
            <h3>Master Chef Artisans</h3>
            <p>Every dish is crafted under the guidance of award-winning culinary masters using traditional wood-fire techniques.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-truck-fast"></i>
            </div>
            <h3>Insulated Express Delivery</h3>
            <p>Hot food stays piping hot. Our thermal-locked eco-friendly containers guarantee oven-fresh arrival.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Signature Dishes -->
    <section class="landing-dishes-section">
      <div class="container">
        <div class="landing-section-top">
          <div>
            <span class="section-tag"><i class="fa-solid fa-star"></i> CHEF'S SPECIAL SELECTIONS</span>
            <h2 class="section-title">Signature Delicacies</h2>
          </div>
          <button class="btn btn-outline" id="landing-view-all-dishes-btn">
            View All Dishes <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>

        <div class="menu-grid" id="landing-dishes-grid">
          ${s.map(c=>`
            <div class="dish-card" data-dish-id="${c.id}">
              <div class="dish-media">
                <img src="${c.image}" alt="${c.name}" class="dish-img" loading="lazy">
                
                <button class="dish-wishlist-btn ${r(c.id)?"active":""}" 
                        data-wishlist-id="${c.id}" 
                        title="${r(c.id)?"Remove from Wishlist":"Add to Wishlist"}">
                  <i class="${r(c.id)?"fa-solid fa-heart":"fa-regular fa-heart"}"></i>
                </button>

                ${c.tags.includes("chefSpecial")?`
                  <span class="badge badge-gold dish-tag-badge"><i class="fa-solid fa-crown"></i> Chef Special</span>
                `:c.tags.includes("veg")?`
                  <span class="badge badge-green dish-tag-badge"><i class="fa-solid fa-leaf"></i> Vegetarian</span>
                `:""}
              </div>

              <div class="dish-content">
                <div class="dish-header-row">
                  <h3 class="dish-title">${c.name}</h3>
                  <span class="dish-price">₹${c.price.toFixed(2)}</span>
                </div>

                <p class="dish-desc">${c.description}</p>

                <div class="dish-meta">
                  <span><i class="fa-solid fa-star" style="color: var(--accent-gold);"></i> ${c.rating} (${c.reviews})</span>
                  <span><i class="fa-solid fa-clock"></i> ${c.prepTime}</span>
                  <span><i class="fa-solid fa-fire" style="color: var(--primary);"></i> ${c.calories}</span>
                </div>

                <div class="dish-card-actions">
                  <button class="btn btn-primary btn-sm btn-full add-cart-btn" data-add-id="${c.id}">
                    <i class="fa-solid fa-plus"></i> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Branch Locations Highlights -->
    <section class="landing-branches-section">
      <div class="container">
        <div class="section-header text-center">
          <span class="section-tag"><i class="fa-solid fa-building-circle-check"></i> OUR RESTAURANT LOCATIONS</span>
          <h2 class="section-title">Visit Our Nearest Bistro Branch</h2>
          <p class="section-subtitle">Dine-in with luxurious ambiance or order delivery from your closest location.</p>
        </div>

        <div class="landing-branches-grid">
          ${i.map(c=>`
            <div class="landing-branch-card">
              <div class="branch-card-header">
                <i class="fa-solid fa-store branch-icon"></i>
                <div>
                  <h3 class="branch-title">${c.name}</h3>
                  <span class="branch-status"><span class="pulse-dot"></span> Open Now</span>
                </div>
              </div>
              <p class="branch-address"><i class="fa-solid fa-location-dot"></i> ${c.address}</p>
              <div class="branch-info-row">
                <span><i class="fa-solid fa-phone"></i> ${c.phone}</span>
                <span><i class="fa-solid fa-motorcycle"></i> ${c.avgDeliveryTime||"20-30 min"}</span>
              </div>
              <div class="branch-footer">
                <button class="btn btn-primary btn-sm btn-full branch-select-btn" data-loc-id="${c.id}">
                  Select as My Branch
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Special Promo CTA Banner -->
    <section class="landing-promo-banner">
      <div class="container">
        <div class="promo-box">
          <div class="promo-content">
            <span class="badge badge-flash"><i class="fa-solid fa-tag"></i> EXCLUSIVE DISCOUNT</span>
            <h2>Get 20% OFF Your First Gourmet Order!</h2>
            <p>Apply promo code <strong>WELCOME20</strong> at checkout and enjoy artisanal dining delivered fast.</p>
            <div class="promo-buttons">
              <button class="btn btn-light btn-lg" id="promo-order-now-btn">
                <i class="fa-solid fa-cart-shopping"></i> Order Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;const n=document.getElementById("landing-menu-btn");n&&(n.onclick=()=>f.setView("menu"));const a=document.getElementById("landing-view-all-dishes-btn");a&&(a.onclick=()=>f.setView("menu"));const o=document.getElementById("landing-locations-btn");o&&(o.onclick=()=>f.setView("location"));const l=document.getElementById("promo-order-now-btn");l&&(l.onclick=()=>f.setView("menu")),document.querySelectorAll(".add-cart-btn").forEach(c=>{c.onclick=()=>{const d=c.getAttribute("data-add-id");f.addToCart(d,1),y("Added to Cart!","success")}}),document.querySelectorAll(".dish-wishlist-btn").forEach(c=>{c.onclick=()=>{if(!f.isLoggedIn()){y("Please log in to save items to your Wishlist.","info"),f.setView("login");return}const d=c.getAttribute("data-wishlist-id");f.toggleWishlist(d),st(t)}}),document.querySelectorAll(".branch-select-btn").forEach(c=>{c.onclick=()=>{const d=c.getAttribute("data-loc-id"),h=f.locations.find(u=>u.id===d);h&&(f.selectedLocation=h,y(`Delivering from ${h.name}`,"success"),f.setView("menu"))}})}function ze(t){if(!t)return;const e=f.currentUser,s=O();let i=f.loginTab||"user",r="",n=30,a=null;t.innerHTML=`
    <div class="auth-view-container">
      <div class="auth-card">
        <!-- Auth Card Header -->
        <div class="auth-header">
          <div class="auth-brand-logo">
            <i class="fa-solid fa-utensils"></i>
          </div>
          <h2>Savory Bites Portal</h2>
          <p id="auth-subtitle">Log in to manage orders, wishlist, and account preferences</p>
          <div style="margin-top: 0.75rem;">
            <button type="button" class="btn btn-outline btn-sm" id="auth-supabase-config-btn" style="border-color: ${s?"#10b981":"var(--accent-gold)"}; color: ${s?"#10b981":"var(--accent-gold)"}; font-size: 0.8rem; border-radius: var(--radius-full);">
              <i class="fa-solid ${s?"fa-database":"fa-bolt"}"></i> ${s?"Live Supabase Connected":"Connect Supabase DB"}
            </button>
          </div>
        </div>

        ${e?`
          <!-- Logged In Status Banner -->
          <div class="auth-logged-in-box">
            <div class="user-avatar-large">
              <i class="fa-solid ${e.role==="admin"?"fa-user-shield":"fa-user"}"></i>
            </div>
            <div class="logged-user-details">
              <h3>Currently Logged In As:</h3>
              <p class="user-name">${e.name} <span class="role-pill role-${e.role}">${e.role.toUpperCase()}</span></p>
              <p class="user-email">${e.email||e.phone||"Authenticated User"}</p>
            </div>
            <div class="logged-in-actions">
              ${e.role==="admin"?`
                <button class="btn btn-primary btn-full" id="auth-goto-admin-btn">
                  <i class="fa-solid fa-gauge-high"></i> Go to Admin Dashboard
                </button>
              `:`
                <button class="btn btn-primary btn-full" id="auth-goto-menu-btn">
                  <i class="fa-solid fa-utensils"></i> Browse Gourmet Menu
                </button>
                <button class="btn btn-secondary btn-full" id="auth-goto-wishlist-btn">
                  <i class="fa-solid fa-heart" style="color: var(--accent-red);"></i> My Saved Wishlist (${f.wishlist.length})
                </button>
                <button class="btn btn-secondary btn-full" id="auth-goto-orders-btn">
                  <i class="fa-solid fa-clock-rotate-left" style="color: var(--primary);"></i> Track Active Orders
                </button>
                <button class="btn btn-outline btn-full" id="auth-goto-account-btn">
                  <i class="fa-solid fa-user-gear"></i> Account Profile & Reservations
                </button>
              `}
              <button class="btn btn-outline btn-full" id="auth-logout-btn" style="border-color: var(--danger); color: var(--danger);">
                <i class="fa-solid fa-right-from-bracket"></i> Switch Account / Logout
              </button>
            </div>
          </div>
        `:`
          <!-- Auth Tabs Header -->
          <div class="auth-tabs" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.25rem;">
            <button class="auth-tab ${i==="user"?"active":""}" id="tab-user-btn" data-tab="user">
              <i class="fa-solid fa-user"></i> Email Login
            </button>
            <button class="auth-tab ${i==="phone"?"active":""}" id="tab-phone-btn" data-tab="phone">
              <i class="fa-solid fa-mobile-screen-button"></i> Mobile OTP
            </button>
            <button class="auth-tab ${i==="admin"?"active":""}" id="tab-admin-btn" data-tab="admin">
              <i class="fa-solid fa-user-shield"></i> Admin
            </button>
            <button class="auth-tab ${i==="register"?"active":""}" id="tab-register-btn" data-tab="register">
              <i class="fa-solid fa-user-plus"></i> Register
            </button>
          </div>

          <!-- Email / Register / Admin Form -->
          <form id="auth-form" class="auth-form-body">
            <div class="form-group" id="group-name" style="display: none;">
              <label class="form-label"><i class="fa-solid fa-signature"></i> Full Name *</label>
              <input type="text" id="auth-name" class="form-input" placeholder="Enter your full name" value="">
            </div>

            <div class="form-group" id="group-email">
              <label class="form-label"><i class="fa-solid fa-envelope"></i> Email Address *</label>
              <input type="email" id="auth-email" class="form-input" placeholder="name@example.com" value="">
            </div>

            <div class="form-group" id="group-password">
              <label class="form-label" style="display: flex; justify-content: space-between; align-items: center;">
                <span><i class="fa-solid fa-lock"></i> Password *</span>
                <a href="#" class="forgot-pass-link" id="forgot-password-link"><i class="fa-solid fa-key"></i> Forgot Password?</a>
              </label>
              <div style="position: relative;">
                <input type="password" id="auth-password" class="form-input" placeholder="••••••••" value="" style="padding-right: 2.5rem;">
                <button type="button" id="toggle-password-visibility" style="position: absolute; right: 0.75rem; top: 50%; transform: translateY(-50%); background: none; border: none; color: var(--text-muted); cursor: pointer;" title="Toggle Password Visibility">
                  <i class="fa-solid fa-eye" id="password-eye-icon"></i>
                </button>
              </div>
            </div>

            <div class="auth-submit-area" id="group-submit">
              <button type="submit" class="btn btn-primary btn-full btn-lg" id="auth-submit-btn">
                <i class="fa-solid fa-right-to-bracket"></i> <span id="auth-btn-text">Sign In</span>
              </button>
            </div>
          </form>

          <!-- Mobile OTP Verification Container -->
          <div id="phone-auth-container" style="display: none;" class="auth-form-body">
            <div id="phone-step-1">
              <div class="form-group">
                <label class="form-label"><i class="fa-solid fa-mobile-retro"></i> Mobile Phone Number *</label>
                <div style="display: flex; gap: 0.5rem;">
                  <span style="padding: 0.75rem 0.85rem; background: var(--bg-input); border: 1px solid var(--border-color); border-radius: var(--radius-md); font-weight: 700; color: var(--primary);">+91</span>
                  <input type="tel" id="auth-phone-input" class="form-input" placeholder="Enter 10-digit mobile number" maxlength="10" value="">
                </div>
                <small style="color: var(--text-muted); font-size: 0.78rem; margin-top: 0.3rem; display: block;">
                  A 6-digit SMS verification code will be sent to your mobile.
                </small>
              </div>
              <button type="button" class="btn btn-primary btn-full btn-lg" id="send-otp-btn">
                <i class="fa-solid fa-paper-plane"></i> Send OTP Verification Code
              </button>
            </div>

            <div id="phone-step-2" style="display: none; text-align: center;">
              <div style="background: var(--primary-light); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-active); margin-bottom: 1.25rem;">
                <span style="font-size: 0.85rem; color: var(--text-sub);">Verification code sent to <strong id="sent-phone-display" style="color: var(--primary);">+91 ...</strong></span>
              </div>

              <label class="form-label"><i class="fa-solid fa-shield-halved"></i> Enter 6-Digit OTP Code</label>
              
              <div class="otp-digit-group">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-1" data-index="1">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-2" data-index="2">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-3" data-index="3">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-4" data-index="4">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-5" data-index="5">
                <input type="text" maxlength="1" class="otp-digit-input" id="otp-6" data-index="6">
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; margin: 1rem 0;">
                <span class="resend-timer-badge" id="resend-timer-badge">
                  <i class="fa-solid fa-clock"></i> Resend code in <strong id="timer-sec">30</strong>s
                </span>
                <button type="button" class="btn btn-outline btn-sm" id="resend-otp-btn" disabled style="opacity: 0.5;">
                  <i class="fa-solid fa-rotate-right"></i> Resend OTP
                </button>
              </div>

              <button type="button" class="btn btn-primary btn-full btn-lg" id="verify-otp-btn">
                <i class="fa-solid fa-circle-check"></i> Verify & Sign In
              </button>
              
              <button type="button" class="btn btn-link btn-sm" id="change-phone-btn" style="margin-top: 0.75rem; color: var(--text-muted); background: none; border: none; cursor: pointer;">
                <i class="fa-solid fa-pen"></i> Change Phone Number
              </button>
            </div>
          </div>
        `}
      </div>
    </div>
  `;const o=document.getElementById("auth-supabase-config-btn");o&&(o.onclick=()=>lo(t));const l=document.getElementById("auth-goto-admin-btn");l&&(l.onclick=()=>f.setView("admin"));const c=document.getElementById("auth-goto-menu-btn");c&&(c.onclick=()=>f.setView("menu"));const d=document.getElementById("auth-goto-wishlist-btn");d&&(d.onclick=()=>f.setView("wishlist"));const h=document.getElementById("auth-goto-orders-btn");h&&(h.onclick=()=>f.setView("orders"));const u=document.getElementById("auth-goto-account-btn");u&&(u.onclick=()=>f.setView("account"));const m=document.getElementById("auth-logout-btn");m&&(m.onclick=()=>{f.logout(),y("Logged out successfully","info"),ze(t)});const p=document.getElementById("toggle-password-visibility");p&&(p.onclick=()=>{const P=document.getElementById("auth-password"),R=document.getElementById("password-eye-icon");P&&(P.type==="password"?(P.type="text",R&&(R.className="fa-solid fa-eye-slash")):(P.type="password",R&&(R.className="fa-solid fa-eye")))});const g=document.getElementById("forgot-password-link");g&&(g.onclick=P=>{P.preventDefault(),oo()});const b=document.getElementById("tab-user-btn"),v=document.getElementById("tab-phone-btn"),S=document.getElementById("tab-admin-btn"),w=document.getElementById("tab-register-btn"),A=document.getElementById("auth-form"),x=document.getElementById("phone-auth-container"),I=document.getElementById("group-name"),$=document.getElementById("group-email"),G=document.getElementById("group-password"),F=document.getElementById("auth-email"),rt=document.getElementById("auth-password"),_e=document.getElementById("auth-btn-text"),de=document.getElementById("auth-subtitle");function De(P){i=P,f.loginTab=P,[b,v,S,w].forEach(R=>R&&R.classList.remove("active")),F&&(F.value=""),rt&&(rt.value=""),P==="user"?(b&&b.classList.add("active"),A&&(A.style.display="flex"),x&&(x.style.display="none"),I&&(I.style.display="none"),$&&($.style.display="block"),G&&(G.style.display="block"),_e&&(_e.textContent="Sign In as Customer"),de&&(de.textContent="Enter your email and password to access your account")):P==="phone"?(v&&v.classList.add("active"),A&&(A.style.display="none"),x&&(x.style.display="flex"),de&&(de.textContent="Authenticate securely via SMS 6-digit OTP verification code")):P==="admin"?(S&&S.classList.add("active"),A&&(A.style.display="flex"),x&&(x.style.display="none"),I&&(I.style.display="none"),$&&($.style.display="block"),G&&(G.style.display="block"),_e&&(_e.textContent="Sign In to Admin Portal"),de&&(de.textContent="Enter Administrator credentials for Bistro item & branch control")):P==="register"&&(w&&w.classList.add("active"),A&&(A.style.display="flex"),x&&(x.style.display="none"),I&&(I.style.display="block"),$&&($.style.display="block"),G&&(G.style.display="block"),_e&&(_e.textContent="Create Customer Account"),de&&(de.textContent="Join Savory Bites Bistro for rewards, express checkout & tracking"))}De(i),b&&(b.onclick=()=>De("user")),v&&(v.onclick=()=>De("phone")),S&&(S.onclick=()=>De("admin")),w&&(w.onclick=()=>De("register")),A&&(A.onsubmit=async P=>{P.preventDefault();const R=F?F.value.trim():"",q=rt?rt.value.trim():"";if(!R||!q){y("Please enter email and password","info");return}if(i==="register"){const N=document.getElementById("auth-name"),se=N?N.value.trim():"";if(!se){y("Please enter your full name","info");return}await f.register(se,R,q);const lt=O()?" (Saved to Supabase DB)":"";y(`Welcome ${se}! Account registered${lt}.`,"success"),f.setView("menu")}else{const N=await f.login(R,q,i);if(N&&N.error)y(`Login failed: ${N.error}`,"info");else if(N&&N.user){const se=O()?" (Auth saved to Supabase DB)":"";y(`Logged in as ${N.user.name} (${N.user.role.toUpperCase()})${se}`,"success"),N.user.role==="admin"?f.setView("admin"):f.setView("menu")}}});const ns=document.getElementById("send-otp-btn"),as=document.getElementById("verify-otp-btn"),ue=document.getElementById("resend-otp-btn"),os=document.getElementById("change-phone-btn"),nt=document.getElementById("auth-phone-input"),at=document.getElementById("phone-step-1"),ot=document.getElementById("phone-step-2"),ls=document.getElementById("sent-phone-display");ns&&(ns.onclick=async()=>{const P=nt?nt.value.trim():"";if(!P||P.length<10){y("Please enter a valid 10-digit mobile number","info");return}const R=await f.sendPhoneOTP(P);if(R.error){y(`Failed to send OTP: ${R.error}`,"info");return}r=R.phone||`+91 ${P}`,ls&&(ls.textContent=r),y(R.message||`Verification OTP sent to ${r}`,"success"),at&&ot&&(at.style.display="none",ot.style.display="block",Ii(),cs())}),ue&&(ue.onclick=async()=>{const P=nt?nt.value.trim():"",R=await f.sendPhoneOTP(P);if(R.error){y(`Failed to resend OTP: ${R.error}`,"info");return}y(R.message||`Resent new OTP code to ${r}`,"success"),cs()}),os&&(os.onclick=()=>{at&&ot&&(at.style.display="block",ot.style.display="none",a&&clearInterval(a))}),as&&(as.onclick=async()=>{let P="";for(let q=1;q<=6;q++){const N=document.getElementById(`otp-${q}`);N&&(P+=N.value)}if(P.length!==6){y("Please enter the full 6-digit verification code","info");return}const R=await f.verifyPhoneOTP(r,P,"user");if(R&&R.error)y(`Verification failed: ${R.error}`,"info");else if(R&&R.user){const q=O()?" (Auth verified via Supabase)":"";y(`Mobile Verification Successful! Welcome ${R.user.name}${q}`,"success"),f.setView("menu")}});function Ii(){for(let R=1;R<=6;R++){const q=document.getElementById(`otp-${R}`);q&&(q.value="",q.oninput=N=>{if(N.target.value&&R<6){const lt=document.getElementById(`otp-${R+1}`);lt&&lt.focus()}},q.onkeydown=N=>{if(N.key==="Backspace"&&!q.value&&R>1){const se=document.getElementById(`otp-${R-1}`);se&&se.focus()}})}const P=document.getElementById("otp-1");P&&P.focus()}function cs(){a&&clearInterval(a),n=30;const P=document.getElementById("resend-timer-badge"),R=document.getElementById("timer-sec");ue&&(ue.disabled=!0,ue.style.opacity="0.5"),a=setInterval(()=>{n--,R&&(R.textContent=n),n<=0&&(clearInterval(a),P&&(P.style.display="none"),ue&&(ue.disabled=!1,ue.style.opacity="1"))},1e3)}}function oo(){W({title:"Password Reset Request",bodyHTML:`
    <div style="text-align: center; margin-bottom: 1.5rem;">
      <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--primary-light); color: var(--primary); font-size: 1.8rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem;">
        <i class="fa-solid fa-key"></i>
      </div>
      <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.4rem;">Reset Your Password</h3>
      <p style="font-size: 0.88rem; color: var(--text-muted);">
        Enter your registered email address and we will send password reset instructions to your inbox.
      </p>
    </div>

    <form id="forgot-pass-form">
      <div class="form-group">
        <label class="form-label"><i class="fa-solid fa-envelope"></i> Account Email Address *</label>
        <input type="email" id="reset-email-input" class="form-input" required placeholder="Enter your account email" value="">
      </div>

      <div style="margin-top: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <button type="submit" class="btn btn-primary btn-full btn-lg">
          <i class="fa-solid fa-paper-plane"></i> Send Password Reset Link
        </button>
        <button type="button" class="btn btn-outline btn-full" id="cancel-reset-btn">
          Cancel
        </button>
      </div>
    </form>
  `});const e=document.getElementById("forgot-pass-form"),s=document.getElementById("cancel-reset-btn");s&&(s.onclick=C),e&&(e.onsubmit=async i=>{i.preventDefault();const r=document.getElementById("reset-email-input"),n=r?r.value.trim():"";if(!n){y("Please enter your email address","info");return}const a=await f.requestPasswordReset(n);a&&a.error?y(a.error,"info",7e3):(y(a.message||`Password reset link sent to ${n}`,"success"),C())})}function lo(t){const e=Ei(),s=O(),i=`
    <div style="margin-bottom: 1.25rem;">
      <div class="config-status-banner ${s?"status-connected":"status-disconnected"}" style="padding: 0.85rem 1rem; margin-bottom: 1.25rem;">
        <i class="fa-solid ${s?"fa-circle-check":"fa-triangle-exclamation"}"></i>
        <div>
          <strong style="font-size: 0.95rem;">${s?"Supabase Backend Connected":"Supabase Not Connected Yet"}</strong>
          <p style="font-size: 0.82rem; margin-top: 0.2rem; color: var(--text-sub);">
            ${s?"Live authentication, dishes, orders, and reservations are syncing directly with your Supabase database.":"Enter your Supabase Project URL and Anon API Key below to connect live backend auth & database storage."}
          </p>
        </div>
      </div>

      <form id="supabase-modal-form">
        <div class="form-group">
          <label class="form-label"><i class="fa-solid fa-link"></i> Supabase Project URL *</label>
          <input type="url" id="sb-input-url" class="form-input" placeholder="https://xyzcompany.supabase.co" value="${e.url||""}">
        </div>

        <div class="form-group">
          <label class="form-label"><i class="fa-solid fa-key"></i> Supabase Anon / Public API Key *</label>
          <input type="text" id="sb-input-key" class="form-input" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..." value="${e.key||""}">
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 1.25rem; flex-wrap: wrap;">
          <button type="submit" class="btn btn-primary btn-full">
            <i class="fa-solid fa-floppy-disk"></i> Save & Connect Supabase
          </button>
          ${s?`
            <button type="button" class="btn btn-accent btn-full" id="sb-sync-admin-btn">
              <i class="fa-solid fa-user-shield"></i> Create / Sync Admin Manager (syamratnam123@gmail.com) in Supabase
            </button>
            <button type="button" class="btn btn-outline btn-full" id="sb-disconnect-btn" style="border-color: var(--danger); color: var(--danger);">
              Disconnect
            </button>
          `:""}
        </div>
      </form>

      <div style="margin-top: 1.75rem; padding-top: 1.25rem; border-top: 1px dashed var(--border-color);">
        <h4 style="font-size: 0.95rem; font-weight: 700; color: var(--text-main); margin-bottom: 0.5rem; display: flex; align-items: center; justify-content: space-between;">
          <span><i class="fa-solid fa-code" style="color: var(--primary);"></i> Supabase SQL Tables Schema</span>
          <button type="button" class="btn btn-outline btn-sm" id="copy-sql-schema-btn">
            <i class="fa-solid fa-copy"></i> Copy SQL Code
          </button>
        </h4>
        <p style="font-size: 0.78rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          Paste this SQL into your Supabase Dashboard SQL Editor to automatically create the required database tables.
        </p>

        <textarea id="sql-schema-textarea" readonly style="width: 100%; height: 160px; font-family: monospace; font-size: 0.75rem; padding: 0.75rem; background: var(--bg-dark); color: #3ecf8e; border: 1px solid var(--border-color); border-radius: var(--radius-sm); resize: vertical;">
-- SAVORY BITES BISTRO - SUPABASE DATABASE TABLES SCHEMA
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT,
  email TEXT,
  phone TEXT,
  role TEXT DEFAULT 'customer',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.dishes (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  category TEXT NOT NULL,
  price NUMERIC NOT NULL,
  description TEXT,
  prep_time TEXT,
  calories TEXT,
  image TEXT,
  rating NUMERIC DEFAULT 4.8,
  reviews INTEGER DEFAULT 1,
  tags TEXT[],
  in_stock BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.locations (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  address TEXT NOT NULL,
  phone TEXT,
  hours TEXT,
  delivery_radius TEXT,
  avg_delivery_time TEXT,
  rating NUMERIC DEFAULT 4.9,
  features TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  customer_name TEXT,
  phone TEXT,
  delivery_address TEXT,
  items JSONB,
  subtotal NUMERIC,
  tax NUMERIC,
  grand_total NUMERIC,
  status TEXT DEFAULT 'placed',
  date TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.orders ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

CREATE TABLE IF NOT EXISTS public.reservations (
  id TEXT PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  customer_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  location_id TEXT,
  location_name TEXT,
  date TEXT NOT NULL,
  time TEXT NOT NULL,
  guests INTEGER NOT NULL,
  special_requests TEXT,
  status TEXT DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.reservations ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL;

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.dishes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public Read Access" ON public.dishes;
DROP POLICY IF EXISTS "Public Read Access" ON public.locations;
DROP POLICY IF EXISTS "Public All Access" ON public.profiles;
DROP POLICY IF EXISTS "Public All Access" ON public.orders;
DROP POLICY IF EXISTS "Public All Access" ON public.reservations;
DROP POLICY IF EXISTS "Public Dish Control" ON public.dishes;
DROP POLICY IF EXISTS "Public Location Control" ON public.locations;

CREATE POLICY "Public Read Access" ON public.dishes FOR SELECT USING (true);
CREATE POLICY "Public Read Access" ON public.locations FOR SELECT USING (true);
CREATE POLICY "Public All Access" ON public.profiles FOR ALL USING (true);
CREATE POLICY "Public All Access" ON public.orders FOR ALL USING (true);
CREATE POLICY "Public All Access" ON public.reservations FOR ALL USING (true);
CREATE POLICY "Public Dish Control" ON public.dishes FOR ALL USING (true);
CREATE POLICY "Public Location Control" ON public.locations FOR ALL USING (true);
</textarea>
      </div>
    </div>
  `;W({title:"Supabase Database Connection",bodyHTML:i});const r=document.getElementById("supabase-modal-form"),n=document.getElementById("sb-disconnect-btn"),a=document.getElementById("sb-sync-admin-btn"),o=document.getElementById("copy-sql-schema-btn");a&&(a.onclick=async()=>{a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Syncing Admin Manager with Supabase...';const l=await f.createOrSyncAdminManagerInSupabase("syamratnam123@gmail.com","Syam@1234");l.error?(y(`Sync Notice: ${l.error}`,"info"),a.disabled=!1,a.innerHTML='<i class="fa-solid fa-user-shield"></i> Create / Sync Admin Manager (syamratnam123@gmail.com) in Supabase'):(y(l.message||"Admin Manager created & synced in Supabase Auth & DB!","success"),C(),ze(t))}),o&&(o.onclick=()=>{const l=document.getElementById("sql-schema-textarea");l&&(l.select(),navigator.clipboard.writeText(l.value),y("SQL Schema code copied to clipboard!","success"))}),n&&(n.onclick=()=>{It("",""),y("Supabase disconnected.","info"),C(),ze(t)}),r&&(r.onsubmit=l=>{l.preventDefault();const c=document.getElementById("sb-input-url"),d=document.getElementById("sb-input-key"),h=c?c.value.trim():"",u=d?d.value.trim():"";if(!h||!u){y("Please enter both Supabase URL and Anon Key","info");return}It(h,u)?(y("Supabase Database Connected Live!","success"),C(),f.syncWithSupabase(),ze(t)):y("Invalid Supabase URL or Key format","info")})}function Me(t){if(!t)return;if(!f.isAdmin()){t.innerHTML=`
      <div class="container" style="padding: 4rem 1.5rem; text-align: center;">
        <div class="auth-restricted-card">
          <div class="restricted-icon"><i class="fa-solid fa-lock"></i></div>
          <h2>Admin Access Restricted</h2>
          <p>You need Administrator permissions to view and manage restaurant items, locations, orders, and table reservations.</p>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-primary" id="admin-login-redirect-btn">
              <i class="fa-solid fa-user-shield"></i> Log In as Admin
            </button>
            <button class="btn btn-outline" id="admin-back-menu-btn">
              <i class="fa-solid fa-arrow-left"></i> Back to Menu
            </button>
          </div>
        </div>
      </div>
    `;const w=document.getElementById("admin-login-redirect-btn");w&&(w.onclick=()=>f.setView("login","admin"));const A=document.getElementById("admin-back-menu-btn");A&&(A.onclick=()=>f.setView("menu"));return}const e=O(),s=f.dishes.length,i=f.dishes.filter(w=>w.inStock).length,r=f.locations.length,n=f.orders.length,a=f.reservations.length,o=f.orders.reduce((w,A)=>w+(A.grandTotal||0),0).toFixed(2);t.innerHTML=`
    <div class="admin-dashboard-wrapper">
      <div class="container">
        <!-- Admin Dashboard Header -->
        <div class="admin-header-bar">
          <div>
            <div style="display: flex; gap: 0.5rem; align-items: center; flex-wrap: wrap;">
              <span class="badge badge-admin"><i class="fa-solid fa-shield-halved"></i> ADMINISTRATOR PORTAL</span>
              <span class="badge ${e?"badge-green":"badge-gold"}" id="supabase-status-badge" style="cursor: pointer;">
                <i class="fa-solid ${e?"fa-database":"fa-server"}"></i>
                ${e?"Live Supabase DB":"Demo Local Mode"}
              </span>
              <span class="badge" style="background: var(--bg-card); color: var(--accent-gold); border: 1px solid var(--border-color);">
                <i class="fa-solid fa-user-gear"></i> Admin Manager: syamratnam123@gmail.com
              </span>
            </div>
            <h1 class="admin-title">Bistro Management Console</h1>
            <p class="admin-subtitle">Full administrative authority to manage menu items, restaurant branches, customer orders, and table reservations.</p>
          </div>

          <div class="admin-quick-actions">
            <button class="btn btn-outline" id="admin-update-details-btn" title="Update Admin Manager Details in Supabase" style="border-color: var(--accent-gold); color: var(--accent-gold);">
              <i class="fa-solid fa-user-pen"></i> Update Admin Details
            </button>
            <button class="btn btn-outline" id="admin-supabase-config-btn" title="Configure Supabase Credentials">
              <i class="fa-solid fa-bolt" style="color: #3ecf8e;"></i> Supabase Settings
            </button>
            <button class="btn btn-outline" id="admin-add-reservation-btn" style="border-color: var(--accent-blue); color: var(--accent-blue);">
              <i class="fa-solid fa-chair"></i> Add Reservation
            </button>
            <button class="btn btn-primary" id="admin-add-item-btn">
              <i class="fa-solid fa-plus"></i> Add Menu Item
            </button>
            <button class="btn btn-accent" id="admin-add-branch-btn">
              <i class="fa-solid fa-building-circle-check"></i> Add Branch
            </button>
          </div>
        </div>

        <!-- Metric Cards Grid -->
        <div class="admin-metrics-grid" style="grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));">
          <div class="metric-card">
            <div class="metric-icon icon-primary"><i class="fa-solid fa-utensils"></i></div>
            <div class="metric-info">
              <span class="metric-value">${s}</span>
              <span class="metric-label">Menu Items (${i} In Stock)</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon icon-gold"><i class="fa-solid fa-store"></i></div>
            <div class="metric-info">
              <span class="metric-value">${r}</span>
              <span class="metric-label">Active Branches</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon icon-blue"><i class="fa-solid fa-basket-shopping"></i></div>
            <div class="metric-info">
              <span class="metric-value">${n}</span>
              <span class="metric-label">Customer Orders</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon" style="background: rgba(16, 185, 129, 0.15); color: var(--accent-green);"><i class="fa-solid fa-calendar-check"></i></div>
            <div class="metric-info">
              <span class="metric-value">${a}</span>
              <span class="metric-label">Table Reservations</span>
            </div>
          </div>

          <div class="metric-card">
            <div class="metric-icon icon-green"><i class="fa-solid fa-indian-rupee-sign"></i></div>
            <div class="metric-info">
              <span class="metric-value">₹${o}</span>
              <span class="metric-label">Total Sales Revenue</span>
            </div>
          </div>
        </div>

        <!-- Navigation Sub-Tabs -->
        <div class="admin-tabs">
          <button class="admin-tab active" id="tab-admin-items" data-tab="items">
            <i class="fa-solid fa-list-check"></i> Menu Items (${s})
          </button>
          <button class="admin-tab" id="tab-admin-locations" data-tab="locations">
            <i class="fa-solid fa-map-location-dot"></i> Branches & Locations (${r})
          </button>
          <button class="admin-tab" id="tab-admin-orders" data-tab="orders">
            <i class="fa-solid fa-clock-rotate-left"></i> Live Orders (${n})
          </button>
          <button class="admin-tab" id="tab-admin-reservations" data-tab="reservations">
            <i class="fa-solid fa-calendar-check"></i> Table Reservations (${a})
          </button>
        </div>

        <!-- Admin Content Section -->
        <div id="admin-tab-content" class="admin-tab-body"></div>
      </div>
    </div>
  `;const l=document.getElementById("admin-update-details-btn");l&&(l.onclick=()=>mo());const c=document.getElementById("admin-supabase-config-btn");c&&(c.onclick=()=>Ks());const d=document.getElementById("supabase-status-badge");d&&(d.onclick=()=>Ks());const h=document.getElementById("admin-add-item-btn");h&&(h.onclick=()=>we());const u=document.getElementById("admin-add-branch-btn");u&&(u.onclick=()=>me());const m=document.getElementById("admin-add-reservation-btn");m&&(m.onclick=()=>Zt());const p=document.getElementById("tab-admin-items"),g=document.getElementById("tab-admin-locations"),b=document.getElementById("tab-admin-orders"),v=document.getElementById("tab-admin-reservations");function S(w){[p,g,b,v].forEach(x=>x&&x.classList.remove("active"));const A=document.getElementById("admin-tab-content");A&&(w==="items"?(p&&p.classList.add("active"),co(A)):w==="locations"?(g&&g.classList.add("active"),uo(A)):w==="orders"?(b&&b.classList.add("active"),ho(A)):w==="reservations"&&(v&&v.classList.add("active"),fo(A)))}p&&(p.onclick=()=>S("items")),g&&(g.onclick=()=>S("locations")),b&&(b.onclick=()=>S("orders")),v&&(v.onclick=()=>S("reservations")),S("items")}function co(t){const e=f.dishes;t.innerHTML=`
    <div class="admin-table-container">
      <div class="table-actions-header">
        <h3><i class="fa-solid fa-utensils"></i> All Registered Menu Items</h3>
        <button class="btn btn-primary btn-sm" id="tab-add-dish-btn">
          <i class="fa-solid fa-plus"></i> Add Item
        </button>
      </div>

      <div class="table-responsive">
        <table class="admin-data-table">
          <thead>
            <tr>
              <th>Dish</th>
              <th>Category</th>
              <th>Price</th>
              <th>Prep Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            ${e.map(i=>{var n;const r=((n=ts.find(a=>a.id===i.category))==null?void 0:n.name)||i.category;return`
                <tr>
                  <td>
                    <div class="dish-item-cell">
                      <img src="${i.image}" alt="${i.name}" class="dish-thumb" onerror="this.src='./assets/woodfired-pizza.png'">
                      <div>
                        <strong>${i.name}</strong>
                        <p class="dish-desc-sub">${i.description.substring(0,60)}...</p>
                      </div>
                    </div>
                  </td>
                  <td><span class="category-pill">${r}</span></td>
                  <td><strong class="price-text">₹${i.price.toFixed(2)}</strong></td>
                  <td>${i.prepTime||"15 min"}</td>
                  <td>
                    <button class="stock-toggle-btn ${i.inStock?"in-stock":"out-of-stock"}" data-dish-id="${i.id}">
                      <i class="fa-solid ${i.inStock?"fa-check-circle":"fa-times-circle"}"></i>
                      ${i.inStock?"In Stock":"Out of Stock"}
                    </button>
                  </td>
                  <td>
                    <div class="action-buttons-group">
                      <button class="btn btn-outline btn-xs edit-dish-btn" data-dish-id="${i.id}" title="Edit Dish">
                        <i class="fa-solid fa-pen-to-square"></i> Edit
                      </button>
                      <button class="btn btn-outline btn-xs delete-dish-btn" data-dish-id="${i.id}" style="color: var(--danger); border-color: var(--danger);" title="Delete Dish">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `}).join("")}
          </tbody>
        </table>
      </div>
    </div>
  `;const s=document.getElementById("tab-add-dish-btn");s&&(s.onclick=()=>we()),t.querySelectorAll(".stock-toggle-btn").forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-dish-id"),n=f.toggleDishStock(r);n&&!n.success?y(n.message,"info"):y("Updated stock availability","success")}}),t.querySelectorAll(".edit-dish-btn").forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-dish-id"),n=f.dishes.find(a=>a.id===r);n&&we(n)}}),t.querySelectorAll(".delete-dish-btn").forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-dish-id"),n=f.dishes.find(a=>a.id===r);if(n&&confirm(`Are you sure you want to delete "${n.name}"?`)){const a=f.deleteDish(r);a&&a.success?y(`Deleted ${n.name}`,"info"):a&&a.message&&y(a.message,"info")}}})}function uo(t){const e=f.locations;t.innerHTML=`
    <div class="admin-table-container">
      <div class="table-actions-header">
        <h3><i class="fa-solid fa-store"></i> Restaurant Branch Locations</h3>
        <button class="btn btn-accent btn-sm" id="tab-add-loc-btn">
          <i class="fa-solid fa-plus"></i> Add Branch
        </button>
      </div>

      <div class="admin-locations-grid">
        ${e.map(i=>`
          <div class="admin-loc-card">
            <div class="loc-card-top">
              <div>
                <span class="badge badge-gold"><i class="fa-solid fa-building"></i> Branch</span>
                <h3 class="loc-card-title">${i.name}</h3>
              </div>
              <div class="loc-actions">
                <button class="btn btn-outline btn-xs edit-loc-btn" data-loc-id="${i.id}">
                  <i class="fa-solid fa-pen"></i> Edit
                </button>
                <button class="btn btn-outline btn-xs delete-loc-btn" data-loc-id="${i.id}" style="color: var(--danger); border-color: var(--danger);">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>

            <p class="loc-address-text"><i class="fa-solid fa-location-dot"></i> ${i.address}</p>
            
            <div class="loc-details-grid">
              <div><i class="fa-solid fa-phone"></i> <strong>Phone:</strong> ${i.phone}</div>
              <div><i class="fa-solid fa-clock"></i> <strong>Hours:</strong> ${i.hours||"10:30 AM - 11 PM"}</div>
              <div><i class="fa-solid fa-map-pin"></i> <strong>Radius:</strong> ${i.deliveryRadius||"7 km"}</div>
              <div><i class="fa-solid fa-motorcycle"></i> <strong>Delivery:</strong> ${i.avgDeliveryTime||"20-30 min"}</div>
            </div>

            ${i.features&&i.features.length>0?`
              <div class="loc-tags">
                ${i.features.map(r=>`<span class="tag-mini">${r}</span>`).join("")}
              </div>
            `:""}
          </div>
        `).join("")}
      </div>
    </div>
  `;const s=document.getElementById("tab-add-loc-btn");s&&(s.onclick=()=>me()),t.querySelectorAll(".edit-loc-btn").forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-loc-id"),n=f.locations.find(a=>a.id===r);n&&me(n)}}),t.querySelectorAll(".delete-loc-btn").forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-loc-id"),n=f.locations.find(a=>a.id===r);if(n&&confirm(`Are you sure you want to delete branch "${n.name}"?`)){const a=f.deleteLocation(r);a&&a.success?y(`Deleted branch ${n.name}`,"info"):a&&a.message&&y(a.message,"info")}}})}function ho(t){const e=f.orders;t.innerHTML=`
    <div class="admin-table-container">
      <div class="table-actions-header">
        <h3><i class="fa-solid fa-clock-rotate-left"></i> Incoming Customer Orders</h3>
      </div>

      ${e.length===0?`
        <div class="empty-state">
          <i class="fa-solid fa-clipboard-list empty-icon"></i>
          <h3>No Orders Placed Yet</h3>
        </div>
      `:`
        <div class="table-responsive">
          <table class="admin-data-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Customer</th>
                <th>Items</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${e.map(s=>`
                <tr>
                  <td><strong>${s.id}</strong></td>
                  <td>${new Date(s.date).toLocaleDateString()}</td>
                  <td>
                    <div>
                      <strong>${s.customerName||"Syam"}</strong>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">${s.phone||"+91 9876543210"}</div>
                    </div>
                  </td>
                  <td>
                    <div style="font-size: 0.85rem;">
                      ${s.items.map(i=>`${i.qty}x ${i.name}`).join(", ")}
                    </div>
                  </td>
                  <td><strong style="color: var(--primary);">₹${(s.grandTotal||250).toFixed(2)}</strong></td>
                  <td>
                    <select class="admin-status-select" data-order-id="${s.id}">
                      <option value="placed" ${s.status==="placed"?"selected":""}>Placed</option>
                      <option value="preparing" ${s.status==="preparing"?"selected":""}>Preparing</option>
                      <option value="delivering" ${s.status==="delivering"?"selected":""}>Out for Delivery</option>
                      <option value="completed" ${s.status==="completed"?"selected":""}>Completed</option>
                    </select>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `,t.querySelectorAll(".admin-status-select").forEach(s=>{s.onchange=async()=>{const i=s.getAttribute("data-order-id"),r=s.value;await f.updateOrderStatus(i,r),y(`Updated ${i} status to ${r.toUpperCase()}`,"success")}})}function fo(t){const e=f.reservations;t.innerHTML=`
    <div class="admin-table-container">
      <div class="table-actions-header">
        <h3><i class="fa-solid fa-calendar-check"></i> Customer Table Reservations</h3>
        <button class="btn btn-primary btn-sm" id="tab-add-res-btn">
          <i class="fa-solid fa-plus"></i> Add Table Reservation
        </button>
      </div>

      ${e.length===0?`
        <div class="empty-state">
          <i class="fa-solid fa-chair empty-icon"></i>
          <h3>No Table Reservations Yet</h3>
        </div>
      `:`
        <div class="table-responsive">
          <table class="admin-data-table">
            <thead>
              <tr>
                <th>Booking ID</th>
                <th>Date & Time</th>
                <th>Customer</th>
                <th>Branch Location</th>
                <th>Guests</th>
                <th>Special Requests</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              ${e.map(i=>`
                <tr>
                  <td><strong>${i.id}</strong></td>
                  <td>
                    <div>
                      <strong>${i.date}</strong>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">${i.time}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <strong>${i.customerName}</strong>
                      <div style="font-size: 0.8rem; color: var(--text-muted);">${i.phone}</div>
                    </div>
                  </td>
                  <td><span class="badge badge-gold"><i class="fa-solid fa-building"></i> ${i.locationName}</span></td>
                  <td><span class="badge badge-primary">${i.guests}</span></td>
                  <td><span style="font-size: 0.85rem; color: var(--text-sub);">${i.specialRequests||"None"}</span></td>
                  <td>
                    <select class="admin-res-status-select" data-res-id="${i.id}">
                      <option value="pending" ${i.status==="pending"?"selected":""}>Pending</option>
                      <option value="confirmed" ${i.status==="confirmed"?"selected":""}>Confirmed</option>
                      <option value="completed" ${i.status==="completed"?"selected":""}>Completed</option>
                      <option value="cancelled" ${i.status==="cancelled"?"selected":""}>Cancelled</option>
                    </select>
                  </td>
                  <td>
                    <div class="action-buttons-group">
                      <button class="btn btn-outline btn-xs edit-res-btn" data-res-id="${i.id}" title="Edit Reservation">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button class="btn btn-outline btn-xs delete-res-btn" data-res-id="${i.id}" style="color: var(--danger); border-color: var(--danger);" title="Cancel Reservation">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `}
    </div>
  `;const s=document.getElementById("tab-add-res-btn");s&&(s.onclick=()=>Zt()),t.querySelectorAll(".admin-res-status-select").forEach(i=>{i.onchange=async()=>{const r=i.getAttribute("data-res-id"),n=i.value;await f.updateReservationStatus(r,n),y(`Updated reservation ${r} status to ${n.toUpperCase()}`,"success")}}),t.querySelectorAll(".edit-res-btn").forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-res-id"),n=f.reservations.find(a=>a.id===r);n&&Zt(n)}}),t.querySelectorAll(".delete-res-btn").forEach(i=>{i.onclick=async()=>{const r=i.getAttribute("data-res-id"),n=f.reservations.find(a=>a.id===r);n&&confirm(`Cancel reservation for ${n.customerName}?`)&&(await f.deleteReservation(r),y(`Cancelled reservation ${r}`,"info"))}})}function Ks(){const t=Ei(),e=O(),s='<i class="fa-solid fa-bolt" style="color: #3ecf8e;"></i> Supabase Backend & Database Setup',i=`
    <div class="supabase-modal-content">
      <div class="config-status-banner ${e?"status-connected":"status-disconnected"}">
        <i class="fa-solid ${e?"fa-circle-check":"fa-triangle-exclamation"}"></i>
        <div>
          <strong>Status: ${e?"Connected to Supabase DB":"Local Demo Mode Active"}</strong>
          <p style="margin: 0.2rem 0 0 0; font-size: 0.82rem;">
            ${e?"Your bistro app is storing authentication, dishes, locations, orders, and table reservations in your live Supabase cloud database.":"Enter your Supabase URL & Anon Key below to link your live database and authentication service."}
          </p>
        </div>
      </div>

      <form id="supabase-config-form" style="margin-top: 1.5rem;">
        <div class="form-group">
          <label class="form-label">Supabase Project URL *</label>
          <input type="text" id="supabase-url" class="form-input" placeholder="https://xyzcompany.supabase.co" value="${t.url}">
        </div>

        <div class="form-group">
          <label class="form-label">Supabase Anon Key *</label>
          <input type="password" id="supabase-key" class="form-input" placeholder="eyJhYmdj... (anon key)" value="${t.key}">
        </div>

        <div class="form-group" style="background: var(--bg-input); padding: 1rem; border-radius: var(--radius-md);">
          <strong style="font-size: 0.88rem; color: var(--primary);"><i class="fa-solid fa-code"></i> Database Setup SQL Script</strong>
          <p style="font-size: 0.82rem; color: var(--text-muted); margin: 0.3rem 0 0.75rem 0;">
            A complete <code>supabase_schema.sql</code> file has been created at your project root containing table schemas for <code>profiles</code>, <code>dishes</code>, <code>locations</code>, <code>orders</code>, and <code>reservations</code> with Row-Level Security policies.
          </p>
          <div style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
            <button type="button" class="btn btn-outline btn-xs" id="copy-sql-guide-btn">
              <i class="fa-solid fa-copy"></i> View SQL Schema Instructions
            </button>
            ${e?`
              <button type="button" class="btn btn-accent btn-xs" id="seed-supabase-data-btn">
                <i class="fa-solid fa-cloud-arrow-up"></i> Seed / Reflect All App Data to Supabase
              </button>
            `:""}
          </div>
        </div>
      </form>
    </div>
  `;W({title:s,bodyHTML:i,footerHTML:`
    <div style="display: flex; justify-content: space-between; width: 100%; align-items: center;">
      ${e?`
        <button class="btn btn-outline" id="clear-supabase-credentials-btn" style="color: var(--danger); border-color: var(--danger);">
          <i class="fa-solid fa-trash"></i> Disconnect
        </button>
      `:"<div></div>"}

      <div style="display: flex; gap: 0.5rem;">
        <button class="btn btn-secondary" id="modal-cancel-supabase">Cancel</button>
        <button class="btn btn-primary" id="save-supabase-credentials-btn">
          <i class="fa-solid fa-plug"></i> Save & Connect
        </button>
      </div>
    </div>
  `}),document.getElementById("modal-cancel-supabase").onclick=C;const n=document.getElementById("copy-sql-guide-btn");n&&(n.onclick=()=>{alert(`Supabase Setup Instructions:

1. Open your Supabase Dashboard (https://app.supabase.com).
2. Navigate to SQL Editor.
3. Copy the SQL script from "supabase_schema.sql" in your workspace and paste it into the editor.
4. Click Run to create tables (profiles, dishes, locations, orders, reservations) and security policies!`)});const a=document.getElementById("seed-supabase-data-btn");a&&(a.onclick=async()=>{a.disabled=!0,a.innerHTML='<i class="fa-solid fa-spinner fa-spin"></i> Uploading Data to Supabase...';const l=await ro(f.dishes,f.locations,f.orders,f.reservations);l&&l.success?(y(`Successfully seeded Supabase! (${l.seededDishes} Dishes, ${l.seededLocations} Branches, ${l.seededOrders} Orders, ${l.seededReservations} Bookings uploaded)`,"success",5e3),C(),await f.syncWithSupabase(),f.notify("VIEW_CHANGED","admin")):(y(`Seeding error: ${(l==null?void 0:l.error)||"Failed to populate Supabase"}`,"info"),a.disabled=!1,a.innerHTML='<i class="fa-solid fa-cloud-arrow-up"></i> Seed / Reflect All App Data to Supabase')});const o=document.getElementById("clear-supabase-credentials-btn");o&&(o.onclick=()=>{It("",""),C(),y("Disconnected from Supabase. Switched to Local Mode.","info"),f.notify("VIEW_CHANGED","admin")}),document.getElementById("save-supabase-credentials-btn").onclick=async()=>{const l=document.getElementById("supabase-url").value.trim(),c=document.getElementById("supabase-key").value.trim();if(!l||!c){y("Please enter both Supabase URL and Anon Key","info");return}It(l,c),C(),y("Saved Supabase configuration! Syncing live data...","success"),await f.syncWithSupabase(),f.notify("VIEW_CHANGED","admin")}}function mo(){const t=f.currentUser||{name:"Syam Ratnam (Admin Manager)",email:"syamratnam123@gmail.com",phone:"+91 98480 12345"},e=`
    <form id="update-admin-details-form">
      <div class="form-group">
        <label class="form-label"><i class="fa-solid fa-user-gear"></i> Admin Manager Full Name *</label>
        <input type="text" id="admin-mgr-name" class="form-input" required value="${t.name||"Syam Ratnam (Admin Manager)"}">
      </div>

      <div class="form-group">
        <label class="form-label"><i class="fa-solid fa-envelope"></i> Admin Username / Email *</label>
        <input type="email" id="admin-mgr-email" class="form-input" required value="${t.email||"syamratnam123@gmail.com"}">
      </div>

      <div class="form-group">
        <label class="form-label"><i class="fa-solid fa-phone"></i> Contact Phone Number</label>
        <input type="tel" id="admin-mgr-phone" class="form-input" value="${t.phone||"+91 98480 12345"}">
      </div>

      <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid var(--accent-green); padding: 0.85rem; border-radius: var(--radius-md); margin-top: 1rem;">
        <span style="font-size: 0.82rem; color: var(--text-main);">
          <i class="fa-solid fa-database" style="color: #3ecf8e;"></i> Updating will save changes locally and sync directly with <strong>public.profiles</strong> table in Supabase.
        </span>
      </div>

      <div style="margin-top: 1.5rem; display: flex; gap: 0.75rem; justify-content: flex-end;">
        <button type="button" class="btn btn-secondary" id="cancel-admin-details-btn">Cancel</button>
        <button type="submit" class="btn btn-primary">
          <i class="fa-solid fa-cloud-arrow-up"></i> Save & Sync to Supabase
        </button>
      </div>
    </form>
  `;W({title:"Update Admin Manager Credentials & Profile",bodyHTML:e});const s=document.getElementById("cancel-admin-details-btn");s&&(s.onclick=C);const i=document.getElementById("update-admin-details-form");i&&(i.onsubmit=async r=>{var d;r.preventDefault();const n=document.getElementById("admin-mgr-name").value.trim(),a=document.getElementById("admin-mgr-email").value.trim(),o=document.getElementById("admin-mgr-phone").value.trim();if(!n||!a){y("Name and email are required","info");return}const l=await f.updateAdminManagerDetails({name:n,email:a,phone:o});C();const c=O()?(d=l.supabaseResult)!=null&&d.error?` (Supabase notice: ${l.supabaseResult.error})`:" (Synced with Supabase)":" (Local mode)";y(`Admin Manager details updated!${c}`,"success"),f.notify("VIEW_CHANGED","admin")})}function oe(t){const e=n=>f.isWishlisted(n);let s=f.dishes.filter(n=>{if(f.selectedCategory!=="all"){if(f.selectedCategory==="specials"){if(!n.tags.includes("chefSpecial"))return!1}else if(n.category!==f.selectedCategory)return!1}if(f.searchQuery.trim()!==""){const a=f.searchQuery.toLowerCase(),o=n.name.toLowerCase().includes(a),l=n.description.toLowerCase().includes(a);if(!o&&!l)return!1}return!(f.dietaryFilter==="veg"&&!n.tags.includes("veg")||f.dietaryFilter==="gf"&&!n.tags.includes("gf")||f.dietaryFilter==="chefSpecial"&&!n.tags.includes("chefSpecial"))});f.sortBy==="price-low"?s.sort((n,a)=>n.price-a.price):f.sortBy==="price-high"?s.sort((n,a)=>a.price-n.price):f.sortBy==="rating"&&s.sort((n,a)=>a.rating-n.rating),t.innerHTML=`
    <!-- Hero Banner -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-tag">
          <span class="badge badge-gold"><i class="fa-solid fa-star"></i> AWARD WINNING GOURMET DINING</span>
        </div>
        <h1 class="hero-title">Handcrafted Culinary Delights</h1>
        <p class="hero-subtitle">Taste the finest artisanal recipes made with organic farm-to-table ingredients, delivered fresh to your doorstep in minutes.</p>

        <div class="hero-search-box">
          <i class="fa-solid fa-magnifying-glass"></i>
          <input type="text" id="menu-search-input" placeholder="Search pizza, Wagyu burger, truffle, salmon..." value="${f.searchQuery}">
          <button class="btn btn-primary btn-sm" id="hero-search-btn">Search</button>
        </div>

        <div class="hero-quick-tags">
          <span style="color: var(--text-muted); font-size: 0.85rem;">Popular:</span>
          <button class="tag-btn" data-tag="woodfired">Woodfired Pizza</button>
          <button class="tag-btn" data-tag="wagyu">Wagyu Burger</button>
          <button class="tag-btn" data-tag="salmon">Atlantic Salmon</button>
          <button class="tag-btn" data-tag="truffle">Truffle Pasta</button>
        </div>
      </div>
    </section>

    <!-- Category Sticky Filter Bar -->
    <section class="category-filter-section">
      <div class="container">
        <div class="category-bar">
          ${ts.map(n=>`
            <button class="cat-pill ${f.selectedCategory===n.id?"active":""}" data-cat="${n.id}">
              <i class="${n.icon}"></i>
              <span>${n.name}</span>
            </button>
          `).join("")}
        </div>
      </div>
    </section>

    <!-- Main Menu Container -->
    <section class="container">
      <div class="menu-toolbar">
        <div class="filter-group">
          <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-sub);">Filter:</span>
          <button class="filter-chip ${f.dietaryFilter==="all"?"active":""}" data-diet="all">All Items</button>
          <button class="filter-chip ${f.dietaryFilter==="veg"?"active":""}" data-diet="veg">
            <i class="fa-solid fa-leaf" style="color: var(--accent-green);"></i> Vegetarian
          </button>
          <button class="filter-chip ${f.dietaryFilter==="gf"?"active":""}" data-diet="gf">
            <i class="fa-solid fa-wheat-awn-circle-exclamation"></i> Gluten-Free
          </button>
          <button class="filter-chip ${f.dietaryFilter==="chefSpecial"?"active":""}" data-diet="chefSpecial">
            <i class="fa-solid fa-crown" style="color: var(--accent-gold);"></i> Chef Specials
          </button>
        </div>

        <div class="filter-group">
          <span style="font-weight: 600; font-size: 0.9rem; color: var(--text-sub);">Sort By:</span>
          <select id="sort-select" class="sort-select">
            <option value="popular" ${f.sortBy==="popular"?"selected":""}>Most Popular</option>
            <option value="price-low" ${f.sortBy==="price-low"?"selected":""}>Price: Low to High</option>
            <option value="price-high" ${f.sortBy==="price-high"?"selected":""}>Price: High to Low</option>
            <option value="rating" ${f.sortBy==="rating"?"selected":""}>Highest Rated</option>
          </select>
        </div>
      </div>

      <!-- Dishes Grid -->
      ${s.length===0?`
        <div style="text-align: center; padding: 4rem 1.5rem; color: var(--text-muted);">
          <i class="fa-solid fa-utensils" style="font-size: 3rem; color: var(--primary); margin-bottom: 1rem;"></i>
          <h3>No Dishes Found</h3>
          <p>Try searching for a different keyword or adjusting your filters.</p>
        </div>
      `:`
        <div class="menu-grid">
          ${s.map(n=>`
            <div class="dish-card" data-dish-id="${n.id}">
              <div class="dish-media">
                <img src="${n.image}" alt="${n.name}" class="dish-img" loading="lazy">
                
                <button class="dish-wishlist-btn ${e(n.id)?"active":""}" 
                        data-wishlist-id="${n.id}" 
                        title="${e(n.id)?"Remove from Wishlist":"Add to Wishlist"}">
                  <i class="${e(n.id)?"fa-solid fa-heart":"fa-regular fa-heart"}"></i>
                </button>

                ${n.tags.includes("chefSpecial")?`
                  <span class="badge badge-gold dish-tag-badge"><i class="fa-solid fa-crown"></i> Chef Special</span>
                `:n.tags.includes("veg")?`
                  <span class="badge badge-green dish-tag-badge"><i class="fa-solid fa-leaf"></i> Vegetarian</span>
                `:""}
              </div>

              <div class="dish-content">
                <div class="dish-header-row">
                  <h3 class="dish-title">${n.name}</h3>
                  <span class="dish-price">₹${n.price.toFixed(2)}</span>
                </div>

                <p class="dish-desc">${n.description}</p>

                <div class="dish-meta">
                  <span><i class="fa-solid fa-star" style="color: var(--accent-gold);"></i> ${n.rating} (${n.reviews})</span>
                  <span><i class="fa-solid fa-clock"></i> ${n.prepTime}</span>
                  <span><i class="fa-solid fa-fire" style="color: var(--primary);"></i> ${n.calories}</span>
                </div>

                <div class="dish-card-actions">
                  <button class="btn btn-outline btn-sm edit-dish-direct-btn" data-edit-dish-id="${n.id}" title="Edit Dish (Admin)">
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button class="btn btn-outline btn-sm dish-detail-btn" data-detail-id="${n.id}">
                    <i class="fa-solid fa-sliders"></i> Customize
                  </button>
                  <button class="btn btn-primary btn-sm add-cart-btn" data-add-id="${n.id}" ${n.inStock?"":"disabled"}>
                    <i class="fa-solid fa-plus"></i> ${n.inStock?"Add to Cart":"Out of Stock"}
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `}
    </section>
  `;const i=document.getElementById("menu-search-input");i&&(i.oninput=n=>{f.searchQuery=n.target.value,oe(t)}),document.querySelectorAll(".edit-dish-direct-btn").forEach(n=>{n.onclick=a=>{a.stopPropagation();const o=n.getAttribute("data-edit-dish-id"),l=f.dishes.find(c=>c.id===o);l&&we(l)}}),document.querySelectorAll(".tag-btn").forEach(n=>{n.onclick=()=>{const a=n.getAttribute("data-tag");f.searchQuery=a,oe(t)}}),document.querySelectorAll("[data-cat]").forEach(n=>{n.onclick=()=>{f.selectedCategory=n.getAttribute("data-cat"),oe(t)}}),document.querySelectorAll("[data-diet]").forEach(n=>{n.onclick=()=>{f.dietaryFilter=n.getAttribute("data-diet"),oe(t)}});const r=document.getElementById("sort-select");r&&(r.onchange=n=>{f.sortBy=n.target.value,oe(t)}),document.querySelectorAll("[data-wishlist-id]").forEach(n=>{n.onclick=a=>{if(a.stopPropagation(),!f.isLoggedIn()){y("Please log in to save items to your Wishlist.","info"),f.setView("login");return}const o=n.getAttribute("data-wishlist-id");f.toggleWishlist(o);const l=f.isWishlisted(o);y(l?"Added to Wishlist!":"Removed from Wishlist","info"),oe(t)}}),document.querySelectorAll("[data-add-id]").forEach(n=>{n.onclick=a=>{a.stopPropagation();const o=n.getAttribute("data-add-id"),l=f.dishes.find(c=>c.id===o);l&&l.inStock&&(f.addToCart(o,1),y(`Added ${l.name} to Cart!`,"success"))}}),document.querySelectorAll("[data-detail-id]").forEach(n=>{n.onclick=a=>{a.stopPropagation();const o=n.getAttribute("data-detail-id");po(o)}})}function po(t){const e=f.dishes.find(d=>d.id===t);if(!e)return;let s=1;const i=`
    <div style="display: flex; gap: 1.25rem; margin-bottom: 1.5rem; flex-wrap: wrap;">
      <img src="${e.image}" alt="${e.name}" style="width: 140px; height: 120px; border-radius: var(--radius-md); object-fit: cover;">
      <div style="flex: 1;">
        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.3rem;">${e.name}</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">${e.description}</p>
        <span style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${e.price.toFixed(2)}</span>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label"><i class="fa-solid fa-pepper-hot" style="color: var(--primary);"></i> Spice Level Selector</label>
      <select id="modal-spice-select" class="form-select">
        <option value="Mild / Regular">Mild / Regular (Default)</option>
        <option value="Medium Spicy">Medium Spicy 🔥</option>
        <option value="Extra Hot & Spicy">Extra Hot & Spicy 🔥🔥</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label"><i class="fa-solid fa-cheese"></i> Custom Add-Ons & Toppings</label>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub);">
          <input type="checkbox" id="addon-cheese" value="Extra Buffalo Cheese (+₹2.50)"> Extra Buffalo Cheese (+₹2.50)
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub);">
          <input type="checkbox" id="addon-sauce" value="Truffle Garlic Dip (+₹1.75)"> Truffle Garlic Dip (+₹1.75)
        </label>
        <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub);">
          <input type="checkbox" id="addon-gf" value="Gluten-Free Crust/Bun (+₹2.00)"> Gluten-Free Option (+₹2.00)
        </label>
      </div>
    </div>

    <div class="form-group">
      <label class="form-label"><i class="fa-solid fa-comment-dots"></i> Chef Preparation Notes</label>
      <textarea id="modal-notes-input" class="form-textarea" rows="2" placeholder="e.g. Dressing on the side, extra crispy, no onions..."></textarea>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 1rem; border-top: 1px solid var(--border-color);">
      <span style="font-weight: 600; color: var(--text-sub);">Quantity:</span>
      <div class="qty-control" style="transform: scale(1.1);">
        <button class="qty-btn" id="modal-qty-minus"><i class="fa-solid fa-minus"></i></button>
        <span class="qty-num" id="modal-qty-val">1</span>
        <button class="qty-btn" id="modal-qty-plus"><i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
  `;W({title:"Customize Your Order",bodyHTML:i,footerHTML:`
    <button class="btn btn-secondary" id="modal-cancel-btn">Cancel</button>
    <button class="btn btn-primary" id="modal-add-cart-btn"><i class="fa-solid fa-cart-plus"></i> Add to Cart</button>
  `});const n=document.getElementById("modal-qty-minus"),a=document.getElementById("modal-qty-plus"),o=document.getElementById("modal-qty-val");n&&a&&o&&(n.onclick=()=>{s>1&&(s--,o.textContent=s)},a.onclick=()=>{s++,o.textContent=s});const l=document.getElementById("modal-cancel-btn");l&&(l.onclick=C);const c=document.getElementById("modal-add-cart-btn");c&&(c.onclick=()=>{const d=document.getElementById("modal-spice-select").value,h=document.getElementById("modal-notes-input").value.trim(),u=[];document.getElementById("addon-cheese").checked&&u.push("Extra Cheese"),document.getElementById("addon-sauce").checked&&u.push("Truffle Dip"),document.getElementById("addon-gf").checked&&u.push("GF Option");let m=d;u.length>0&&(m+=` | ${u.join(", ")}`),h&&(m+=` (${h})`),f.addToCart(t,s,m),y(`Added ${e.name} (${s}x) to Cart!`,"success"),C()})}function rs(t){if(!f.isLoggedIn()){t.innerHTML=`
      <div class="container" style="padding: 4rem 1.5rem; text-align: center;">
        <div class="auth-restricted-card">
          <div class="restricted-icon" style="background: rgba(239, 68, 68, 0.1); color: var(--accent-red);"><i class="fa-solid fa-heart"></i></div>
          <h2>Authentication Required</h2>
          <p>Please log in to your account to view and manage your saved wishlist items.</p>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-primary" id="wishlist-login-redirect-btn">
              <i class="fa-solid fa-right-to-bracket"></i> Log In Now
            </button>
            <button class="btn btn-outline" id="wishlist-back-menu-btn">
              <i class="fa-solid fa-utensils"></i> Browse Menu
            </button>
          </div>
        </div>
      </div>
    `;const i=document.getElementById("wishlist-login-redirect-btn");i&&(i.onclick=()=>f.setView("login"));const r=document.getElementById("wishlist-back-menu-btn");r&&(r.onclick=()=>f.setView("menu"));return}const e=f.dishes.filter(i=>f.wishlist.includes(i.id));t.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-heart" style="color: var(--accent-red);"></i> My Saved Wishlist</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Keep track of your favorite gourmet dishes for quick future orders.</p>
        </div>
        <span class="badge badge-primary" style="font-size: 0.9rem; padding: 0.4rem 1rem;">${e.length} Saved Items</span>
      </div>

      ${e.length===0?`
        <div style="text-align: center; padding: 5rem 1.5rem; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color);">
          <div style="width: 80px; height: 80px; border-radius: var(--radius-full); background: rgba(239, 68, 68, 0.1); color: var(--accent-red); display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1.5rem auto;">
            <i class="fa-regular fa-heart"></i>
          </div>
          <h2 style="font-size: 1.6rem; font-weight: 700; margin-bottom: 0.5rem;">Your Wishlist is Empty</h2>
          <p style="color: var(--text-muted); max-width: 420px; margin: 0 auto 2rem auto;">Browse our artisanal menu and click the heart icon on any dish to save it here.</p>
          <button class="btn btn-primary btn-lg" id="wishlist-explore-btn">
            <i class="fa-solid fa-book-open"></i> Explore Menu Now
          </button>
        </div>
      `:`
        <div class="menu-grid">
          ${e.map(i=>`
            <div class="dish-card">
              <div class="dish-media">
                <img src="${i.image}" alt="${i.name}" class="dish-img">
                <button class="dish-wishlist-btn active" data-remove-wishlist="${i.id}" title="Remove from Wishlist">
                  <i class="fa-solid fa-heart"></i>
                </button>
              </div>

              <div class="dish-content">
                <div class="dish-header-row">
                  <h3 class="dish-title">${i.name}</h3>
                  <span class="dish-price">₹${i.price.toFixed(2)}</span>
                </div>

                <p class="dish-desc">${i.description}</p>

                <div class="dish-meta">
                  <span><i class="fa-solid fa-star" style="color: var(--accent-gold);"></i> ${i.rating}</span>
                  <span><i class="fa-solid fa-clock"></i> ${i.prepTime}</span>
                </div>

                <div class="dish-card-actions">
                  <button class="btn btn-primary btn-full add-cart-btn" data-wishlist-add="${i.id}">
                    <i class="fa-solid fa-cart-plus"></i> Move to Cart
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      `}
    </section>
  `;const s=document.getElementById("wishlist-explore-btn");s&&(s.onclick=()=>f.setView("menu")),document.querySelectorAll("[data-remove-wishlist]").forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-remove-wishlist");f.toggleWishlist(r),y("Item removed from Wishlist","info"),rs(t)}}),document.querySelectorAll("[data-wishlist-add]").forEach(i=>{i.onclick=()=>{const r=i.getAttribute("data-wishlist-add"),n=f.dishes.find(a=>a.id===r);n&&(f.addToCart(r,1),y(`Moved ${n.name} to Cart!`,"success"))}})}function He(){const t=document.getElementById("cart-drawer-body");if(!t)return;const e=f.getCartTotal(),s=f.cart;t.innerHTML=`
    <div class="cart-header">
      <h3 style="font-size: 1.25rem; font-weight: 800; display: flex; align-items: center; gap: 0.5rem;">
        <i class="fa-solid fa-basket-shopping" style="color: var(--primary);"></i> Your Cart Order
      </h3>
      <button class="modal-close" id="close-cart-drawer-btn" aria-label="Close Cart">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>

    ${s.length===0?`
      <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 2rem; text-align: center;">
        <i class="fa-solid fa-cart-arrow-down" style="font-size: 3.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h4 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem;">Your Cart is empty</h4>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.5rem;">Add some mouth-watering gourmet dishes from our menu!</p>
        <button class="btn btn-primary" id="cart-start-ordering-btn">Explore Menu</button>
      </div>
    `:`
      <div class="cart-items-list">
        ${s.map((d,h)=>{const u=f.dishes.find(m=>m.id===d.dishId);return u?`
            <div class="cart-item-card">
              <img src="${u.image}" alt="${u.name}" class="cart-item-thumb">
              <div class="cart-item-info">
                <h4 class="cart-item-title">${u.name}</h4>
                ${d.options?`<p class="cart-item-opts"><i class="fa-solid fa-sliders"></i> ${d.options}</p>`:""}
                
                <div class="cart-item-price-row">
                  <span style="font-weight: 700; color: var(--primary);">₹${(d.price*d.qty).toFixed(2)}</span>

                  <div class="qty-control">
                    <button class="qty-btn" data-qty-change="${h}" data-delta="-1"><i class="fa-solid fa-minus"></i></button>
                    <span class="qty-num">${d.qty}</span>
                    <button class="qty-btn" data-qty-change="${h}" data-delta="1"><i class="fa-solid fa-plus"></i></button>
                  </div>
                </div>
              </div>
            </div>
          `:""}).join("")}

        <!-- Promo Code Box -->
        <div style="margin-top: 1rem; background: var(--bg-dark); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <label style="font-size: 0.82rem; font-weight: 700; color: var(--text-sub); display: block; margin-bottom: 0.4rem;">
            <i class="fa-solid fa-ticket" style="color: var(--accent-gold);"></i> Promo Code / Voucher
          </label>
          <div style="display: flex; gap: 0.5rem;">
            <input type="text" id="coupon-input-field" class="form-input" style="padding: 0.45rem 0.75rem; font-size: 0.88rem;" placeholder="e.g. WELCOME20" value="${f.appliedCoupon?f.appliedCoupon.code:""}">
            <button class="btn btn-secondary btn-sm" id="apply-coupon-btn">Apply</button>
          </div>
          ${f.appliedCoupon?`
            <div style="font-size: 0.8rem; color: var(--accent-green); font-weight: 600; margin-top: 0.4rem; display: flex; align-items: center; gap: 0.3rem;">
              <i class="fa-solid fa-check"></i> ${f.appliedCoupon.discountPercent}% Discount Active!
            </div>
          `:""}
        </div>
      </div>

      <div class="cart-footer">
        <div class="bill-row">
          <span>Subtotal</span>
          <span>₹${e.subtotal.toFixed(2)}</span>
        </div>
        ${e.discountAmount>0?`
          <div class="bill-row" style="color: var(--accent-green);">
            <span>Discount (${f.appliedCoupon.code})</span>
            <span>-₹${e.discountAmount.toFixed(2)}</span>
          </div>
        `:""}
        <div class="bill-row">
          <span>Service Tax (8%)</span>
          <span>₹${e.tax.toFixed(2)}</span>
        </div>
        <div class="bill-row">
          <span>Local Delivery Fee</span>
          <span>₹${e.deliveryFee.toFixed(2)}</span>
        </div>

        <div class="bill-row total">
          <span>Grand Total</span>
          <span class="price">₹${e.grandTotal.toFixed(2)}</span>
        </div>

        <button class="btn btn-primary btn-lg btn-full" id="checkout-trigger-btn" style="margin-top: 1.25rem;">
          <span>Proceed to Checkout</span>
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    `}
  `;const i=document.getElementById("close-cart-drawer-btn"),r=document.getElementById("cart-overlay"),n=document.getElementById("cart-drawer"),a=()=>{n&&n.classList.add("hidden")};i&&(i.onclick=a),r&&(r.onclick=a);const o=document.getElementById("cart-start-ordering-btn");o&&(o.onclick=()=>{a(),f.setView("menu")}),document.querySelectorAll("[data-qty-change]").forEach(d=>{d.onclick=()=>{const h=parseInt(d.getAttribute("data-qty-change")),u=parseInt(d.getAttribute("data-delta")),m=f.cart[h];m&&(f.updateCartQty(h,m.qty+u),He())}});const l=document.getElementById("apply-coupon-btn");l&&(l.onclick=()=>{const d=document.getElementById("coupon-input-field");if(d){const h=f.applyCoupon(d.value);h.success?y(h.message,"success"):y(h.message,"info"),He()}});const c=document.getElementById("checkout-trigger-btn");c&&(c.onclick=()=>{a(),go()})}function go(){const t=f.getCartTotal(),e=f.profile;e.addresses.find(a=>a.isDefault)||e.addresses[0];const s=`
    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-sub);">
        <i class="fa-solid fa-motorcycle" style="color: var(--primary);"></i> 1. Select Fulfillment Mode
      </h4>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
        <label style="background: var(--bg-input); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-active); display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <input type="radio" name="fulfillment" value="Delivery" checked>
          <div>
            <div style="font-weight: 700; font-size: 0.9rem;">Doorstep Delivery</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">20 - 30 min</div>
          </div>
        </label>
        <label style="background: var(--bg-input); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; gap: 0.5rem; cursor: pointer;">
          <input type="radio" name="fulfillment" value="Pickup">
          <div>
            <div style="font-weight: 700; font-size: 0.9rem;">Store Pickup</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Ready in 15 min</div>
          </div>
        </label>
      </div>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-sub);">
        <i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> 2. Delivery Address
      </h4>
      <select id="checkout-address-select" class="form-select">
        ${e.addresses.map(a=>`
          <option value="${a.street}, ${a.city} ${a.zip}">${a.label}: ${a.street}, ${a.city}</option>
        `).join("")}
      </select>
    </div>

    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: var(--text-sub);">
        <i class="fa-solid fa-credit-card" style="color: var(--primary);"></i> 3. Payment Method
      </h4>
      <div style="display: flex; flex-direction: column; gap: 0.5rem;">
        <label style="background: var(--bg-input); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
          <span style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; font-weight: 600;">
            <input type="radio" name="payment" value="Credit/Debit Card" checked>
            <i class="fa-solid fa-credit-card"></i> Credit / Debit Card (Visa, Mastercard)
          </span>
          <span style="font-size: 0.75rem; color: var(--accent-green);">Instant</span>
        </label>
        <label style="background: var(--bg-input); padding: 0.75rem 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; align-items: center; justify-content: space-between; cursor: pointer;">
          <span style="display: flex; align-items: center; gap: 0.6rem; font-size: 0.9rem; font-weight: 600;">
            <input type="radio" name="payment" value="Cash on Delivery">
            <i class="fa-solid fa-money-bill-wave"></i> Cash / Pay on Delivery
          </span>
        </label>
      </div>
    </div>

    <div style="background: var(--bg-input); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
      <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 1.1rem;">
        <span>Total Payable</span>
        <span style="color: var(--primary);">₹${t.grandTotal.toFixed(2)}</span>
      </div>
    </div>
  `,i=`
    <button class="btn btn-secondary" id="checkout-cancel-btn">Cancel</button>
    <button class="btn btn-primary btn-lg" id="confirm-pay-btn">
      <i class="fa-solid fa-lock"></i> Place Order (₹${t.grandTotal.toFixed(2)})
    </button>
  `;W({title:"Complete Your Order",bodyHTML:s,footerHTML:i});const r=document.getElementById("checkout-cancel-btn");r&&(r.onclick=C);const n=document.getElementById("confirm-pay-btn");n&&(n.onclick=()=>{const a=document.getElementById("checkout-address-select").value,o=document.querySelector('input[name="fulfillment"]:checked').value,l=f.placeOrder({deliveryAddress:a,fulfillmentType:o,subtotal:t.subtotal,discount:t.discountAmount,tax:t.tax,deliveryFee:t.deliveryFee,total:t.grandTotal,estimatedEta:"20-25 minutes",driverName:"Srinivas Rao",driverPhone:"+91 98480 88990"});C(),y(`Order #${l.id} Placed Successfully!`,"success"),f.setView("orders")})}function Ri(t){if(!f.isLoggedIn()){t.innerHTML=`
      <div class="container" style="padding: 4rem 1.5rem; text-align: center;">
        <div class="auth-restricted-card">
          <div class="restricted-icon" style="background: var(--primary-light); color: var(--primary);"><i class="fa-solid fa-clock-rotate-left"></i></div>
          <h2>Authentication Required</h2>
          <p>Please log in to your account to view live order tracking and past dining receipts.</p>
          <div style="margin-top: 1.5rem; display: flex; gap: 1rem; justify-content: center;">
            <button class="btn btn-primary" id="orders-login-redirect-btn">
              <i class="fa-solid fa-right-to-bracket"></i> Log In Now
            </button>
            <button class="btn btn-outline" id="orders-back-menu-btn">
              <i class="fa-solid fa-utensils"></i> Browse Menu
            </button>
          </div>
        </div>
      </div>
    `;const r=document.getElementById("orders-login-redirect-btn");r&&(r.onclick=()=>f.setView("login"));const n=document.getElementById("orders-back-menu-btn");n&&(n.onclick=()=>f.setView("menu"));return}const e=f.orders.filter(r=>r.status!=="delivered"),s=f.orders.filter(r=>r.status==="delivered");t.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-clock-rotate-left" style="color: var(--primary);"></i> Order Tracker & History</h1>
        <p style="color: var(--text-muted); font-size: 0.95rem;">Track live kitchen prep, real-time delivery status, and review past dining receipts.</p>
      </div>

      <!-- Active Order Section -->
      ${e.length>0?`
        <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.6rem;">
          <span class="pulse-dot"></span> Active Live Orders (${e.length})
        </h2>

        ${e.map(r=>bo(r)).join("")}
      `:`
        <div style="background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border-color); padding: 2rem; text-align: center; margin-bottom: 2.5rem;">
          <i class="fa-solid fa-bell-concierge" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 0.75rem;"></i>
          <h3 style="font-size: 1.2rem; font-weight: 700;">No Active Live Orders Right Now</h3>
          <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.2rem;">Place a new order from our menu to track live kitchen preparation!</p>
          <button class="btn btn-outline btn-sm" id="active-order-explore-btn">Go to Menu</button>
        </div>
      `}

      <!-- Order History Section -->
      <div style="margin-top: 3rem;">
        <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem;">
          <i class="fa-solid fa-receipt" style="color: var(--accent-gold);"></i> Completed Past Orders
        </h2>

        ${s.length===0?`
          <p style="color: var(--text-muted);">No completed past orders yet.</p>
        `:`
          <div style="display: flex; flex-direction: column; gap: 1.25rem;">
            ${s.map(r=>`
              <div class="dish-card" style="padding: 1.5rem; flex-direction: row; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                <div>
                  <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.5rem;">
                    <span class="order-id-badge">${r.id}</span>
                    <span class="badge badge-green"><i class="fa-solid fa-check-double"></i> Delivered</span>
                    <span style="font-size: 0.82rem; color: var(--text-muted);">${new Date(r.date).toLocaleDateString()}</span>
                  </div>
                  <div style="font-size: 0.9rem; color: var(--text-sub); margin-bottom: 0.3rem;">
                    ${r.items.map(n=>`${n.qty}x ${n.name}`).join(", ")}
                  </div>
                  <div style="font-size: 0.85rem; color: var(--text-muted);">
                    Address: ${r.deliveryAddress}
                  </div>
                </div>

                <div style="display: flex; align-items: center; gap: 1.5rem;">
                  <span style="font-size: 1.3rem; font-weight: 800; color: var(--primary);">₹${r.total.toFixed(2)}</span>
                  <button class="btn btn-outline btn-sm reorder-btn" data-reorder-id="${r.id}">
                    <i class="fa-solid fa-rotate-right"></i> Reorder Items
                  </button>
                </div>
              </div>
            `).join("")}
          </div>
        `}
      </div>
    </section>
  `;const i=document.getElementById("active-order-explore-btn");i&&(i.onclick=()=>f.setView("menu")),document.querySelectorAll("[data-reorder-id]").forEach(r=>{r.onclick=()=>{const n=r.getAttribute("data-reorder-id"),a=f.orders.find(o=>o.id===n);a&&(a.items.forEach(o=>{f.addToCart(o.dishId,o.qty,o.opts||"")}),y("Items re-added to Cart!","success"),f.setView("menu"))}})}function bo(t){const e=t.status==="preparing"||t.status==="ready"||t.status==="delivered",s=t.status==="ready"||t.status==="delivered",i=t.status==="delivered";return`
    <div class="order-tracker-card">
      <div class="tracker-header">
        <div>
          <span class="order-id-badge">${t.id}</span>
          <span style="font-size: 0.85rem; color: var(--text-muted); margin-left: 0.75rem;">
            Placed at ${new Date(t.date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}
          </span>
        </div>
        <span class="badge badge-gold" style="font-size: 0.85rem;">
          <i class="fa-solid fa-truck-ramp-box"></i> ${t.fulfillmentType}
        </span>
      </div>

      <div class="eta-timer-box">
        <i class="fa-solid fa-fire-burner"></i>
        <div>
          <div class="eta-time">${t.status==="placed"?"25 Mins":t.status==="preparing"?"18 Mins":t.status==="ready"?"Out for Delivery":"Delivered!"}</div>
          <div style="font-size: 0.85rem; color: var(--text-sub);">
            ${t.status==="placed"?"Kitchen is reviewing your order details":t.status==="preparing"?"Chef is preparing your fresh meal":t.status==="ready"?"Delivery partner is on the way!":"Enjoy your meal!"}
          </div>
        </div>
      </div>

      <!-- Timeline Stepper -->
      <div class="order-stepper">
        <div class="step-item ${e?"completed":"active"}">
          <div class="step-icon"><i class="fa-solid fa-check"></i></div>
          <div class="step-label">Order Placed</div>
          <div class="step-time">Confirmed</div>
        </div>

        <div class="step-item ${e?s?"completed":"active":""}">
          <div class="step-icon"><i class="fa-solid fa-utensils"></i></div>
          <div class="step-label">Kitchen Prep</div>
          <div class="step-time">In Progress</div>
        </div>

        <div class="step-item ${s?i?"completed":"active":""}">
          <div class="step-icon"><i class="fa-solid fa-motorcycle"></i></div>
          <div class="step-label">Out for Delivery</div>
          <div class="step-time">En Route</div>
        </div>

        <div class="step-item ${i?"completed":""}">
          <div class="step-icon"><i class="fa-solid fa-house-chimney"></i></div>
          <div class="step-label">Delivered</div>
          <div class="step-time">Step 4</div>
        </div>
      </div>

      <!-- Order Details Summary -->
      <div style="background: var(--bg-dark); border-radius: var(--radius-md); padding: 1.25rem; border: 1px solid var(--border-color); display: flex; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-sub);">Ordered Items Summary</h4>
          <ul style="font-size: 0.88rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 0.3rem;">
            ${t.items.map(r=>`
              <li><strong style="color: var(--text-main);">${r.qty}x</strong> ${r.name} ${r.opts?`(${r.opts})`:""} - <strong>₹${(r.price*r.qty).toFixed(2)}</strong></li>
            `).join("")}
          </ul>
        </div>

        <div>
          <h4 style="font-size: 0.95rem; font-weight: 700; margin-bottom: 0.5rem; color: var(--text-sub);">Delivery Information</h4>
          <div style="font-size: 0.88rem; color: var(--text-muted);">
            <div><i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> ${t.deliveryAddress}</div>
            <div style="margin-top: 0.4rem;"><i class="fa-solid fa-user-ninja"></i> Driver: <strong>${t.driverName}</strong> (${t.driverPhone})</div>
            <div style="margin-top: 0.4rem; font-size: 1.1rem; font-weight: 800; color: var(--primary);">Paid Total: ₹${t.total.toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  `}function es(t){const e=f.profile,s=(e.rewardPoints/10).toFixed(2),i=e.addresses||[],r=e.paymentMethods||[],n=f.reservations.filter(u=>{const m=u.customerName&&(u.customerName.toLowerCase()===e.name.toLowerCase()||f.currentUser&&u.customerName.toLowerCase()===f.currentUser.name.toLowerCase()),p=u.phone&&e.phone&&u.phone.includes(e.phone.replace(/[^0-9]/g,"").slice(-8)),g=u.email&&(u.email.toLowerCase()===e.email.toLowerCase()||f.currentUser&&u.email.toLowerCase()===f.currentUser.email.toLowerCase());return m||p||g}),a=n.length>0?n:f.reservations;t.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <div>
          <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-user-gear" style="color: var(--primary);"></i> Account Settings & Bookings</h1>
          <p style="font-size: 0.95rem; color: var(--text-muted);">Manage your profile details, delivery addresses, payment methods, and online table bookings.</p>
        </div>

        <button class="btn btn-outline btn-sm" id="edit-profile-details-btn" style="border-color: var(--primary); color: var(--primary);">
          <i class="fa-solid fa-pen-to-square"></i> Edit Profile Info
        </button>
      </div>

      <div class="account-layout">
        <!-- Sidebar Profile Card -->
        <aside>
          <div class="profile-card">
            <div class="avatar-wrapper">
              <i class="fa-solid fa-user"></i>
            </div>
            <h3 style="font-size: 1.3rem; font-weight: 800; margin-bottom: 0.2rem;">${e.name}</h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.4rem;">${e.email}</p>
            <p style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 1rem;"><i class="fa-solid fa-phone"></i> ${e.phone}</p>

            <span class="badge badge-gold" style="font-size: 0.8rem; margin-bottom: 1.5rem;">
              <i class="fa-solid fa-crown"></i> ${e.loyaltyTier||"Gold Gourmet Member"}
            </span>

            <!-- Loyalty Reward Cash Box -->
            <div style="background: var(--bg-dark); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: left; margin-bottom: 1.5rem;">
              <div style="font-size: 0.82rem; color: var(--text-sub); margin-bottom: 0.3rem;">
                <i class="fa-solid fa-coins" style="color: var(--accent-gold);"></i> Gourmet Reward Points
              </div>
              <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent-gold);">${e.rewardPoints} Points</div>
              <div style="font-size: 0.78rem; color: var(--accent-green); font-weight: 600; margin-top: 0.25rem; margin-bottom: 0.75rem;">
                = ₹${s} Redeemable Discount Cash
              </div>

              <button class="btn btn-primary btn-sm btn-full" id="redeem-points-btn" ${e.rewardPoints<100?"disabled":""}>
                <i class="fa-solid fa-gift"></i> ${e.rewardPoints>=100?"Redeem Cash Credit":"Min 100 Points to Redeem"}
              </button>
            </div>

            <!-- Navigation Tabs -->
            <div class="account-nav">
              <button class="account-nav-btn active" data-tab="addresses">
                <i class="fa-solid fa-map-location-dot"></i> Saved Addresses (${i.length})
              </button>
              <button class="account-nav-btn" data-tab="payments">
                <i class="fa-solid fa-credit-card"></i> Payment Methods (${r.length})
              </button>
              <button class="account-nav-btn" data-tab="reservations">
                <i class="fa-solid fa-calendar-check"></i> My Table Bookings (${a.length})
              </button>
            </div>
          </div>
        </aside>

        <!-- Main Account Content -->
        <main>
          <!-- Addresses Panel -->
          <div id="account-tab-addresses">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 700;">Delivery Address Book</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Manage your default home, office, and delivery addresses.</p>
              </div>

              <button class="btn btn-primary btn-sm" id="add-new-address-btn">
                <i class="fa-solid fa-plus"></i> Add New Address
              </button>
            </div>

            <div class="address-grid">
              ${i.map(u=>`
                <div class="address-card ${u.isDefault?"default":""}">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span style="font-weight: 700; font-size: 1rem; color: var(--text-main); display: flex; align-items: center; gap: 0.4rem;">
                      <i class="fa-solid ${u.label.toLowerCase().includes("home")?"fa-house-chimney":u.label.toLowerCase().includes("work")?"fa-building":"fa-location-dot"}" style="color: var(--primary);"></i>
                      ${u.label}
                    </span>
                    ${u.isDefault?'<span class="badge badge-primary">Default</span>':`
                      <button class="btn btn-outline btn-sm set-default-addr-btn" data-default-addr-id="${u.id}" style="font-size: 0.75rem; padding: 0.2rem 0.5rem;">
                        Make Default
                      </button>
                    `}
                  </div>

                  <p style="font-size: 0.9rem; color: var(--text-sub); margin-bottom: 0.5rem; line-height: 1.4;">
                    ${u.street}<br>
                    ${u.city}, ${u.zip}
                  </p>

                  <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                    <span><i class="fa-solid fa-phone"></i> ${e.phone}</span>

                    <div style="display: flex; gap: 0.4rem;">
                      <button class="btn btn-secondary btn-sm edit-addr-btn" data-edit-addr-id="${u.id}" title="Edit Address">
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button class="btn btn-outline btn-sm delete-addr-btn" data-delete-addr-id="${u.id}" style="color: #ef4444; border-color: #ef4444;" title="Delete Address">
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- Payment Methods Panel -->
          <div id="account-tab-payments" style="display: none;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 700;">Saved Payment Methods</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Manage saved credit cards, debit cards, and UPI IDs for 1-click checkout.</p>
              </div>

              <button class="btn btn-primary btn-sm" id="add-new-payment-btn">
                <i class="fa-solid fa-plus"></i> Add Payment Method
              </button>
            </div>

            <div class="address-grid">
              ${r.map(u=>`
                <div class="address-card ${u.isPrimary?"default":""}">
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span style="font-weight: 700; font-size: 1rem; color: var(--text-main); display: flex; align-items: center; gap: 0.4rem;">
                      <i class="fa-solid ${u.type==="card"?"fa-credit-card":"fa-mobile-screen-button"}" style="color: var(--primary);"></i>
                      ${u.title}
                    </span>
                    ${u.isPrimary?'<span class="badge badge-primary">Primary</span>':`
                      <button class="btn btn-outline btn-sm set-primary-pay-btn" data-primary-pay-id="${u.id}" style="font-size: 0.75rem; padding: 0.2rem 0.5rem;">
                        Make Primary
                      </button>
                    `}
                  </div>

                  <p style="font-size: 0.95rem; font-weight: 700; color: var(--accent-gold); margin-bottom: 0.5rem;">
                    ${u.cardNumber||u.upiId}
                  </p>

                  <div style="font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                    <span>${u.expiry?`Expires: ${u.expiry}`:"Verified UPI"}</span>
                    <button class="btn btn-outline btn-sm delete-pay-btn" data-delete-pay-id="${u.id}" style="color: #ef4444; border-color: #ef4444;" title="Delete Payment Method">
                      <i class="fa-solid fa-trash"></i>
                    </button>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <!-- My Table Reservations Panel -->
          <div id="account-tab-reservations" style="display: none;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem; flex-wrap: wrap; gap: 1rem;">
              <div>
                <h3 style="font-size: 1.25rem; font-weight: 700;"><i class="fa-solid fa-calendar-check" style="color: var(--primary);"></i> My Table Reservations</h3>
                <p style="font-size: 0.85rem; color: var(--text-muted);">View status of online dining tables reserved at Savory Bites Bistro.</p>
              </div>

              <button class="btn btn-primary btn-sm" id="book-new-table-user-btn">
                <i class="fa-solid fa-chair"></i> Book Another Table
              </button>
            </div>

            ${a.length===0?`
              <div class="empty-state" style="padding: 3rem; text-align: center; background: var(--bg-card); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
                <i class="fa-solid fa-chair" style="font-size: 2.5rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
                <h4 style="font-size: 1.1rem;">No Table Reservations Found</h4>
                <p style="color: var(--text-muted); font-size: 0.85rem; margin-top: 0.4rem;">You haven't reserved a table yet. Book a dining table online at your nearest branch!</p>
              </div>
            `:`
              <div class="address-grid">
                ${a.map(u=>`
                  <div class="address-card" style="border-left: 4px solid ${u.status==="confirmed"?"var(--accent-green)":u.status==="pending"?"var(--accent-gold)":"var(--border-color)"};">
                    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                      <span style="font-weight: 700; font-size: 1rem; color: var(--text-main);">
                        Booking ID: ${u.id}
                      </span>
                      <span class="badge ${u.status==="confirmed"?"badge-green":u.status==="completed"?"badge-primary":"badge-gold"}">
                        ${u.status?u.status.toUpperCase():"CONFIRMED"}
                      </span>
                    </div>

                    <div style="font-size: 0.9rem; color: var(--text-sub); display: flex; flex-direction: column; gap: 0.35rem; margin-bottom: 0.75rem;">
                      <div><i class="fa-solid fa-building" style="color: var(--primary);"></i> <strong>${u.locationName}</strong></div>
                      <div><i class="fa-solid fa-calendar-day"></i> Date: <strong>${u.date}</strong> at <strong>${u.time}</strong></div>
                      <div><i class="fa-solid fa-users"></i> Guests: <strong>${u.guests}</strong></div>
                      ${u.specialRequests?`<div><i class="fa-solid fa-comment-dots"></i> Request: <em>"${u.specialRequests}"</em></div>`:""}
                    </div>

                    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                      <span style="font-size: 0.8rem; color: var(--text-muted);"><i class="fa-solid fa-user"></i> ${u.customerName} (${u.phone})</span>
                      ${u.status!=="cancelled"?`
                        <button class="btn btn-outline btn-xs user-cancel-res-btn" data-user-res-id="${u.id}" style="color: #ef4444; border-color: #ef4444;">
                          Cancel Booking
                        </button>
                      `:'<span style="font-size: 0.8rem; color: #ef4444;">Cancelled</span>'}
                    </div>
                  </div>
                `).join("")}
              </div>
            `}
          </div>
        </main>
      </div>
    </section>
  `;const o=document.getElementById("edit-profile-details-btn");o&&(o.onclick=()=>yo());const l=document.getElementById("redeem-points-btn");l&&(l.onclick=()=>wo()),document.querySelectorAll("[data-tab]").forEach(u=>{u.onclick=()=>{document.querySelectorAll("[data-tab]").forEach(v=>v.classList.remove("active")),u.classList.add("active");const m=u.getAttribute("data-tab"),p=document.getElementById("account-tab-addresses"),g=document.getElementById("account-tab-payments"),b=document.getElementById("account-tab-reservations");p&&(p.style.display=m==="addresses"?"block":"none"),g&&(g.style.display=m==="payments"?"block":"none"),b&&(b.style.display=m==="reservations"?"block":"none")}});const c=document.getElementById("book-new-table-user-btn");c&&(c.onclick=()=>f.setView("location")),t.querySelectorAll(".user-cancel-res-btn").forEach(u=>{u.onclick=async()=>{const m=u.getAttribute("data-user-res-id");confirm("Are you sure you want to cancel this table booking?")&&(await f.updateReservationStatus(m,"cancelled"),y(`Table reservation ${m} cancelled`,"info"))}});const d=document.getElementById("add-new-address-btn");d&&(d.onclick=()=>Js()),document.querySelectorAll(".edit-addr-btn").forEach(u=>{u.onclick=()=>{const m=u.getAttribute("data-edit-addr-id"),p=f.profile.addresses.find(g=>g.id===m);p&&Js(t,p)}}),document.querySelectorAll(".delete-addr-btn").forEach(u=>{u.onclick=()=>{const m=u.getAttribute("data-delete-addr-id");confirm("Delete this address?")&&(f.deleteAddress(m),y("Address removed","info"))}}),document.querySelectorAll(".set-default-addr-btn").forEach(u=>{u.onclick=()=>{const m=u.getAttribute("data-default-addr-id");f.setDefaultAddress(m),y("Default delivery address updated","success")}});const h=document.getElementById("add-new-payment-btn");h&&(h.onclick=()=>vo()),document.querySelectorAll(".delete-pay-btn").forEach(u=>{u.onclick=()=>{const m=u.getAttribute("data-delete-pay-id");confirm("Delete this payment method?")&&(f.deletePaymentMethod(m),y("Payment method removed","info"))}}),document.querySelectorAll(".set-primary-pay-btn").forEach(u=>{u.onclick=()=>{const m=u.getAttribute("data-primary-pay-id");f.setDefaultPayment(m),y("Primary payment method updated","success")}})}function yo(t){const e=f.profile,s=`
    <div class="form-group">
      <label class="form-label">Full Name *</label>
      <input type="text" id="edit-profile-name" class="form-input" required value="${e.name}">
    </div>

    <div class="form-group">
      <label class="form-label">Email Address *</label>
      <input type="email" id="edit-profile-email" class="form-input" required value="${e.email}">
    </div>

    <div class="form-group">
      <label class="form-label">Phone Number *</label>
      <input type="text" id="edit-profile-phone" class="form-input" required value="${e.phone}">
    </div>

    <div class="form-group">
      <label class="form-label">Loyalty Tier</label>
      <input type="text" class="form-input" disabled value="${e.loyaltyTier||"Gold Gourmet"}">
    </div>
  `;W({title:"Edit Profile Information",bodyHTML:s,footerHTML:`
    <button class="btn btn-secondary" id="modal-cancel-profile">Cancel</button>
    <button class="btn btn-primary" id="modal-save-profile">Save Profile</button>
  `}),document.getElementById("modal-cancel-profile").onclick=C,document.getElementById("modal-save-profile").onclick=()=>{const r=document.getElementById("edit-profile-name").value.trim(),n=document.getElementById("edit-profile-email").value.trim(),a=document.getElementById("edit-profile-phone").value.trim();if(!r||!n||!a){y("Please fill in name, email and phone","info");return}f.updateProfile({name:r,email:n,phone:a}),C(),y("Profile information updated successfully!","success")}}function Js(t,e=null){const s=!!e,i=`
    <div class="form-group">
      <label class="form-label">Address Label (Home, Work, etc.) *</label>
      <input type="text" id="addr-label" class="form-input" required value="${s?e.label:""}" placeholder="e.g. Home, Office, Parent's House">
    </div>

    <div class="form-group">
      <label class="form-label">Street Address & Apartment *</label>
      <input type="text" id="addr-street" class="form-input" required value="${s?e.street:""}" placeholder="e.g. Door No. 24-2-154, Dargamitta">
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
      <div class="form-group">
        <label class="form-label">City & State *</label>
        <input type="text" id="addr-city" class="form-input" required value="${s?e.city:"Nellore, Andhra Pradesh"}">
      </div>
      <div class="form-group">
        <label class="form-label">PIN Code *</label>
        <input type="text" id="addr-zip" class="form-input" required value="${s?e.zip:"524003"}">
      </div>
    </div>

    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub); cursor: pointer;">
      <input type="checkbox" id="addr-default" ${s?e.isDefault?"checked":"":"checked"}> Set as primary default delivery address
    </label>
  `,r=`
    <button class="btn btn-secondary" id="modal-cancel-addr">Cancel</button>
    <button class="btn btn-primary" id="modal-save-addr">${s?"Save Changes":"Add Address"}</button>
  `;W({title:s?`Edit Address (${e.label})`:"Add New Delivery Address",bodyHTML:i,footerHTML:r}),document.getElementById("modal-cancel-addr").onclick=C,document.getElementById("modal-save-addr").onclick=()=>{const n=document.getElementById("addr-label").value.trim()||"Other",a=document.getElementById("addr-street").value.trim(),o=document.getElementById("addr-city").value.trim()||"Nellore, Andhra Pradesh",l=document.getElementById("addr-zip").value.trim()||"524003",c=document.getElementById("addr-default").checked;if(!a){y("Please enter a street address","info");return}s?(f.updateAddress(e.id,{label:n,street:a,city:o,zip:l,isDefault:c}),y("Address updated!","success")):(f.addAddress({label:n,street:a,city:o,zip:l,isDefault:c}),y("New Address added!","success")),C()}}function vo(t){W({title:"Add Saved Payment Method",bodyHTML:`
    <div class="form-group">
      <label class="form-label">Payment Method Type</label>
      <select id="pay-type" class="form-select">
        <option value="card">Credit / Debit Card (Visa, Mastercard, RuPay)</option>
        <option value="upi">UPI ID (PhonePe, GPay, Paytm)</option>
      </select>
    </div>

    <div class="form-group">
      <label class="form-label">Title / Label</label>
      <input type="text" id="pay-title" class="form-input" placeholder="e.g. HDFC Credit Card or My PhonePe UPI">
    </div>

    <div id="card-fields">
      <div class="form-group">
        <label class="form-label">Card Number (Last 4 digits or Full)</label>
        <input type="text" id="pay-card-num" class="form-input" placeholder="•••• •••• •••• 5678">
      </div>
      <div class="form-group">
        <label class="form-label">Expiry Date</label>
        <input type="text" id="pay-expiry" class="form-input" placeholder="MM/YY e.g. 10/28">
      </div>
    </div>

    <div id="upi-fields" style="display: none;">
      <div class="form-group">
        <label class="form-label">UPI ID</label>
        <input type="text" id="pay-upi-id" class="form-input" placeholder="e.g. username@ybl or mobile@paytm">
      </div>
    </div>

    <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.9rem; color: var(--text-sub); cursor: pointer;">
      <input type="checkbox" id="pay-primary" checked> Set as primary default payment method
    </label>
  `,footerHTML:`
    <button class="btn btn-secondary" id="modal-cancel-pay">Cancel</button>
    <button class="btn btn-primary" id="modal-save-pay">Save Payment Method</button>
  `});const i=document.getElementById("pay-type");i.onchange=r=>{r.target.value==="card"?(document.getElementById("card-fields").style.display="block",document.getElementById("upi-fields").style.display="none"):(document.getElementById("card-fields").style.display="none",document.getElementById("upi-fields").style.display="block")},document.getElementById("modal-cancel-pay").onclick=C,document.getElementById("modal-save-pay").onclick=()=>{const r=i.value,n=document.getElementById("pay-title").value.trim()||(r==="card"?"Credit Card":"UPI ID"),a=document.getElementById("pay-primary").checked;if(r==="card"){const o=document.getElementById("pay-card-num").value.trim()||"5678",l=o.length===4?`•••• •••• •••• ${o}`:o,c=document.getElementById("pay-expiry").value.trim()||"12/28";f.addPaymentMethod({type:"card",title:n,cardNumber:l,expiry:c,isPrimary:a})}else{const o=document.getElementById("pay-upi-id").value.trim()||"user@upi";f.addPaymentMethod({type:"upi",title:n,upiId:o,isPrimary:a})}C(),y("New Payment Method Saved!","success")}}function wo(t){const e=f.profile,s=`
    <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.25rem;">
      You currently have <strong style="color: var(--accent-gold); font-size: 1.1rem;">${e.rewardPoints} Reward Points</strong>. Every 100 Points = ₹10.00 Discount Cash!
    </p>

    <div style="display: flex; flex-direction: column; gap: 0.75rem;">
      ${e.rewardPoints>=100?`
        <button class="btn btn-outline redeem-option-btn" data-redeem-pts="100" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem;">
          <span>Redeem 100 Points</span>
          <strong style="color: var(--accent-green);">₹10.00 Voucher</strong>
        </button>
      `:""}

      ${e.rewardPoints>=200?`
        <button class="btn btn-outline redeem-option-btn" data-redeem-pts="200" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem;">
          <span>Redeem 200 Points</span>
          <strong style="color: var(--accent-green);">₹20.00 Voucher</strong>
        </button>
      `:""}

      ${e.rewardPoints>=400?`
        <button class="btn btn-outline redeem-option-btn" data-redeem-pts="400" style="display: flex; justify-content: space-between; align-items: center; padding: 0.85rem;">
          <span>Redeem 400 Points</span>
          <strong style="color: var(--accent-green);">₹40.00 Voucher</strong>
        </button>
      `:""}
    </div>
  `;W({title:"Redeem Loyalty Points for Discount Cash",bodyHTML:s,footerHTML:`
    <button class="btn btn-secondary" id="modal-cancel-redeem">Close</button>
  `}),document.getElementById("modal-cancel-redeem").onclick=C,document.querySelectorAll("[data-redeem-pts]").forEach(r=>{r.onclick=()=>{const n=parseInt(r.getAttribute("data-redeem-pts")),a=f.redeemRewardPoints(n);a.success?(f.applyCoupon("WELCOME20"),y(`Redeemed ${n} Points! ₹${a.discountCash} discount applied to your active order!`,"success",6e3),C()):y(a.message,"info")}})}function Ct(t){var r,n,a;const e=f.selectedLocation||f.locations[0];t.innerHTML=`
    <section class="container" style="padding-top: 3rem; padding-bottom: 4rem;">
      <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
        <div>
          <h1 style="font-size: 2.2rem; font-weight: 800;"><i class="fa-solid fa-location-dot" style="color: var(--primary);"></i> Restaurant Locations & Table Booking</h1>
          <p style="color: var(--text-muted); font-size: 0.95rem;">Find your nearest Savory Bites Bistro branch in Nellore or reserve a dining table online.</p>
        </div>
      </div>

      <div class="locations-grid">
        <!-- Branch Selector & Details -->
        <div>
          <h2 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem;">Select Bistro Branch</h2>
          
          <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2rem;">
            ${f.locations.map(o=>`
              <div class="branch-card ${o.id===e.id?"active":""}" data-select-loc="${o.id}" style="${o.id===e.id?"border-color: var(--primary); background: rgba(255, 107, 53, 0.04);":""} cursor: pointer;">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
                  <h3 style="font-size: 1.15rem; font-weight: 700;">${o.name}</h3>
                  <div style="display: flex; align-items: center; gap: 0.5rem;">
                    <span class="badge badge-gold"><i class="fa-solid fa-star"></i> ${o.rating||"4.9"}</span>
                    <button class="btn btn-secondary btn-sm edit-branch-direct-btn" data-edit-loc-id="${o.id}" title="Edit Branch (Admin)">
                      <i class="fa-solid fa-pen-to-square"></i>
                    </button>
                  </div>
                </div>

                <div style="font-size: 0.9rem; color: var(--text-sub); display: flex; flex-direction: column; gap: 0.4rem;">
                  <div><i class="fa-solid fa-map-pin" style="color: var(--primary);"></i> ${o.address}</div>
                  <div><i class="fa-solid fa-phone"></i> ${o.phone}</div>
                  <div><i class="fa-solid fa-clock"></i> ${o.hours}</div>
                  <div><i class="fa-solid fa-truck"></i> Delivery Radius: ${o.deliveryRadius} (${o.avgDeliveryTime})</div>
                </div>

                <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
                  ${o.features.map(l=>`<span class="badge badge-primary">${l}</span>`).join("")}
                </div>
              </div>
            `).join("")}
          </div>
        </div>

        <!-- Map Visual & Online Reservation Form -->
        <div>
          <!-- Mock Interactive Map Visual -->
          <div class="mock-map-container">
            <div style="position: absolute; inset: 0; background: radial-gradient(circle at center, rgba(255,107,53,0.15) 0%, rgba(15,17,21,0.9) 80%);"></div>
            <div class="map-pin-pulse" style="z-index: 2;">
              <i class="fa-solid fa-location-dot"></i>
              <span style="font-size: 0.85rem; font-weight: 700; color: #fff; background: rgba(0,0,0,0.8); padding: 0.3rem 0.8rem; border-radius: var(--radius-full); border: 1px solid var(--primary);">
                ${e.name}
              </span>
            </div>
          </div>

          <!-- Table Reservation Form -->
          <div class="branch-card">
            <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-calendar-check" style="color: var(--primary);"></i> Online Table Reservation
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 1.25rem;">Book a dining table at <strong>${e.name}</strong> for your party.</p>

            <form id="reservation-form">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label">Customer Name *</label>
                  <input type="text" id="res-name" class="form-input" required value="${((r=f.profile)==null?void 0:r.name)||((n=f.currentUser)==null?void 0:n.name)||"Syam"}" placeholder="Your Full Name">
                </div>
                <div class="form-group">
                  <label class="form-label">Phone Number *</label>
                  <input type="tel" id="res-phone" class="form-input" required value="${((a=f.profile)==null?void 0:a.phone)||"+91 98480 12345"}" placeholder="+91 Mobile Number">
                </div>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
                <div class="form-group">
                  <label class="form-label">Date *</label>
                  <input type="date" id="res-date" class="form-input" required value="${new Date().toISOString().split("T")[0]}">
                </div>
                <div class="form-group">
                  <label class="form-label">Time *</label>
                  <select id="res-time" class="form-select">
                    <option value="18:00">6:00 PM</option>
                    <option value="19:00" selected>7:00 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div class="form-group">
                <label class="form-label">Number of Guests</label>
                <select id="res-guests" class="form-select">
                  <option value="2 Guests">2 Guests (Table for 2)</option>
                  <option value="4 Guests" selected>4 Guests (Family Table)</option>
                  <option value="6 Guests">6 Guests (Party)</option>
                  <option value="8+ Guests">8+ Guests (Private Room)</option>
                </select>
              </div>

              <div class="form-group">
                <label class="form-label">Special Requests (Optional)</label>
                <input type="text" id="res-notes" class="form-input" placeholder="e.g. Birthday celebration, window seating, high chair...">
              </div>

              <button type="submit" class="btn btn-primary btn-full btn-lg">
                <i class="fa-solid fa-chair"></i> Confirm Reservation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  `,document.querySelectorAll("[data-select-loc]").forEach(o=>{o.onclick=l=>{if(l.target.closest(".edit-branch-direct-btn"))return;const c=o.getAttribute("data-select-loc"),d=f.locations.find(h=>h.id===c);if(d){f.selectedLocation=d;const h=document.getElementById("header-location-name");h&&(h.textContent=d.name),Ct(t)}}}),document.querySelectorAll(".edit-branch-direct-btn").forEach(o=>{o.onclick=l=>{l.stopPropagation();const c=o.getAttribute("data-edit-loc-id"),d=f.locations.find(h=>h.id===c);d&&me(d)}});const s=document.getElementById("view-add-branch-btn");s&&(s.onclick=()=>me());const i=document.getElementById("reservation-form");i&&(i.onsubmit=async o=>{var g;o.preventDefault();const l=document.getElementById("res-name").value.trim(),c=document.getElementById("res-phone").value.trim(),d=document.getElementById("res-date").value,h=document.getElementById("res-time").value,u=document.getElementById("res-guests").value,m=document.getElementById("res-notes").value.trim(),p=await f.addReservation({customerName:l,phone:c,email:((g=f.currentUser)==null?void 0:g.email)||"customer@gmail.com",locationId:e.id,locationName:e.name,date:d,time:h,guests:u,specialRequests:m});p&&p.success&&(y(`Table Reserved for ${l} (${u}) at ${e.name} on ${d} @ ${h}!`,"success",6e3),i.reset())})}function ce(t){const e=f.orders.filter(d=>d.status!=="delivered"),i=f.orders.reduce((d,h)=>d+h.total,0),r=e.length;t.innerHTML=`
    <!-- Staff Banner -->
    <div class="staff-portal-banner">
      <div style="display: flex; align-items: center; gap: 0.75rem; color: #fff;">
        <i class="fa-solid fa-user-shield" style="font-size: 1.6rem; color: var(--accent-gold);"></i>
        <div>
          <h2 style="font-size: 1.25rem; font-weight: 800;">Restaurant Management & Staff Control Center</h2>
          <p style="font-size: 0.82rem; color: rgba(255,255,255,0.85);">Real-time kitchen orders, full menu editor, and branch location management</p>
        </div>
      </div>

      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">
        <button class="btn btn-primary btn-sm" id="admin-banner-add-dish">
          <i class="fa-solid fa-plus"></i> Add New Dish
        </button>
        <button class="btn btn-secondary btn-sm" id="admin-banner-add-branch">
          <i class="fa-solid fa-building-circle-check"></i> Add New Branch
        </button>
        <button class="btn btn-outline btn-sm" id="exit-staff-portal-btn" style="border-color: rgba(255,255,255,0.3); color: #fff;">
          <i class="fa-solid fa-right-from-bracket"></i> Customer View
        </button>
      </div>
    </div>

    <section class="container" style="padding-top: 2rem; padding-bottom: 4rem;">
      <!-- Daily Analytics Summary Cards -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; margin-bottom: 2.5rem;">
        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Total Daily Revenue</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-green);">₹${i.toFixed(2)}</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Active Kitchen Orders</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--primary);">${r} Pending</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Total Menu Dishes</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--accent-gold);">${f.dishes.length} Items</div>
        </div>

        <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.3rem;">Active Branches</div>
          <div style="font-size: 1.6rem; font-weight: 800; color: var(--text-main);">${f.locations.length} Outlets</div>
        </div>
      </div>

      <!-- Section 1: Live Kitchen Display System (KDS) -->
      <div style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <h2 style="font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
            <span class="pulse-dot"></span> Live Kitchen Orders Queue (${e.length})
          </h2>
          <span style="font-size: 0.85rem; color: var(--text-muted);">Changing order status updates customer tracker in real time</span>
        </div>

        ${e.length===0?`
          <div style="background: var(--bg-card); padding: 2.5rem; border-radius: var(--radius-lg); text-align: center; border: 1px solid var(--border-color);">
            <i class="fa-solid fa-circle-check" style="font-size: 2.5rem; color: var(--accent-green); margin-bottom: 0.75rem;"></i>
            <h3>All Kitchen Orders Cleared!</h3>
            <p style="color: var(--text-muted); font-size: 0.9rem;">No active pending orders right now.</p>
          </div>
        `:`
          <div class="staff-kds-grid">
            ${e.map(d=>`
              <div class="kds-card status-${d.status}">
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <span class="order-id-badge">${d.id}</span>
                  <span class="badge ${d.status==="placed"?"badge-gold":d.status==="preparing"?"badge-primary":"badge-green"}">
                    ${d.status.toUpperCase()}
                  </span>
                </div>

                <div style="font-size: 0.82rem; color: var(--text-muted); margin-bottom: 0.75rem;">
                  <i class="fa-solid fa-clock"></i> Placed ${new Date(d.date).toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})} • <strong>${d.fulfillmentType}</strong>
                </div>

                <div class="kds-order-items">
                  ${d.items.map(h=>`
                    <div style="display: flex; justify-content: space-between; font-size: 0.9rem; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.3rem;">
                      <span><strong style="color: var(--primary);">${h.qty}x</strong> ${h.name}</span>
                      <span style="font-size: 0.8rem; color: var(--text-muted);">${h.opts||""}</span>
                    </div>
                  `).join("")}
                </div>

                <div style="font-size: 0.85rem; color: var(--text-sub); margin-bottom: 1rem;">
                  <strong>Deliver to:</strong> ${d.deliveryAddress}
                </div>

                <div class="form-group" style="margin-bottom: 0;">
                  <label class="form-label" style="font-size: 0.8rem;">Change Order Status:</label>
                  <select class="form-select status-change-select" data-order-status-id="${d.id}">
                    <option value="placed" ${d.status==="placed"?"selected":""}>Placed (New)</option>
                    <option value="preparing" ${d.status==="preparing"?"selected":""}>Preparing in Kitchen 🔥</option>
                    <option value="ready" ${d.status==="ready"?"selected":""}>Out for Delivery 🛵</option>
                    <option value="delivered" ${d.status==="delivered"?"selected":""}>Mark Delivered / Completed ✅</option>
                  </select>
                </div>
              </div>
            `).join("")}
          </div>
        `}
      </div>

      <!-- Section 2: Menu Items & Inventory Control -->
      <div style="margin-bottom: 3.5rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
              <i class="fa-solid fa-utensils" style="color: var(--primary);"></i> Menu Items Editor & Inventory
            </h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Add new dishes, edit descriptions & pricing, toggle stock, or delete items.</p>
          </div>

          <button class="btn btn-primary" id="admin-add-dish-btn">
            <i class="fa-solid fa-plus"></i> Add New Menu Dish
          </button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem;">
          ${f.dishes.map(d=>`
            <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
              <div style="display: flex; gap: 1rem;">
                <img src="${d.image}" alt="${d.name}" style="width: 64px; height: 64px; border-radius: var(--radius-md); object-fit: cover;">
                <div style="flex: 1;">
                  <div style="font-weight: 700; font-size: 1rem; color: var(--text-main); margin-bottom: 0.2rem;">${d.name}</div>
                  <div style="font-size: 0.85rem; color: var(--primary); font-weight: 700;">₹${d.price.toFixed(2)} • <span style="color: var(--text-muted); font-weight: 400; text-transform: capitalize;">${d.category}</span></div>
                  <div style="font-size: 0.8rem; color: var(--text-sub); margin-top: 0.3rem; display: -webkit-box; -webkit-line-clamp: 2; line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">
                    ${d.description}
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; justify-content: space-between; padding-top: 0.75rem; border-top: 1px dashed var(--border-color); flex-wrap: wrap; gap: 0.5rem;">
                <button class="btn ${d.inStock?"btn-outline":"btn-primary"} btn-sm stock-toggle-btn" data-stock-dish-id="${d.id}">
                  ${d.inStock?'<i class="fa-solid fa-check"></i> In Stock':'<i class="fa-solid fa-ban"></i> Out of Stock'}
                </button>

                <div style="display: flex; gap: 0.4rem;">
                  <button class="btn btn-secondary btn-sm edit-dish-btn" data-edit-dish-id="${d.id}">
                    <i class="fa-solid fa-pen-to-square"></i> Edit
                  </button>
                  <button class="btn btn-outline btn-sm delete-dish-btn" data-delete-dish-id="${d.id}" style="color: #ef4444; border-color: #ef4444;">
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </div>
            </div>
          `).join("")}
        </div>
      </div>

      <!-- Section 3: Branch Locations Control -->
      <div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem; flex-wrap: wrap; gap: 1rem;">
          <div>
            <h2 style="font-size: 1.4rem; font-weight: 700; display: flex; align-items: center; gap: 0.6rem;">
              <i class="fa-solid fa-location-dot" style="color: var(--accent-gold);"></i> Restaurant Branch Outlets
            </h2>
            <p style="font-size: 0.85rem; color: var(--text-muted);">Manage restaurant branches, addresses, contact phones, and operating hours.</p>
          </div>

          <button class="btn btn-primary" id="admin-add-branch-btn">
            <i class="fa-solid fa-plus"></i> Add New Branch Outlet
          </button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 1.25rem;">
          ${f.locations.map(d=>`
            <div style="background: var(--bg-card); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); display: flex; flex-direction: column; justify-content: space-between; gap: 1rem;">
              <div>
                <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.5rem;">
                  <h3 style="font-size: 1.1rem; font-weight: 700;">${d.name}</h3>
                  <span class="badge badge-gold"><i class="fa-solid fa-star"></i> ${d.rating||"4.8"}</span>
                </div>

                <div style="font-size: 0.88rem; color: var(--text-sub); display: flex; flex-direction: column; gap: 0.35rem;">
                  <div><i class="fa-solid fa-map-pin" style="color: var(--primary);"></i> ${d.address}</div>
                  <div><i class="fa-solid fa-phone"></i> ${d.phone}</div>
                  <div><i class="fa-solid fa-clock"></i> ${d.hours}</div>
                  <div><i class="fa-solid fa-truck"></i> Radius: ${d.deliveryRadius} (${d.avgDeliveryTime})</div>
                </div>

                <div style="display: flex; gap: 0.4rem; flex-wrap: wrap; margin-top: 0.75rem;">
                  ${d.features.map(h=>`<span class="badge badge-primary" style="font-size: 0.75rem;">${h}</span>`).join("")}
                </div>
              </div>

              <div style="display: flex; justify-content: flex-end; gap: 0.5rem; padding-top: 0.75rem; border-top: 1px dashed var(--border-color);">
                <button class="btn btn-secondary btn-sm edit-loc-btn" data-edit-loc-id="${d.id}">
                  <i class="fa-solid fa-pen-to-square"></i> Edit Branch
                </button>
                <button class="btn btn-outline btn-sm delete-loc-btn" data-delete-loc-id="${d.id}" style="color: #ef4444; border-color: #ef4444;">
                  <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
  `;const n=document.getElementById("exit-staff-portal-btn");n&&(n.onclick=()=>f.setView("menu"));const a=document.getElementById("admin-banner-add-dish");a&&(a.onclick=()=>we());const o=document.getElementById("admin-add-dish-btn");o&&(o.onclick=()=>we());const l=document.getElementById("admin-banner-add-branch");l&&(l.onclick=()=>me());const c=document.getElementById("admin-add-branch-btn");c&&(c.onclick=()=>me()),document.querySelectorAll(".status-change-select").forEach(d=>{d.onchange=h=>{const u=d.getAttribute("data-order-status-id"),m=h.target.value;f.updateOrderStatus(u,m),y(`Order #${u} status updated to ${m.toUpperCase()}`,"success"),ce(t)}}),document.querySelectorAll(".stock-toggle-btn").forEach(d=>{d.onclick=()=>{const h=d.getAttribute("data-stock-dish-id");f.toggleDishStock(h);const u=f.dishes.find(m=>m.id===h);y(`${u.name} stock toggled: ${u.inStock?"In Stock":"Out of Stock"}`,"info"),ce(t)}}),document.querySelectorAll(".edit-dish-btn").forEach(d=>{d.onclick=()=>{const h=d.getAttribute("data-edit-dish-id"),u=f.dishes.find(m=>m.id===h);u&&we(u)}}),document.querySelectorAll(".delete-dish-btn").forEach(d=>{d.onclick=()=>{const h=d.getAttribute("data-delete-dish-id"),u=f.dishes.find(m=>m.id===h);u&&confirm(`Are you sure you want to delete "${u.name}"?`)&&(f.deleteDish(h),y(`Deleted ${u.name}`,"info"),ce(t))}}),document.querySelectorAll(".edit-loc-btn").forEach(d=>{d.onclick=()=>{const h=d.getAttribute("data-edit-loc-id"),u=f.locations.find(m=>m.id===h);u&&me(u)}}),document.querySelectorAll(".delete-loc-btn").forEach(d=>{d.onclick=()=>{const h=d.getAttribute("data-delete-loc-id"),u=f.locations.find(m=>m.id===h);if(u&&confirm(`Are you sure you want to delete branch "${u.name}"?`)){const m=f.deleteLocation(h);m.success?(y(`Deleted branch ${u.name}`,"info"),ce(t)):y(m.message,"info")}}})}function _o(){document.documentElement.setAttribute("data-theme",f.theme),ge(),He(),Ys(),f.subscribe((e,s)=>{e==="VIEW_CHANGED"||e==="THEME_CHANGED"||e==="AUTH_CHANGED"?(ge(),Ys()):e==="CART_UPDATED"||e==="COUPON_APPLIED"?(ge(),He()):e==="WISHLIST_UPDATED"?(ge(),f.activeView==="wishlist"&&rs(document.getElementById("app-view")),f.activeView==="menu"&&oe(document.getElementById("app-view"))):e==="ORDER_PLACED"||e==="ORDER_STATUS_UPDATED"?(ge(),He(),f.activeView==="orders"&&Ri(document.getElementById("app-view")),f.activeView==="admin"&&Me(document.getElementById("app-view")),f.activeView==="staff"&&ce(document.getElementById("app-view"))):e==="STOCK_UPDATED"?(f.activeView==="landing"&&st(document.getElementById("app-view")),f.activeView==="menu"&&oe(document.getElementById("app-view")),f.activeView==="admin"&&Me(document.getElementById("app-view")),f.activeView==="staff"&&ce(document.getElementById("app-view"))):e==="LOCATIONS_UPDATED"?(ge(),f.activeView==="landing"&&st(document.getElementById("app-view")),f.activeView==="location"&&Ct(document.getElementById("app-view")),f.activeView==="admin"&&Me(document.getElementById("app-view")),f.activeView==="staff"&&ce(document.getElementById("app-view"))):e==="RESERVATIONS_UPDATED"?(f.activeView==="location"&&Ct(document.getElementById("app-view")),f.activeView==="account"&&es(document.getElementById("app-view")),f.activeView==="admin"&&Me(document.getElementById("app-view")),f.activeView==="staff"&&ce(document.getElementById("app-view"))):e==="PROFILE_UPDATED"&&(ge(),f.activeView==="account"&&es(document.getElementById("app-view")))});const t=document.getElementById("footer-staff-toggle");t&&(t.onclick=()=>{f.isAdmin()?f.setView("admin"):f.setView("login")})}function Ys(){const t=document.getElementById("app-view");if(t)switch(f.activeView){case"landing":st(t);break;case"login":ze(t);break;case"admin":Me(t);break;case"menu":oe(t);break;case"wishlist":rs(t);break;case"orders":Ri(t);break;case"account":es(t);break;case"location":Ct(t);break;case"staff":ce(t);break;default:st(t);break}}document.addEventListener("DOMContentLoaded",_o);
