module.exports=[18622,(e,t,i)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,i)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,i)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,i)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},33929,e=>{"use strict";e.i(64698);var t=e.i(61690),i=e.i(81662);function r(){return process.env.NEXT_PUBLIC_SUPABASE_URL||""}async function s(){let e=await (0,i.cookies)();return(0,t.createServerClient)(r(),process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY||"",{cookies:{getAll:()=>e.getAll(),setAll(t){try{t.forEach(({name:t,value:i,options:r})=>e.set(t,i,r))}catch{}}}})}async function a(){let{createClient:t}=await e.A(39591);return t(r(),process.env.SUPABASE_SERVICE_ROLE_KEY||"",{auth:{autoRefreshToken:!1,persistSession:!1}})}e.s(["createAdminClient",()=>a,"createClient",()=>s,"getSupabaseAdminClient",0,a])},47575,e=>{"use strict";var t=e.i(92333),i=e.i(26750),r=e.i(60762),s=e.i(94586),a=e.i(27541),n=e.i(58594),o=e.i(53319),l=e.i(76127),d=e.i(39423),c=e.i(49313),p=e.i(782),E=e.i(59682),u=e.i(91286),A=e.i(5098),T=e.i(70504),_=e.i(53490),R=e.i(93695);e.i(16536);var L=e.i(27662),h=e.i(78127),v=e.i(33929);async function m(){try{let e=await (0,v.createAdminClient)(),t=`
      -- Create spin_wheel_prizes table
      CREATE TABLE IF NOT EXISTS spin_wheel_prizes (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        coins INTEGER NOT NULL DEFAULT 0,
        probability DECIMAL(5,2) NOT NULL DEFAULT 0,
        color VARCHAR(20) DEFAULT '#4ade80',
        rarity VARCHAR(20) DEFAULT 'common',
        description TEXT,
        image_url TEXT,
        is_active BOOLEAN DEFAULT true,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Create spin_wheel_settings table
      CREATE TABLE IF NOT EXISTS spin_wheel_settings (
        id SERIAL PRIMARY KEY,
        daily_free_spins INTEGER DEFAULT 0,
        spin_cost_coins INTEGER DEFAULT 0,
        is_enabled BOOLEAN DEFAULT true,
        jackpot_threshold INTEGER DEFAULT 1000,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Create spin_history table
      CREATE TABLE IF NOT EXISTS spin_history (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(100),
        discord_id VARCHAR(100),
        prize_id INTEGER,
        prize_name VARCHAR(100),
        coins_won INTEGER DEFAULT 0,
        spin_type VARCHAR(20) DEFAULT 'ticket',
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Create daily_spin_tickets table
      CREATE TABLE IF NOT EXISTS daily_spin_tickets (
        id SERIAL PRIMARY KEY,
        user_id VARCHAR(100),
        discord_id VARCHAR(100) NOT NULL,
        tickets INTEGER DEFAULT 0,
        last_claim TIMESTAMPTZ,
        streak INTEGER DEFAULT 0,
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Create testimonials table
      CREATE TABLE IF NOT EXISTS testimonials (
        id SERIAL PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        avatar TEXT,
        content TEXT NOT NULL,
        rating INTEGER DEFAULT 5,
        server_name VARCHAR(100),
        upvotes_received INTEGER DEFAULT 0,
        is_featured BOOLEAN DEFAULT true,
        is_visible BOOLEAN DEFAULT true,
        is_verified BOOLEAN DEFAULT false,
        badge VARCHAR(20),
        image_url TEXT,
        user_id VARCHAR(100),
        created_at TIMESTAMPTZ DEFAULT NOW(),
        updated_at TIMESTAMPTZ DEFAULT NOW()
      );

      -- Enable RLS
      ALTER TABLE spin_wheel_prizes ENABLE ROW LEVEL SECURITY;
      ALTER TABLE spin_wheel_settings ENABLE ROW LEVEL SECURITY;
      ALTER TABLE spin_history ENABLE ROW LEVEL SECURITY;
      ALTER TABLE daily_spin_tickets ENABLE ROW LEVEL SECURITY;
      ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

      -- Create RLS Policies (with DROP IF EXISTS to avoid errors)
      DO $$ 
      BEGIN
        DROP POLICY IF EXISTS "Allow public read spin_wheel_prizes" ON spin_wheel_prizes;
        CREATE POLICY "Allow public read spin_wheel_prizes" ON spin_wheel_prizes FOR SELECT USING (true);
        
        DROP POLICY IF EXISTS "Allow service role all spin_wheel_prizes" ON spin_wheel_prizes;
        CREATE POLICY "Allow service role all spin_wheel_prizes" ON spin_wheel_prizes FOR ALL USING (true);

        DROP POLICY IF EXISTS "Allow public read spin_wheel_settings" ON spin_wheel_settings;
        CREATE POLICY "Allow public read spin_wheel_settings" ON spin_wheel_settings FOR SELECT USING (true);
        
        DROP POLICY IF EXISTS "Allow service role all spin_wheel_settings" ON spin_wheel_settings;
        CREATE POLICY "Allow service role all spin_wheel_settings" ON spin_wheel_settings FOR ALL USING (true);

        DROP POLICY IF EXISTS "Allow service role all spin_history" ON spin_history;
        CREATE POLICY "Allow service role all spin_history" ON spin_history FOR ALL USING (true);

        DROP POLICY IF EXISTS "Allow service role all daily_spin_tickets" ON daily_spin_tickets;
        CREATE POLICY "Allow service role all daily_spin_tickets" ON daily_spin_tickets FOR ALL USING (true);

        DROP POLICY IF EXISTS "Allow public read testimonials" ON testimonials;
        CREATE POLICY "Allow public read testimonials" ON testimonials FOR SELECT USING (is_visible = true);
        
        DROP POLICY IF EXISTS "Allow service role all testimonials" ON testimonials;
        CREATE POLICY "Allow service role all testimonials" ON testimonials FOR ALL USING (true);
      END $$;
    `,{error:i}=await e.rpc("exec_sql",{sql:t});i&&i.message.includes("already exists");let{data:r,error:s}=await e.from("spin_wheel_prizes").select("id").limit(1);s||r&&0!==r.length||await e.from("spin_wheel_prizes").insert([{name:"5 Coins",coins:5,probability:25,color:"#4ade80",rarity:"common",is_active:!0},{name:"10 Coins",coins:10,probability:20,color:"#22d3ee",rarity:"common",is_active:!0},{name:"25 Coins",coins:25,probability:18,color:"#a78bfa",rarity:"uncommon",is_active:!0},{name:"50 Coins",coins:50,probability:15,color:"#f472b6",rarity:"uncommon",is_active:!0},{name:"100 Coins",coins:100,probability:10,color:"#fbbf24",rarity:"rare",is_active:!0},{name:"250 Coins",coins:250,probability:7,color:"#f97316",rarity:"rare",is_active:!0},{name:"500 Coins",coins:500,probability:4,color:"#ef4444",rarity:"epic",is_active:!0},{name:"JACKPOT 1000",coins:1e3,probability:1,color:"#eab308",rarity:"legendary",is_active:!0}]);let{data:a,error:n}=await e.from("spin_wheel_settings").select("id").limit(1);n||a&&0!==a.length||await e.from("spin_wheel_settings").insert({id:1,daily_free_spins:0,spin_cost_coins:0,is_enabled:!0,jackpot_threshold:1e3});let{data:o,error:l}=await e.from("testimonials").select("id").limit(1);return l||o&&0!==o.length||await e.from("testimonials").insert([{username:"ServerOwner_Pro",avatar:"https://i.pravatar.cc/150?img=1",content:"Amazing upvote service! My server went from 50 to 500+ players in just one week. The boost is incredible and completely safe.",rating:5,server_name:"Los Santos Roleplay",upvotes_received:15e3,is_featured:!0,is_visible:!0,is_verified:!0,badge:"verified"},{username:"FiveM_Developer",avatar:"https://i.pravatar.cc/150?img=2",content:"Best tool I've ever used for my FiveM server. The upvotes are delivered fast and my server ranking improved significantly.",rating:5,server_name:"Premium RP",upvotes_received:25e3,is_featured:!0,is_visible:!0,is_verified:!0,badge:"pro"}]),h.NextResponse.json({success:!0,message:"Database initialized successfully",tablesChecked:["spin_wheel_prizes","spin_wheel_settings","testimonials"]})}catch(t){console.error("[v0] Database init error:",t);let e=t instanceof Error?t.message:"Unknown error";if(e.includes("relation")&&e.includes("does not exist"))return h.NextResponse.json({success:!1,error:"Database tables not created. Please run scripts/009_complete_auto_setup.sql once.",details:e,note:"After running the SQL script once, the system will auto-maintain data."},{status:500});return h.NextResponse.json({success:!1,error:"Failed to initialize database",details:e},{status:500})}}e.s(["GET",()=>m],86383);var O=e.i(86383);let C=new t.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/api/init-database/route",pathname:"/api/init-database",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/Pictures/APPLICATION DECRYPT FULL NO FXAP/TOOLS WEBSITE/app/api/init-database/route.ts",nextConfigOutput:"",userland:O}),{workAsyncStorage:I,workUnitAsyncStorage:N,serverHooks:w}=C;function S(){return(0,r.patchFetch)({workAsyncStorage:I,workUnitAsyncStorage:N})}async function y(e,t,r){C.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let h="/api/init-database/route";h=h.replace(/\/index$/,"")||"/";let v=await C.prepare(e,t,{srcPage:h,multiZoneDraftMode:!1});if(!v)return t.statusCode=400,t.end("Bad Request"),null==r.waitUntil||r.waitUntil.call(r,Promise.resolve()),null;let{buildId:m,params:O,nextConfig:I,parsedUrl:N,isDraftMode:w,prerenderManifest:S,routerServerContext:y,isOnDemandRevalidate:b,revalidateOnlyGenerated:g,resolvedPathname:f,clientReferenceManifest:P,serverActionsManifest:x}=v,U=(0,l.normalizeAppPath)(h),F=!!(S.dynamicRoutes[U]||S.routes[f]),D=async()=>((null==y?void 0:y.render404)?await y.render404(e,t,N,!1):t.end("This page could not be found"),null);if(F&&!w){let e=!!S.routes[f],t=S.dynamicRoutes[U];if(t&&!1===t.fallback&&!e){if(I.experimental.adapterPath)return await D();throw new R.NoFallbackError}}let M=null;!F||C.isDev||w||(M="/index"===(M=f)?"/":M);let k=!0===C.isDev||!F,Y=F&&!k;x&&P&&(0,n.setReferenceManifestsSingleton)({page:h,clientReferenceManifest:P,serverActionsManifest:x,serverModuleMap:(0,o.createServerModuleMap)({serverActionsManifest:x})});let B=e.method||"GET",H=(0,a.getTracer)(),X=H.getActiveScopeSpan(),j={params:O,prerenderManifest:S,renderOpts:{experimental:{authInterrupts:!!I.experimental.authInterrupts},cacheComponents:!!I.cacheComponents,supportsDynamicResponse:k,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:I.cacheLife,waitUntil:r.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,i,r)=>C.onRequestError(e,t,r,y)},sharedContext:{buildId:m}},q=new d.NodeNextRequest(e),G=new d.NodeNextResponse(t),V=c.NextRequestAdapter.fromNodeNextRequest(q,(0,c.signalFromNodeResponse)(t));try{let n=async e=>C.handle(V,j).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let i=H.getRootSpanAttributes();if(!i)return;if(i.get("next.span_type")!==p.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${i.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let r=i.get("next.route");if(r){let t=`${B} ${r}`;e.setAttributes({"next.route":r,"http.route":r,"next.span_name":t}),e.updateName(t)}else e.updateName(`${B} ${h}`)}),o=!!(0,s.getRequestMeta)(e,"minimalMode"),l=async s=>{var a,l;let d=async({previousCacheEntry:i})=>{try{if(!o&&b&&g&&!i)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let a=await n(s);e.fetchMetrics=j.renderOpts.fetchMetrics;let l=j.renderOpts.pendingWaitUntil;l&&r.waitUntil&&(r.waitUntil(l),l=void 0);let d=j.renderOpts.collectedTags;if(!F)return await (0,u.sendResponse)(q,G,a,j.renderOpts.pendingWaitUntil),null;{let e=await a.blob(),t=(0,A.toNodeOutgoingHttpHeaders)(a.headers);d&&(t[_.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let i=void 0!==j.renderOpts.collectedRevalidate&&!(j.renderOpts.collectedRevalidate>=_.INFINITE_CACHE)&&j.renderOpts.collectedRevalidate,r=void 0===j.renderOpts.collectedExpire||j.renderOpts.collectedExpire>=_.INFINITE_CACHE?void 0:j.renderOpts.collectedExpire;return{value:{kind:L.CachedRouteKind.APP_ROUTE,status:a.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:i,expire:r}}}}catch(t){throw(null==i?void 0:i.isStale)&&await C.onRequestError(e,t,{routerKind:"App Router",routePath:h,routeType:"route",revalidateReason:(0,E.getRevalidateReason)({isStaticGeneration:Y,isOnDemandRevalidate:b})},y),t}},c=await C.handleResponse({req:e,nextConfig:I,cacheKey:M,routeKind:i.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:S,isRoutePPREnabled:!1,isOnDemandRevalidate:b,revalidateOnlyGenerated:g,responseGenerator:d,waitUntil:r.waitUntil,isMinimalMode:o});if(!F)return null;if((null==c||null==(a=c.value)?void 0:a.kind)!==L.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==c||null==(l=c.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});o||t.setHeader("x-nextjs-cache",b?"REVALIDATED":c.isMiss?"MISS":c.isStale?"STALE":"HIT"),w&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let p=(0,A.fromNodeOutgoingHttpHeaders)(c.value.headers);return o&&F||p.delete(_.NEXT_CACHE_TAGS_HEADER),!c.cacheControl||t.getHeader("Cache-Control")||p.get("Cache-Control")||p.set("Cache-Control",(0,T.getCacheControlHeader)(c.cacheControl)),await (0,u.sendResponse)(q,G,new Response(c.value.body,{headers:p,status:c.value.status||200})),null};X?await l(X):await H.withPropagatedContext(e.headers,()=>H.trace(p.BaseServerSpan.handleRequest,{spanName:`${B} ${h}`,kind:a.SpanKind.SERVER,attributes:{"http.method":B,"http.target":e.url}},l))}catch(t){if(t instanceof R.NoFallbackError||await C.onRequestError(e,t,{routerKind:"App Router",routePath:U,routeType:"route",revalidateReason:(0,E.getRevalidateReason)({isStaticGeneration:Y,isOnDemandRevalidate:b})}),F)throw t;return await (0,u.sendResponse)(q,G,new Response(null,{status:500})),null}}e.s(["handler",()=>y,"patchFetch",()=>S,"routeModule",()=>C,"serverHooks",()=>w,"workAsyncStorage",()=>I,"workUnitAsyncStorage",()=>N],47575)},39591,e=>{e.v(e=>Promise.resolve().then(()=>e(7263)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__eabf8a7e._.js.map