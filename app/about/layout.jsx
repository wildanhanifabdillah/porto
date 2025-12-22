import Footer from "@/components/Footer";

export const metadata = {
  title: "WildanHA | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
