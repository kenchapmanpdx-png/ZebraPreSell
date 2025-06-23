import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { HelmetProvider } from "react-helmet-async";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Home from "./pages/Home";
import PreorderPage from "./pages/PreorderPage";
import NotFound from "./pages/not-found";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/preorder" component={PreorderPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/preorder" component={PreorderPage} />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;