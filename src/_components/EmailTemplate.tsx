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
    marginBottom: "20px",
    textAlign: "center",
  };

  const containerParagraph: CSSProperties = {
    padding: "0 20px",
  };

  const orderItem: CSSProperties = {
    display: "flex",
    padding: "1rem 0",
    borderBottom: "1px solid #ccc",
  };

  const imageCon: CSSProperties = {
    width: "70%",
    height: "100px",
  };

  const orderImages: CSSProperties = {
    width: "150px",
    height: "100px",
    objectFit: "contain",
    borderRadius: "5px",
  };

  const orderDetails: CSSProperties = {
    marginLeft: "4rem",
    textAlign: "right",
    width: "70%",
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
    width: "50%",
    textAlign: "left",
  };

  const summaryContainer: CSSProperties = {
    display: "flex",
  };

  const summaryRight: CSSProperties = {
    textAlign: "right",
    width: "50%",
  };

  const bntContainer: CSSProperties = {
    marginTop: "20px",
    textAlign: "center",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const button: CSSProperties = {
    backgroundColor: "none",
    color: "#189AB4",
    padding: "10px 20px",
    textDecoration: "none",
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
          <a
            href="https://res.cloudinary.com/duphnvqtf/image/upload/v1717345887/social_Media_marketing_7c5f7b2c00.jpg"
            style={button}>
            Download
          </a>
        </div>
        <span style={{ fontStyle: "italic" }}>Best regards</span>
        <p style={footer}>Abdul Technical Services AS</p>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>Your Orders:</h2>

        <div>
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

                  <div>
                    <div>
                      Category:
                      {cartItem?.cart?.product?.attributes?.category}
                    </div>

                    <div>
                      Price: {cartItem?.cart?.product?.attributes?.price} €
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <h2 style={{ fontWeight: "bold", margin: "1rem 0" }}>Order Summary:</h2>
        <div>
          <p style={summaryContainer}>
            <span style={summaryOrder}>SUBTOTAL: </span>{" "}
            <span style={summaryRight}>{totalPrice.toFixed(2)} €</span>
          </p>
          <p style={summaryContainer}>
            <span style={summaryOrder}>DISCOUNT: </span>
            <span style={summaryRight}>-{discount} %</span>
          </p>
          <p style={summaryContainer}>
            <span style={summaryOrder}>SHIPPING: </span>{" "}
            <span style={summaryRight}>{shipping} €</span>
          </p>
          <p style={summaryContainer}>
            <span style={summaryOrder}>HARDWARE: </span>{" "}
            <span style={summaryRight}>{hardWare} €</span>
          </p>
        </div>
        <hr />
        <p style={summaryContainer}>
          <span style={summaryOrder}>TOTAL: </span>{" "}
          <span style={summaryRight}> {getTotalAmount()} €</span>
        </p>
      </div>
    </div>
  );
};
