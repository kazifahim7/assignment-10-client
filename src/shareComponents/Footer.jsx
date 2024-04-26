const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  bg-[#0a2233] text-white">
                <aside>
                    <img src="https://trendytraveldv.wpengine.com/wp-content/themes/trendytravel/images/logo.png" alt="" />
                    <p>trendy travel Industries Ltd.<br />Providing reliable tech since 1992</p>
                    <aside>
                        <p>Copyright © 2024 - All right reserved by trendy travel Industries Ltd</p>
                    </aside>
                </aside>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                
            </footer>
        </div>
    );
};

export default Footer;