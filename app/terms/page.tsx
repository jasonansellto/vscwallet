import "../globals.css";
import Navbar from "../components/Navbar";
import { contents } from "../contents/contents";
import SimpleListItem from "../components/SimpleListItem";

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="main container mb-5">
        <h2 className="lh-1 mb-3">Terms and Conditions.</h2>
        {contents.termspage.terms.map((term) => (
          <SimpleListItem heading={term.heading} details={term.details} />
        ))}
      </main>
    </>
  );
}
