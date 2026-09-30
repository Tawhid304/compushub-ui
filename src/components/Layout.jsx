import Navbar from "./Navbar";

function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main className="container mt-4 mb-5">
                {children}
            </main>
        </>
    );
}

export default Layout;