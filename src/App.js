import "./components/FontAwesome";
import "./App.css";
import Navbarmui from "./components/Navbarmui";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Sidebarmui from "./components/Sidebarmui";
import Dashboard from "./pages/Dashboard";
import Installations from "./pages/Installations";
import Installation from "./pages/Installation";
import {
  BrowserRouter,
  HashRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import PreviewOutlinedIcon from "@mui/icons-material/PreviewOutlined";


const drawerWidth = 240;

function App() {
 
  const handleClick = (text) => {
    
  };

  const handleView = () => {};
  return (
    <BrowserRouter>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbarmui />
        <Sidebarmui />

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/installations" element={<Installations />} />
            <Route path="/installation" element={<Installation />} />
            <Route
              path="/installation/:id/:statusid"
              element={<Installation />}
            />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  );
}

export default App;
