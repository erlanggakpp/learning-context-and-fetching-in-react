import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CredentialContext } from "./providers/CredentialProvider";

interface LoginPageForm {
    password: string;
    email: string;
}

function LoginPage() {
    const { email, password, handleChangeCredential } = useContext(CredentialContext);
    const [credential, setCredential] = useState<LoginPageForm>({ password: "", email: "" });
    const navigate = useNavigate();
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        // setCredential((oldCredential) => ({ ...oldCredential, [key]: value }));
        handleChangeCredential(e);
    }
    function changePage(target: string) {
        navigate(target);
    }

    async function handleLogin() {
        try {
            const body = {
                email: email,
                password: password,
            };
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Add any additional headers as needed
                },
                body: JSON.stringify(body),
            };
            const response = await fetch("https://library-crud-sample.vercel.app/api/user/login", options);
            if (!response.ok) {
                throw new Error("Error");
            }
            const data = await response.json();
            console.log(data);

            localStorage.setItem("token", data.token);
            navigate("/myprofile");
        } catch (error) {
            alert(error);
        }
    }
    return (
        <>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => handleChange(e)} />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={(e) => handleChange(e)} />
            <button onClick={handleLogin}>Login</button>
        </>
    );
}
export default LoginPage;
