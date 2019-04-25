import { React, ReactNode } from "react";
import { Footer } from "../Footer";
import { Header } from "./Header";
class Wrapper extends Component({ children }) {
  render() {
    const { count } = this.state;
    return (
      <div>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    );
  }
}
