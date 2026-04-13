import getStats from "../services/stats.js"

const getStatsController = async(req ,res)=>{
    try{const stats = await getStats(req,res);
    return stats
 }catch(err){
res.status(500).json({
            status: "error",
            message: err.message,
        });
 }
}

export default getStatsController;