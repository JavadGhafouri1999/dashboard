import type { Metadata } from "next";
import "./globals.css";
import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SidebarProvider } from "@/components/ui/sidebar";
import { cookies } from "next/headers";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Slide, ToastContainer } from "react-toastify";

export const metadata: Metadata = {
	title: "Next Dashboard",
	description: "Admin dashboard made by Nestjs and shadcn",
};

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const cookieStore = await cookies();
	const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
	return (
		<html lang="fa" dir="rtl" suppressHydrationWarning>
			<body className="flex">
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<SidebarProvider defaultOpen={defaultOpen}>
						<AppSidebar />
						<main className="w-full min-w-0">
							<Navbar />
							<div className="px-2 sm:px-4 max-w-full">{children}</div>
							<SpeedInsights />
						</main>
					</SidebarProvider>
				</ThemeProvider>
				<ToastContainer
					position="top-center"
					toastClassName="toast"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl
					stacked
					pauseOnFocusLoss
					draggable
					theme="light"
					transition={Slide}
					limit={3}
				/>
			</body>
		</html>
	);
}
