export default function InputField({ onChange }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            onChange={(e) => onChange(e, "Initial Investment")}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={(e) => onChange(e, "Annual Investment")}
          />
        </p>
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={(e) => onChange(e, "Expected Return")}
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={(e) => onChange(e, "Duration")}
          />
        </p>
      </div>
    </section>
  );
}
