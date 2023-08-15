import Header from "./components/header";
import "./app.css";
import Balance from "./components/balance";
import IncomeExpenses from "./components/incomeExpenses";
import TransactionList from "./components/transactionList";
import Transaction from "./components/transaction";
import { GlobalProvider } from "./context/globalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <Balance />
      <IncomeExpenses />
      <TransactionList />
      <Transaction />
    </GlobalProvider>
  );
}

export default App;
