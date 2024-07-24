import {createRoot} from "react-dom/client";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});
const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            Success
        </QueryClientProvider>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App/>);
