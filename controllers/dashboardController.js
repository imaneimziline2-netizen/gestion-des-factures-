import getDashboard from "../services/dashboard.js"


const getDashboardController = async (req, res) => {
    const dashboard = await getDashboard(req, res);
    return dashboard
};

export default getDashboardController;

