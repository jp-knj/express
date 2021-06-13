import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Home() {
  return (
    <>
      <Topbar />
      <Sidebar/>
      <div className="home__container">
        <h3>Home content</h3>
      </div>
    </>
  );
}
