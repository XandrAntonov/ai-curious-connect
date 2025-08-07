import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { About } from "./pages/About";
import { Community } from "./pages/Community";
import { Contact } from "./pages/Contact";
import { Subscribe } from "./pages/Subscribe";
import { ThankYou } from "./pages/ThankYou";
import { Privacy } from "./pages/Privacy";
import { Terms } from "./pages/Terms";
import { Cookies } from "./pages/Cookies";
import { BlogPost } from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:slug" element={<BlogPost />} />
            <Route path="o-nas" element={<About />} />
            <Route path="komunita" element={<Community />} />
            <Route path="prihlaseni" element={<Subscribe />} />
            <Route path="kontakt" element={<Contact />} />
            <Route path="dekujeme" element={<ThankYou />} />
            <Route path="ochrana-osobnich-udaju" element={<Privacy />} />
            <Route path="podminky" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
