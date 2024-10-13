export default function UserInput({onChange, input}) {
  return (
    <section id="user-input">
      <div className="input-group">
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) => onChange('initialInvestment', event.target.value)}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(event) => onChange('annualInvestment', event.target.value)}
          />
        </div>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(event) => onChange('expectedReturn', event.target.value)}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(event) => onChange('duration', event.target.value)}
          />
        </div>
      </div>
    </section>
  );
}
