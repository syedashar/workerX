import { privacyPolicy } from "constants/apiEndpoints";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import { getRequest } from "service/apiClient";

const PrivacyPolicy = ({ paragraph }) => {
  return (
    <div className="section_half_margin container">
      <h1>Privacy Policy</h1>
      <div style={{ marginBottom: 50 }}>
        {paragraph && ReactHtmlParser(paragraph)(paragraph)}
      </div>
    </div>
  );
};

export default PrivacyPolicy;

export async function getStaticProps() {
  try {
    let data = await getRequest(privacyPolicy);
    return {
      props: {
        ...data,
      },
      revalidate: 10800,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
      revalidate: 10800,
    };
  }
}
