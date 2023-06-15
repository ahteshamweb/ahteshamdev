import React from "react";

const Testimonial = () => {
  return (
    <div id="testimonial">
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"precisionfive"}
          feedback={"Great person , great work !looking forward to many more ;)"}
        />

        <TestimonialCard
          name={"janusthelyon"}
          feedback={
            "Amazing Experience. I really recommend to work together with him!"
          }
        />

        <TestimonialCard
          name={"unespc"}
          feedback={"Experienced and skillful developer."}
        />
      </section>
    </div>
  );
};

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://toppng.com//public/uploads/preview/uk-round-flag-11563596900h0bvrmnyb2.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial;
