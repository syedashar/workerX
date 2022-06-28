import { Col, Row } from "antd";
import { FACEBOOK_SVG, LINKEDIN_SVG } from "assets/svgs";
import { footer } from "constants/apiEndpoints";
import {
  privacyPolicyLink,
  termsAndConditionsLink,
} from "constants/footerLinks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getRequest } from "service/apiClient";

const Footer = () => {
  const [footerContent, setFooterContent] = useState();

  const workerxDecs =
    "WorkerX helps you increase appointments, and helps you provide excellent customer service";

  // get current year
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const init = async () => {
      try {
        let { footerContent } = await getRequest(footer);
        console.log("footer",footerContent)
        setFooterContent(footerContent);
      } catch (err) {
        console.error(err);
      }
    };
    init();
  }, []);

  const openLink = (link) => {
    window.open(link, "_blank");
  };

  return (
    <footer className="footer">
      <div className="container">
        <Row gutter={[30, 30]}>
          <Col xs={24} sm={8} className="descriptive_section">
            <div className="logo" />
            <p>{workerxDecs}</p>
          </Col>
          <Col xs={24} sm={16}>
            <Row gutter={[10, 10]}>
              <Col xs={12} sm={8}>
                <div className="footer_link_section">
                  <span>Quick Links</span>
                  <div className="footer_links_wrapper">
                    {footerContent &&
                      footerContent.quickLinks &&
                      footerContent.quickLinks.map(({ name, slug }) => (
                        <Link href={`${slug}`} key={slug}>
                          {name}
                        </Link>
                      ))}
                  </div>
                </div>
              </Col>
              <Col xs={12} sm={8}>
                <div className="footer_link_section">
                  <span>Industries</span>
                  <div className="footer_links_wrapper">
                    {footerContent &&
                      footerContent.industries &&
                      footerContent.industries.map(({ name, slug }) => (
                        <Link href={`/industries/${slug}`} key={slug}>
                          {name}
                        </Link>
                      ))}
                  </div>
                </div>
              </Col>
              <Col xs={24} sm={8}>
                <div className="footer_link_section">
                  <span>Contact Us</span>
                  <div className="footer_links_wrapper">
                    <a href={`mailto:${footerContent?.contactUs?.email}`}>
                      {footerContent?.contactUs?.email || ""}
                    </a>
                    <a href={`tel:${footerContent?.contactUs?.phone}`}>
                      {footerContent?.contactUs?.phone || ""}
                    </a>
                    <div className="social_links_wrapper">
                      {footerContent?.contactUs?.linkedin && (
                        <span
                          onClick={() =>
                            openLink(footerContent?.contactUs?.linkedin)
                          }
                        >
                          {LINKEDIN_SVG}
                        </span>
                      )}
                      {footerContent?.contactUs?.facebook && (
                        <span
                          onClick={() =>
                            openLink(footerContent?.contactUs?.facebook)
                          }
                        >
                          {FACEBOOK_SVG}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="footer_bottom_wrapper">
          <p>© {currentYear} by WorkerX</p>
          <div>
            {footerContent?.isTermsConditionRequired && (
              <Link href={termsAndConditionsLink}>{"Terms & Conditions"}</Link>
            )}
            {footerContent?.isPrivacyPolicyRequired && (
              <Link href={privacyPolicyLink}> Privacy Policy</Link>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
