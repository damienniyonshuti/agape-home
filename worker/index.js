const ALLOWED_ORIGIN = "https://damienniyonshuti.github.io";

function corsHeaders(origin) {
  return {
    "Access-Control-Allow-Origin": origin === ALLOWED_ORIGIN ? origin : ALLOWED_ORIGIN,
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, X-Agape-Token",
    "Cache-Control": "no-store"
  };
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";

    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders(origin)
      });
    }

    if (request.method !== "GET") {
      return new Response("Method not allowed", {
        status: 405,
        headers: corsHeaders(origin)
      });
    }

    const url = new URL(request.url);
    if (url.pathname !== "/wifi") {
      return new Response("Not found", {
        status: 404,
        headers: corsHeaders(origin)
      });
    }

    const token = request.headers.get("X-Agape-Token");
    if (!token || token !== env.AGAPE_TOKEN) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "application/json"
        }
      });
    }

    return new Response(
      JSON.stringify({
        ssid: env.WIFI_SSID,
        password: env.WIFI_PASSWORD
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders(origin),
          "Content-Type": "application/json"
        }
      }
    );
  }
};
