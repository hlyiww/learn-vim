import{_ as s,c as e,o as l,a}from"./app.44777f5d.js";const A=JSON.parse('{"title":"\u5B58\u6D3B\u4E0B\u53BB","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u7B2C\u4E00\u6B65 - \u5B89\u88C5 VSCode Vim \u63D2\u4EF6","slug":"\u7B2C\u4E00\u6B65-\u5B89\u88C5-vscode-vim-\u63D2\u4EF6","link":"#\u7B2C\u4E00\u6B65-\u5B89\u88C5-vscode-vim-\u63D2\u4EF6","children":[]},{"level":2,"title":"\u7B2C\u4E8C\u6B65 - \u4E86\u89E3 vim \u5149\u6807\u7684\u4E09\u79CD\u6A21\u5F0F","slug":"\u7B2C\u4E8C\u6B65-\u4E86\u89E3-vim-\u5149\u6807\u7684\u4E09\u79CD\u6A21\u5F0F","link":"#\u7B2C\u4E8C\u6B65-\u4E86\u89E3-vim-\u5149\u6807\u7684\u4E09\u79CD\u6A21\u5F0F","children":[]},{"level":2,"title":"\u7B2C\u4E09\u6B65 - \u964D\u4F4E VScode \u4E2D\u952E\u76D8\u9ED8\u8BA4\u7684\u6309\u952E\u5EF6\u8FDF\uFF0C\u5B9E\u73B0\u5149\u6807\u5FEB\u901F\u79FB\u52A8","slug":"\u7B2C\u4E09\u6B65-\u964D\u4F4E-vscode-\u4E2D\u952E\u76D8\u9ED8\u8BA4\u7684\u6309\u952E\u5EF6\u8FDF\uFF0C\u5B9E\u73B0\u5149\u6807\u5FEB\u901F\u79FB\u52A8","link":"#\u7B2C\u4E09\u6B65-\u964D\u4F4E-vscode-\u4E2D\u952E\u76D8\u9ED8\u8BA4\u7684\u6309\u952E\u5EF6\u8FDF\uFF0C\u5B9E\u73B0\u5149\u6807\u5FEB\u901F\u79FB\u52A8","children":[]}],"relativePath":"vim/day_01_ surviving.md"}'),o={name:"vim/day_01_ surviving.md"},n=a(`<h1 id="\u5B58\u6D3B\u4E0B\u53BB" tabindex="-1">\u5B58\u6D3B\u4E0B\u53BB <a class="header-anchor" href="#\u5B58\u6D3B\u4E0B\u53BB" aria-hidden="true">#</a></h1><h2 id="\u7B2C\u4E00\u6B65-\u5B89\u88C5-vscode-vim-\u63D2\u4EF6" tabindex="-1">\u7B2C\u4E00\u6B65 - \u5B89\u88C5 VSCode Vim \u63D2\u4EF6 <a class="header-anchor" href="#\u7B2C\u4E00\u6B65-\u5B89\u88C5-vscode-vim-\u63D2\u4EF6" aria-hidden="true">#</a></h2><ul><li>\u5728\u6269\u5C55\u5546\u5E97\u4E2D\u641C\u7D22 <code>vim</code> \u5373\u53EF\u50BB\u74DC\u5F0F\u5B89\u88C5</li></ul><h2 id="\u7B2C\u4E8C\u6B65-\u4E86\u89E3-vim-\u5149\u6807\u7684\u4E09\u79CD\u6A21\u5F0F" tabindex="-1">\u7B2C\u4E8C\u6B65 - \u4E86\u89E3 vim \u5149\u6807\u7684\u4E09\u79CD\u6A21\u5F0F <a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-\u4E86\u89E3-vim-\u5149\u6807\u7684\u4E09\u79CD\u6A21\u5F0F" aria-hidden="true">#</a></h2><ul><li><p><strong>NORMAL</strong></p><p>\u5F53 <code>vim</code> \u63D2\u4EF6\u6210\u529F\u5B89\u88C5\u540E\uFF0C\u7F16\u8F91\u5668\u5C06\u9ED8\u8BA4\u5728\u6B64\u6A21\u5F0F\u4E0B\uFF0C\u4ECE\u5176\u4ED6\u6A21\u5F0F\u5207\u6362\u56DE <code>NORMAL</code> \u6A21\u5F0F\u53EF\u4EE5\u901A\u8FC7\u6309\u952E <code>ESC</code> \u6216\u8005\u7EC4\u5408\u6309\u952E <code>CTRL + [</code> \u6765\u5B9E\u73B0</p><p>\u6B64\u6A21\u5F0F\u4E0B\u4E0D\u80FD\u76F4\u63A5\u952E\u5165\u5B57\u7B26\uFF0C\u4F60\u6240\u6709\u7684\u8F93\u5165\u5C06\u88AB\u8BA4\u4E3A\u662F\u5728\u89E6\u53D1\u5FEB\u6377\u529F\u80FD\uFF0C\u4F8B\u5982\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>hjkl</code> \u6765\u79FB\u52A8\u5149\u6807\u7B49</p></li><li><p><strong>INSERT</strong> INSERT \u6A21\u5F0F\u4E0B\uFF0C\u53EF\u4EE5\u8F93\u5165\u5B57\u7B26\uFF0C\u4F60\u53EF\u4EE5\u8FDB\u884C\u6B63\u5E38\u7684\u4EE3\u7801\u7F16\u5199\uFF0C\u8FDB\u5165\u8BE5\u6A21\u5F0F\u9700\u8981\u4F7F\u7528\u6309\u952E <code>i</code> \u6216 <code>a</code>\uFF0C\u8FD9\u4E24\u4E2A\u6309\u952E\u7684\u533A\u522B\u5728\u4E8E\uFF0C\u524D\u8005\u8FDB\u5165 <code>INSERT</code> \u6A21\u5F0F\u540E\uFF0C\u5149\u6807\u4F1A\u51FA\u73B0\u5728 <code>NORMAL</code> \u6A21\u5F0F\u5305\u88F9\u7684\u5B57\u7B26\u5DE6\u4FA7\uFF0C\u540E\u8005\u53CD\u4E4B\u3002\u6211\u4E2A\u4EBA\u7684\u8BB0\u5FC6\u65B9\u5F0F\u662F\u5C06 <code>a</code> \u770B\u4F5C <code>after</code></p></li><li><p><strong>VISUAL</strong></p><p>VISUAL \u6A21\u5F0F\uFF0C\u82F1\u8BD1\u540E\u4E3A\u89C6\u89C9\u6A21\u5F0F\uFF0C\u5B83\u7684\u5B58\u5728\u662F\u7528\u6765\u66FF\u4EE3\u9F20\u6807\u7684\u9009\u53D6\u6548\u679C\uFF0C\u8FC7\u53BB\u901A\u8FC7\u9F20\u6807\u5DE6\u952E\u6846\u9009\u5927\u6BB5\u6587\u672C\u7684\u64CD\u4F5C\uFF0C\u5982\u4ECA\u5219\u5229\u7528 VISUAL \u6A21\u5F0F\u52A0\u4E0A <code>hjkl</code> \u79FB\u52A8\u6765\u5B9E\u73B0\u3002\u8FDB\u5165\u6B64\u6A21\u5F0F\u9700\u4F7F\u7528\u6309\u952E <code>v</code></p></li></ul><h2 id="\u7B2C\u4E09\u6B65-\u964D\u4F4E-vscode-\u4E2D\u952E\u76D8\u9ED8\u8BA4\u7684\u6309\u952E\u5EF6\u8FDF\uFF0C\u5B9E\u73B0\u5149\u6807\u5FEB\u901F\u79FB\u52A8" tabindex="-1">\u7B2C\u4E09\u6B65 - \u964D\u4F4E VScode \u4E2D\u952E\u76D8\u9ED8\u8BA4\u7684\u6309\u952E\u5EF6\u8FDF\uFF0C\u5B9E\u73B0\u5149\u6807\u5FEB\u901F\u79FB\u52A8 <a class="header-anchor" href="#\u7B2C\u4E09\u6B65-\u964D\u4F4E-vscode-\u4E2D\u952E\u76D8\u9ED8\u8BA4\u7684\u6309\u952E\u5EF6\u8FDF\uFF0C\u5B9E\u73B0\u5149\u6807\u5FEB\u901F\u79FB\u52A8" aria-hidden="true">#</a></h2><ul><li><p>\u5982\u679C\u662F\u7B2C\u4E00\u6B21\u4F7F\u7528 <code>vim</code> \u63D2\u4EF6\uFF0C\u6CA1\u6709\u5728 VScode \u4E2D\u505A\u8FC7\u4EFB\u4F55\u914D\u7F6E\uFF0C\u4F60\u4F1A\u53D1\u73B0\u6309\u952E\u65E0\u6CD5\u957F\u6309\uFF0C\u5982\u679C\u4F60\u60F3\u5FEB\u901F\u79FB\u52A8\u5149\u6807\uFF0C\u5C31\u53EA\u80FD\u52A0\u901F\u6309\u952E\uFF0C\u8FD9\u663E\u7136\u662F\u5F88\u75DB\u82E6\u7684\uFF0C\u4E0B\u9762\u662F\u914D\u7F6E\u7684\u6D41\u7A0B</p><p><strong>\u4E00\u3001\u5728\u7EC8\u7AEF\u4E2D\u4F9D\u6B21\u6267\u884C\u4EE5\u4E0B 5 \u6761\u547D\u4EE4\uFF0C\u5206\u884C\u590D\u5236\u56DE\u8F66\u5373\u53EF</strong></p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">defaults write com.microsoft.VSCode ApplePressAndHoldEnabled -bool </span><span style="color:#82AAFF;">false</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">defaults write com.microsoft.VSCodeInsiders ApplePressAndHoldEnabled -bool </span><span style="color:#82AAFF;">false</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">defaults write com.visualstudio.code.oss ApplePressAndHoldEnabled -bool </span><span style="color:#82AAFF;">false</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">defaults write com.microsoft.VSCodeExploration ApplePressAndHoldEnabled -bool </span><span style="color:#82AAFF;">false</span></span>
<span class="line"></span></code></pre></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">defaults delete -g ApplePressAndHoldEnabled</span></span>
<span class="line"></span></code></pre></div><p><strong>\u4E8C\u3001\u4FEE\u6539 Mac \u7CFB\u7EDF\u8BBE\u7F6E\u4E2D\u7684\u952E\u76D8\u8BBE\u7F6E</strong></p><ul><li>\u5C06 <code>\u6309\u952E\u91CD\u590D</code> \u548C <code>\u91CD\u590D\u524D\u5EF6\u8FDF</code> \u7684\u6ED1\u5757\u5168\u90E8\u6ED1\u52A8\u5230\u6700\u53F3\u4FA7</li></ul><p><strong>\u4E09\u3001\u91CD\u542F Vscode\uFF0C\u5373\u53EF\u4EAB\u53D7\u4E1D\u6ED1\u7684\u952E\u5165\u4F53\u9A8C\u4E86</strong></p></li></ul>`,7),c=[n];function d(i,t,p,r,h,v){return l(),e("div",null,c)}const g=s(o,[["render",d]]);export{A as __pageData,g as default};