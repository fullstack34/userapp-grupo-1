import IsLoggedIn from "../js/authentication.js";

if (!IsLoggedIn()) 
    {
      window.location.href = 'https://fullstack34.github.io/userapp-grupo-1/login';
    }
  
import MenuDashboard from "../js/menu-dashboard.js";
  
document.getElementById("navArea").innerHTML = MenuDashboard();

