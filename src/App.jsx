import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Committee from './pages/Committee';
import Program from './pages/Program';
import Papers from './pages/Papers';
import Fees from './pages/Fees';
{/*import Venue from './pages/Venue';*/}
import Contacts from './pages/Contacts';
import SectionPage from "./pages/SectionPage.jsx";

function NotFound() {
  return (
      <div className="flex-1 flex items-center justify-center py-20 text-center px-4">
        <div>
          <div className="text-8xl font-black text-[#003087] opacity-20 mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-700 mb-2">Страница не найдена</h1>
          <p className="text-gray-500 mb-6">Запрашиваемая страница не существует.</p>
          <a
              href="/"
              className="bg-[#003087] text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors text-sm font-medium"
          >
            На главную
          </a>
        </div>
      </div>
  );
}

export default function App() {
  return (
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Header />
          <main className="flex-1 flex flex-col">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/program" element={<Program />} />
              <Route path="/papers" element={<Papers />} />
              <Route path="/fees" element={<Fees />} />
              {/*<Route path="/venue" element={<Venue />} />*/}
              <Route path="/section/:sectionId" element={<SectionPage />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
  );
}
