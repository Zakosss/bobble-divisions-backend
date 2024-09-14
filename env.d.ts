declare global {
	namespace NodeJS {
		interface ProcessEnv {
            // DISCORD

			DISCORD_TOKEN: string;
            DISCORD_CLIENT_ID: string;
			DISCORD_CLIENT_SECRET: string;
			DISCORD_API_ENDPOINT: string;

			// API

			API_PORT: number;

			// OTHER

			DATABASE_URL: string;
		}
	}
}

export {};
