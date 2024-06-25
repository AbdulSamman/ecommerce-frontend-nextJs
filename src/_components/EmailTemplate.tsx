import React, { CSSProperties } from "react";
//CSSProperties typescript style
export const EmailTemplate = ({ user }: any) => {
  const main: CSSProperties = {
    fontFamily: "Arial, sans-serif",
    fontSize: "16px",
    color: "#333",
    lineHeight: "1.5",
  };

  const containerImg: CSSProperties = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const containerParagraph: CSSProperties = {
    padding: "0 20px",
  };

  const bntContainer: CSSProperties = {
    marginTop: "20px",
    textAlign: "center",
  };

  const button: CSSProperties = {
    backgroundColor: "none",
    color: "#189AB4",
    padding: "10px 20px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    textDecoration: "none",
    fontWeight: "bold",
  };

  const footer: CSSProperties = {
    marginTop: "30px",
    fontSize: "14px",
    color: "#777",
  };

  return (
    <div style={main}>
      <div style={containerImg}>
        <img
          src={
            "https://res.cloudinary.com/duphnvqtf/image/upload/v1718845076/thanks_bc40aa8f6f.png"
          }
          alt="thanks"
          width="400"
          height="300"
        />
      </div>
      <div style={containerParagraph}>
        <h1>Hi {user?.fullName},</h1>
        <div>
          Thank you for purchasing on Abdul Tech Ecommerce. Click on the button
          below to download all digital content.
        </div>
        <div style={bntContainer}>
          <a href="your-download-link" style={button}>
            Download
          </a>
        </div>
        <span style={{ fontStyle: "italic" }}>Best regards</span>
        <p style={footer}>Abdul Technical Services AS</p>
      </div>
    </div>
  );
};
