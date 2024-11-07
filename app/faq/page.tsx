import { FaqItem } from "../components/FaqItem";
import { contents } from "../contents/contents";
import "../globals.css";

export default function Faq() {
  return (
    <main className="container main">
      <h2 className="lh-1 mb-5">Frequently asked questions.</h2>
      <div className="accordion mb-5" id="accordion">
        {contents.faqpages.faqs.map((faq) => (
          <FaqItem
            id={faq.id.toString()}
            answer={faq.answer}
            question={faq.question}
          />
        ))}
      </div>
    </main>
  );
}
