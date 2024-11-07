import { FC } from "react";

interface FaqItemType {
  id: string;
  question: string;
  answer: string;
}

export const FaqItem: FC<FaqItemType> = ({ id, question, answer }) => {
  return (
    <div className="accordion-item" key={id}>
      <h2 className="accordion-header" id={id}>
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapseOne1${id}`}
          aria-expanded="false"
          aria-controls={`collapseOne1${id}`}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapseOne1${id}`}
        className="accordion-collapse collapse"
        aria-labelledby="headingOne"
        data-bs-parent="#accordion"
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
};
