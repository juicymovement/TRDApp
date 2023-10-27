import React, { useState } from 'react';

function PRDForm() {
  // Define questions and attributes

  const questions = [
    { id: "productName", label: "Product Name/Title", type: "text", placeholder: "What's the name of the product or feature?" },
    { id: "objective", label: "Objective", type: "text", placeholder: "What's the primary goal or reason for this product/feature?" },
    { id: "targetAudience", label: "Target Audience", type: "text", placeholder: "Who is the primary user of this product/feature?" },
    { id: "userNeeds", label: "User Needs", type: "textarea", placeholder: "What are the main pain points or needs this product addresses for the user?" },
    { id: "features", label: "Features", type: "text", placeholder: "What are the primary features or functionalities?" },
    { id: "featureDescription", label: "Description of the feature", type: "textarea", placeholder: "Describe the feature in detail" },
    { id: "featurePurpose", label: "Purpose/Benefit of the feature", type: "textarea", placeholder: "What's the purpose or benefit of this feature?" }
  ];

  // State for current slide and form data
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevState => ({ ...prevState, [id]: value }));
  }

  const handleNextSlide = () => {
    if (currentSlide < questions.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      // Handle end of slideshow (maybe show a 'Thank you' message or transition to a different page)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://prd-backend-timbaldwin1.vercel.app/api/generate-prd', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'PRD.docx';
      document.body.appendChild(a); 
      a.click();
      a.remove();
    });
  }
  

  return (
    <form onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        index === currentSlide && (
          <div key={question.id} className="form-group slide">
            <label htmlFor={question.id}>{question.label}:</label>
            {question.type === "text" ? (
              <input
                type="text"
                id={question.id}
                value={formData[question.id] || ""}
                onChange={handleChange}
                placeholder={question.placeholder}
              />
            ) : (
              <textarea
                id={question.id}
                value={formData[question.id] || ""}
                onChange={handleChange}
                placeholder={question.placeholder}
              />
            )}
            {index < questions.length - 1 ? (
              <button type="button" onClick={handleNextSlide}>Next</button>
            ) : (
              <button type="submit" onClick={handleSubmit}>Submit</button>
            )}
          </div>
        )
      ))}
    </form>
  );

}

export default PRDForm;
