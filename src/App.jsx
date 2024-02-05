import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/navbar/NavBar";
import { RecentDataProvider } from "./contexts/RecentDataContext";
import { FetchDataProvider } from "./contexts/FetchDataContext";
import Hero from "./components/hero/Hero";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div>
      <RecentDataProvider>
        <FetchDataProvider>
          <BrowserRouter>
            <NavBar />
            <Hero />
            <Routes>
              <Route index element={<Homepage />} />
              {/* <Route path="block/:blockNumber" element={<BlockDetailsPage />} />
              <Route
                path="transaction/:txnHash"
                element={<TransactionDetailsPage />}
              />
              <Route path="address/:address" element={<AddressDetailsPage />} /> */}
            </Routes>
          </BrowserRouter>
          <Footer />
        </FetchDataProvider>
      </RecentDataProvider>
    </div>
  );
}

export default App;
