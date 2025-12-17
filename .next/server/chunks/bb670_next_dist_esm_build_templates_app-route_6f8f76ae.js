module.exports=[71426,e=>{"use strict";var E=e.i(92333),t=e.i(26750),i=e.i(60762),T=e.i(94586),r=e.i(27541),a=e.i(58594),s=e.i(53319),n=e.i(76127),o=e.i(39423),d=e.i(49313),l=e.i(782),u=e.i(59682),A=e.i(91286),c=e.i(5098),N=e.i(70504),L=e.i(53490),I=e.i(93695);e.i(16536);var p=e.i(27662),_=e.i(78127),R=e.i(33929);async function U(){try{let e=await (0,R.createAdminClient)(),{data:E}=await e.from("information_schema.tables").select("table_name").eq("table_schema","public");for(let E of`
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users Table
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  discord_id TEXT UNIQUE NOT NULL,
  username TEXT NOT NULL,
  discriminator TEXT,
  avatar TEXT,
  email TEXT,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'moderator', 'admin', 'superadmin')),
  coins INTEGER DEFAULT 0 CHECK (coins >= 0),
  is_banned BOOLEAN DEFAULT FALSE,
  ban_reason TEXT,
  banned_until TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  last_seen TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Assets Table
CREATE TABLE IF NOT EXISTS public.assets (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL CHECK (category IN ('scripts', 'mlo', 'vehicles', 'eup', 'weapons', 'props', 'other')),
  framework TEXT CHECK (framework IN ('qbcore', 'esx', 'qbox', 'standalone', 'other')),
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  price INTEGER DEFAULT 0 CHECK (price >= 0),
  is_free BOOLEAN DEFAULT TRUE,
  download_url TEXT,
  image_url TEXT,
  preview_images TEXT[],
  tags TEXT[],
  version TEXT DEFAULT '1.0.0',
  downloads INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  file_size TEXT,
  requirements TEXT[],
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'archived')),
  featured BOOLEAN DEFAULT FALSE,
  trending BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Downloads Table
CREATE TABLE IF NOT EXISTS public.downloads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  asset_id UUID REFERENCES public.assets(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  coins_spent INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(asset_id, user_id)
);

-- Likes Table
CREATE TABLE IF NOT EXISTS public.likes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  target_id UUID NOT NULL,
  target_type TEXT NOT NULL CHECK (target_type IN ('asset', 'thread', 'reply')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id, target_id, target_type)
);

-- Forum Categories Table
CREATE TABLE IF NOT EXISTS public.forum_categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL UNIQUE,
  description TEXT,
  icon TEXT,
  color TEXT,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Forum Threads Table
CREATE TABLE IF NOT EXISTS public.forum_threads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  category_id UUID REFERENCES public.forum_categories(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  is_pinned BOOLEAN DEFAULT FALSE,
  is_locked BOOLEAN DEFAULT FALSE,
  is_deleted BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected')),
  views INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  reply_count INTEGER DEFAULT 0,
  last_reply_at TIMESTAMP WITH TIME ZONE,
  last_reply_by UUID REFERENCES public.users(id),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Forum Replies Table
CREATE TABLE IF NOT EXISTS public.forum_replies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  thread_id UUID REFERENCES public.forum_threads(id) ON DELETE CASCADE,
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_deleted BOOLEAN DEFAULT FALSE,
  likes INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Activities Table
CREATE TABLE IF NOT EXISTS public.activities (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  avatar TEXT,
  action TEXT NOT NULL,
  target TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Notifications Table
CREATE TABLE IF NOT EXISTS public.notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
  is_read BOOLEAN DEFAULT FALSE,
  link TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Public Notifications Table
CREATE TABLE IF NOT EXISTS public.public_notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT DEFAULT 'info' CHECK (type IN ('info', 'success', 'warning', 'error')),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Announcements Table
CREATE TABLE IF NOT EXISTS public.announcements (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  author_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  is_pinned BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Banners Table
CREATE TABLE IF NOT EXISTS public.banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  link_url TEXT,
  sort_order INTEGER DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Coin Transactions Table
CREATE TABLE IF NOT EXISTS public.coin_transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  amount INTEGER NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('earn', 'spend', 'admin_add', 'admin_remove', 'daily_reward', 'spin_win')),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Daily Rewards Table
CREATE TABLE IF NOT EXISTS public.daily_rewards (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  claimed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  reward_amount INTEGER NOT NULL,
  UNIQUE(user_id, claimed_at::DATE)
);

-- Messages Table
CREATE TABLE IF NOT EXISTS public.messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  sender_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  recipient_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  content TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Spin Wheel Tables
CREATE TABLE IF NOT EXISTS public.spin_wheel_prizes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('coins', 'item', 'custom')),
  value INTEGER,
  description TEXT,
  color TEXT DEFAULT '#3b82f6',
  probability NUMERIC(5,2) DEFAULT 10.00 CHECK (probability >= 0 AND probability <= 100),
  is_active BOOLEAN DEFAULT TRUE,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.spin_wheel_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  spins_per_day INTEGER DEFAULT 1 CHECK (spins_per_day > 0),
  is_enabled BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.spin_history (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  prize_id UUID REFERENCES public.spin_wheel_prizes(id) ON DELETE SET NULL,
  prize_name TEXT NOT NULL,
  coins_won INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.spin_wheel_eligible_users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  spins_remaining INTEGER DEFAULT 1,
  last_spin_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(user_id)
);

CREATE TABLE IF NOT EXISTS public.spin_wheel_force_wins (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  prize_id UUID REFERENCES public.spin_wheel_prizes(id) ON DELETE CASCADE,
  is_active BOOLEAN DEFAULT TRUE,
  used_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonials Table
CREATE TABLE IF NOT EXISTS public.testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES public.users(id) ON DELETE CASCADE,
  username TEXT NOT NULL,
  avatar TEXT,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_featured BOOLEAN DEFAULT FALSE,
  is_approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create Indexes
CREATE INDEX IF NOT EXISTS idx_users_discord_id ON public.users(discord_id);
CREATE INDEX IF NOT EXISTS idx_users_role ON public.users(role);
CREATE INDEX IF NOT EXISTS idx_assets_author_id ON public.assets(author_id);
CREATE INDEX IF NOT EXISTS idx_assets_category ON public.assets(category);
CREATE INDEX IF NOT EXISTS idx_assets_status ON public.assets(status);
CREATE INDEX IF NOT EXISTS idx_downloads_asset_id ON public.downloads(asset_id);
CREATE INDEX IF NOT EXISTS idx_downloads_user_id ON public.downloads(user_id);
CREATE INDEX IF NOT EXISTS idx_likes_target ON public.likes(target_id, target_type);
CREATE INDEX IF NOT EXISTS idx_forum_threads_category ON public.forum_threads(category_id);
CREATE INDEX IF NOT EXISTS idx_forum_threads_author ON public.forum_threads(author_id);
CREATE INDEX IF NOT EXISTS idx_forum_replies_thread ON public.forum_replies(thread_id);
CREATE INDEX IF NOT EXISTS idx_activities_user ON public.activities(user_id);
CREATE INDEX IF NOT EXISTS idx_notifications_user ON public.notifications(user_id);
CREATE INDEX IF NOT EXISTS idx_coin_transactions_user ON public.coin_transactions(user_id);
CREATE INDEX IF NOT EXISTS idx_messages_sender ON public.messages(sender_id);
CREATE INDEX IF NOT EXISTS idx_messages_recipient ON public.messages(recipient_id);
CREATE INDEX IF NOT EXISTS idx_spin_history_user ON public.spin_history(user_id);
`.split(";").map(e=>e.trim()).filter(e=>e.length>0)){let{error:t}=await e.rpc("exec_sql",{sql:E});t&&!t.message.includes("already exists")&&console.error("Error executing statement:",t)}return await O(e),await S(e),_.NextResponse.json({success:!0,message:"Database migrated successfully"})}catch(e){return console.error("❌ Migration error:",e),_.NextResponse.json({success:!1,error:e instanceof Error?e.message:"Unknown error"},{status:500})}}async function O(e){for(let E of["ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.assets ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.downloads ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.likes ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.forum_categories ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.forum_threads ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.forum_replies ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.activities ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.notifications ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.public_notifications ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.coin_transactions ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.daily_rewards ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.spin_wheel_prizes ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.spin_wheel_settings ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.spin_history ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.spin_wheel_eligible_users ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.spin_wheel_force_wins ENABLE ROW LEVEL SECURITY;","ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;"])await e.rpc("exec_sql",{sql:E})}async function S(e){let{error:E}=await e.from("forum_categories").upsert([{name:"General Discussion",description:"General FiveM discussions and community chat",icon:"💬",color:"#3b82f6",sort_order:1},{name:"Script Help",description:"Get help with FiveM scripts and development",icon:"🔧",color:"#10b981",sort_order:2},{name:"Server Showcase",description:"Show off your FiveM server",icon:"🎮",color:"#8b5cf6",sort_order:3},{name:"Trading & Sales",description:"Buy, sell, and trade FiveM resources",icon:"💰",color:"#f59e0b",sort_order:4},{name:"Suggestions",description:"Suggest new features and improvements",icon:"💡",color:"#06b6d4",sort_order:5},{name:"Bug Reports",description:"Report bugs and technical issues",icon:"🐛",color:"#ef4444",sort_order:6}],{onConflict:"name"}),{data:t}=await e.from("spin_wheel_prizes").select("id").limit(1);t&&0!==t.length||await e.from("spin_wheel_prizes").insert([{name:"50 Coins",type:"coins",value:50,color:"#fbbf24",probability:25,sort_order:1},{name:"100 Coins",type:"coins",value:100,color:"#f59e0b",probability:20,sort_order:2},{name:"250 Coins",type:"coins",value:250,color:"#3b82f6",probability:15,sort_order:3},{name:"500 Coins",type:"coins",value:500,color:"#8b5cf6",probability:10,sort_order:4},{name:"1000 Coins",type:"coins",value:1e3,color:"#10b981",probability:5,sort_order:5},{name:"Better Luck",type:"custom",value:0,color:"#6b7280",probability:25,sort_order:6}]);let{data:i}=await e.from("spin_wheel_settings").select("id").limit(1);i&&0!==i.length||await e.from("spin_wheel_settings").insert({spins_per_day:1,is_enabled:!0})}async function D(){return _.NextResponse.json({message:"Use POST to run migrations"})}e.s(["GET",()=>D,"POST",()=>U],66637);var C=e.i(66637);let F=new E.AppRouteRouteModule({definition:{kind:t.RouteKind.APP_ROUTE,page:"/api/database/migrate/route",pathname:"/api/database/migrate",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/app/api/database/migrate/route.ts",nextConfigOutput:"",userland:C}),{workAsyncStorage:b,workUnitAsyncStorage:m,serverHooks:M}=F;function g(){return(0,i.patchFetch)({workAsyncStorage:b,workUnitAsyncStorage:m})}async function h(e,E,i){F.isDev&&(0,T.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let _="/api/database/migrate/route";_=_.replace(/\/index$/,"")||"/";let R=await F.prepare(e,E,{srcPage:_,multiZoneDraftMode:!1});if(!R)return E.statusCode=400,E.end("Bad Request"),null==i.waitUntil||i.waitUntil.call(i,Promise.resolve()),null;let{buildId:U,params:O,nextConfig:S,parsedUrl:D,isDraftMode:C,prerenderManifest:b,routerServerContext:m,isOnDemandRevalidate:M,revalidateOnlyGenerated:g,resolvedPathname:h,clientReferenceManifest:X,serverActionsManifest:f}=R,v=(0,n.normalizeAppPath)(_),w=!!(b.dynamicRoutes[v]||b.routes[h]),B=async()=>((null==m?void 0:m.render404)?await m.render404(e,E,D,!1):E.end("This page could not be found"),null);if(w&&!C){let e=!!b.routes[h],E=b.dynamicRoutes[v];if(E&&!1===E.fallback&&!e){if(S.experimental.adapterPath)return await B();throw new I.NoFallbackError}}let y=null;!w||F.isDev||C||(y="/index"===(y=h)?"/":y);let P=!0===F.isDev||!w,W=w&&!P;f&&X&&(0,a.setReferenceManifestsSingleton)({page:_,clientReferenceManifest:X,serverActionsManifest:f,serverModuleMap:(0,s.createServerModuleMap)({serverActionsManifest:f})});let H=e.method||"GET",Y=(0,r.getTracer)(),x=Y.getActiveScopeSpan(),K={params:O,prerenderManifest:b,renderOpts:{experimental:{authInterrupts:!!S.experimental.authInterrupts},cacheComponents:!!S.cacheComponents,supportsDynamicResponse:P,incrementalCache:(0,T.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:S.cacheLife,waitUntil:i.waitUntil,onClose:e=>{E.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(E,t,i)=>F.onRequestError(e,E,i,m)},sharedContext:{buildId:U}},Z=new o.NodeNextRequest(e),k=new o.NodeNextResponse(E),G=d.NextRequestAdapter.fromNodeNextRequest(Z,(0,d.signalFromNodeResponse)(E));try{let a=async e=>F.handle(G,K).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":E.statusCode,"next.rsc":!1});let t=Y.getRootSpanAttributes();if(!t)return;if(t.get("next.span_type")!==l.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${t.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let i=t.get("next.route");if(i){let E=`${H} ${i}`;e.setAttributes({"next.route":i,"http.route":i,"next.span_name":E}),e.updateName(E)}else e.updateName(`${H} ${_}`)}),s=!!(0,T.getRequestMeta)(e,"minimalMode"),n=async T=>{var r,n;let o=async({previousCacheEntry:t})=>{try{if(!s&&M&&g&&!t)return E.statusCode=404,E.setHeader("x-nextjs-cache","REVALIDATED"),E.end("This page could not be found"),null;let r=await a(T);e.fetchMetrics=K.renderOpts.fetchMetrics;let n=K.renderOpts.pendingWaitUntil;n&&i.waitUntil&&(i.waitUntil(n),n=void 0);let o=K.renderOpts.collectedTags;if(!w)return await (0,A.sendResponse)(Z,k,r,K.renderOpts.pendingWaitUntil),null;{let e=await r.blob(),E=(0,c.toNodeOutgoingHttpHeaders)(r.headers);o&&(E[L.NEXT_CACHE_TAGS_HEADER]=o),!E["content-type"]&&e.type&&(E["content-type"]=e.type);let t=void 0!==K.renderOpts.collectedRevalidate&&!(K.renderOpts.collectedRevalidate>=L.INFINITE_CACHE)&&K.renderOpts.collectedRevalidate,i=void 0===K.renderOpts.collectedExpire||K.renderOpts.collectedExpire>=L.INFINITE_CACHE?void 0:K.renderOpts.collectedExpire;return{value:{kind:p.CachedRouteKind.APP_ROUTE,status:r.status,body:Buffer.from(await e.arrayBuffer()),headers:E},cacheControl:{revalidate:t,expire:i}}}}catch(E){throw(null==t?void 0:t.isStale)&&await F.onRequestError(e,E,{routerKind:"App Router",routePath:_,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:W,isOnDemandRevalidate:M})},m),E}},d=await F.handleResponse({req:e,nextConfig:S,cacheKey:y,routeKind:t.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:b,isRoutePPREnabled:!1,isOnDemandRevalidate:M,revalidateOnlyGenerated:g,responseGenerator:o,waitUntil:i.waitUntil,isMinimalMode:s});if(!w)return null;if((null==d||null==(r=d.value)?void 0:r.kind)!==p.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(n=d.value)?void 0:n.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});s||E.setHeader("x-nextjs-cache",M?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),C&&E.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let l=(0,c.fromNodeOutgoingHttpHeaders)(d.value.headers);return s&&w||l.delete(L.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||E.getHeader("Cache-Control")||l.get("Cache-Control")||l.set("Cache-Control",(0,N.getCacheControlHeader)(d.cacheControl)),await (0,A.sendResponse)(Z,k,new Response(d.value.body,{headers:l,status:d.value.status||200})),null};x?await n(x):await Y.withPropagatedContext(e.headers,()=>Y.trace(l.BaseServerSpan.handleRequest,{spanName:`${H} ${_}`,kind:r.SpanKind.SERVER,attributes:{"http.method":H,"http.target":e.url}},n))}catch(E){if(E instanceof I.NoFallbackError||await F.onRequestError(e,E,{routerKind:"App Router",routePath:v,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:W,isOnDemandRevalidate:M})}),w)throw E;return await (0,A.sendResponse)(Z,k,new Response(null,{status:500})),null}}e.s(["handler",()=>h,"patchFetch",()=>g,"routeModule",()=>F,"serverHooks",()=>M,"workAsyncStorage",()=>b,"workUnitAsyncStorage",()=>m],71426)}];

//# sourceMappingURL=bb670_next_dist_esm_build_templates_app-route_6f8f76ae.js.map