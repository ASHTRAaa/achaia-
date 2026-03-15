import "./FirstForm.css"

const FirstForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* LEFT SIDE */}

        <div className="contact-left">
          <h2>Ready To Build Your Next Digital Product?</h2>

          <p>
            We help startups and businesses design, build, and scale digital
            products that deliver real results.
          </p>

          <ul className="services-list">
            <li>✔ Web Development</li>
            <li>✔ Mobile App Development</li>
            <li>✔ AI Solutions</li>
            <li>✔ Product Design</li>
          </ul>
        </div>

        {/* RIGHT SIDE FORM */}

        <div className="contact-right">
          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Your name" />

            <label>Email</label>
            <input type="email" placeholder="Your email" />

            <label>Project Type</label>
            <select>
              <option>Select project</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>AI Solution</option>
              <option>UI/UX Design</option>
            </select>

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FirstForm;
