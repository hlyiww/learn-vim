import{_ as s,c as n,o as a,a as l}from"./app.44777f5d.js";const A=JSON.parse('{"title":"\u5220\u9664\u51FD\u6570","description":"","frontmatter":{},"headers":[{"level":2,"title":"vim-indent-object","slug":"vim-indent-object","link":"#vim-indent-object","children":[]},{"level":2,"title":"\u5339\u914D\u5927\u3001\u4E2D\u3001\u5C0F\u62EC\u53F7","slug":"\u5339\u914D\u5927\u3001\u4E2D\u3001\u5C0F\u62EC\u53F7","link":"#\u5339\u914D\u5927\u3001\u4E2D\u3001\u5C0F\u62EC\u53F7","children":[]},{"level":2,"title":"\u5220\u9664\u51FD\u6570\u7684\u65B9\u5F0F","slug":"\u5220\u9664\u51FD\u6570\u7684\u65B9\u5F0F","link":"#\u5220\u9664\u51FD\u6570\u7684\u65B9\u5F0F","children":[]}],"relativePath":"vim/day_16.md"}'),o={name:"vim/day_16.md"},p=l(`<h1 id="\u5220\u9664\u51FD\u6570" tabindex="-1">\u5220\u9664\u51FD\u6570 <a class="header-anchor" href="#\u5220\u9664\u51FD\u6570" aria-hidden="true">#</a></h1><h2 id="vim-indent-object" tabindex="-1">vim-indent-object <a class="header-anchor" href="#vim-indent-object" aria-hidden="true">#</a></h2><ul><li>vii \u5339\u914D\u62EC\u53F7\u91CC\u9762\u7684\u5185\u5BB9</li><li>vai \u5339\u914D\u6574\u4E2A\u51FD\u6570\u7684\u5185\u5BB9</li><li>vaI \u5339\u914D\u6574\u4E2A\u51FD\u6570\u7684\u5185\u5BB9\uFF0C\u5305\u62EC\u6700\u540E\u4E00\u4E2A\u5927\u62EC\u53F7</li></ul><h2 id="\u5339\u914D\u5927\u3001\u4E2D\u3001\u5C0F\u62EC\u53F7" tabindex="-1">\u5339\u914D\u5927\u3001\u4E2D\u3001\u5C0F\u62EC\u53F7 <a class="header-anchor" href="#\u5339\u914D\u5927\u3001\u4E2D\u3001\u5C0F\u62EC\u53F7" aria-hidden="true">#</a></h2><ul><li><code>%</code></li></ul><h2 id="\u5220\u9664\u51FD\u6570\u7684\u65B9\u5F0F" tabindex="-1">\u5220\u9664\u51FD\u6570\u7684\u65B9\u5F0F <a class="header-anchor" href="#\u5220\u9664\u51FD\u6570\u7684\u65B9\u5F0F" aria-hidden="true">#</a></h2><ul><li>dap \u57FA\u4E8E\u6BB5\u843D text-object</li><li>daI \u57FA\u4E8E vim-indent-object</li><li>V$%d \u9700\u8981\u6539\u914D\u7F6E\u8FDB\u884C\u4F18\u5316\uFF0C\u6700\u7EC8\u4F18\u5316\u4E3A <code>&lt;Leader&gt; d f</code>\uFF0C\u4F7F\u7528\u65F6\u5728\u51FD\u6570\u540D\u6240\u5728\u884C\u4F7F\u7528\u5373\u53EF</li></ul><div class="language-jsonc"><button title="Copy Code" class="copy"></button><span class="lang">jsonc</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;">// settings.json</span></span>
<span class="line"><span style="color:#676E95;">// \u5C06 dai \u6620\u5C04\u4E3A daI\uFF0C\u65B9\u4FBF\u51FD\u6570\u7684\u5220\u9664\u64CD\u4F5C</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vim.operatorPendingModeKeyBindings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vim.visualModeKeyBindings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#676E95;">// ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">i</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">I</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vim.normalModeKeyBindings</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">: </span><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">before</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;Leader&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">f</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">after</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">V</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">$</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">d</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div>`,8),e=[p];function t(D,c,r,F,y,i){return a(),n("div",null,e)}const d=s(o,[["render",t]]);export{A as __pageData,d as default};