import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Nav from "@/components/nav";
import Home from "@/pages/home";
import Packages from "@/pages/packages";
import PackageDetails from "@/pages/package-details";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/packages" component={Packages} />
      <Route path="/package/:id" component={PackageDetails} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
