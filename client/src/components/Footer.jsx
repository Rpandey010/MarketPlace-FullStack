import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';
import FOOTER_LINKS from '../assets/footer_links';
import FOOTER_CONTACT_INFO from '../assets/footer_contact';

const Footer = () => {
  return (
    <footer className="flex items-center justify-center flex-col pt-20">
      <div className="container mx-auto px-2">
        <Link to="/" className="text-3xl font-bold mb-8">FuniHub.co</Link>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
          <div className="flex flex-wrap gap-8 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((col, index) => (
              <FooterColumn title={col.title} key={index}>
                <ul className="flex flex-col gap-4 text-gray-600">
                  {col.links.map((link, i) => (
                    <li key={i}>
                      <Link to="/" className="hover:text-gray-800 text-lg">{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link, index) => (
                <div key={index}>
                  <Link to="/" className="hover:text-gray-800 text-lg">{link.label}</Link>
                  <p>{link.value}</p>
                </div>
              ))}
            </FooterColumn>
            <FooterColumn title="Follow Us">
              <ul className="flex space-x-4 text-3xl">
                <li>
                  <a href="https://www.instagram.com/aryan_sharma_1901/"><FaInstagram /></a>
                </li>
                <li>
                  <a href="#"><FaFacebook /></a>
                </li>
                <li>
                  <a href="#"><FaLinkedin /></a>
                </li>
              </ul>
            </FooterColumn>
          </div>
        </div>
        <div className="border bg-gray-20 my-8"></div>
        <p className="text-center text-sm text-gray-600">© 2024 FuniHub.co. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold mb-4 text-2xl">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
