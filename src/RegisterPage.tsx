import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface RegisterPageForm {
    name: string;
    email: string;
    password: string;
}

function RegisterPage() {
    const [credential, setCredential] = useState<RegisterPageForm>({ name: "", email: "", password: "" });
    const navigate = useNavigate();
    function handleChange(key: string, value: string) {
        setCredential((oldCredential) => ({ ...oldCredential, [key]: value }));
    }
    function changePage(target: string) {
        navigate(target);
    }

    async function handleRegister() {
        try {
            const body = {
                email: credential.email,
                name: credential.name,
                password: credential.password,
            };
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    // Add any additional headers as needed
                },
                body: JSON.stringify(body),
            };
            const response = await fetch("https://library-crud-sample.vercel.app/api/user/register", options);
            const data = await response.json();
            // localStorage.setItem("token", data.token);
        } catch (error) {}
    }
    return (
        <>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={credential.name}
                onChange={(e) => handleChange("name", e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <input
                type="text"
                id="email"
                value={credential.email}
                onChange={(e) => handleChange("email", e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                value={credential.password}
                onChange={(e) => handleChange("password", e.target.value)}
            />
            <button onClick={handleRegister}>Login</button>
            <button onClick={() => changePage("/quotes")}>Go to Quotes Page</button>
        </>
    );
}
export default RegisterPage;
