import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { auth } from "../../../lib/auth";
import { SignUp } from "../../../components/index";

const SignUpPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!!session) {
        redirect("/");
    }
    return <SignUp />
}
export default SignUpPage;