import React, { CSSProperties } from "react";
import { IEmailProps } from "../interfaces";

export const EmailTemplate = ({
  user,
  cart,
  totalPrice,
  shipping,
  hardWare,
  discount,
  getTotalAmount,
}: IEmailProps) => {
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

  const orderItem: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "2rem",
    padding: "1rem 0",
    borderBottom: "1px solid #ccc",
  };

  const imageCon: CSSProperties = {
    flexShrink: 0,
  };
  // const imageCon: CSSProperties = {
  //   width: "150px",
  //   height: "100px",
  // };

  const orderImages: CSSProperties = {
    width: "150px",
    height: "100px",
    objectFit: "contain",
    borderRadius: "5px",
  };

  // const orderDetails: CSSProperties = {
  //   marginLeft: "8rem",
  // };
  const orderDetails: CSSProperties = {
    flexGrow: 1,
    textAlign: "left",
  };
  const orderTitle: CSSProperties = {
    fontSize: "20px",
    color: "#333",
    marginBottom: "0.5rem",
  };

  const summaryOrder: CSSProperties = {
    fontSize: "15px",
    color: "#333",
    fontWeight: "bold",
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
      <div>
        <h2 style={{ textAlign: "center" }}>Your Orders:</h2>

        {cart?.map((cartItem: any) => {
          return (
            <div key={cartItem?.id} style={orderItem}>
              {cartItem?.cart?.product?.attributes?.banner?.data?.attributes
                ?.url && (
                <div style={imageCon}>
                  <img
                    src={
                      cartItem.cart?.product.attributes.banner.data.attributes
                        .url
                    }
                    alt="cartImage"
                    width={65}
                    height={70}
                    style={orderImages}
                  />
                </div>
              )}
              <div style={orderDetails}>
                <h3 style={orderTitle}>
                  {cartItem?.cart?.product?.attributes?.title}
                </h3>

                <dl>
                  <div>
                    Category:
                    {cartItem?.cart?.product?.attributes?.category}
                  </div>

                  <div>
                    Price: {cartItem?.cart?.product?.attributes?.price} €
                  </div>
                </dl>
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <h2 style={{ fontWeight: "bold", margin: "1rem 0" }}>Order Summary:</h2>
        <div style={orderDetails}>
          <p>
            <span style={summaryOrder}>SUBTOTAL: </span>
            {totalPrice.toFixed(2)} €
          </p>
          <p>
            <span style={summaryOrder}>DISCOUNT: </span>-{discount} %
          </p>
          <p>
            <span style={summaryOrder}>SHIPPING: </span> {shipping} €
          </p>
          <p>
            <span style={summaryOrder}>HARDWARE: </span> {hardWare} €
          </p>
        </div>
        <hr />
        <p style={orderDetails}>
          <span style={summaryOrder}>TOTAL: </span> {getTotalAmount()} €
        </p>
      </div>
    </div>
  );
};
