import "../globals.css";
import Navbar from "../components/Navbar";
import { contents } from "../contents/contents";
import SimpleListItem from "../components/SimpleListItem";

export default function Privacy() {
  return (
    <>
      <Navbar />
      <main className="main container mb-5">
        <h2 className="lh-1 mb-3">Privacy and Policies.</h2>
        {contents.privacypage.privacyPolicies.map((policy) => (
          <SimpleListItem heading={policy.heading} details={policy.details} />
        ))}
      </main>
    </>
  );
}
