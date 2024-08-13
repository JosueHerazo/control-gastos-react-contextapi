import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
    const {state} = useBudget()
    
    const filteredExpense = state.currentCategory ? state.expenses.filter(expense => expense.category === state.currentCategory) : state.expenses

    const isEmpty = useMemo(() => filteredExpense.length === 0, [state.expenses])
  return (
    <div className="mt-10 bg-white rounded-lg p-10">
      {isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p>:(
        <>
        <p className="text-gray-600 text-2xl font-bold my-5">Listado de Gastos</p>
        {filteredExpense.map( expense => (
            <ExpenseDetail
            key={expense.id}
            expense={expense}
            />
        ))}
        </>
      )}
    </div>
  )
}
