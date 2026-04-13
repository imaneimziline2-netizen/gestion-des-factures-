import { getAdminDashboardStats } from "../services/admineService.js";

const getAdminDashboardStatsController = async (req, res) => {
  try {
    const dashboard = await getAdminDashboardStats();

    return res.status(200).json({
      role: "admin",
      ...dashboard
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
};

export default getAdminDashboardStatsController;