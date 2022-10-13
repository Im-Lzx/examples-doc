import{_ as i,o as t,c as r,b as o,F as C,r as A,t as F,g as u,p as h,a as d,d as g,e as D}from"./app.974abf16.js";const y={"zh-cn":{name:"\u540D\u79F0",hello:"\u4F60\u597D {name}"},"en-us":{name:"name",hello:"hello {name}"},"zh-tw":{}};const _={data(){return{languageResource:y,currentLanguage:"zh-cn",languageData:{},laArray:[{name:"\u4E2D\u6587 zh-cn",key:"zh-cn",active:1},{name:"\u82F1\u6587 en-us",key:"en-us",active:0},{name:"\u4E2D\u6587\u7E41\u4F53 zh-tw",key:"zh-tw",active:0}]}},created(){this.languageData=y[this.currentLanguage],this.$la("name")},methods:{selectLa(s){let{active:n,key:a}=s;n||(this.laArray.forEach(l=>{l.active=l.key==a}),this.currentLanguage=a,this.languageData=this.languageResource[a])},$la:function(s,n){var l;if(!this.currentLanguage)return"";if(!this.languageData)return;let a=this.languageData[s];if(a||(a=(l=this.languageResource["zh-cn"][s])!=null?l:this.languageResource["en-us"][s]),n&&Object.keys(n).length!=0)for(let e in n){const p=new RegExp("{"+e+"}","i");a=a.replace(p,n[e])}return a}}},E=s=>(h("data-v-ffcfee53"),s=s(),d(),s),v=E(()=>o("label",null,"\u8BF7\u9009\u62E9\u8BED\u8A00\uFF1A",-1)),m={class:"s-la-box"},f=["onClick"],k={class:"result"};function b(s,n,a,l,e,p){return t(),r("div",null,[v,o("div",m,[(t(!0),r(C,null,A(e.laArray,c=>(t(),r("div",{class:u(["s-la-op",c.active?"active":""]),key:c.key,onClick:L=>p.selectLa(c)},F(c.name),11,f))),128))]),o("div",k,[o("p",null,"\u8FD9\u662Fname\uFF1A"+F(p.$la("name")),1),o("p",null,"\u8FD9\u662Fhello\uFF1A"+F(p.$la("hello",{name:"\u670B\u53CB"})),1)])])}const x=i(_,[["render",b],["__scopeId","data-v-ffcfee53"]]),z=D('<h1 id="\u591A\u8BED\u8A00\u5B9E\u73B0" tabindex="-1">\u591A\u8BED\u8A00\u5B9E\u73B0 <a class="header-anchor" href="#\u591A\u8BED\u8A00\u5B9E\u73B0" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u5173\u952E\u8BCD</p><p>i18n</p></div><p>\u6211\u4EEC\u5728\u56FD\u9645\u5316\u7684\u9879\u76EE\u4E2D\u5FC5\u7136\u4F1A\u7528\u5230\u7684\u8BED\u8A00\u8BBE\u7F6E\uFF0C\u5982\u4E2D\u6587zh-cn\u3001\u82F1\u6587en\u7B49\uFF1B\u6211\u4EEC\u5728\u8FD9\u91CC\u5C55\u793A\u4E00\u4E0B\u4E0E\u4E4B\u5BF9\u5E94\u7684\u591A\u8BED\u8A00\u4EE3\u7801\u5904\u7406\u903B\u8F91\u3002</p><p>\u672C\u793A\u4F8B\u4E2D\uFF0C\u6211\u4EEC\u4EE5<code>$la(&#39;xxx&#39;)</code>\u4E3A\u591A\u8BED\u8A00key\u7684\u63D0\u53D6\u503C\u7684\u65B9\u6CD5\u4E3A\u4F8B\u6846\uFF0C\u642D\u914D\u67B6\u4E3A<code>vue</code>\u3002</p><ul><li><h2 id="\u6548\u679C" tabindex="-1">\u6548\u679C <a class="header-anchor" href="#\u6548\u679C" aria-hidden="true">#</a></h2></li></ul>',5),j=D(`<h2 id="\u4E0D\u4F7F\u7528i18n" tabindex="-1">\u4E0D\u4F7F\u7528i18n <a class="header-anchor" href="#\u4E0D\u4F7F\u7528i18n" aria-hidden="true">#</a></h2><ul><li><h3 id="\u4F7F\u7528\u793A\u4F8B" tabindex="-1">\u4F7F\u7528\u793A\u4F8B <a class="header-anchor" href="#\u4F7F\u7528\u793A\u4F8B" aria-hidden="true">#</a></h3></li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * currentLanguage</span></span>
<span class="line"><span style="color:#676E95;"> * \u591A\u8BED\u8A00\u6807\u8BC6-\u53C2\u8003\u503C</span></span>
<span class="line"><span style="color:#676E95;"> * zh-cn(\u4E2D\u6587\u7B80\u4F53)</span></span>
<span class="line"><span style="color:#676E95;"> * en-us(\u82F1\u6587)</span></span>
<span class="line"><span style="color:#676E95;"> * zh-hk(\u4E2D\u6587\u7E41\u4F53) </span></span>
<span class="line"><span style="color:#676E95;"> * zh-tw(\u53F0\u6E7E\u7E41\u4F53) </span></span>
<span class="line"><span style="color:#676E95;"> **/</span></span>
<span class="line"><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">currentLanguage </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// \u9ED8\u8BA4\u503C</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// languageResource: </span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u540D\u79F0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        hello</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">\u4F60\u597D {name}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">en-us</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">:</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        name</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">        hello</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello {name}</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-tw</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">:</span><span style="color:#89DDFF;">{},</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// template:</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">$la</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;{{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">$la</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">hello</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,{</span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">})</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}}&lt;/</span><span style="color:#F07178;">text</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">   //\u8F93\u51FA\uFF1A \u4F60\u597D world  \u6216\u8005 hello world</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// script</span></span>
<span class="line"><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">this.</span><span style="color:#82AAFF;">$la</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">) ) </span><span style="color:#676E95;">//\u8F93\u51FA\uFF1A\u540D\u79F0 or name</span></span>
<span class="line"></span></code></pre></div><ul><li><h3 id="\u5168\u5C40\u65B9\u6CD5-la\u7684\u5B9E\u73B0" tabindex="-1">\u5168\u5C40\u65B9\u6CD5<code>$la</code>\u7684\u5B9E\u73B0 <a class="header-anchor" href="#\u5168\u5C40\u65B9\u6CD5-la\u7684\u5B9E\u73B0" aria-hidden="true">#</a></h3></li></ul><div class="language-js"><button class="copy"></button><span class="lang">js</span><pre><code><span class="line"><span style="color:#676E95;">// main.js</span></span>
<span class="line"><span style="color:#676E95;">/**</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> </span><span style="color:#A6ACCD;">key</span><span style="color:#676E95;"> \u5BF9\u5E94\u7684\u591A\u8BED\u8A00key\u503C</span></span>
<span class="line"><span style="color:#676E95;"> * </span><span style="color:#89DDFF;">@</span><span style="color:#C792EA;">param</span><span style="color:#676E95;"> </span><span style="color:#89DDFF;">{</span><span style="color:#FFCB6B;">object</span><span style="color:#89DDFF;">}</span><span style="color:#676E95;"> \u5BF9\u5E94\u7684</span></span>
<span class="line"><span style="color:#676E95;"> **/</span></span>
<span class="line"><span style="color:#FFCB6B;">Vue</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">prototype</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">$la</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">key</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;">replace</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// currentLanguage \u591A\u8BED\u8A00\u6807\u8BC6\u4E3A\u7A7A</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!this.</span><span style="color:#A6ACCD;">currentLanguage</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// languageData \u5DF2\u8BBE\u7F6E\u591A\u8BED\u8A00\u5185\u5BB9\u5BF9\u8C61</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// languageData = this.languageResource[this.currentLanguage];</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;"> (</span><span style="color:#89DDFF;">!this.</span><span style="color:#A6ACCD;">languageData</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">return</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">languageData</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5F53\u524D\u8BED\u8A00\u6807\u8BC6\u4E0B\u672A\u5339\u914D\u5230\u503C\uFF0C\u505A\u964D\u7EA7\u53D6\u4E2D\u6587\u5904\u7406\uFF0C\u6BD4\u5982 </span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u8BED\u8A00\u6807\u8BC6\u4E3AcurrentLanguage=&#39;zh-tw&#39;\uFF0ClanguageData={};</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// $la(&#39;name&#39;) \u5339\u914D key=&#39;name&#39;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">!</span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">languageResource</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">zh-cn</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">][</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">??</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">this.</span><span style="color:#A6ACCD;">languageResource</span><span style="color:#F07178;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">en-us</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">][</span><span style="color:#A6ACCD;">key</span><span style="color:#F07178;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// \u5904\u7406\u5B58\u5728\u9700\u8981\u66FF\u6362\u7684\u5B50key</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">if</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">Object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">keys</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">replace</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">length</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">!=</span><span style="color:#F07178;"> </span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">for</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">in</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">replace</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">reg</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">RegExp</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\{</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">+</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">\\}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">            </span><span style="color:#A6ACCD;">val</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">replace</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">reg</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">replace</span><span style="color:#F07178;">[</span><span style="color:#A6ACCD;">i</span><span style="color:#F07178;">])</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">return</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">val</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u4F7F\u7528i18n" tabindex="-1">\u4F7F\u7528i18n <a class="header-anchor" href="#\u4F7F\u7528i18n" aria-hidden="true">#</a></h2>`,8),w=JSON.parse('{"title":"\u591A\u8BED\u8A00\u5B9E\u73B0","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6548\u679C","slug":"\u6548\u679C","link":"#\u6548\u679C","children":[]},{"level":2,"title":"\u4E0D\u4F7F\u7528i18n","slug":"\u4E0D\u4F7F\u7528i18n","link":"#\u4E0D\u4F7F\u7528i18n","children":[{"level":3,"title":"\u4F7F\u7528\u793A\u4F8B","slug":"\u4F7F\u7528\u793A\u4F8B","link":"#\u4F7F\u7528\u793A\u4F8B","children":[]},{"level":3,"title":"\u5168\u5C40\u65B9\u6CD5$la\u7684\u5B9E\u73B0","slug":"\u5168\u5C40\u65B9\u6CD5-la\u7684\u5B9E\u73B0","link":"#\u5168\u5C40\u65B9\u6CD5-la\u7684\u5B9E\u73B0","children":[]}]},{"level":2,"title":"\u4F7F\u7528i18n","slug":"\u4F7F\u7528i18n","link":"#\u4F7F\u7528i18n","children":[]}],"relativePath":"jsDemo/i18n.md","lastUpdated":1665652026000}'),$={name:"jsDemo/i18n.md"},S=Object.assign($,{setup(s){return(n,a)=>(t(),r("div",null,[z,g(x),j]))}});export{w as __pageData,S as default};