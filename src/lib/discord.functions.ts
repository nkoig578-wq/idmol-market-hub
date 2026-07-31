import { createServerFn } from "@tanstack/react-start";

const INVITE_CODE = "5hwNWRZMsW";

export type DiscordStats = {
  memberCount: number;
  presenceCount: number;
};

export const getDiscordStats = createServerFn({ method: "GET" }).handler(
  async (): Promise<DiscordStats> => {
    try {
      const res = await fetch(
        `https://discord.com/api/v10/invites/${INVITE_CODE}?with_counts=true`,
        { headers: { accept: "application/json" } },
      );
      if (!res.ok) throw new Error(`Discord API ${res.status}`);
      const data = (await res.json()) as {
        approximate_member_count?: number;
        approximate_presence_count?: number;
      };
      return {
        memberCount: data.approximate_member_count ?? 0,
        presenceCount: data.approximate_presence_count ?? 0,
      };
    } catch {
      return { memberCount: 0, presenceCount: 0 };
    }
  },
);
