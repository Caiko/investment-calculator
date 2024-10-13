import { formatter, calculateInvestmentResults } from "../util/investment"

export default function Results({input}){
    const calculatedResults = calculateInvestmentResults(input)
    const initialInvestment = calculatedResults[0].valueEndOfYear - calculatedResults[0].interest - calculatedResults[0].annualInvestment

    return(
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
                {calculatedResults.map((yearlyData) => {
                    const totalInterest = yearlyData.valueEndOfYear - yearlyData.annualInvestment * yearlyData.year - initialInvestment
                    const investedCapital = yearlyData.valueEndOfYear - totalInterest

                    return(
                        <tr key={yearlyData.year}>
                            <td>{yearlyData.year}</td>
                            <td>{formatter.format(yearlyData.valueEndOfYear)}</td>
                            <td>{formatter.format(yearlyData.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investedCapital)}</td>
                        </tr>
                    )
                }
            )}
            <tbody>
                
            </tbody>
        </table>
    )
}