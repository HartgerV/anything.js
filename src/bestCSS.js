var bestCSS = function() {
  var i, e, n, a, t, r, l, o, d, u;
  a = function(i, e) {
    var n, a;
    return null == e && (e = 1), e > i.length && (e = i.length), a = function() {
      var a, t, r;
      for (r = [], n = a = 0, t = e - 1; t >= 0 ? t >= a : a >= t; n = t >= 0 ? ++a : --a) r.push(i[Math.floor(Math.random() * i.length)]);
      return r
    }()
  }, l = function(i, e) {
    return null == e && (e = 0), Math.floor(Math.random() * (i - e + 1)) + e
  }, r = function() {
    var i;
    return i = "#" + ("000000" + (16777215 * Math.random() << 0).toString(16)).slice(-6)
  }, o = function() {
    var i, e, n;
    return n = Math.floor(256 * Math.random()), e = Math.floor(256 * Math.random()), i = Math.floor(256 * Math.random()), "rgb(" + n + "," + e + "," + i + ")"
  }, d = function() {
    var i, e, n, a;
    return a = Math.floor(256 * Math.random()), n = Math.floor(256 * Math.random()), e = Math.floor(256 * Math.random()), i = Math.random().toFixed(2), "rgba(" + a + "," + n + "," + e + "," + i + ")"
  }, t = function() {
    var i, e, n, a, t;
    for (a = l(100), t = "linear-gradient(to top right, ", i = e = n = a; 0 >= n ? 0 >= e : e >= 0; i = 0 >= n ? ++e : --e) t += "" + r() + (0 === i ? ")" : ",") + " ";
    return t
  }, n = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "small", "source", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"], i = [{
    name: "align-content",
    values: ["stretch", "center", "flex-start", "flex-end", "space-between", "space-around", "initial", "inherit"]
  }, {
    name: "align-items",
    values: ["stretch", "center", "flex-start", "flex-end", "baseline", "initial", "inherit"]
  }, {
    name: "align-self",
    values: ["auto", "stretch", "center", "flex-start", "flex-end", "baseline", "initial", "inherit"]
  }, {
    name: "backface-visibility",
    values: ["visible", "hidden", "initial", "inherit"]
  }, {
    name: "background",
    values: ["randGradient"]
  }, {
    name: "background-attachment",
    values: ["scroll", "fixed", "local", "initial", "inherit"]
  }, {
    name: "background-clip",
    values: ["border-box", "padding-box", "content-box", "initial", "inherit"]
  }, {
    name: "background-color",
    values: ["rgb", "rgba", "hex", "transparent", "initial", "inherit"]
  }, {
    name: "background-image",
    values: ["randGradient"]
  }, {
    name: "background-origin",
    values: ["padding-box", "content-box", "initial", "inherit"]
  }, {
    name: "background-position",
    values: ["left top", "left center", "left bottom", "right top", "right center", "right bottom", "center top", "center center", "center bottom", "randNumrandUnit"]
  }, {
    name: "background-size",
    values: ["auto", "randNumrandUnit", "cover", "contain", "initial", "inherit"]
  }, {
    name: "border-bottom-color",
    values: ["rgba", "rgb", "hex", "transparent", "initial", "inherit"]
  }, {
    name: "border-bottom-left-radius",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-bottom-right-radius",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-bottom-style",
    values: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"]
  }, {
    name: "border-bottom-width",
    values: ["medium", "thin", "thick", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-collapse",
    values: ["seperate", "collapse", "initial", "inherit"]
  }, {
    name: "border-color",
    values: ["rgb", "rgba", "hex", "transparent", "initial", "inherit"]
  }, {
    name: "border-top-color",
    values: ["rgba", "rgb", "hex", "transparent", "initial", "inherit"]
  }, {
    name: "border-top-left-radius",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-top-right-radius",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-top-style",
    values: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"]
  }, {
    name: "border-top-width",
    values: ["medium", "thin", "thick", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-left-color",
    values: ["rgba", "rgb", "hex", "transparent", "initial", "inherit"]
  }, {
    name: "border-left-left-radius",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-left-right-radius",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-left-style",
    values: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"]
  }, {
    name: "border-left-width",
    values: ["medium", "thin", "thick", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-right-color",
    values: ["rgba", "rgb", "hex", "transparent", "initial", "inherit"]
  }, {
    name: "border-right-left-radius",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-right-right-radius",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-right-style",
    values: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"]
  }, {
    name: "border-right-width",
    values: ["medium", "thin", "thick", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "border-width",
    values: ["medium", "thin", "thick", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "bottom",
    values: ["auto", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "box-shadow",
    values: ["randNumrandUnit randNumrandUnit randNum randNum hex"]
  }, {
    name: "box-sizing",
    values: ["content-box", "border-box", "initial", "inherit"]
  }, {
    name: "caption-side",
    values: ["top", "bottom", "initial", "inherit"]
  }, {
    name: "clear",
    values: ["none", "left", "right", "both", "initial", "inherit"]
  }, {
    name: "clip",
    values: ["auto", "shape", "initial", "inherit"]
  }, {
    name: "color",
    values: ["rgba", "rgb", "hex", "initial", "inherit"]
  }, {
    name: "column-count",
    values: ["randNum", "shape", "initial", "inherit"]
  }, {
    name: "column-fill",
    values: ["balance", "auto", "initial", "inherit"]
  }, {
    name: "column-gap",
    values: ["randNumrandUnit", "normal", "initial", "inherit"]
  }, {
    name: "column-rule-color",
    values: ["rgba", "rgb", "hex", "initial", "inherit"]
  }, {
    name: "column-rule-style",
    values: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"]
  }, {
    name: "column-rule-width",
    values: ["medium", "thin", "thick", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "column-span",
    values: ["1", "all", "initial", "inherit"]
  }, {
    name: "column-width",
    values: ["auto", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "columns",
    values: ["auto", "randNumrandUnit randNum", "initial", "inherit"]
  }, {
    name: "cursor",
    values: ["alias", "all-scroll", "auto", "cell", "context-menu", "col-resize", "copy", "crosshair", "default", "e-resize", "ew-resize", "grab", "grabbing", "help", "move", "n-resize", "ne-resize", "nesw-resize", "ns-resize", "nw-resize", "nwse-resize", "no-drop", "none", "not-allowed", "pointer", "progress", "row-resize", "s-resize", "se-resize", "sw-resize", "text", "vertical-text", "w-resize", "wait", "zoom-in", "zoom-out", "initial", "inherit"]
  }, {
    name: "direction",
    values: ["rtl", "ltr", "initial", "inherit"]
  }, {
    name: "display",
    values: ["inline", "block", "flex", "inline-block", "inline-flex", "inline-table", "list-item", "run-in", "table", "table-caption", "table-column-group", "table-header-group", "table-footer-group", "table-row-group", "table-cell", "table-column", "none", "initial", "inherit"]
  }, {
    name: "empty-cells",
    values: ["show", "hide", "initial", "inherit"]
  }, {
    name: "flex",
    values: ["randNum randNum randNumrandUnit", "auto", "initial", "inherit", "none"]
  }, {
    name: "flex-basis",
    values: ["randNumrandUnit", "auto", "initial", "inherit"]
  }, {
    name: "flex-direction",
    values: ["row", "row-reverse", "column", "column-reverse", "initial", "inherit"]
  }, {
    name: "flex-grow",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "flex-shrink",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "flex-wrap",
    values: ["wrap", "nowrap", "wrap-reverse", "initial", "inherit"]
  }, {
    name: "float",
    values: ["none", "left", "right", "initial", "inherit"]
  }, {
    name: "font-family",
    values: ["randFont", "initial", "inherit"]
  }, {
    name: "font-size",
    values: ["medium", "xx-small", "x-small", "small", "large", "x-large", "xx-large", "smaller", "larger", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "font-size-adjust",
    values: ["none", "initial", "inherit"]
  }, {
    name: "font-stretch",
    values: ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", "initial", "inherit"]
  }, {
    name: "font-style",
    values: ["normal", "italic", "oblique", "initial", "inherit"]
  }, {
    name: "font-variant",
    values: ["normal", "small-caps", "initial", "inherit"]
  }, {
    name: "font-weight",
    values: ["normal", "bold", "bolder", "lighter", "number", "initial", "inherit;"]
  }, {
    name: "hanging-punctuation",
    values: ["none", "first", "last", "allow-end", "force-end", "initial", "inherit"]
  }, {
    name: "height",
    values: ["randNumrandUnit", "auto", "initial", "inherit"]
  }, {
    name: "justify-content",
    values: ["flex-start", "flex-end", "center", "space-between", "space-around", "initial", "inherit"]
  }, {
    name: "left",
    values: ["auto", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "letter-spacing",
    values: ["normal", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "line-height",
    values: ["normal", "randNum", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "list-style-position",
    values: ["inside", "outside", "initial", "inherit"]
  }, {
    name: "list-style-type",
    values: ["disc", "inital", "inherit"]
  }, {
    name: "margin",
    values: ["randNumrandUnit randNumrandUnit randNumrandUnit randNumrandUnit", "auto", "initial", "inherit"]
  }, {
    name: "margin-bottom",
    values: ["randNumrandUnit", "auto", "initial", "inherit"]
  }, {
    name: "margin-left",
    values: ["randNumrandUnit", "auto", "initial", "inherit"]
  }, {
    name: "margin-right",
    values: ["randNumrandUnit", "auto", "initial", "inherit"]
  }, {
    name: "margin-top",
    values: ["randNumrandUnit", "auto", "initial", "inherit"]
  }, {
    name: "max-height",
    values: ["randNumrandUnit", "none", "initial", "inherit"]
  }, {
    name: "max-width",
    values: ["randNumrandUnit", "none", "initial", "inherit"]
  }, {
    name: "min-height",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "min-width",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "opacity",
    values: ["randFloat", "initial", "inherit"]
  }, {
    name: "order",
    values: ["randNum", "initial", "inherit"]
  }, {
    name: "outline-color",
    values: ["invert", "rgba", "rgb", "hex", "initial", "inherit"]
  }, {
    name: "outline-offset",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "outline-style",
    values: ["none", "hidden", "dotted", "dashed", "solid", "double", "groove", "ridge", "inset", "outset", "initial", "inherit"]
  }, {
    name: "outline-width",
    values: ["medium", "thin", "thick", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "overflow",
    values: ["visible", "hidden", "scroll", "auto", "initial", "inherit"]
  }, {
    name: "overflow-x",
    values: ["visible", "hidden", "scroll", "auto", "initial", "inherit"]
  }, {
    name: "overflow-y",
    values: ["visible", "hidden", "scroll", "auto", "initial", "inherit"]
  }, {
    name: "padding",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "padding-bottom",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "padding-left",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "padding-right",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "padding-top",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "page-break-after",
    values: ["auto", "always", "avoid", "left", "right", "initial", "inherit"]
  }, {
    name: "page-break-before",
    values: ["auto", "always", "avoid", "left", "right", "initial", "inherit"]
  }, {
    name: "page-break-inside",
    values: ["auto", "avoid", "initial", "inherit"]
  }, {
    name: "perspective",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "perspective-origin",
    values: ["randNumrandUnit randNumrandUnit", "initial", "inherit"]
  }, {
    name: "position",
    values: ["static", "absolute", "fixed", "relative", "initial", "inherit"]
  }, {
    name: "resize",
    values: ["none", "both", "horizontal", "vertical", "initial", "inherit"]
  }, {
    name: "right",
    values: ["auto", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "tab-size",
    values: ["randNum", "initial", "inherit"]
  }, {
    name: "table-layout",
    values: ["auto", "fixed", "initial", "inherit"]
  }, {
    name: "text-align",
    values: ["left", "right", "center", "justify", "initial", "inherit"]
  }, {
    name: "text-align-last",
    values: ["left", "right", "center", "justify", "initial", "inherit"]
  }, {
    name: "text-decoration",
    values: ["none", "underline", "overline", "line-through", "initial", "inherit"]
  }, {
    name: "text-decoration-color",
    values: ["rgba", "rgb", "hex", "initial", "inherit"]
  }, {
    name: "text-indent",
    values: ["randNumrandUnit", "initial", "inherit"]
  }, {
    name: "text-overflow",
    values: ["clip", "ellipsis", "string", "initial", "inherit"]
  }, {
    name: "text-shadow",
    values: ["randNumrandUnit randNumrandUnit randNum randNum hex", "none", "initial", "inherit"]
  }, {
    name: "text-transform",
    values: ["none", "capitalize", "uppercase", "lowercase", "initial", "inherit"]
  }, {
    name: "top",
    values: ["auto", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "vertical-align",
    values: ["baseline", "length", "sub", "super", "top", "text-top", "middle", "bottom", "text-bottom", "initial", "inherit"]
  }, {
    name: "visibility",
    values: ["visible", "hidden", "collapse", "initial", "inherit"]
  }, {
    name: "white-space",
    values: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "initial", "inherit"]
  }, {
    name: "width",
    values: ["randNumrandUnit", "auto", "initial", "inherit"]
  }, {
    name: "word-break",
    values: ["normal", "break-all", "keep-all", "initial", "inherit"]
  }, {
    name: "word-spacing",
    values: ["auto", "randNumrandUnit", "initial", "inherit"]
  }, {
    name: "word-wrap",
    values: ["normal", "break-word", "initial", "inherit"]
  }, {
    name: "z-index",
    values: ["auto", "randNumrandUnit", "initial", "inherit"]
  }], u = ["em", "ex", "%", "px", "cm", "mm", "in", "pt", "pc", "ch", "rem", "vh", "vw", "vmin", "vmax"], (e = function() {
    var e, s, m, h, v, c, b, g, p, f, x, N, U, w, y, k, z, M, j, F, $, q, G, E, T, B, C, H, L, S, A, D, I;
    for (F = 10, $ = 10, z = 1e3, m = a(n, F), e = {}, t(), h = 0, p = m.length; p > h; h++)
      for (s = m[h], e[s] = {}, S = a(i, $), v = 0, f = S.length; f > v; v++)
        for (E = S[v], A = a(E.values, 1), g = 0, x = A.length; x > g; g++) {
          for (D = A[g], T = D.match(/randNum/g) || [], k = 0, N = T.length; N > k; k++) j = T[k], D = D.replace("randNum", l(z));
          for (B = D.match(/randUnit/g) || [], M = 0, U = B.length; U > M; M++) j = B[M], D = D.replace("randUnit", a(u));
          for (C = D.match(/rgb$/g) || [], q = 0, w = C.length; w > q; q++) j = C[q], D = D.replace(/rgb$/g, o());
          for (H = D.match(/rgba$/g) || [], G = 0, y = H.length; y > G; G++) j = H[G], D = D.replace(/rgba$/g, d());
          D = D.split("hex").join(r()), D = D.split("float").join(Math.random().toFixed(2)), D = D.split("randGradient").join(t()), e[s][E.name] = D
        }
    L = "";
    for (c in e) {
      D = e[c], L += c + " {";
      for (b in D) I = D[b], L += b + ": " + I + ";";
      L += "}"
    }
    var J = document.createElement("style");
    J.type = "text/css", document.getElementsByTagName("head")[0].appendChild(J), J.innerHTML = L
  })()
};

anything.prototype.bestCSS = bestCSS;
