import React, { useContext, useState } from "react";
import axios from "axios";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import GppGoodIcon from '@mui/icons-material/GppGood';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
const ForgotPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [isEmail, setIsEmail] = useState(false);
    const [isVisiable, setIsVisiable] = useState(false);
    const [password, setpassword] = useState("");
    const [passwordSet, setpasswordSet] = useState("");
    const [code, setCode] = useState("");
    const [message, setmessage] = useState("");


    const burl = import.meta.env.VITE_URL;
    const onSubmit = async (e) => {
        e.preventDefault();
        console.log(email);
        try {
            const localUrl = `${burl}/api/user/chackEmail`
            const api = await axios.post(
                localUrl,
                {
                    email,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                    withCredentials: true,
                }
            );
            console.log(api);
            if (api.data.success === true) {
                setIsEmail(true);

            } else {
                setIsEmail(false);
                toast.error(api.data.massage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }

        } catch (error) {
            console.warn(error);
            setIsEmail(false);
            toast.error(error.response.data.massage, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
        }
    }
    const onSubmitChange = async (e) => {
        const codechack="1234";
        e.preventDefault();
        console.log(passwordSet, password);
        if (passwordSet !== password) {
            toast.error("Passwords do not match", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        else if (codechack !==code){
            toast.error("Code is not correct", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        else if(codechack ===code && passwordSet === password ){
            const localUrl = `${burl}/api/user/resetPassword`;
            //console.log("change",localUrl);
            try {
                const api = await axios.post(
                    localUrl,
                    {
                        email,
                        password:  passwordSet,
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                        withCredentials: true,
                    }
                );
                console.log(api);
                if (api.data.success === true) {
                    toast.success("Password Changed Successfully", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    setTimeout(() => {
                        navigate('/login');
                    }, "3000");
                } else {
                    toast.error(api.data.massage, {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                }
            } catch (error) {
                console.warn(error);
                toast.error(error.response.data.massage, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            }
            
        }

    }
    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <div className="formbody">
                {
                    (isEmail) ?
                        <>
                            <form onSubmit={onSubmitChange}>
                                <h1>Change Password</h1>
                                <h2>Email: <span style={{ "color": "blue" }}>{email}</span></h2>
                                <div className="formiconplusi">
                                    <GppGoodIcon fontSize="large" />
                                    <input
                                        placeholder="Enter Your Password"
                                        type={(isVisiable) ? "text" : "password"}
                                        name="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setpassword(e.target.value)}
                                    />
                                    <div onClick={() => setIsVisiable(!isVisiable)}>
                                        {(isVisiable) ? <VisibilityOffIcon fontSize="large" /> : <VisibilityIcon fontSize="large" />}
                                    </div>
                                </div>
                                <div className="formiconplusi">
                                    <GppGoodIcon fontSize="large" />
                                    <input
                                        placeholder="Enter Your Password again"
                                        type={(isVisiable) ? "text" : "password"}
                                        name="password"
                                        id="passwordc"
                                        value={passwordSet}
                                        onChange={(e) => setpasswordSet(e.target.value)}
                                    />
                                    <div onClick={() => setIsVisiable(!isVisiable)}>
                                        {(isVisiable) ? <VisibilityOffIcon fontSize="large" /> : <VisibilityIcon fontSize="large" />}
                                    </div>
                                </div>
                                <div className="formiconplusi">
                                    <VpnKeyIcon fontSize="large" />
                                    <input
                                        placeholder="Enter Your Code"
                                        type="text"
                                        name="code"
                                        id="code"
                                        value={code}
                                        onChange={(e) => setCode(e.target.value)}
                                    />
                                </div>
                                <p>We have sent a password reset link to your email. Please check your inbox.</p>
                                <input type="submit" value="Reset Password" />

                            </form>
                        </> :
                        <>

                            <form onSubmit={onSubmit}>
                                <h1>Forgot Password</h1>
                                <div className="formiconplusi">
                                    <AlternateEmailIcon fontSize="large" />
                                    <input
                                        placeholder="Enter Your Email"
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <input type="submit" value="Login" />

                            </form>
                        </>

                }

            </div>


        </>
    )
}

export default ForgotPassword