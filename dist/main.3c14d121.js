// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"n0fw4":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "5e0263af3c14d121";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"kTBnD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _headerHtml = require("bundle-text:./fragment/header.html");
var _headerHtmlDefault = parcelHelpers.interopDefault(_headerHtml);
var _heroSHtml = require("bundle-text:./heroS.html");
var _heroSHtmlDefault = parcelHelpers.interopDefault(_heroSHtml);
var _fleetDHtml = require("bundle-text:./fragment/fleetD.html");
var _fleetDHtmlDefault = parcelHelpers.interopDefault(_fleetDHtml);
var _yachtsSHtml = require("bundle-text:./yachtsS.html");
var _yachtsSHtmlDefault = parcelHelpers.interopDefault(_yachtsSHtml);
var _activitiesDHtml = require("bundle-text:./activitiesD.html");
var _activitiesDHtmlDefault = parcelHelpers.interopDefault(_activitiesDHtml);
var _bookingTHtml = require("bundle-text:./bookingT.html");
var _bookingTHtmlDefault = parcelHelpers.interopDefault(_bookingTHtml);
var _reviewsTHtml = require("bundle-text:./reviewsT.html");
var _reviewsTHtmlDefault = parcelHelpers.interopDefault(_reviewsTHtml);
var _footerHtml = require("bundle-text:./footer.html");
var _footerHtmlDefault = parcelHelpers.interopDefault(_footerHtml);
console.log("\u0422\u0438\u043F headerHtml:", typeof (0, _headerHtmlDefault.default));
console.log("\u0417\u043D\u0430\u0447\u0435\u043D\u043D\u044F headerHtml:", (0, _headerHtmlDefault.default));
function insertHtmlFragment(targetId, htmlContent) {
    const targetElement = document.getElementById(targetId);
    if (targetElement) targetElement.innerHTML = htmlContent;
    else console.warn(`\u{415}\u{43B}\u{435}\u{43C}\u{435}\u{43D}\u{442} \u{437} ID "${targetId}" \u{43D}\u{435} \u{437}\u{43D}\u{430}\u{439}\u{434}\u{435}\u{43D}\u{43E}.`);
}
document.addEventListener('DOMContentLoaded', ()=>{
    insertHtmlFragment('header-placeholder', (0, _headerHtmlDefault.default));
    insertHtmlFragment('hero-placeholder', (0, _heroSHtmlDefault.default));
    insertHtmlFragment('fleet-placeholder', (0, _fleetDHtmlDefault.default));
    insertHtmlFragment('yachts-placeholder', (0, _yachtsSHtmlDefault.default));
    insertHtmlFragment('activities-placeholder', (0, _activitiesDHtmlDefault.default));
    insertHtmlFragment('booking-placeholder', (0, _bookingTHtmlDefault.default));
    insertHtmlFragment('reviews-placeholder', (0, _reviewsTHtmlDefault.default));
    insertHtmlFragment('footer-placeholder', (0, _footerHtmlDefault.default));
});

},{"bundle-text:./fragment/header.html":"2fZHC","bundle-text:./heroS.html":"1wVVR","bundle-text:./fragment/fleetD.html":"liVG0","bundle-text:./yachtsS.html":"jGtpz","bundle-text:./activitiesD.html":"8RiGy","bundle-text:./bookingT.html":"cymrX","bundle-text:./reviewsT.html":"guvqc","bundle-text:./footer.html":"362Od","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2fZHC":[function(require,module,exports,__globalThis) {
module.exports = "<html><head><link rel=\"stylesheet\" href=\"/main.b2625c6b.css\">\n    </head><body><header class=\"page-header\">\n        <div class=\"container header-flex\">\n            <div class=\"header-logo\">\n                <svg width=\"18px\" height=\"18px\">\n                    <use href=\"/symbols.1abf267b.svg#logo\" width=\"18px\" height=\"18px\"></use>\n                </svg>\n                <svg width=\"146px\" height=\"10px\">\n                    <use href=\"/symbols.1abf267b.svg#text-logo\" width=\"146px\" height=\"10px\"></use>\n                </svg>\n            </div>\n            <button class=\"hamburger-btn\" id=\"hamburgerBtn\" onclick=\"openMenu()\">\n                <div class=\"hamburger-line\" style=\"width: 10px\"></div>\n                <div class=\"hamburger-line\" style=\"width: 20px\"></div>\n                <div class=\"hamburger-line\" style=\"width: 15px\"></div>\n            </button>\n            <nav class=\"header-nav\">\n                <a href=\"#\" class=\"header-nav-link\">About</a>\n                <a href=\"#\" class=\"header-nav-link\">Yachts</a>\n                <a href=\"#\" class=\"header-nav-link\">Reviews</a>\n            </nav>\n        </div>\n        <div class=\"container\">\n            <div class=\"header-line\">  \n            </div>\n        </div>\n    </header>\n    <div class=\"menu-overlay\" id=\"menuOverlay\">\n        <div class=\"container burger-menu\">\n            <div class=\"header-logo\">\n                <div>\n                    <svg width=\"18px\" height=\"18px\">\n                        <use href=\"/symbols.1abf267b.svg#logo\" width=\"18px\" height=\"18px\"></use>\n                    </svg>\n                    <svg width=\"146px\" height=\"10px\">\n                        <use href=\"/symbols.1abf267b.svg#text-logo\" width=\"146px\" height=\"10px\"></use>\n                    </svg>\n                </div>\n                <button class=\"close-btn\" onclick=\"closeMenu()\" style=\"width: 24px; height: 24px\">✕</button>\n            </div>\n            <div class=\"header-lin\"></div>\n            <nav class=\"burger-nav\">\n                <a href=\"#\" class=\"burger-nav-link\">About</a>\n                <a href=\"#\" class=\"burger-nav-link\">Yachts</a>\n                <a href=\"#\" class=\"burger-nav-link\">Reviews</a>\n            </nav>\n        </div>\n        <div class=\"burger-grad\"></div>\n    </div> \n <script src=\"/main.59b1264b.js\"></script>\n\n<script src=\"/main.2d5c9c57.js\"></script></body></html>";

},{}],"1wVVR":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section class=\"hero\">\n        <div class=\"container hero-flex\">\n            <div class=\"hero_card\">\n                <img src=\"/sumbol.9d9042a7.svg\" alt=\"\" class=\"hero_card-bg\">\n                <img srcset=\"/claints-one.eadc6542.png 1x, /claints-one@2x.dee63707.png 2x\" alt=\"\" class=\"hero_card-img1\">\n                <img srcset=\"/claints-two.a3e0a5d1.png 1x, /claints-two@2x.2e573ee3.png 2x\" alt=\"\" class=\"hero_card-img2\">\n                <img srcset=\"/claints-three.eb0578c2.png 1x, /claints-three@2x.65f88930.png 2x\" alt=\"\" class=\"hero_card-img3\">\n                <p class=\"hero_card-title\">OUR CLIENTS</p>\n                <img srcset=\"/man.b961f46b.jpg 1x, /man@2x.d79c8ea7.jpg 2x\" alt=\"\" class=\"hero_card-man\">\n                <img srcset=\"/modal-yaht.34792d7f.png 1x, /modal-yaht@2x.21ee3893.png 2x\" alt=\"\" class=\"hero_card-yacht\">\n                <p class=\"hero_card-price\">$12M</p>\n                <p class=\"hero_card-text\">Book now and make your dream yacht rental a reality</p>\n            </div>\n            <div class=\"hero_wrapper\">\n                <h1 class=\"hero_title\">Explore the High Seas with <span class=\"hero_title-grad\">Our Luxury Yacht</span> Rentals</h1>\n                <p class=\"hero_text\">Experience the freedom and luxury of yachting on the open seas. Choose from our top-of-the-line yachts and embark on an\n                unforgettable journey surrounded by breathtaking views and state-of-the-art amenities.</p>\n                <button class=\"hero_btn-start\">Get Started</button>\n                <button class=\"hero_btn-explore\">Explore</button>\n            </div>\n        </div>\n    </section>\n<script src=\"/main.245c1413.js\"></script></body></html>";

},{}],"liVG0":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section class=\"fleet\">\n        <div class=\"container\">\n            <p class=\"fleet_main-info\"><span class=\"fleet-title\">Yacht Adventures</span> fleet is here to take you on the ultimate adventure. Each yacht is hand-picked for its comfort, style,\n            and performance.</p>\n            <div class=\"fleet_wrapper-text\">\n                <p class=\"fleet_extra-text\">From spacious decks to state-of-the-art technology, our yachts are designed to provide the perfect blend of luxury and\n                functionality. Take a look at our selection below and choose the yacht that matches your needs and preferences.</p>\n                <p class=\"fleet_extra-text\">No matter which yacht you choose, our experienced crew will ensure that your journey is smooth and enjoyable. Book now\n                and get ready for an unforgettable adventure on the high seas.</p>\n            </div>\n            <img srcset=\"/yachtlounge.0e282eb0.png 1x, /yachtlounge@2x.a9d2c79a.png 2x\" alt=\"photo\" class=\"fleet_main-photo\">\n            <div class=\"fleet_photo-wrapper\">\n                <img srcset=\"/kitchenyacht.9cb1a890.png 1x, /kitchenyacht@2x.3d8b2545.png 2x\" alt=\"photo\" class=\"fleet_yacht-photo\">\n                <img srcset=\"/yachtview.664a6895.png 1x, /yachtview@2x.84e60f33.png 2x\" alt=\"photo\" class=\"fleet_text-photo\">\n            </div>\n            <div class=\"fleet_request\">\n                <p class=\"fleet_request-text\">Choose your dream yacht and sail away into the sunset</p>\n                <button class=\"fleet_request-btn\">Yacht rental</button>\n            </div>\n            <div class=\"fleet_gradient\"></div>\n        </div>\n    </section>\n<script src=\"/main.74fc9eb7.js\"></script></body></html>";

},{}],"jGtpz":[function(require,module,exports,__globalThis) {
module.exports = "<!DOCTYPE html><html lang=\"en\"><head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title>Document</title>\n    <link rel=\"stylesheet\" href=\"/main.b2625c6b.css\">\n    <link href=\"https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&amp;family=Dancing+Script:wght@400..700&amp;family=Edu+NSW+ACT+Foundation:wght@400..700&amp;family=Kaushan+Script&amp;family=Lobster&amp;family=Sevillana&amp;display=swap\" rel=\"stylesheet\">\n</head>\n<body>\n\n        <div class=\"container\">\n            <section class=\"yachts\">\n                <img src=\"/symbol-arrow-end.4c165085.svg\" alt=\"\" class=\"arrow-right\">\n                <img src=\"/symbol-arrow-start.b26d56ff.svg\" alt=\"\" class=\"arrow-left\">\n                <ul class=\"cards-list\">\n                    <li class=\"card\">\n                        <img srcset=\"/slider-yaht-one.9445964b.png 1x, /slider-yacht-one@2x.df3c00b0.png 2x\" alt=\"\" width=\"322px\" height=\"268px\">\n                        <div class=\"card_title-wrapper\">\n                            <h3 class=\"card_title\">ARROW</h3>\n                            <p class=\"card_yacht-name\">LUXURY YACHTS</p>\n                        </div>\n                        <div class=\"card-lists\">\n                            <ul class=\"card_info-list\">\n                                <li class=\"card_info-text\">LENGTH</li>\n                                <li class=\"card_info-text\">BUILDER</li>\n                                <li class=\"card_info-text\">BUILT</li>\n                                <li class=\"card_info-text\">GUESTS</li>\n                                <li class=\"card_info-text\">PRICE</li>\n                            </ul>\n                            <ul class=\"card_info-list\">\n                                <li class=\"card_info-text\">48m(155ft)</li>\n                                <li class=\"card_info-text\">Admiral</li>\n                                <li class=\"card_info-text\">2021</li>\n                                <li class=\"card_info-text\">11 in 5 cabins</li>\n                                <li class=\"card_info-text\">€33,500,000</li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"card\">\n                        <img srcset=\"/slider-yaht-two.358246ff.png 1x, /slider-yacht-two@2x.fa4db9d7.png 2x\" alt=\"\" width=\"322px\" height=\"268px\">\n                        <div class=\"card_title-wrapper\">\n                            <h3 class=\"card_title\">BENETTI OASIS 40M...</h3>\n                            <p class=\"card_yacht-name\">LUXURY YACHTS</p>\n                        </div>\n                        <div class=\"card-lists\">\n                            <ul class=\"card_info-list\">\n                                <li class=\"card_info-text\">LENGTH</li>\n                                <li class=\"card_info-text\">BUILDER</li>\n                                <li class=\"card_info-text\">BUILT</li>\n                                <li class=\"card_info-text\">GUESTS</li>\n                                <li class=\"card_info-text\">PRICE</li>\n                            </ul>\n                            <ul class=\"card_info-list\">\n                                <li class=\"card_info-text\">41m(133ft)</li>\n                                <li class=\"card_info-text\">Benetti</li>\n                                <li class=\"card_info-text\">2025</li>\n                                <li class=\"card_info-text\">10 in 5 cabins</li>\n                                <li class=\"card_info-text\">€23,210,000</li>\n                            </ul>\n                        </div>\n                    </li>\n                    <li class=\"card\">\n                        <img srcset=\"/slider-yaht-three.5d066256.png 1x, /slider-yacht-three@2x.e32c1daa.png 2x\" alt=\"\" width=\"322px\" height=\"268px\">\n                        <div class=\"card_title-wrapper\">\n                            <h3 class=\"card_title\">BELLE ANNA</h3>\n                            <p class=\"card_yacht-name\">LUXURY YACHTS</p>\n                        </div>\n                        <div class=\"card-lists\">\n                            <ul class=\"card_info-list\">\n                                <li class=\"card_info-text\">LENGTH</li>\n                                <li class=\"card_info-text\">BUILDER</li>\n                                <li class=\"card_info-text\">BUILT</li>\n                                <li class=\"card_info-text\">GUESTS</li>\n                                <li class=\"card_info-text\">PRICE</li>\n                            </ul>\n                            <ul class=\"card_info-list\">\n                                <li class=\"card_info-text\">50m(155ft)</li>\n                                <li class=\"card_info-text\">ISA</li>\n                                <li class=\"card_info-text\">2012</li>\n                                <li class=\"card_info-text\">12 in 6 cabins</li>\n                                <li class=\"card_info-text\">€21,000,000</li>\n                            </ul>\n                        </div>\n                    </li>\n                </ul>\n            </section>\n        </div>\n\n<script src=\"/main.c2fef5c1.js\"></script></body></html>";

},{}],"8RiGy":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><section class=\"activities\">\n        <div class=\"container\">\n            <div class=\"activities_flex\">\n                <div class=\"activities_wrapper\">\n                    <img srcset=\"/diving.e16f7954.png 1x, /diving@2x.a0209f23.png 2x\" alt=\"photo\" class=\"activities_img-main\">\n                    <p class=\"activities_text\">Diving</p>\n                </div>\n                <div class=\"activities_wrapper flex_wrapper\">\n                    <img srcset=\"/fishing.9b1e82d5.png 1x, /fishing@2x.92c6919d.png 2x\" alt=\"photo\" class=\"activities_img-fish\">\n                    <p class=\"activities_text\">Fishing</p>\n                </div>\n            </div>\n            <div class=\"activities_wrapper wrapper_sun\">\n                <img srcset=\"/sunbathing.aed2d3c8.png 1x, /sunbathing@2x.522ea2ab.png 2x\" alt=\"photo\" class=\"activities_img-sun\">\n                <p class=\"activities_text-large\">Sunbathing</p>\n            </div>\n        </div>\n    </section>\n<script src=\"/main.d861fdcd.js\"></script></body></html>";

},{}],"cymrX":[function(require,module,exports,__globalThis) {
module.exports = "<!DOCTYPE html><html lang=\"en\"><head class=\"booking__head\">\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <title class=\"booking__title\">Document</title>\n    <link rel=\"stylesheet\" href=\"/main.b2625c6b.css\">\n    <link href=\"https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&amp;display=swap\" rel=\"stylesheet\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/3.0.1/modern-normalize.min.css\" integrity=\"sha512-q6WgHqiHlKyOqslT/lgBgodhd03Wp4BEqKeW6nNtlOY4quzyG3VoQKFrieaCeSnuVseNKRGpGeDU3qPmabCANg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\">\n  </head>\n  <body class=\"booking__body\">\n    <div class=\"container-booking container\">\n      <div class=\"booking\">\n        <div class=\"booking-title\">\n          <h2 class=\"booking__title-main\">Rent a yacht now</h2>\n          <div class=\"booking__img-wrapper\">\n            <img srcset=\"/img-yaht.979d34d5.png 1x, /img-yaht@2x.fb160b1a.png 2x\" alt=\"yacht\" class=\"booking__img\">\n          </div>\n        </div>\n        <div class=\"booking__form\">\n          <div class=\"input-box\">\n            <input type=\"text\" placeholder=\"Full Name\" class=\"booking__input booking__input--name\">\n            <input type=\"text\" placeholder=\"Email\" class=\"booking__input booking__input--email\">\n            <input type=\"text\" placeholder=\"Phone number\" class=\"booking__input booking__input--phone\">\n            <textarea placeholder=\"Comment\" class=\"booking__textarea\"></textarea>\n          </div>\n          <button data-modal-open=\"\" class=\"booking__button\">\n            Send\n            <svg width=\"18\" height=\"10\" class=\"booking__icon\">\n              <use href=\"/symbols.1abf267b.svg#right--%3E\"></use>\n            </svg>\n          </button>\n          <div class=\"backdrop is-hidden\" data-modal=\"\">\n            <div class=\"modal\">\n              <div class=\"modal-container\">\n              <div class=\"btn-close-box\">\n                <button class=\"modal__btn-close\" data-modal-close=\"\">\n                  <svg width=\"24\" height=\"24\">\n                    <use href=\"/symbols.1abf267b.svg#krest\"></use>\n                  </svg>\n                </button>\n              </div>\n              <div class=\"booking__div-circle booking__div-circle-modal\"></div>\n              <img class=\"modal__img-yaht\" src=\"/modal-yaht.34792d7f.png\" alt=\"yaht\">\n              <div class=\"modal__div-textbox\">\n              <h2 class=\"modal__title\">Thank you</h2>\n              <p class=\"modal__p-text\">Thank you for choosing Yacht Adventures, your booking details have been received and our team will be in touch shortly to confirm your reservation and provide any additional information or assistance you may need.</p>\n            </div>\n            </div>\n          </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"booking__div-circle\"></div>\n    </div>\n    <script src=\"/main.c8b7409b.js\"></script>\n  \n<script src=\"/main.7b7c1337.js\"></script></body></html>";

},{}],"guvqc":[function(require,module,exports,__globalThis) {
module.exports = "<!DOCTYPE html><html lang=\"en\"><head>\n    <meta charset=\"UTF-8\" class=\"reviews__meta\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" class=\"reviews__meta\">\n    <title class=\"reviews__title\">Document</title>\n    <link rel=\"stylesheet\" href=\"/main.b2625c6b.css\" class=\"reviews__link\">\n    <link href=\"https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&amp;display=swap\" rel=\"stylesheet\" class=\"reviews__link\">\n    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/3.0.1/modern-normalize.min.css\" integrity=\"sha512-q6WgHqiHlKyOqslT/lgBgodhd03Wp4BEqKeW6nNtlOY4quzyG3VoQKFrieaCeSnuVseNKRGpGeDU3qPmabCANg==\" crossorigin=\"anonymous\" referrerpolicy=\"no-referrer\">\n  </head>\n  <body class=\"reviews__body\">\n      <div id=\"container__reviews\" class=\"reviews__container container\">\n        <div class=\"reviews\">\n          <div class=\"reviews__header\">\n            <h2 class=\"reviews__title-main\"> <span>Yacht Adventures</span> take\n              pride in providing the best possible service\n              and\n              experience to our customers</h2>\n            <p class=\"reviews__subtitle\">Our customers have enjoyed\n              unforgettable\n              moments on our yachts. Don't\n              just take our word for it - read on to find out what they have to\n              say\n              about their journey with us.</p>\n          </div>\n          <ul class=\"reviews__list\">\n            <li class=\"reviews__item\">\n              <img srcset=\"/john.237265f7.png 1x, /john@2x.d068e7e4.png 2x\" alt=\"\" class=\"reviews__avatar\">\n              <h3 class=\"reviews__name\">John Wax</h3>\n              <p class=\"reviews__text\">I rented the Lagoon 620 with my family\n                for\n                a\n                week-long vacation and\n                it was the best decision ever. The yacht was spacious,\n                comfortable,\n                and luxurious, and the crew took care of everything. </p>\n            </li>\n            <li class=\"reviews__item\">\n              <img srcset=\"/viktoria.5b44ad8b.png 1x, /viktoria@2x.55f5cf27.png 2x\" alt=\"\" class=\"reviews__avatar\">\n              <h3 class=\"reviews__name\">Victoria Romashenko</h3>\n              <p class=\"reviews__text\">The Sunseeker Manhattan 66 was the\n                perfect\n                choice for our romantic\n                getaway. The yacht was beautifully designed, with all the\n                amenities\n                we needed, and the crew was attentive and friendly. </p>\n            </li>\n            <li class=\"reviews__item\">\n              <img srcset=\"/ihor.70609f31.png 1x, /ihor@2x.5bdbaf32.png 2x\" alt=\"\" class=\"reviews__avatar\">\n              <h3 class=\"reviews__name\">Ihor Trachuk</h3>\n              <p class=\"reviews__text\">The Azimut 80 was the most luxurious\n                yacht\n                I've ever been on. The cabins were spacious and elegant, and the\n                outdoor areas were perfect for relaxing and entertaining. Worth\n                every penny!</p>\n            </li>\n          </ul>\n          <div class=\"for__phone\">\n            <ul class=\"group-of-circle\">\n              <li class=\"circle white-circle\"></li>\n              <li class=\"circle\"></li>\n              <li class=\"circle\"></li>\n            </ul>\n          </div>\n          <button class=\"reviews__button\"><svg width=\"16\" height=\"30\"> <use href=\"/symbols.1abf267b.svg#top--%3E\"></use> </svg></button>\n        </div>\n      </div>\n  \n\n<script src=\"/main.02b20103.js\"></script></body></html>";

},{}],"362Od":[function(require,module,exports,__globalThis) {
module.exports = "<html><head></head><body><footer class=\"footer-page\">\n        <div class=\"container\">\n            <div class=\"footer-line\">\n            \n            </div>\n            <div class=\"footer_main-content\">\n                <div class=\"header-logo\">\n                    <svg width=\"18px\" height=\"18px\">\n                        <use href=\"/symbols.1abf267b.svg#logo\" width=\"18px\" height=\"18px\"></use>\n                    </svg>\n                    <svg width=\"146px\" height=\"10px\">\n                        <use href=\"/symbols.1abf267b.svg#text-logo\" width=\"146px\" height=\"10px\"></use>\n                    </svg>\n                </div>\n                <nav class=\"footer-nav\">\n                    <a href=\"#\" class=\"footer-nav-link\">About</a>\n                    <a href=\"#\" class=\"footer-nav-link\">Yachts</a>\n                    <a href=\"#\" class=\"footer-nav-link\">Reviews</a>\n                </nav>\n                <div class=\"socials\">\n                    <p class=\"footer_title-socials\">WE IN SOCIAL</p>\n                    <div class=\"footer_svg-wrapper\">\n                        <svg class=\"svg_border-facebook\">\n                            <use href=\"/symbols.1abf267b.svg#facebook\" class=\"footer-svg\"></use>\n                        </svg>\n                        <svg class=\"svg_border-instagram\">\n                            <use href=\"/symbols.1abf267b.svg#instagram\" class=\"footer-svg\"></use>\n                        </svg>\n                        <svg class=\"svg_border\">\n                            <use href=\"/symbols.1abf267b.svg#youtube\" class=\"footer-svg\"></use>\n                        </svg>\n                    </div>\n                </div>\n            </div>\n            <div class=\"footer_rights\">\n                <p class=\"footer_rights-text\">2023. Yacht Adventures</p>\n                <p class=\"footer_rights-text\">Privacy Police</p>\n            </div>\n            <div class=\"footer_grad\"></div>\n        </div>\n    </footer>\n<script src=\"/main.2ccc51ef.js\"></script></body></html>";

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["n0fw4","kTBnD"], "kTBnD", "parcelRequire24a9", {})

//# sourceMappingURL=main.3c14d121.js.map
