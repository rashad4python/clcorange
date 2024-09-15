import React from "react";
import Layout from "../components/layout";
import Seo from "../components/seo";

const PrivacyPolicy = () => (
  <Layout>
    <Seo title="Privacy Policy | CLC" />
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>
        At CLC, we are fully committed to safeguarding your privacy and ensuring
        the protection of your personal information in accordance with
        applicable laws in India, including the Information Technology Act,
        2000, and the Information Technology (Reasonable Security Practices and
        Procedures and Sensitive Personal Data or Information) Rules, 2011. We
        strictly adhere to these regulations to ensure that your data is handled
        lawfully and transparently.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect certain personal information about you for two main
        reasons:
      </p>
      <ol>
        <li>To process your inquiries or orders.</li>
        <li>To respond to any queries you may have.</li>
      </ol>
      <p>
        The type of personal information we may collect includes, but is not
        limited to:
      </p>
      <ul>
        <li>Your name</li>
        <li>Email address</li>
        <li>IP address</li>
      </ul>

      <h2>Consent and Communication</h2>
      <p>
        We will only collect your personal information with your explicit
        consent. We will never email you in the future unless you have given us
        permission to do so. You will always have the option to refuse any
        marketing communications from us by opting out at any time.
      </p>

      <h2>Data Accuracy and Retention</h2>
      <p>
        We are committed to keeping your information accurate and up-to-date. If
        you believe the information we hold about you is incorrect, please
        contact us, and we will promptly correct or delete it.
      </p>
      <p>
        All personal data collected will be securely stored in accordance with
        our internal security policies and the law. We will retain your personal
        data only for as long as necessary, after which it will be securely
        deleted. Any personal data that is not required will be deleted within
        2 years from the date of collection.
      </p>

      <h2>Cookies and Tracking</h2>
      <p>
        We may use technology such as cookies to track the behavior patterns of
        visitors to our website. Cookies may be stored on your browser to help
        improve your browsing experience. However, you can modify your browser
        settings to disable cookies if you wish to prevent this from happening.
        Please note that the information collected via cookies is used to
        enhance your experience on our website and will not be used to
        personally identify you unless explicitly stated otherwise.
      </p>

      <h2>Security</h2>
      <p>
        Your personal data is held securely in compliance with industry
        standards and our internal security protocols. We take reasonable
        precautions to ensure that your data is protected from unauthorized
        access or disclosure.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions, comments, or concerns regarding our privacy
        policy or how we handle your personal information, please feel free to
        contact us at{" "}
        <a href="mailto:clcalicut@gmail.com">clcalicut@gmail.com</a>.
      </p>
    </div>
  </Layout>
);

export default PrivacyPolicy;
