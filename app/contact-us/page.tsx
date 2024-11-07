import "../globals.css";
import Navbar from "../components/Navbar";
import { contents } from "../contents/contents";
import Link from "next/link";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <main className="main container mb-5">
        <h2 className="lh-1 mb-3">Contact us.</h2>
        <p>
          We’re here to help! If you have any questions, issues, or feedback,
          please don't hesitate to reach out to us. Our customer support team is
          available 24/7 to assist you.
        </p>
        <div
          className="mb-2"
          style={{ display: "flex", gap: 5, alignItems: "center" }}
        >
          <h6 className="mb-0">Email:</h6>
          <p className="mb-0">{contents.contactuspage.email}</p>
        </div>
        <div
          className="mb-2"
          style={{ display: "flex", gap: 5, alignItems: "center" }}
        >
          <h6 className="mb-0">Phone:</h6>
          <p className="mb-0">{contents.contactuspage.phone}</p>
        </div>
        <div
          className="mb-2"
          style={{ display: "flex", gap: 5, alignItems: "center" }}
        >
          <h6 className="mb-0">Mailing Address:</h6>
          <p className="mb-0">{contents.contactuspage.address}</p>
        </div>
        <div className="mt-3">
          <Link
            target="_blank"
            style={{ fontSize: 30, marginRight: "20px" }}
            href={contents.contactuspage.facebook}
          >
            <i className="bi bi-facebook"></i>
          </Link>
          <Link
            target="_blank"
            style={{ fontSize: 30, margin: "0px 20px" }}
            href={contents.contactuspage.twitter}
          >
            <i className="bi bi-twitter"></i>
          </Link>
          <Link
            target="_blank"
            style={{ fontSize: 30, margin: "0px 20px" }}
            href={contents.contactuspage.linkedin}
          >
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
      </main>
    </>
  );
}
