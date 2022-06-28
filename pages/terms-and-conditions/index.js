import { termsAndCondition } from "constants/apiEndpoints";
import React from "react";
import { getRequest } from "service/apiClient";
import ReactHtmlParser from "react-html-parser";

const TermsAndConditions = ({ paragraph }) => {
  return (
    <div className="section_half_margin container">
      <h1>Terms and Conditions</h1>
      <div style={{ marginBottom: 50 }}>
        {paragraph && ReactHtmlParser(paragraph)}
      </div>
    </div>
  );
};

export default TermsAndConditions;

export async function getStaticProps() {
  try {
    let data = await getRequest(termsAndCondition);
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
