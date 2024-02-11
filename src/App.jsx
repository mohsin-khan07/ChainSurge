import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LatestBlockProvider } from "./contexts/LatestBlockContext";
import NavBar from "./components/navbar/NavBar";
import Hero from "./components/hero/Hero";
import Homepage from "./pages/Homepage";
import BlockDetails from "./pages/BlockDetails";
import TransactionDetails from "./pages/TransactionDetails";
import AddressOverview from "./pages/AddressOverview";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <LatestBlockProvider>
        <BrowserRouter>
          <NavBar />
          <Hero />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="block/:blockNumber" element={<BlockDetails />} />
            <Route
              path="transaction/:txnHash"
              element={<TransactionDetails />}
            />
            <Route path="address/:address" element={<AddressOverview />} />
          </Routes>
        </BrowserRouter>
      </LatestBlockProvider>
      <Footer />
    </div>
  );
}

export default App;
