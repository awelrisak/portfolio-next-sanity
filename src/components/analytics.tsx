import { Analytics as VercelAnalytics } from "@vercel/analytics/next";
// mode={"production"} //TODO:FIX
export function Analytics() {
	return <VercelAnalytics />;
}
