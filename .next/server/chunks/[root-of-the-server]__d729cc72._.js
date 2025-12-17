module.exports=[93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},33929,e=>{"use strict";e.i(64698);var t=e.i(61690),r=e.i(81662);function a(){return process.env.NEXT_PUBLIC_SUPABASE_URL||""}async function s(){let e=await (0,r.cookies)();return(0,t.createServerClient)(a(),process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||"",{cookies:{getAll:()=>e.getAll(),setAll(t){try{t.forEach(({name:t,value:r,options:a})=>e.set(t,r,a))}catch{}}}})}async function i(){let{createClient:t}=await e.A(39591);return t(a(),process.env.SUPABASE_SERVICE_ROLE_KEY||"",{auth:{autoRefreshToken:!1,persistSession:!1}})}e.s(["createAdminClient",()=>i,"createClient",()=>s,"getSupabaseAdminClient",0,i])},54799,(e,t,r)=>{t.exports=e.x("crypto",()=>require("crypto"))},18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},24361,(e,t,r)=>{t.exports=e.x("util",()=>require("util"))},21517,(e,t,r)=>{t.exports=e.x("http",()=>require("http"))},874,(e,t,r)=>{t.exports=e.x("buffer",()=>require("buffer"))},6461,(e,t,r)=>{t.exports=e.x("zlib",()=>require("zlib"))},24836,(e,t,r)=>{t.exports=e.x("https",()=>require("https"))},27699,(e,t,r)=>{t.exports=e.x("events",()=>require("events"))},34311,e=>{"use strict";var t=e.i(92333),r=e.i(26750),a=e.i(60762),s=e.i(94586),i=e.i(27541),T=e.i(58594),n=e.i(53319),E=e.i(76127),o=e.i(39423),d=e.i(49313),l=e.i(782),u=e.i(59682),c=e.i(91286),A=e.i(5098),N=e.i(70504),p=e.i(53490),L=e.i(93695);e.i(16536);var U=e.i(27662),_=e.i(78127),I=e.i(23422),O=e.i(36348),R=e.i(33929);async function S(){try{let e=await (0,I.getServerSession)(O.authOptions);if(!e?.user)return _.NextResponse.json({error:"Unauthorized"},{status:401});let t=await (0,R.getSupabaseAdminClient)(),r=`
      -- Enable UUID extension
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

      -- Users table
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        discord_id TEXT UNIQUE NOT NULL,
        username TEXT NOT NULL,
        email TEXT,
        avatar TEXT,
        membership TEXT DEFAULT 'free' CHECK (membership IN ('free', 'vip', 'admin')),
        coins INTEGER DEFAULT 100,
        reputation INTEGER DEFAULT 0,
        downloads INTEGER DEFAULT 0,
        points INTEGER DEFAULT 0,
        is_banned BOOLEAN DEFAULT FALSE,
        ban_reason TEXT,
        is_admin BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW(),
        last_seen TIMESTAMPTZ DEFAULT NOW()
      );

      -- Assets table
      CREATE TABLE IF NOT EXISTS assets (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        description TEXT,
        category TEXT NOT NULL CHECK (category IN ('scripts', 'mlo', 'vehicles', 'clothing')),
        framework TEXT DEFAULT 'standalone' CHECK (framework IN ('standalone', 'esx', 'qbcore', 'qbox')),
        version TEXT DEFAULT '1.0.0',
        coin_price INTEGER DEFAULT 0,
        thumbnail TEXT,
        download_link TEXT,
        file_size TEXT,
        downloads INTEGER DEFAULT 0,
        tags TEXT[] DEFAULT '{}',
        status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'active', 'rejected', 'archived')),
        is_verified BOOLEAN DEFAULT FALSE,
        is_featured BOOLEAN DEFAULT FALSE,
        virus_scan_status TEXT DEFAULT 'pending' CHECK (virus_scan_status IN ('pending', 'clean', 'threat')),
        author_id TEXT NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Downloads table
      CREATE TABLE IF NOT EXISTS downloads (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id TEXT NOT NULL,
        asset_id UUID NOT NULL,
        coin_spent INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        UNIQUE(user_id, asset_id)
      );

      -- Forum Categories table
      CREATE TABLE IF NOT EXISTS forum_categories (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        name TEXT NOT NULL,
        description TEXT,
        icon TEXT DEFAULT 'MessageSquare',
        color TEXT DEFAULT '#3b82f6',
        thread_count INTEGER DEFAULT 0,
        post_count INTEGER DEFAULT 0,
        sort_order INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Forum Threads table
      CREATE TABLE IF NOT EXISTS forum_threads (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        title TEXT NOT NULL,
        content TEXT NOT NULL,
        category_id UUID,
        author_id TEXT NOT NULL,
        replies_count INTEGER DEFAULT 0,
        likes INTEGER DEFAULT 0,
        views INTEGER DEFAULT 0,
        is_pinned BOOLEAN DEFAULT FALSE,
        is_locked BOOLEAN DEFAULT FALSE,
        is_deleted BOOLEAN DEFAULT FALSE,
        last_reply_at TIMESTAMPTZ,
        last_reply_by TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Forum Replies table
      CREATE TABLE IF NOT EXISTS forum_replies (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        thread_id UUID NOT NULL,
        content TEXT NOT NULL,
        author_id TEXT NOT NULL,
        likes INTEGER DEFAULT 0,
        is_deleted BOOLEAN DEFAULT FALSE,
        is_edited BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Notifications table
      CREATE TABLE IF NOT EXISTS notifications (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id TEXT NOT NULL,
        type TEXT DEFAULT 'system' CHECK (type IN ('reply', 'mention', 'like', 'system', 'download')),
        title TEXT NOT NULL,
        message TEXT,
        link TEXT,
        is_read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Activity log table
      CREATE TABLE IF NOT EXISTS activities (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id TEXT NOT NULL,
        type TEXT NOT NULL,
        action TEXT NOT NULL,
        target_id TEXT,
        metadata JSONB DEFAULT '{}',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Coin Transactions table
      CREATE TABLE IF NOT EXISTS coin_transactions (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id TEXT NOT NULL,
        amount INTEGER NOT NULL,
        type TEXT NOT NULL,
        description TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Likes table
      CREATE TABLE IF NOT EXISTS likes (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id TEXT NOT NULL,
        target_type TEXT NOT NULL CHECK (target_type IN ('thread', 'reply', 'asset')),
        target_id UUID NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        UNIQUE(user_id, target_type, target_id)
      );

      -- Reports table
      CREATE TABLE IF NOT EXISTS reports (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        type TEXT NOT NULL CHECK (type IN ('thread', 'reply', 'user', 'asset')),
        target_id TEXT NOT NULL,
        reason TEXT NOT NULL,
        description TEXT,
        reporter_id TEXT NOT NULL,
        status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'reviewing', 'resolved', 'dismissed')),
        moderator_id TEXT,
        moderator_notes TEXT,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        resolved_at TIMESTAMPTZ
      );

      -- Messages table
      CREATE TABLE IF NOT EXISTS messages (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        sender_id TEXT NOT NULL,
        receiver_id TEXT NOT NULL,
        content TEXT NOT NULL,
        is_read BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Testimonials table
      CREATE TABLE IF NOT EXISTS testimonials (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id TEXT NOT NULL,
        content TEXT NOT NULL,
        rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
        is_featured BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Daily Rewards tracking
      CREATE TABLE IF NOT EXISTS daily_rewards (
        id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
        user_id TEXT NOT NULL,
        claimed_at DATE NOT NULL DEFAULT CURRENT_DATE,
        amount INTEGER NOT NULL,
        streak INTEGER DEFAULT 1,
        UNIQUE(user_id, claimed_at)
      );

      -- Create indexes
      CREATE INDEX IF NOT EXISTS idx_users_discord_id ON users(discord_id);
      CREATE INDEX IF NOT EXISTS idx_assets_category ON assets(category);
      CREATE INDEX IF NOT EXISTS idx_assets_status ON assets(status);
      CREATE INDEX IF NOT EXISTS idx_assets_author ON assets(author_id);
      CREATE INDEX IF NOT EXISTS idx_downloads_user ON downloads(user_id);
      CREATE INDEX IF NOT EXISTS idx_downloads_asset ON downloads(asset_id);
      CREATE INDEX IF NOT EXISTS idx_forum_threads_category ON forum_threads(category_id);
      CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id);
      CREATE INDEX IF NOT EXISTS idx_activities_user ON activities(user_id);
    `,{error:a}=await t.rpc("exec_sql",{sql:r}).maybeSingle();if(a?.message?.includes("function")||a?.message?.includes("does not exist"))return _.NextResponse.json({success:!0,message:"Schema created or already exists"});if(a&&(console.error("Schema error:",a),!a.message?.includes("already exists")))throw a;return _.NextResponse.json({success:!0})}catch(e){return console.error("Setup schema error:",e),_.NextResponse.json({error:e.message||"Failed to create schema"},{status:500})}}e.s(["POST",()=>S],46449);var F=e.i(46449);let D=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/setup/schema/route",pathname:"/api/setup/schema",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/app/api/setup/schema/route.ts",nextConfigOutput:"",userland:F}),{workAsyncStorage:h,workUnitAsyncStorage:g,serverHooks:x}=D;function v(){return(0,a.patchFetch)({workAsyncStorage:h,workUnitAsyncStorage:g})}async function X(e,t,a){D.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let _="/api/setup/schema/route";_=_.replace(/\/index$/,"")||"/";let I=await D.prepare(e,t,{srcPage:_,multiZoneDraftMode:!1});if(!I)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:O,params:R,nextConfig:S,parsedUrl:F,isDraftMode:h,prerenderManifest:g,routerServerContext:x,isOnDemandRevalidate:v,revalidateOnlyGenerated:X,resolvedPathname:m,clientReferenceManifest:C,serverActionsManifest:f}=I,M=(0,E.normalizeAppPath)(_),y=!!(g.dynamicRoutes[M]||g.routes[m]),P=async()=>((null==x?void 0:x.render404)?await x.render404(e,t,F,!1):t.end("This page could not be found"),null);if(y&&!h){let e=!!g.routes[m],t=g.dynamicRoutes[M];if(t&&!1===t.fallback&&!e){if(S.experimental.adapterPath)return await P();throw new L.NoFallbackError}}let w=null;!y||D.isDev||h||(w="/index"===(w=m)?"/":w);let b=!0===D.isDev||!y,B=y&&!b;f&&C&&(0,T.setReferenceManifestsSingleton)({page:_,clientReferenceManifest:C,serverActionsManifest:f,serverModuleMap:(0,n.createServerModuleMap)({serverActionsManifest:f})});let k=e.method||"GET",K=(0,i.getTracer)(),q=K.getActiveScopeSpan(),Y={params:R,prerenderManifest:g,renderOpts:{experimental:{authInterrupts:!!S.experimental.authInterrupts},cacheComponents:!!S.cacheComponents,supportsDynamicResponse:b,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:S.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>D.onRequestError(e,t,a,x)},sharedContext:{buildId:O}},H=new o.NodeNextRequest(e),j=new o.NodeNextResponse(t),G=d.NextRequestAdapter.fromNodeNextRequest(H,(0,d.signalFromNodeResponse)(t));try{let T=async e=>D.handle(G,Y).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=K.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==l.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${k} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${k} ${_}`)}),n=!!(0,s.getRequestMeta)(e,"minimalMode"),E=async s=>{var i,E;let o=async({previousCacheEntry:r})=>{try{if(!n&&v&&X&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let i=await T(s);e.fetchMetrics=Y.renderOpts.fetchMetrics;let E=Y.renderOpts.pendingWaitUntil;E&&a.waitUntil&&(a.waitUntil(E),E=void 0);let o=Y.renderOpts.collectedTags;if(!y)return await (0,c.sendResponse)(H,j,i,Y.renderOpts.pendingWaitUntil),null;{let e=await i.blob(),t=(0,A.toNodeOutgoingHttpHeaders)(i.headers);o&&(t[p.NEXT_CACHE_TAGS_HEADER]=o),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==Y.renderOpts.collectedRevalidate&&!(Y.renderOpts.collectedRevalidate>=p.INFINITE_CACHE)&&Y.renderOpts.collectedRevalidate,a=void 0===Y.renderOpts.collectedExpire||Y.renderOpts.collectedExpire>=p.INFINITE_CACHE?void 0:Y.renderOpts.collectedExpire;return{value:{kind:U.CachedRouteKind.APP_ROUTE,status:i.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await D.onRequestError(e,t,{routerKind:"App Router",routePath:_,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:B,isOnDemandRevalidate:v})},x),t}},d=await D.handleResponse({req:e,nextConfig:S,cacheKey:w,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:g,isRoutePPREnabled:!1,isOnDemandRevalidate:v,revalidateOnlyGenerated:X,responseGenerator:o,waitUntil:a.waitUntil,isMinimalMode:n});if(!y)return null;if((null==d||null==(i=d.value)?void 0:i.kind)!==U.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==d||null==(E=d.value)?void 0:E.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});n||t.setHeader("x-nextjs-cache",v?"REVALIDATED":d.isMiss?"MISS":d.isStale?"STALE":"HIT"),h&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let l=(0,A.fromNodeOutgoingHttpHeaders)(d.value.headers);return n&&y||l.delete(p.NEXT_CACHE_TAGS_HEADER),!d.cacheControl||t.getHeader("Cache-Control")||l.get("Cache-Control")||l.set("Cache-Control",(0,N.getCacheControlHeader)(d.cacheControl)),await (0,c.sendResponse)(H,j,new Response(d.value.body,{headers:l,status:d.value.status||200})),null};q?await E(q):await K.withPropagatedContext(e.headers,()=>K.trace(l.BaseServerSpan.handleRequest,{spanName:`${k} ${_}`,kind:i.SpanKind.SERVER,attributes:{"http.method":k,"http.target":e.url}},E))}catch(t){if(t instanceof L.NoFallbackError||await D.onRequestError(e,t,{routerKind:"App Router",routePath:M,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:B,isOnDemandRevalidate:v})}),y)throw t;return await (0,c.sendResponse)(H,j,new Response(null,{status:500})),null}}e.s(["handler",()=>X,"patchFetch",()=>v,"routeModule",()=>D,"serverHooks",()=>x,"workAsyncStorage",()=>h,"workUnitAsyncStorage",()=>g],34311)},39591,e=>{e.v(e=>Promise.resolve().then(()=>e(7263)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__d729cc72._.js.map