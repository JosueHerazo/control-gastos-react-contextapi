import { useContext } from "react"
import { BudgetContext } from "../context/budgetContext"


export const useBudget = () => {
    const context = useContext(BudgetContext)
    if(!context){}
    return context
}
