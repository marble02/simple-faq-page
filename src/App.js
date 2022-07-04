import React, { useState } from "react";
import Header from "./Header";
import FAQ from "./FAQ";

function App() {
  const [faqs, setfaqs] = useState(
    [
      {
        question: "How many bones does a cat have?",
        answer: "A cat has 230 bones - 6 more than a human",
        open: true
      },
      {
        question: "How much do cats sleep?",
        answer: "The average cat sleeps 12-16 hours per day",
        open: false
      },
      {
        question: "How long do cats live?",
        answer: "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
        open: false
      },
    ]
  );

  const toggleFAQ = index => {
    setfaqs(faqs.map((faq, i) => {
      if (i === index) {
        faq.open = !faq.open;
      } else {
        faq.open = false;
      }
      return faq;
    }));
  }

  return (
    <div className="App">
      <Header/>
      <div className="faqs">
        {faqs.map( (faq, i) => (
          <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
        )
        )}
      </div>
    </div>
  );
}

export default App;
