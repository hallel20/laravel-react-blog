import logo from "../../images/logo.png";
export default function ApplicationLogo({ ...props }) {
    return <img src={logo} alt="Blogwiz" {...props} />;
}
