export function requireRole(...allowedRules){
    return (req, res, next) => {
        if (!req.user){
            return res.status(401).json({
                message: "Unathorized",
            });
        }
        if (!allowedRules.includes(req.user.user_role)){
            return res.status(403).json({
                message: "Forbidden: insuffecient permissions",
            });
        }
        next();
    };

}