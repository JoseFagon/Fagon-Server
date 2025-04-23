function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

export const supabaseConfig = {
  url: requireEnv('SUPABASE_URL'),
  apiKey: requireEnv('SUPABASE_KEY'),
};
