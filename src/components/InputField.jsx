export default function InputField({ onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(e) => onChange(e, "initialInvestment")}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(e) => onChange(e, "annualInvestment")}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(e) => onChange(e, "expectedReturn")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(e) => onChange(e, "duration")}
          />
        </p>
      </div>
    </section>
  );
}
