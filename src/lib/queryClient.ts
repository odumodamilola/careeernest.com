import { QueryClient } from "@tanstack/react-query";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

async function throwIfResNotOk(res: Response): Promise<void> {
  if (!res.ok) {
    const text = await res.text() || res.statusText;
    throw new Error(`${res.status}: ${text}`);
  }
}

export async function apiRequest(method: HttpMethod, url: string, data?: unknown): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include"
  });
  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = 'throw' | 'returnNull';

interface QueryFnConfig {
  on401: UnauthorizedBehavior;
}

import { QueryFunctionContext } from '@tanstack/react-query';

export const getQueryFn = ({ on401: unauthorizedBehavior }: QueryFnConfig) => async (
  context: QueryFunctionContext
) => {
  const res = await fetch(context.queryKey[0] as string, {
    credentials: "include"
  });
  if (unauthorizedBehavior === "returnNull" && res.status === 401) {
    return null;
  }
  await throwIfResNotOk(res);
  return await res.json();
};
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false
    },
    mutations: {
      retry: false
    }
  }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJ5Q2xpZW50LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUZ1bmN0aW9uIH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuXG5hc3luYyBmdW5jdGlvbiB0aHJvd0lmUmVzTm90T2socmVzOiBSZXNwb25zZSkge1xuICBpZiAoIXJlcy5vaykge1xuICAgIGNvbnN0IHRleHQgPSAoYXdhaXQgcmVzLnRleHQoKSkgfHwgcmVzLnN0YXR1c1RleHQ7XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke3Jlcy5zdGF0dXN9OiAke3RleHR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFwaVJlcXVlc3QoXG4gIG1ldGhvZDogc3RyaW5nLFxuICB1cmw6IHN0cmluZyxcbiAgZGF0YT86IHVua25vd24gfCB1bmRlZmluZWQsXG4pOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgIG1ldGhvZCxcbiAgICBoZWFkZXJzOiBkYXRhID8geyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9IDoge30sXG4gICAgYm9keTogZGF0YSA/IEpTT04uc3RyaW5naWZ5KGRhdGEpIDogdW5kZWZpbmVkLFxuICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgfSk7XG5cbiAgYXdhaXQgdGhyb3dJZlJlc05vdE9rKHJlcyk7XG4gIHJldHVybiByZXM7XG59XG5cbnR5cGUgVW5hdXRob3JpemVkQmVoYXZpb3IgPSBcInJldHVybk51bGxcIiB8IFwidGhyb3dcIjtcbmV4cG9ydCBjb25zdCBnZXRRdWVyeUZuOiA8VD4ob3B0aW9uczoge1xuICBvbjQwMTogVW5hdXRob3JpemVkQmVoYXZpb3I7XG59KSA9PiBRdWVyeUZ1bmN0aW9uPFQ+ID1cbiAgKHsgb240MDE6IHVuYXV0aG9yaXplZEJlaGF2aW9yIH0pID0+XG4gIGFzeW5jICh7IHF1ZXJ5S2V5IH0pID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChxdWVyeUtleVswXSBhcyBzdHJpbmcsIHtcbiAgICAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICB9KTtcblxuICAgIGlmICh1bmF1dGhvcml6ZWRCZWhhdmlvciA9PT0gXCJyZXR1cm5OdWxsXCIgJiYgcmVzLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBhd2FpdCB0aHJvd0lmUmVzTm90T2socmVzKTtcbiAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgfTtcblxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICBxdWVyaWVzOiB7XG4gICAgICBxdWVyeUZuOiBnZXRRdWVyeUZuKHsgb240MDE6IFwidGhyb3dcIiB9KSxcbiAgICAgIHJlZmV0Y2hJbnRlcnZhbDogZmFsc2UsXG4gICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICBzdGFsZVRpbWU6IEluZmluaXR5LFxuICAgICAgcmV0cnk6IGZhbHNlLFxuICAgIH0sXG4gICAgbXV0YXRpb25zOiB7XG4gICAgICByZXRyeTogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTLG1CQUFrQztBQUUzQyxlQUFlLGdCQUFnQixLQUFlO0FBQzVDLE1BQUksQ0FBQyxJQUFJLElBQUk7QUFDWCxVQUFNLE9BQVEsTUFBTSxJQUFJLEtBQUssS0FBTSxJQUFJO0FBQ3ZDLFVBQU0sSUFBSSxNQUFNLEdBQUcsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO0FBQUEsRUFDMUM7QUFDRjtBQUVBLHNCQUFzQixXQUNwQixRQUNBLEtBQ0EsTUFDbUI7QUFDbkIsUUFBTSxNQUFNLE1BQU0sTUFBTSxLQUFLO0FBQUEsSUFDM0I7QUFBQSxJQUNBLFNBQVMsT0FBTyxFQUFFLGdCQUFnQixtQkFBbUIsSUFBSSxDQUFDO0FBQUEsSUFDMUQsTUFBTSxPQUFPLEtBQUssVUFBVSxJQUFJLElBQUk7QUFBQSxJQUNwQyxhQUFhO0FBQUEsRUFDZixDQUFDO0FBRUQsUUFBTSxnQkFBZ0IsR0FBRztBQUN6QixTQUFPO0FBQ1Q7QUFHTyxhQUFNLGFBR1gsQ0FBQyxFQUFFLE9BQU8scUJBQXFCLE1BQy9CLE9BQU8sRUFBRSxTQUFTLE1BQU07QUFDdEIsUUFBTSxNQUFNLE1BQU0sTUFBTSxTQUFTLENBQUMsR0FBYTtBQUFBLElBQzdDLGFBQWE7QUFBQSxFQUNmLENBQUM7QUFFRCxNQUFJLHlCQUF5QixnQkFBZ0IsSUFBSSxXQUFXLEtBQUs7QUFDL0QsV0FBTztBQUFBLEVBQ1Q7QUFFQSxRQUFNLGdCQUFnQixHQUFHO0FBQ3pCLFNBQU8sTUFBTSxJQUFJLEtBQUs7QUFDeEI7QUFFSyxhQUFNLGNBQWMsSUFBSSxZQUFZO0FBQUEsRUFDekMsZ0JBQWdCO0FBQUEsSUFDZCxTQUFTO0FBQUEsTUFDUCxTQUFTLFdBQVcsRUFBRSxPQUFPLFFBQVEsQ0FBQztBQUFBLE1BQ3RDLGlCQUFpQjtBQUFBLE1BQ2pCLHNCQUFzQjtBQUFBLE1BQ3RCLFdBQVc7QUFBQSxNQUNYLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxPQUFPO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsIm5hbWVzIjpbXX0=