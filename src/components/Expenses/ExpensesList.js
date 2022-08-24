import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import './ExpensesList.css'

const ExpensesList = (props) => {
    const expenses = props.expenses;
    const [selectedFilter, setSelectedFilter] = useState('2020');
    const filterChangeHandler = (filter) => {
        setSelectedFilter(filter);
    };
    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedFilter;
    })

    return (
        <div className="expenses">
            <ExpensesFilter selected={selectedFilter} onFilterChanged={filterChangeHandler} />
            <Card>
                {filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
    );
}

export default ExpensesList;