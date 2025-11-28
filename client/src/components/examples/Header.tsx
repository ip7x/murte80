import { ThemeProvider } from "@/hooks/use-theme";
import Header from "../Header";

export default function HeaderExample() {
  return (
    <ThemeProvider>
      <Header />
    </ThemeProvider>
  );
}
