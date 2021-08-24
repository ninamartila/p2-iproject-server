const { UserTourSchedule } = require('../models');

const authorization = (req, res, next) => {
    const userId = Number(req.user.id);
    const id = Number(req.params.id);

    UserTourSchedule.findByPk(id)
        .then(result => {
            if (result) {
                if (result.role === 'creator' && userId === Number(result.UserId)) {
                    next()
                } else {
                    next({ name: 'Unauthorized' })
                }
            } else {
                next({ name: 'NotFound', type: 'User Tour Schedule' });
            }
        })
        .catch((error) => {
            next(error);
        });
};

module.exports = authorization