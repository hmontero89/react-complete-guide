import { useState } from "react";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import './Expenses.css'

const Expenses = (props) => {
    const expenses = props.expenses;
    const [selectedFilter, setSelectedFilter] = useState('2020');
    const filterChangeHandler = (filter) => {
        setSelectedFilter(filter);
    };
    const filteredExpenses = expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedFilter;
    })

    return (
        <li>
            <Card className="expenses">
                <ExpensesFilter selected={selectedFilter} onFilterChanged={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </li>
    );
}

export default Expenses;