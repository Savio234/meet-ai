import { headers } from "next/headers";
import { auth } from "../lib/auth";
import { redirect } from "next/navigation";
import { HomeView } from "../views";
import DashboardLayout from "./(dashboard)/layout";

const Home = async () => {
  const session = await auth.api.getSession({
    // headers: new Headers(),
    headers: await headers(),
  });
  if (!session) {
    redirect("/login");
  }
  return (
    <DashboardLayout>
      <HomeView />
    </DashboardLayout>
  );
}
export default Home;