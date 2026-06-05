globalThis.__nitro_main__ = import.meta.url;
import "./_libs/unenv.mjs";

import { H as HTTPError, d as defineLazyEventHandler, a as H3Core } from "./_libs/h3.mjs";
import { H as HookableCore } from "./_libs/hookable.mjs";

import { a as FastResponse } from "./_libs/srvx.mjs";


import "./_libs/rou3.mjs";





function lazyService(loader) {
  let promise, mod;
  return {
    fetch(req) {
      if (mod) {
        return mod.fetch(req);
      }
      if (!promise) {
        promise = loader().then((_mod) => mod = _mod.default || _mod);
      }
      return promise.then((mod2) => mod2.fetch(req));
    }
  };
}
const services = {
  ["ssr"]: lazyService(() => import("./_ssr/index.mjs"))
};
globalThis.__nitro_vite_envs__ = services;
const assets = {
  "/favicon.svg": {
    "type": "image/svg+xml",
    "etag": '"14e-/h9uc3evROALZscKMY+NmMQTSiM"',
    "mtime": "2026-06-04T08:50:42.952Z",
    "size": 334,
    "path": "../public/favicon.svg"
  },
  "/robots.txt": {
    "type": "text/plain; charset=utf-8",
    "etag": '"19-yHADZo6lKl+mSNPU9098EiqzPCE"',
    "mtime": "2026-06-04T07:30:46.245Z",
    "size": 25,
    "path": "../public/robots.txt"
  },
  "/assets/about-mqGt0Jic.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"bbe-0iqmwbT8LM4+BmEljbud1r4IglU"',
    "mtime": "2026-06-05T08:36:35.402Z",
    "size": 3006,
    "path": "../public/assets/about-mqGt0Jic.js"
  },
  "/assets/contact-Bb1bpZj9.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"87cb-XYmF+irXEh8/aDbI8sGAacQbo2U"',
    "mtime": "2026-06-05T08:36:35.401Z",
    "size": 34763,
    "path": "../public/assets/contact-Bb1bpZj9.js"
  },
  "/assets/index-ClsQayLU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"23fb-3crkIE00ExTrTcP+TqVZygYI5bs"',
    "mtime": "2026-06-05T08:36:35.402Z",
    "size": 9211,
    "path": "../public/assets/index-ClsQayLU.js"
  },
  "/assets/hero-dashboard-DMv3HBFG.jpg": {
    "type": "image/jpeg",
    "etag": '"1f797-2haRW4ipxOmfIiH9z6N1+Ig4fGM"',
    "mtime": "2026-06-05T08:36:35.400Z",
    "size": 128919,
    "path": "../public/assets/hero-dashboard-DMv3HBFG.jpg"
  },
  "/assets/portfolio-BnUBN2Xo.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"269-qDPsOy6Tho25yfyQiGSkUsNHm3I"',
    "mtime": "2026-06-05T08:36:35.401Z",
    "size": 617,
    "path": "../public/assets/portfolio-BnUBN2Xo.js"
  },
  "/assets/project-ecommerce-BNRIlhYs.jpg": {
    "type": "image/jpeg",
    "etag": '"1660f-ZlLCA5HB/pHQoGyaPdyNfnF3h0w"',
    "mtime": "2026-06-05T08:36:35.400Z",
    "size": 91663,
    "path": "../public/assets/project-ecommerce-BNRIlhYs.jpg"
  },
  "/assets/project-erp-CnpkY6hi.jpg": {
    "type": "image/jpeg",
    "etag": '"fb51-u5WjsEZ8/j8+AmIk+2EC8p78Hzc"',
    "mtime": "2026-06-05T08:36:35.399Z",
    "size": 64337,
    "path": "../public/assets/project-erp-CnpkY6hi.jpg"
  },
  "/assets/project-rental-CIIXQZAR.jpg": {
    "type": "image/jpeg",
    "etag": '"17b32-rtmEUEG/WPqwQF2TiSJC0Tlzo9M"',
    "mtime": "2026-06-05T08:36:35.400Z",
    "size": 97074,
    "path": "../public/assets/project-rental-CIIXQZAR.jpg"
  },
  "/assets/project-hotel-BXW9Nwzv.jpg": {
    "type": "image/jpeg",
    "etag": '"188b8-3YmwLhcbE5GeLHEHSoljAtkZxtE"',
    "mtime": "2026-06-05T08:36:35.400Z",
    "size": 100536,
    "path": "../public/assets/project-hotel-BXW9Nwzv.jpg"
  },
  "/assets/project-saas-IvQDbKZF.jpg": {
    "type": "image/jpeg",
    "etag": '"11fc7-DvZNknEmYhQgikfpK/WO65OqugQ"',
    "mtime": "2026-06-05T08:36:35.400Z",
    "size": 73671,
    "path": "../public/assets/project-saas-IvQDbKZF.jpg"
  },
  "/assets/ProjectCard-CuvS_LTQ.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"57f-2KAm5e/OCg4iRL4ZIAzlqvqw1Nk"',
    "mtime": "2026-06-05T08:36:35.402Z",
    "size": 1407,
    "path": "../public/assets/ProjectCard-CuvS_LTQ.js"
  },
  "/assets/project-tourism-DFm8WJi9.jpg": {
    "type": "image/jpeg",
    "etag": '"177de-vDYXNzCz4rvRDqfqP/z3dQHSflQ"',
    "mtime": "2026-06-05T08:36:35.400Z",
    "size": 96222,
    "path": "../public/assets/project-tourism-DFm8WJi9.jpg"
  },
  "/assets/services-L8k8dB3J.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"479-URVoVAwjhnoELm9vKS9rNGdEvGk"',
    "mtime": "2026-06-05T08:36:35.401Z",
    "size": 1145,
    "path": "../public/assets/services-L8k8dB3J.js"
  },
  "/assets/why-us-BZshvTVg.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"277-BW6v+3dg8kz0cfxH9qXAzVlsDec"',
    "mtime": "2026-06-05T08:36:35.401Z",
    "size": 631,
    "path": "../public/assets/why-us-BZshvTVg.js"
  },
  "/assets/ServiceCard-CIVMm57l.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"330-mZg42TQa0WsnZsWbyqu8cBqCtqI"',
    "mtime": "2026-06-05T08:36:35.402Z",
    "size": 816,
    "path": "../public/assets/ServiceCard-CIVMm57l.js"
  },
  "/assets/styles-d8pnCZOj.css": {
    "type": "text/css; charset=utf-8",
    "etag": '"162f8-/NxX8VxvXf4ZiFl8NZGhbYpPbkA"',
    "mtime": "2026-06-05T08:36:35.401Z",
    "size": 90872,
    "path": "../public/assets/styles-d8pnCZOj.css"
  },
  "/assets/index-DOWg3qCu.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": '"8ad00-23b+vSE1ABjWTXOpYxFtzRTee6c"',
    "mtime": "2026-06-05T08:36:35.402Z",
    "size": 568576,
    "path": "../public/assets/index-DOWg3qCu.js"
  },
  "/assets/project-ai-support-BlUn__mX.jpg": {
    "type": "image/jpeg",
    "etag": '"9c454-kauh39+rif5bdpL28k08Q5lfiNM"',
    "mtime": "2026-06-05T08:36:35.402Z",
    "size": 640084,
    "path": "../public/assets/project-ai-support-BlUn__mX.jpg"
  },
  "/assets/project-logistics-Bss3SUBX.jpg": {
    "type": "image/jpeg",
    "etag": '"9410e-ZVXNi3hmEvHlsGnGWBPP7B15WHE"',
    "mtime": "2026-06-05T08:36:35.402Z",
    "size": 606478,
    "path": "../public/assets/project-logistics-Bss3SUBX.jpg"
  },
  "/assets/project-telemedicine-BHoh6czy.jpg": {
    "type": "image/jpeg",
    "etag": '"83507-KleAUcTNuEKcjU0OfHXur+iNoZk"',
    "mtime": "2026-06-05T08:36:35.402Z",
    "size": 537863,
    "path": "../public/assets/project-telemedicine-BHoh6czy.jpg"
  }
};
const publicAssetBases = {};
function isPublicAssetURL(id = "") {
  if (assets[id]) {
    return true;
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) {
      return true;
    }
  }
  return false;
}
const errorHandler$1 = (error, event) => {
  const res = defaultHandler(error, event);
  return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
  const unhandled = error.unhandled ?? !HTTPError.isError(error);
  const { status = 500, statusText = "" } = unhandled ? {} : error;
  if (status === 404) {
    const url = event.url || new URL(event.req.url);
    const baseURL = "/";
    if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) {
      return {
        status: 302,
        headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
      };
    }
  }
  const headers2 = new Headers(unhandled ? {} : error.headers);
  headers2.set("content-type", "application/json; charset=utf-8");
  const jsonBody = unhandled ? {
    status,
    unhandled: true
  } : typeof error.toJSON === "function" ? error.toJSON() : {
    status,
    statusText,
    message: error.message
  };
  return {
    status,
    statusText,
    headers: headers2,
    body: {
      error: true,
      ...jsonBody
    }
  };
}
const errorHandlers = [errorHandler$1];
async function errorHandler(error, event) {
  for (const handler of errorHandlers) {
    try {
      const response = await handler(error, event, { defaultHandler });
      if (response) {
        return response;
      }
    } catch (error2) {
      console.error(error2);
    }
  }
}
const headers = ((m) => function headersRouteRule(event) {
  for (const [key, value] of Object.entries(m.options || {})) {
    event.res.headers.set(key, value);
  }
});
const findRouteRules = /* @__PURE__ */ (() => {
  const $0 = [{ name: "headers", route: "/assets/**", handler: headers, options: { "cache-control": "public, max-age=31536000, immutable" } }];
  return (m, p) => {
    let r = [];
    if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
    let s = p.split("/"), l = s.length;
    if (l > 1) {
      if (s[1] === "assets") {
        r.unshift({ data: $0, params: { "_": s.slice(2).join("/") } });
      }
    }
    return r;
  };
})();
const _lazy_zI0wwf = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
const findRoute = /* @__PURE__ */ (() => {
  const data = { route: "/**", handler: _lazy_zI0wwf };
  return ((_m, p) => {
    return { data, params: { "_": p.slice(1) } };
  });
})();
const APP_ID = "default";
function useNitroApp() {
  let instance = useNitroApp._instance;
  if (instance) {
    return instance;
  }
  instance = useNitroApp._instance = createNitroApp();
  globalThis.__nitro__ = globalThis.__nitro__ || {};
  globalThis.__nitro__[APP_ID] = instance;
  return instance;
}
function useNitroHooks() {
  const nitroApp = useNitroApp();
  const hooks = nitroApp.hooks;
  if (hooks) {
    return hooks;
  }
  return nitroApp.hooks = new HookableCore();
}
function createNitroApp() {
  const hooks = void 0;
  const captureError = (error, errorCtx) => {
    if (errorCtx?.event) {
      const errors = errorCtx.event.req.context?.nitro?.errors;
      if (errors) {
        errors.push({
          error,
          context: errorCtx
        });
      }
    }
  };
  const h3App = createH3App({ onError(error, event) {
    return errorHandler(error, event);
  } });
  let appHandler = (req) => {
    req.context ||= {};
    req.context.nitro = req.context.nitro || { errors: [] };
    return h3App.fetch(req);
  };
  const app = {
    fetch: appHandler,
    h3: h3App,
    hooks,
    captureError
  };
  return app;
}
function createH3App(config) {
  const h3App = new H3Core(config);
  h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
  {
    h3App["~getMiddleware"] = (event, route) => {
      const pathname = event.url.pathname;
      const method = event.req.method;
      const middleware = [];
      {
        const routeRules = getRouteRules(method, pathname);
        event.context.routeRules = routeRules?.routeRules;
        if (routeRules?.routeRuleMiddleware.length) {
          middleware.push(...routeRules.routeRuleMiddleware);
        }
      }
      if (route?.data?.middleware?.length) {
        middleware.push(...route.data.middleware);
      }
      return middleware;
    };
  }
  return h3App;
}
function getRouteRules(method, pathname) {
  const m = findRouteRules(method, pathname);
  if (!m?.length) {
    return { routeRuleMiddleware: [] };
  }
  const routeRules = {};
  for (const layer of m) {
    for (const rule of layer.data) {
      const currentRule = routeRules[rule.name];
      if (currentRule) {
        if (rule.options === false) {
          delete routeRules[rule.name];
          continue;
        }
        if (typeof currentRule.options === "object" && typeof rule.options === "object") {
          currentRule.options = {
            ...currentRule.options,
            ...rule.options
          };
        } else {
          currentRule.options = rule.options;
        }
        currentRule.route = rule.route;
        currentRule.params = {
          ...currentRule.params,
          ...layer.params
        };
      } else if (rule.options !== false) {
        routeRules[rule.name] = {
          ...rule,
          params: layer.params
        };
      }
    }
  }
  const middleware = [];
  const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
  for (const rule of orderedRules) {
    if (rule.options === false || !rule.handler) {
      continue;
    }
    middleware.push(rule.handler(rule));
  }
  return {
    routeRules,
    routeRuleMiddleware: middleware
  };
}
function createHandler(hooks) {
  const nitroApp = useNitroApp();
  const nitroHooks = useNitroHooks();
  return {
    async fetch(request, env, context) {
      globalThis.__env__ = env;
      augmentReq(request, {
        env,
        context
      });
      const ctxExt = {};
      const url = new URL(request.url);
      if (hooks.fetch) {
        const res = await hooks.fetch(request, env, context, url, ctxExt);
        if (res) {
          return res;
        }
      }
      return await nitroApp.fetch(request);
    },
    scheduled(controller, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
        controller,
        env,
        context
      }) || Promise.resolve());
    },
    email(message, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:email", {
        message,
        event: message,
        env,
        context
      }) || Promise.resolve());
    },
    queue(batch, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
        batch,
        event: batch,
        env,
        context
      }) || Promise.resolve());
    },
    tail(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
        traces,
        env,
        context
      }) || Promise.resolve());
    },
    trace(traces, env, context) {
      globalThis.__env__ = env;
      context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
        traces,
        env,
        context
      }) || Promise.resolve());
    }
  };
}
function augmentReq(cfReq, ctx) {
  const req = cfReq;
  req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
  req.runtime ??= { name: "cloudflare" };
  req.runtime.cloudflare = {
    ...req.runtime.cloudflare,
    ...ctx
  };
  req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
const cloudflareModule = createHandler({ fetch(cfRequest, env, context, url) {
  if (env.ASSETS && isPublicAssetURL(url.pathname)) {
    return env.ASSETS.fetch(cfRequest);
  }
} });
export {
  cloudflareModule as default
};
