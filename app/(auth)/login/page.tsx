import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../../../lib/auth";
import { Login } from "../../../components/index";

const LoginPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!!session) {
        redirect("/");
    }
    return <Login />
}
export default LoginPage;